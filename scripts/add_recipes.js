/**
 * Shared by the add_*_recipes.js scripts: put hand-written recipes into the book.
 *
 * Every ingredient goes through ingredients.js, diet flags are derived from
 * the result, and duplicates are refused — so these arrive in exactly the same
 * shape as everything else.
 *
 * Photos come from Wikimedia Commons and only under a licence that allows
 * reuse. The author and licence are stored on the recipe so the app can credit
 * them, which CC BY-SA requires.
 *
 * Flags: --dry (write nothing), --replace (rewrite recipes already in the book
 * under the same id, e.g. after correcting one).
 */
const path = require('path');

const Ingredients = require('../ingredients.js');
const RecipeDb = require('./recipe_db.js');
// Rate-limited, licence-checking photo lookup, shared with import_mealdb.js.
const Wikimedia = require('./wikimedia.js');

const IMAGES_DIR = path.join(__dirname, '..', 'images');
function buildRecipe(raw, fallbackImage) {
  // Canonicalise the ingredient lines exactly like the importers do.
  const ingredients = Ingredients.dedupe(
    raw.ingredients.reduce((acc, line) => acc.concat(Ingredients.resolve(line)), [])
  );

  const recipe = {
    id: raw.id,
    prepTime: raw.prepTime,
    cookTime: raw.cookTime,
    difficulty: raw.difficulty,
    servings: raw.servings,
    category: raw.category,
    image: fallbackImage,
    ...Ingredients.deriveDietFlags(ingredients, {}),
    translations: raw.translations,
    ingredients
  };
  if (raw.sourceUrl) recipe.sourceUrl = raw.sourceUrl;

  return recipe;
}

async function addRecipes(recipes, { label, fallbackImage = '' }) {
  const dryRun = process.argv.includes('--dry');
  // --replace rewrites recipes already in the book under the same id, keeping their photo.
  const replace = process.argv.includes('--replace');
  const book = RecipeDb.load();

  console.log(`📖 ${book.length} recipes in the book, ${recipes.length} ${label} to add\n`);

  const added = [];
  let skipped = 0;
  let withPhoto = 0;

  for (const raw of recipes) {
    const duplicate = RecipeDb.findDuplicate(book, { id: raw.id, translations: raw.translations });
    if (duplicate && replace && duplicate.id === raw.id) {
      const recipe = buildRecipe(raw, fallbackImage);
      if (duplicate.image) recipe.image = duplicate.image;
      if (duplicate.imageCredit) recipe.imageCredit = duplicate.imageCredit;
      book[book.indexOf(duplicate)] = recipe;
      added.push(recipe);
      continue;
    }
    if (duplicate) {
      console.log(`⏭️  ${raw.translations.en.title} — already in the book as ${duplicate.id}`);
      skipped++;
      continue;
    }

    const recipe = buildRecipe(raw, fallbackImage);

    // Photo
    const found = await Wikimedia.findArticleImage(raw.wiki || []);
    if (found) {
      const credit = await Wikimedia.licenceFor(found.url);
      if (credit) {
        const ext = (found.url.match(/\.(jpe?g|png)$/i) || [null, 'jpg'])[1].toLowerCase();
        const fileName = `${raw.id}.${ext === 'jpeg' ? 'jpg' : ext}`;
        try {
          if (!dryRun) {
            const bytes = await Wikimedia.downloadImage(found.url, path.join(IMAGES_DIR, fileName));
            console.log(`   📷 ${fileName} (${(bytes / 1024).toFixed(0)} KB) — ${credit.licence}, ${credit.author}`);
          }
          recipe.image = `images/${fileName}`;
          recipe.imageCredit = {
            author: credit.author,
            licence: credit.licence,
            licenceUrl: credit.licenceUrl,
            source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(credit.file)}`
          };
          withPhoto++;
        } catch (err) {
          console.log(`   ⚠️  download failed (${err.message}), keeping the placeholder`);
        }
      } else {
        console.log(`   ⚠️  no reusable licence for the ${raw.id} photo, keeping the placeholder`);
      }
    } else {
      console.log(`   ⚠️  no article photo found for ${raw.id}, keeping the placeholder`);
    }

    const staples = recipe.ingredients.filter(i => i.staple).length;
    const diets = Ingredients.DIET_FLAGS.filter(f => recipe[f]);
    console.log(`✅ ${raw.translations.en.title}`);
    console.log(`   ${recipe.ingredients.length} ingredients (${staples} staples) · ${diets.join(', ') || 'no diet flags'}\n`);

    book.push(recipe);
    added.push(recipe);
  }

  console.log(`\n${added.length} added, ${skipped} skipped, ${withPhoto} with a licensed photo`);

  if (dryRun) {
    console.log('(dry run — nothing written)');
    return;
  }

  RecipeDb.save(book);
  console.log(`💾 recipes.js now holds ${book.length} recipes`);
  console.log('\n👉 Now run:  pwsh scripts/resize_images.ps1');
}

module.exports = { addRecipes, buildRecipe };
