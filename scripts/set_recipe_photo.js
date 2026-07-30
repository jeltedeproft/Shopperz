/**
 * Point a recipe at a specific Wikimedia Commons photo.
 *
 * The automatic lookup in add_belgian_recipes.js takes the lead image of a
 * Wikipedia article, which is sometimes the wrong variant of a dish (the
 * Waterzooi article leads with the lobster version) or an ingredient shot
 * rather than the finished plate. This replaces one photo by hand.
 *
 * Search Commons first, then:
 *
 *   node scripts/set_recipe_photo.js --search "waterzooi kip"
 *   node scripts/set_recipe_photo.js gentse-waterzooi "File:Waterzooi ... .jpg"
 *
 * Only licences that permit reuse are accepted, and the credit is stored on
 * the recipe. Run scripts/resize_images.ps1 afterwards.
 */
const fs = require('fs');
const path = require('path');

const RecipeDb = require('./recipe_db.js');

const IMAGES_DIR = path.join(__dirname, '..', 'images');
const UA = 'MijnKookpot/1.0 (personal recipe app; https://github.com/jeltedeproft/Shopperz)';
const FREE_LICENCE = /^(cc0|cc by|cc by-sa|public domain|pd)/i;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let lastCall = 0;
async function api(url, attempt = 0) {
  const since = Date.now() - lastCall;
  if (since < 1200) await sleep(1200 - since);
  lastCall = Date.now();

  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (res.status === 429 && attempt < 3) {
    await sleep(5000 * (attempt + 1));
    return api(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function searchCommons(term) {
  const data = await api(
    `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=10&srsearch=${encodeURIComponent(term)}`
  );
  const titles = (data.query.search || []).map(r => r.title).filter(t => /\.(jpe?g|png)$/i.test(t));

  console.log(`\n🔎 "${term}"\n`);
  for (const title of titles) {
    const meta = await fileInfo(title);
    if (meta) console.log(`  ${meta.licence.padEnd(16)} ${meta.author.slice(0, 34).padEnd(36)} ${title}`);
  }
  console.log('\nPick one and run:  node scripts/set_recipe_photo.js <recipe-id> "<File:...>"');
}

async function fileInfo(title) {
  const data = await api(
    `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=${encodeURIComponent(title)}`
  );
  const page = Object.values(data.query.pages)[0];
  if (!page || !page.imageinfo) return null;

  const info = page.imageinfo[0];
  const meta = info.extmetadata || {};
  const licence = (meta.LicenseShortName && meta.LicenseShortName.value) || '';
  if (!FREE_LICENCE.test(licence)) return null;

  return {
    url: info.url,
    licence,
    licenceUrl: (meta.LicenseUrl && meta.LicenseUrl.value) || '',
    author: ((meta.Artist && meta.Artist.value) || 'Unknown')
      .replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 80),
    file: title.replace(/^File:/, '')
  };
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] === '--search') {
    await searchCommons(args.slice(1).join(' '));
    return;
  }

  const [recipeId, fileTitle] = args;
  if (!recipeId || !fileTitle) {
    console.error('Usage: node scripts/set_recipe_photo.js <recipe-id> "<File:Name.jpg>"');
    console.error('       node scripts/set_recipe_photo.js --search "<terms>"');
    process.exit(1);
  }

  const book = RecipeDb.load();
  const recipe = book.find(r => r.id === recipeId);
  if (!recipe) {
    console.error(`No recipe with id "${recipeId}"`);
    process.exit(1);
  }

  const meta = await fileInfo(fileTitle.startsWith('File:') ? fileTitle : 'File:' + fileTitle);
  if (!meta) {
    console.error('That file has no licence permitting reuse (or does not exist).');
    process.exit(1);
  }

  const ext = (meta.url.match(/\.(jpe?g|png)$/i) || [null, 'jpg'])[1].toLowerCase();
  const fileName = `${recipeId}.${ext === 'jpeg' ? 'jpg' : ext}`;

  const res = await fetch(meta.url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(IMAGES_DIR, fileName), buffer);

  recipe.image = `images/${fileName}`;
  recipe.imageCredit = {
    author: meta.author,
    licence: meta.licence,
    licenceUrl: meta.licenceUrl,
    source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(meta.file)}`
  };

  RecipeDb.save(book);

  console.log(`✅ ${recipeId} → images/${fileName} (${(buffer.length / 1024).toFixed(0)} KB)`);
  console.log(`   ${meta.licence} · ${meta.author}`);
  console.log('\n👉 Now run:  pwsh scripts/resize_images.ps1');
}

main();
