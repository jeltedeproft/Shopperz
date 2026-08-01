/**
 * Bulk import from TheMealDB, quality-gated and balanced by category.
 *
 *   node scripts/import_mealdb.js --count 150 [--dry]
 *
 * TheMealDB is free and, unlike the Spoonacular imports already in the book,
 * its recipes have real methods and no scraped page furniture. What it does
 * not have is Dutch, French, servings, timings, or any promise about its
 * photos, so this script:
 *
 *   - runs every measure through measure.js, so "1 1/2 cups" is 188 g of flour
 *     rather than one piece of it
 *   - refuses anything without a usable method or enough ingredients
 *   - spreads the selection across the app's five categories, weighted towards
 *     the thin ones (the book is heavy on mains and light on soup)
 *   - estimates timings from the recipe's own text instead of stamping every
 *     recipe "15 mins / 30 mins" the way the older importer did
 *   - leaves every recipe on the placeholder; fetch_photos.js finds licensed
 *     photos afterwards, so this script stays fast and re-runnable
 *
 * The English prose it writes is TheMealDB's own and is meant to be replaced
 * by a scripts/voice batch. nl and fr are seeded with the English text so the
 * shape is right, and the smoke test fails if any of them are still identical
 * to the English by the time it runs.
 */
const fs = require('fs');
const path = require('path');

const Ingredients = require('../ingredients.js');
const Measure = require('./measure.js');
const RecipeDb = require('./recipe_db.js');

const CACHE = path.join(__dirname, '..', '.mealdb-cache.json');
// No photograph yet: app.js draws a placeholder tile for an empty image.
const PLACEHOLDER = '';

// How many of the 150 should land in each category. The book already has 91
// mains and only 12 soups, so soup and breakfast are over-weighted here.
const TARGET_MIX = { soup: 26, breakfast: 16, dessert: 30, snack: 24, main: 54 };

const SOUPY = /\b(soup|broth|chowder|bisque|potage|consomm|gazpacho|ramen|pho|laksa|minestrone)\b/i;
// The book already files carbonnade, waterzooi and hutsepot as soup *and* main,
// so a dish eaten out of its own broth belongs in both. A curry or a tagine is
// saucy rather than brothy, and stays a main.
const STEWY = /\b(stew|hotpot|hot pot|goulash|broth-braised)\b/i;

const MEALDB_TO_APP = {
  Dessert: 'dessert',
  Breakfast: 'breakfast',
  Starter: 'snack',
  Side: 'snack',
  Miscellaneous: 'main'
};

// ---------------------------------------------------------------------------
// Fetching
// ---------------------------------------------------------------------------
async function fetchCatalogue() {
  if (fs.existsSync(CACHE)) {
    const cached = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
    console.log(`📦 ${cached.length} meals from cache (delete .mealdb-cache.json to refresh)`);
    return cached;
  }
  console.log('📡 Fetching the TheMealDB catalogue…');
  const seen = new Map();
  for (const letter of 'abcdefghijklmnopqrstuvwxyz'.split('')) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const json = await res.json();
    (json.meals || []).forEach(m => seen.set(m.idMeal, m));
    process.stdout.write('.');
  }
  const meals = [...seen.values()];
  fs.writeFileSync(CACHE, JSON.stringify(meals));
  console.log(`\n📦 ${meals.length} meals cached`);
  return meals;
}

// ---------------------------------------------------------------------------
// Shaping one meal
// ---------------------------------------------------------------------------

/** Split the instruction blob into steps a cook can follow one at a time. */
function toSteps(blob) {
  let steps = String(blob || '')
    .split(/\r?\n+/)
    .map(s => s.trim())
    .map(s => s.replace(/^(?:STEP\s*\d+[.:)]?|\d+[.)])\s*/i, ''))
    .filter(s => s.length > 2);

  // A single wall of text, or one enormous step, is unusable in cook mode.
  const split = [];
  for (const step of steps) {
    if (step.length <= 400) { split.push(step); continue; }
    let buffer = '';
    for (const sentence of step.match(/[^.!?]+[.!?]*\s*/g) || [step]) {
      if ((buffer + sentence).length > 320 && buffer) { split.push(buffer.trim()); buffer = ''; }
      buffer += sentence;
    }
    if (buffer.trim()) split.push(buffer.trim());
  }

  // Glue orphan fragments onto the step before them.
  const merged = [];
  for (const step of split) {
    if (step.length < 25 && merged.length) merged[merged.length - 1] += ' ' + step;
    else merged.push(step);
  }
  return merged;
}

/** Largest explicit time in the method, as a rough cook time. */
function estimateTimes(steps, ingredientCount) {
  let maxMinutes = 0;
  for (const step of steps) {
    const re = /(\d+(?:\.\d+)?)\s*(?:-\s*(\d+(?:\.\d+)?)\s*)?(hour|hr|minute|min)/gi;
    let m;
    while ((m = re.exec(step)) !== null) {
      const value = parseFloat(m[2] || m[1]);
      const minutes = /h/i.test(m[3]) ? value * 60 : value;
      if (minutes > maxMinutes && minutes <= 24 * 60) maxMinutes = minutes;
    }
  }
  const cook = maxMinutes || 30;
  const label = mins => (mins >= 60
    ? `${Math.floor(mins / 60)} hr${mins % 60 ? ` ${Math.round(mins % 60)} mins` : ''}`
    : `${Math.round(mins / 5) * 5 || 5} mins`);
  const prep = Math.min(45, Math.max(10, Math.round((5 + ingredientCount * 1.5) / 5) * 5));
  return { prepTime: label(prep), cookTime: label(cook) };
}

function categoriesFor(meal) {
  const cats = new Set();
  const mapped = MEALDB_TO_APP[meal.strCategory];
  cats.add(mapped || 'main');
  const title = meal.strMeal || '';
  if (SOUPY.test(title)) { cats.add('soup'); cats.delete('main'); }
  else if (STEWY.test(title) && cats.has('main')) cats.add('soup');
  return [...cats];
}

function difficultyFor(steps, ingredientCount) {
  const score = steps.length + ingredientCount;
  if (score <= 12) return { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' };
  if (score <= 20) return { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' };
  return { en: 'Hard', nl: 'Moeilijk', fr: 'Difficile' };
}

function ingredientsFor(meal) {
  const rows = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    if (!name || !name.trim()) continue;
    const { amount, unit } = Measure.parseMeasure(meal[`strMeasure${i}`]);
    Ingredients.resolve({ name: name.trim(), amount, unit }).forEach(row => rows.push(row));
  }
  return Ingredients.dedupe(rows);
}

/** Reject anything we could not stand behind. Returns a reason, or null. */
function reject(meal, steps, ingredients) {
  if (!meal.strMeal || !meal.strMeal.trim()) return 'no title';
  if (steps.length < 3) return `only ${steps.length} step(s)`;
  if (ingredients.length < 4) return `only ${ingredients.length} ingredient(s)`;
  if (steps.join(' ').length < 200) return 'method too thin to follow';
  if (/lorem ipsum|test recipe/i.test(meal.strInstructions || '')) return 'placeholder text';
  return null;
}

function buildRecipe(meal, steps, ingredients) {
  const title = meal.strMeal.trim();
  const origin = [meal.strArea, meal.strCategory].filter(x => x && x !== 'Unknown').join(' · ');
  // Deliberately plain: every one of these is replaced by a scripts/voice batch.
  const description = `${title}. ${origin || 'A dish worth knowing'}.`;
  const english = { title, subtitle: origin || title, description, instructions: steps };

  return {
    id: `mealdb-${meal.idMeal}`,
    ...estimateTimes(steps, ingredients.length),
    difficulty: difficultyFor(steps, ingredients.length),
    servings: 4,
    category: categoriesFor(meal),
    image: PLACEHOLDER,
    ...Ingredients.deriveDietFlags(ingredients, {}),
    // nl and fr are seeded with English purely to get the shape right; the
    // voice pass overwrites all three, and the smoke test fails if it did not.
    translations: { en: english, nl: { ...english }, fr: { ...english } },
    ingredients,
    sourceName: 'TheMealDB',
    sourceUrl: `https://www.themealdb.com/meal/${meal.idMeal}`
  };
}

// ---------------------------------------------------------------------------
// Selection
// ---------------------------------------------------------------------------
function select(candidates, wanted) {
  const byCategory = {};
  Object.keys(TARGET_MIX).forEach(c => { byCategory[c] = []; });

  for (const c of candidates) {
    // File each candidate under its rarest category so soups are not buried.
    const cats = c.recipe.category.slice().sort(
      (a, b) => (TARGET_MIX[a] || 99) - (TARGET_MIX[b] || 99)
    );
    (byCategory[cats[0]] || byCategory.main).push(c);
  }

  // Best first: more ingredients and more steps means more to actually cook.
  Object.values(byCategory).forEach(list => list.sort((a, b) =>
    (b.recipe.ingredients.length + b.steps.length) - (a.recipe.ingredients.length + a.steps.length)));

  const picked = [];
  const taken = new Set();
  // First pass: fill each category's quota. Second: top up from whatever is left.
  for (const [cat, quota] of Object.entries(TARGET_MIX)) {
    for (const c of (byCategory[cat] || []).slice(0, quota)) {
      if (picked.length >= wanted) break;
      picked.push(c); taken.add(c.recipe.id);
    }
  }
  for (const c of candidates) {
    if (picked.length >= wanted) break;
    if (!taken.has(c.recipe.id)) { picked.push(c); taken.add(c.recipe.id); }
  }
  return picked.slice(0, wanted);
}

// ---------------------------------------------------------------------------
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');
    const wanted = parseInt((args[args.indexOf('--count') + 1] || '150'), 10);

  const meals = await fetchCatalogue();
  const book = RecipeDb.load();
  console.log(`📖 ${book.length} recipes already in the book, want ${wanted} more\n`);

  const candidates = [];
  const rejected = {};
  let duplicates = 0;

  for (const meal of meals) {
    const steps = toSteps(meal.strInstructions);
    const ingredients = ingredientsFor(meal);

    const why = reject(meal, steps, ingredients);
    if (why) { rejected[why] = (rejected[why] || 0) + 1; continue; }

    if (RecipeDb.findDuplicate(book, { id: `mealdb-${meal.idMeal}`, title: meal.strMeal })) {
      duplicates++;
      continue;
    }
    candidates.push({ meal, steps, recipe: buildRecipe(meal, steps, ingredients) });
  }

  console.log('Quality gate');
  Object.entries(rejected).forEach(([why, n]) => console.log(`   rejected ${String(n).padStart(3)} — ${why}`));
  console.log(`   rejected ${String(duplicates).padStart(3)} — already in the book`);
  console.log(`   ${candidates.length} candidates remain\n`);

  const picked = select(candidates, wanted);

  const mix = {};
  picked.forEach(c => c.recipe.category.forEach(cat => { mix[cat] = (mix[cat] || 0) + 1; }));
  console.log(`Selected ${picked.length}: ${Object.entries(mix).map(([k, v]) => `${k} ${v}`).join(', ')}\n`);

  picked.forEach(({ recipe }) => book.push(recipe));

  if (dryRun) {
    console.log('(dry run — nothing written)');
    console.log(picked.slice(0, 10).map(c => `   ${c.recipe.id}  ${c.recipe.category.join('/')}  ${c.recipe.translations.en.title}`).join('\n'));
    return;
  }

  RecipeDb.save(book);
  console.log(`💾 recipes.js now holds ${book.length} recipes`);
  console.log('\n👉 Next:  node scripts/normalize_recipes.js');
  console.log('          pwsh scripts/resize_images.ps1');
  console.log('          then write scripts/voice batches for the new ids');
}

main().catch(err => { console.error(err); process.exit(1); });
