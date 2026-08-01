/**
 * Find a reusable photograph for every recipe that does not have one yet.
 *
 *   node scripts/fetch_photos.js [--limit 20] [--dry]
 *
 * A recipe ships a photo only when Wikimedia has one under a licence that
 * permits reuse and names the photographer, which is what CC BY-SA asks for.
 * Anything else keeps the empty image, and app.js draws a placeholder tile.
 *
 * Safe to stop and re-run: it only looks at recipes still without a photo, so
 * a second run picks up where the first left off rather than starting over.
 */
const fs = require('fs');
const path = require('path');

const RecipeDb = require('./recipe_db.js');
const Wikimedia = require('./wikimedia.js');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

/**
 * Wikipedia titles worth trying for a dish, most specific first. TheMealDB
 * titles often carry a parenthetical translation ("Bigos (Hunters Stew)") or a
 * dash, and the bare dish name usually finds the article where the full string
 * does not.
 */
function candidateTitles(title) {
  const cleaned = title.replace(/\s*[–—-]\s*/g, ' ').trim();
  const withoutParens = title.replace(/\([^)]*\)/g, '').trim();
  const insideParens = (title.match(/\(([^)]+)\)/) || [])[1];
  return [...new Set([title, withoutParens, insideParens, cleaned].filter(Boolean))];
}

// Words that say nothing about which dish this is.
const STOPWORDS = new Set([
  'with', 'and', 'the', 'from', 'style', 'recipe', 'dish', 'sauce', 'soup',
  'stew', 'cake', 'pie', 'salad', 'bread', 'chicken', 'beef', 'pork', 'lamb',
  'fish', 'rice', 'traditional', 'homemade', 'easy', 'best', 'classic',
  'hot', 'old', 'new', 'one', 'two', 'mix', 'pan', 'pot', 'for', 'his', 'her'
]);

function significantWords(text) {
  return new Set(
    String(text).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .split(/[^a-z]+/)
      .filter(w => w.length >= 3 && !STOPWORDS.has(w))
  );
}

/**
 * Does this article plausibly show the dish?
 *
 * Wikipedia's search is happy to answer "Beef Dumpling Stew" with a photo of a
 * Hong Kong restaurant's wonton, and "Chorba Hamra bel Frik" with a bag of raw
 * freekeh. Both are worse than the placeholder, so an article only counts if it
 * shares a distinctive word with the dish name and is not obviously a picture
 * of an ingredient rather than a meal.
 */
const NOT_A_DISH = /\b(uncooked|raw|dried|seeds?|plant|grain|flour|powder|tree|leaves|harvest|field|market|logo|map|flag)\b/i;

function looksRelevant(dishTitle, articleTitle) {
  if (NOT_A_DISH.test(articleTitle)) return false;
  const dish = significantWords(dishTitle);
  const article = significantWords(articleTitle);
  for (const word of article) {
    if (dish.has(word)) return true;
    // "freekeh" vs "frik", "pierogi" vs "pierogy": allow a shared long stem.
    for (const d of dish) {
      if (d.length >= 5 && word.length >= 5 && (d.startsWith(word.slice(0, 5)) || word.startsWith(d.slice(0, 5)))) {
        return true;
      }
    }
  }
  return false;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');
  const limit = args.includes('--limit')
    ? parseInt(args[args.indexOf('--limit') + 1], 10) : Infinity;

  const book = RecipeDb.load();
  const missing = book.filter(r => !r.image).slice(0, limit);

  console.log(`📖 ${book.length} recipes, ${book.filter(r => !r.image).length} without a photo`);
  console.log(`🔍 trying ${missing.length}\n`);

  let found = 0;
  let searched = 0;

  for (const recipe of missing) {
    const title = recipe.translations.en.title;
    searched++;
    const prefix = `[${String(searched).padStart(3)}/${missing.length}]`;

    // Ask Wikipedia which article the dish name means, then try those.
    let candidates = [];
    for (const term of candidateTitles(title)) {
      candidates = candidates.concat(await Wikimedia.searchArticles(term, 3));
      if (candidates.length >= 4) break;
    }
    // Keep only articles that plausibly show this dish. Better the placeholder
    // than a confident picture of the wrong thing.
    candidates = [...new Set(candidates)]
      .filter(c => looksRelevant(title, c.replace(/^[a-z]+:/, '')));

    if (!candidates.length) {
      console.log(`${prefix} —  ${title}  (no relevant article)`);
      continue;
    }

    try {
      if (dryRun) {
        console.log(`${prefix} ?  ${title}  -> ${candidates.slice(0, 2).join(', ')}`);
        continue;
      }
      const got = await Wikimedia.fetchLicensedPhoto(candidates, IMAGES_DIR, recipe.id);
      if (!got) {
        console.log(`${prefix} —  ${title}  (nothing reusable)`);
        continue;
      }
      recipe.image = `images/${got.file}`;
      recipe.imageCredit = got.credit;
      found++;
      console.log(`${prefix} 📷 ${title}  ${got.credit.licence}, ${(got.bytes / 1024).toFixed(0)} KB`);

      // Write as we go: a long network job should not lose everything if it
      // is interrupted halfway.
      if (found % 10 === 0) RecipeDb.save(book);
    } catch (err) {
      console.log(`${prefix} ⚠️  ${title}: ${err.message}`);
    }
  }

  if (dryRun) { console.log('\n(dry run — nothing written)'); return; }

  RecipeDb.save(book);
  const still = book.filter(r => !r.image).length;
  console.log(`\n✅ ${found} new photo(s); ${still} recipes remain on the placeholder`);
  console.log('👉 Now run:  pwsh scripts/resize_images.ps1');
}

main().catch(err => { console.error(err); process.exit(1); });
