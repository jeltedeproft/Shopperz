/**
 * One-off (re-runnable) normalisation pass over recipes.js.
 *
 * Pushes every ingredient through the canonical dictionary in ingredients.js:
 * junk rows are dropped, compound rows are split, units are converted to the
 * canonical set, aisles are reassigned and duplicate rows inside a recipe are
 * merged. Safe to run repeatedly — it is idempotent.
 *
 *   node scripts/normalize_recipes.js [--dry]
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const Ingredients = require('../ingredients.js');

const ROOT = path.join(__dirname, '..');
const RECIPES_FILE = path.join(ROOT, 'recipes.js');

function loadRecipes() {
  const src = fs.readFileSync(RECIPES_FILE, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.initialRecipes;
}

function main() {
  const dryRun = process.argv.includes('--dry');
  const recipes = loadRecipes();

  const stats = {
    recipes: recipes.length,
    before: 0,
    after: 0,
    dropped: 0,
    split: 0,
    merged: 0,
    aisleChanged: 0,
    unitChanged: 0,
    staples: 0,
    flagsChanged: 0
  };
  const aisleCounts = {};
  const flagChanges = {};

  recipes.forEach(recipe => {
    const original = recipe.ingredients || [];
    stats.before += original.length;

    let resolved = [];
    original.forEach(raw => {
      const items = Ingredients.resolve(raw);
      if (items.length === 0) stats.dropped++;
      if (items.length > 1) stats.split += items.length - 1;
      items.forEach(item => {
        if (item.category !== raw.category) stats.aisleChanged++;
        if (item.unit !== raw.unit) stats.unitChanged++;
        resolved.push(item);
      });
    });

    const beforeDedupe = resolved.length;
    resolved = Ingredients.dedupe(resolved);
    stats.merged += beforeDedupe - resolved.length;
    stats.after += resolved.length;

    resolved.forEach(i => {
      aisleCounts[i.category] = (aisleCounts[i.category] || 0) + 1;
      if (i.staple) stats.staples++;
    });

    recipe.ingredients = resolved;

    // Diet flags follow from the ingredients, using whatever the source said
    // only to make a claim stricter.
    const derived = Ingredients.deriveDietFlags(resolved, recipe);
    Ingredients.DIET_FLAGS.forEach(flag => {
      if (recipe[flag] !== derived[flag]) {
        stats.flagsChanged++;
        flagChanges[flag] = (flagChanges[flag] || 0) + 1;
      }
      recipe[flag] = derived[flag];
    });
  });

  console.log(`\n📊 Normalisation report`);
  console.log(`   recipes:            ${stats.recipes}`);
  console.log(`   ingredients before: ${stats.before}`);
  console.log(`   ingredients after:  ${stats.after}`);
  console.log(`   junk rows dropped:  ${stats.dropped}`);
  console.log(`   compound rows split:${stats.split}`);
  console.log(`   duplicates merged:  ${stats.merged}`);
  console.log(`   aisle reassigned:   ${stats.aisleChanged}`);
  console.log(`   units converted:    ${stats.unitChanged}`);
  console.log(`   pantry staples:     ${stats.staples}`);
  console.log(`\n🏬 Aisle distribution`);
  Ingredients.AISLES.forEach(a => {
    const n = aisleCounts[a] || 0;
    const pct = stats.after ? Math.round((n / stats.after) * 100) : 0;
    console.log(`   ${a.padEnd(24)} ${String(n).padStart(4)}  ${pct}%`);
  });

  console.log(`\n🥗 Diet flags corrected: ${stats.flagsChanged}`);
  Object.keys(flagChanges).sort().forEach(flag => {
    const nowTrue = recipes.filter(r => r[flag]).length;
    console.log(`   ${flag.padEnd(20)} ${String(flagChanges[flag]).padStart(3)} changed, ${nowTrue}/${recipes.length} now true`);
  });

  const units = {};
  recipes.forEach(r => r.ingredients.forEach(i => { units[i.unit] = (units[i.unit] || 0) + 1; }));
  console.log(`\n📏 Units in use: ${Object.keys(units).sort().join(', ')}`);

  if (dryRun) {
    console.log('\n(dry run — recipes.js not written)');
    return;
  }

  const out = 'window.initialRecipes = ' + JSON.stringify(recipes, null, 2) + ';\n';
  fs.writeFileSync(RECIPES_FILE, out, 'utf8');
  console.log(`\n✅ recipes.js rewritten (${(out.length / 1024).toFixed(0)} KB)`);
}

main();
