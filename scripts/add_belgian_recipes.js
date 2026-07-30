/**
 * Add the hand-written Belgian classics to the database.
 *
 * Every ingredient goes through ingredients.js, diet flags are derived from
 * the result, and duplicates are refused — so these arrive in exactly the same
 * shape as everything else.
 *
 * Photos come from Wikimedia Commons and only under a licence that allows
 * reuse. The author and licence are stored on the recipe so the app can credit
 * them, which CC BY-SA requires.
 *
 *   node scripts/add_belgian_recipes.js [--dry]
 */
const fs = require('fs');
const path = require('path');

const Ingredients = require('../ingredients.js');
const RecipeDb = require('./recipe_db.js');
const recipes = require('./belgian_recipes.js');

const IMAGES_DIR = path.join(__dirname, '..', 'images');
const FALLBACK_IMAGE = 'images/witloof_gratin.jpg';

// Licences that permit reuse with attribution. Anything else is skipped.
const FREE_LICENCE = /^(cc0|cc by|cc by-sa|public domain|pd)/i;

const UA = 'MijnKookpot/1.0 (personal recipe app; https://github.com/jeltedeproft/Shopperz)';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Wikimedia rate-limits hard and returns 429. Requests go one at a time with a
 * pause between them, and back off when asked to.
 * See https://www.mediawiki.org/wiki/Wikimedia_APIs/Rate_limits
 */
let lastCall = 0;
async function api(url, attempt = 0) {
  const since = Date.now() - lastCall;
  if (since < 1200) await sleep(1200 - since);
  lastCall = Date.now();

  const res = await fetch(url, { headers: { 'User-Agent': UA } });

  if (res.status === 429 && attempt < 3) {
    const wait = 5000 * (attempt + 1);
    console.log(`   ⏳ rate limited, waiting ${wait / 1000}s…`);
    await sleep(wait);
    return api(url, attempt + 1);
  }

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/**
 * Lead image of a Wikipedia article. Candidates are "lang:Title", most likely
 * first, so each recipe costs one or two requests rather than nine.
 */
async function findArticleImage(candidates) {
  for (const candidate of candidates) {
    const [wiki, ...rest] = candidate.split(':');
    const title = rest.join(':');
    try {
      const data = await api(
        `https://${wiki}.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=original&titles=${encodeURIComponent(title)}`
      );
      const page = Object.values(data.query.pages)[0];
      if (page && page.original && page.original.source) {
        return { url: page.original.source, article: `${wiki}.wikipedia.org/wiki/${title}` };
      }
    } catch (err) {
      console.log(`   ⚠️  ${candidate}: ${err.message}`);
    }
  }
  return null;
}

/** Author and licence for a Commons file, or null when it is not reusable. */
async function licenceFor(imageUrl) {
  const fileName = decodeURIComponent(imageUrl.split('/').pop());
  try {
    const data = await api(
      `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=extmetadata&titles=${encodeURIComponent('File:' + fileName)}`
    );
    const page = Object.values(data.query.pages)[0];
    if (!page || !page.imageinfo) return null;

    const meta = page.imageinfo[0].extmetadata || {};
    const licence = (meta.LicenseShortName && meta.LicenseShortName.value) || '';
    if (!FREE_LICENCE.test(licence)) return null;

    const artist = ((meta.Artist && meta.Artist.value) || 'Unknown')
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    return {
      licence,
      licenceUrl: (meta.LicenseUrl && meta.LicenseUrl.value) || '',
      author: artist.slice(0, 80),
      file: fileName
    };
  } catch (err) {
    return null;
  }
}

async function downloadImage(url, targetPath) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 2000) throw new Error('suspiciously small');
  fs.writeFileSync(targetPath, buffer);
  return buffer.length;
}

function buildRecipe(raw) {
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
    image: FALLBACK_IMAGE,
    ...Ingredients.deriveDietFlags(ingredients, {}),
    translations: raw.translations,
    ingredients
  };

  return recipe;
}

async function main() {
  const dryRun = process.argv.includes('--dry');
  const book = RecipeDb.load();

  console.log(`📖 ${book.length} recipes in the book, ${recipes.length} Belgian classics to add\n`);

  const added = [];
  let skipped = 0;
  let withPhoto = 0;

  for (const raw of recipes) {
    const duplicate = RecipeDb.findDuplicate(book, { id: raw.id, translations: raw.translations });
    if (duplicate) {
      console.log(`⏭️  ${raw.translations.en.title} — already in the book as ${duplicate.id}`);
      skipped++;
      continue;
    }

    const recipe = buildRecipe(raw);

    // Photo
    const found = await findArticleImage(raw.wiki || []);
    if (found) {
      const credit = await licenceFor(found.url);
      if (credit) {
        const ext = (found.url.match(/\.(jpe?g|png)$/i) || [null, 'jpg'])[1].toLowerCase();
        const fileName = `${raw.id}.${ext === 'jpeg' ? 'jpg' : ext}`;
        try {
          if (!dryRun) {
            const bytes = await downloadImage(found.url, path.join(IMAGES_DIR, fileName));
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

main();
