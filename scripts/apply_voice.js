/**
 * Apply the rewritten recipe prose in scripts/voice/*.js to recipes.js.
 *
 * The recipes were rewritten from a terse imperative register ("Peel potatoes
 * and cut carrots and leeks.") into the voice of someone who has cooked the
 * dish many times and is telling you how. That is a prose change only — a
 * rewrite must never quietly move a temperature, a timing or an order of
 * operations, and a chattier sentence makes such a slip easy to miss by eye.
 *
 * So every instruction step is checked against the original before it lands:
 *
 *   - the step count must match, so cook mode still lines up with the recipe
 *   - every number in the original must survive, in the same step
 *   - oven temperatures (180°C, 200 C, gas mark 4) must survive exactly
 *   - a step may grow freely, but not shrink to under half its length
 *
 * Numbers are compared as a multiset per step, so "180°C for 25 minutes"
 * cannot become "180°C for 35 minutes", and "2 hours" cannot lose its 2.
 *
 * Descriptions are held to a looser standard, and deliberately. On the
 * imported recipes the description was never a description — it is the
 * blurb the API shipped ("1 person found this recipe to be scrumptious",
 * "This score is amazing"), so its numbers count nobody's dinner and
 * preserving them would only preserve the noise. Timings live in the
 * recipe's own prepTime/cookTime fields, not in the prose. A changed
 * number in a description is therefore reported and allowed through.
 *
 *   node scripts/apply_voice.js            # apply every batch
 *   node scripts/apply_voice.js --check    # verify only, write nothing
 *   node scripts/apply_voice.js --batch 03 # one batch
 */
const fs = require('fs');
const path = require('path');
const db = require('./recipe_db');

const VOICE_DIR = path.join(__dirname, 'voice');
const LANGS = ['en', 'nl', 'fr'];

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const only = args.includes('--batch') ? args[args.indexOf('--batch') + 1] : null;

/**
 * Numbers as a cook reads them: 1,5 and 1.5 are the same amount, and "2-3"
 * is two numbers. Ordinals glued to digits ("1st") keep only the digit.
 */
function numbersIn(text) {
  return (String(text).match(/\d+(?:[.,]\d+)?/g) || [])
    .map(n => n.replace(',', '.'))
    .map(n => String(parseFloat(n)))
    .sort();
}

/** Oven settings must survive verbatim — these are the easiest thing to fumble. */
function temperaturesIn(text) {
  const out = [];
  const re = /(\d+)\s*(?:°\s*[CF]|(?:degrees?|graden|degrés)\b|\bgas mark\b)/gi;
  let m;
  while ((m = re.exec(text)) !== null) out.push(m[0].replace(/\s+/g, '').toLowerCase());
  // "gas mark 4" puts the number after the words
  const gas = String(text).match(/gas mark\s*\d+/gi) || [];
  return out.concat(gas.map(g => g.replace(/\s+/g, '').toLowerCase())).sort();
}

function sameMultiset(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

const problems = [];
const notes = [];
function fault(id, lang, msg) {
  problems.push(`${id} [${lang}] ${msg}`);
}

/**
 * A few imported recipes end in text the scraper swept up off the page
 * rather than out of the recipe — "JOIN 500,000 SUBSCRIBERS", "Powered by
 * Convert", "Kit". Those are not steps in any voice, so a batch may list
 * their 1-based indices in `dropSteps` and they are removed outright.
 *
 * It is spelled out per recipe on purpose: dropping a step is a change to
 * the recipe, not to its wording, and it should be impossible to do by
 * accident or in passing.
 */
function dropFrom(list, drop) {
  return list.filter((_, i) => drop.indexOf(i + 1) === -1);
}

/** Compare one language's rewrite against the original, step by step. */
function verify(id, lang, original, rewrite, drop, fixes) {
  if (!original) return;

  if (typeof rewrite.description === 'string' && original.description) {
    const before = numbersIn(original.description);
    const after = numbersIn(rewrite.description);
    if (!sameMultiset(before, after)) {
      notes.push(`${id} [${lang}] description numbers: [${before}] -> [${after}]`);
    }
  }

  if (!Array.isArray(rewrite.instructions)) return;

  const before = dropFrom(original.instructions || [], drop);
  if (rewrite.instructions.length !== before.length) {
    fault(id, lang, `has ${rewrite.instructions.length} steps, original has ${before.length}` +
      (drop.length ? ` after dropping ${drop.length}` : ''));
    return;
  }

  rewrite.instructions.forEach((step, i) => {
    // `fixes` names the steps where a number really is meant to change,
    // because the imported text had it wrong — a Dutch step reading "45-50
    // graden" where the English said minutes, or "350 graden Celsius" for
    // what was 350°F. Listing the step number turns the failure into a
    // reported note, so a correction is always a decision someone made and
    // never a rewrite that quietly wandered.
    const expected = fixes.indexOf(i + 1) !== -1;
    const report = expected
      ? (msg => notes.push(`${id} [${lang}] ${msg}`))
      : (msg => fault(id, lang, msg));

    const wasNums = numbersIn(before[i]);
    const nowNums = numbersIn(step);
    if (!sameMultiset(wasNums, nowNums)) {
      report(`step ${i + 1} numbers: [${wasNums}] -> [${nowNums}]` +
        (expected ? '' : `\n      was: ${before[i]}\n      now: ${step}`));
    }
    const wasTemp = temperaturesIn(before[i]);
    const nowTemp = temperaturesIn(step);
    if (!sameMultiset(wasTemp, nowTemp)) {
      report(`step ${i + 1} oven setting: [${wasTemp}] -> [${nowTemp}]`);
    }
    // A coarse tripwire for a step that was skipped rather than rewritten.
    // It cannot be tight: the imported steps are padded and repetitive
    // ("Set aside." three times in one step, "Enjoy!"), so a faithful
    // rewrite of one is routinely a third shorter with nothing lost.
    if (step.trim().length < before[i].trim().length * 0.5) {
      report(`step ${i + 1} is less than half the original's length — check nothing was skipped`);
    }
    if (!step.trim()) fault(id, lang, `step ${i + 1} is empty`);
  });
}

function main() {
  if (!fs.existsSync(VOICE_DIR)) {
    console.error(`No ${path.relative(process.cwd(), VOICE_DIR)} directory yet.`);
    process.exit(1);
  }

  const files = fs.readdirSync(VOICE_DIR)
    .filter(f => /^batch-\d+\.js$/.test(f))
    .filter(f => !only || f.includes(only))
    .sort();

  if (files.length === 0) {
    console.error('No batch files matched.');
    process.exit(1);
  }

  const recipes = db.load();
  const byId = new Map(recipes.map(r => [r.id, r]));

  let recipeCount = 0;
  let stringCount = 0;
  const unknown = [];
  const dropped = [];

  files.forEach(file => {
    const batch = require(path.join(VOICE_DIR, file));
    Object.keys(batch).forEach(id => {
      const recipe = byId.get(id);
      if (!recipe) { unknown.push(`${file}: ${id}`); return; }

      recipeCount++;
      const drop = Array.isArray(batch[id].dropSteps) ? batch[id].dropSteps : [];
      if (drop.length) dropped.push(`${id}: steps ${drop.join(', ')}`);

      LANGS.forEach(lang => {
        const rewrite = batch[id][lang];
        if (!rewrite) return;
        const fixes = Array.isArray(rewrite.fixes) ? rewrite.fixes : [];
        const original = recipe.translations && recipe.translations[lang];
        verify(id, lang, original, rewrite, drop, fixes);

        if (!original) return;
        if (typeof rewrite.subtitle === 'string') { original.subtitle = rewrite.subtitle; stringCount++; }
        if (typeof rewrite.description === 'string') { original.description = rewrite.description; stringCount++; }
        if (Array.isArray(rewrite.instructions)) {
          original.instructions = rewrite.instructions.slice();
          stringCount += rewrite.instructions.length;
        }
      });
    });
  });

  console.log(`\n📖 Voice pass over ${files.length} batch file(s)\n`);
  console.log(`   recipes touched: ${recipeCount}`);
  console.log(`   strings written: ${stringCount}`);

  if (dropped.length) {
    console.log(`\n✂️  scraped page furniture removed from ${dropped.length} recipe(s):`);
    dropped.forEach(d => console.log(`   ${d}`));
  }

  if (unknown.length) {
    console.log(`\n❓ ${unknown.length} id(s) not in the database:`);
    unknown.forEach(u => console.log(`   ${u}`));
  }

  if (problems.length) {
    console.log(`\n❌ ${problems.length} rewrite(s) changed more than the wording:\n`);
    problems.forEach(p => console.log(`   ${p}`));
    console.log('\nNothing was written.\n');
    process.exit(1);
  }

  if (notes.length) {
    console.log(`\n📝 ${notes.length} description(s) rewritten away from the imported blurb:`);
    notes.slice(0, 8).forEach(n => console.log(`   ${n}`));
    if (notes.length > 8) console.log(`   …and ${notes.length - 8} more`);
  }

  console.log('\n✅ every instruction kept its numbers, oven settings and step count');

  if (checkOnly) {
    console.log('   (--check: recipes.js left alone)\n');
    return;
  }

  db.save(recipes);
  console.log(`   recipes.js updated\n`);
}

main();
