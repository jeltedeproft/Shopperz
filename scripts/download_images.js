/**
 * Download every remotely hosted recipe image into images/ and rewrite
 * recipes.js to point at the local copy.
 *
 * Hot-linked images break offline use and disappear whenever the remote CDN
 * reorganises, so the app ships its own copies.
 *
 *   node scripts/download_images.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const RECIPES_FILE = path.join(ROOT, 'recipes.js');
const IMAGES_DIR = path.join(ROOT, 'images');

function loadRecipes() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(RECIPES_FILE, 'utf8'), sandbox);
  return sandbox.window.initialRecipes;
}

function fileNameFor(recipe, url) {
  const ext = (url.match(/\.(jpe?g|png|webp)(\?|$)/i) || [null, 'jpg'])[1].toLowerCase();
  const slug = String(recipe.id).replace(/[^a-z0-9-]+/gi, '-').toLowerCase();
  return `${slug}.${ext === 'jpeg' ? 'jpg' : ext}`;
}

async function main() {
  const recipes = loadRecipes();
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const remote = recipes.filter(r => /^https?:\/\//i.test(r.image || ''));
  console.log(`🖼️  ${remote.length} remote image(s) to fetch\n`);

  let ok = 0;
  let failed = 0;

  for (let i = 0; i < remote.length; i++) {
    const recipe = remote[i];
    const url = recipe.image;
    const fileName = fileNameFor(recipe, url);
    const target = path.join(IMAGES_DIR, fileName);
    const label = `[${i + 1}/${remote.length}] ${fileName}`;

    if (fs.existsSync(target) && fs.statSync(target).size > 0) {
      recipe.image = `images/${fileName}`;
      console.log(`${label} — already downloaded`);
      ok++;
      continue;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.length < 500) throw new Error('suspiciously small response');
      fs.writeFileSync(target, buffer);
      recipe.image = `images/${fileName}`;
      console.log(`${label} — ${(buffer.length / 1024).toFixed(0)} KB`);
      ok++;
    } catch (err) {
      // Keep the remote URL so the recipe still shows something.
      console.warn(`${label} — FAILED (${err.message}), keeping remote URL`);
      failed++;
    }
  }

  fs.writeFileSync(RECIPES_FILE, 'window.initialRecipes = ' + JSON.stringify(recipes, null, 2) + ';\n', 'utf8');
  console.log(`\n✅ ${ok} local, ${failed} still remote. recipes.js updated.`);
  if (ok > 0) {
    console.log('\n👉 Now run:  pwsh scripts/resize_images.ps1');
    console.log('   Fresh downloads are full size; the app shows them at 480px at most.');
  }
}

main();
