/**
 * Table-driven tests for the canonical ingredient dictionary.
 *
 * The dictionary is a pile of regexes and keyword lists, and a keyword added
 * for one ingredient can quietly move another into the wrong aisle or break an
 * allergen claim. These tables pin the behaviour down.
 *
 *   node scripts/test_ingredients.js
 */
const Ing = require('../ingredients.js');
const Measure = require('./measure.js');

let failures = 0;
let count = 0;

function expect(label, actual, wanted) {
  count++;
  const ok = JSON.stringify(actual) === JSON.stringify(wanted);
  if (!ok) {
    failures++;
    console.log(`  ❌ ${label}\n       expected ${JSON.stringify(wanted)}\n       got      ${JSON.stringify(actual)}`);
  }
  return ok;
}

function section(name) {
  console.log(`\n${name}`);
}

// ---------------------------------------------------------------------------
section('Unit conversion  [amount, unit, ingredient] -> [amount, unit]');
// ---------------------------------------------------------------------------
const unitCases = [
  // metric passthrough
  [[500, 'g', 'flour'], [500, 'g']],
  [[250, 'ml', 'milk'], [250, 'ml']],
  [[1.5, 'kg', 'potato'], [1500, 'g']],
  [[2, 'l', 'water'], [2000, 'ml']],
  // spoons
  [[2, 'tbsp', 'mustard'], [2, 'el']],
  [[3, 'tsp', 'sugar'], [3, 'kl']],
  [[3, 't', 'soy sauce'], [3, 'kl']],
  [[1, 'tbs', 'oil'], [1, 'el']],
  // imperial
  [[8, 'lbs', 'leg of lamb'], [3629, 'g']],
  [[4, 'oz', 'cheese'], [113, 'g']],
  [[1.5, 'quarts', 'ice cream'], [1419, 'ml']],
  // cups depend on what is in them
  [[1, 'cup', 'flour'], [125, 'g']],
  [[1, 'cup', 'milk'], [240, 'ml']],
  [[0.3, 'c', 'orange juice'], [72, 'ml']],
  // the importer's mangled fractions: amount 3 + unit "/4 cup" is 3/4 cup
  [[3, '/4 cup', 'soy sauce'], [180, 'ml']],
  [[1, '/2 cup', 'water'], [120, 'ml']],
  [[1, '/2 teaspoon', 'ground ginger'], [0.5, 'kl']],
  [[1, '(12 oz.)', 'stir-fry vegetables'], [340, 'g']],
  // sticks are butter, unless they are not
  [[1, 'stick', 'butter'], [113, 'g']],
  [[2, 'stick', 'celery'], [2, 'st.']],
  // countables round up to whole things
  [[2, 'large', 'onion'], [2, 'st.']],
  [[2, 'large cloves', 'garlic'], [2, 'st.']],
  [[2.4, 'st.', 'onion'], [3, 'st.']],
  // vague quantities carry no number
  [[4, 'servings', 'salt'], [null, 'to taste']],
  [[1, 'to taste', 'pepper'], [null, 'to taste']],
  [[2, 'pinch', 'nutmeg'], [null, 'pinch']],
  // unknown units degrade to pieces rather than being invented
  [[2, 'dsh', 'pepper sauce'], [2, 'st.']]
];

unitCases.forEach(([[amount, unit, name], wanted]) => {
  const got = Ing.normalizeUnit(amount, unit, name);
  expect(`${amount} ${unit} ${name}`, [got.amount, got.unit], wanted);
});

// ---------------------------------------------------------------------------
section('Aisle assignment');
// ---------------------------------------------------------------------------
const aisleCases = [
  ['onion', 'Groenten & Fruit'],
  ['bell pepper', 'Groenten & Fruit'],
  ['eggplant', 'Groenten & Fruit'],          // not dairy, despite "egg"
  ['green beans', 'Groenten & Fruit'],
  ['stir-fry vegetables', 'Groenten & Fruit'],
  ['lemon juice', 'Groenten & Fruit'],
  ['mussels', 'Visafdeling'],
  ['grey north sea shrimps', 'Visafdeling'],
  ['canned tuna', 'Visafdeling'],
  ['beef chuck', 'Slagerij & Gevogelte'],
  ['bacon', 'Slagerij & Gevogelte'],
  ['butter', 'Zuivel & Eieren'],
  ['parmesan', 'Zuivel & Eieren'],
  ['almond milk', 'Zuivel & Eieren'],
  ['bread', 'Bakkerij'],
  ['puff pastry shells', 'Diepvries'],
  ['ice cream', 'Diepvries'],
  ['salt', 'Kruiden & Specerijen'],
  ['nutmeg', 'Kruiden & Specerijen'],         // not a nut aisle thing
  ['garlic powder', 'Kruiden & Specerijen'],
  ['olive oil', 'Kruidenier'],
  ['vegetable oil', 'Kruidenier'],            // not produce
  ['peanut butter', 'Kruidenier'],            // not dairy
  ['coconut milk', 'Kruidenier'],             // not dairy
  ['red wine vinegar', 'Kruidenier'],         // not a drink
  ['chicken stock', 'Kruidenier'],
  ['vegetable stock', 'Kruidenier'],
  ['baking powder', 'Kruidenier'],
  ['walnuts', 'Kruidenier'],
  ['dark abbey beer', 'Bieren & Dranken'],
  ['orange juice', 'Bieren & Dranken'],       // a drink, not produce
  ['water', 'Bieren & Dranken']
];

aisleCases.forEach(([name, wanted]) => expect(`${name} -> aisle`, Ing.aisleFor(name), wanted));

// ---------------------------------------------------------------------------
section('Canonical keys');
// ---------------------------------------------------------------------------
const keyCases = [
  ['garlic cloves', 'garlic'],
  ['minced garlic', 'garlic'],
  ['Onions', 'onion'],
  ['egg', 'eggs'],
  ['extra virgin olive oil', 'olive oil'],
  ['sea salt', 'salt'],
  ['kosher salt', 'salt'],
  ['granulated sugar', 'sugar'],
  ['all-purpose flour', 'flour'],
  ['Butter (Boter / Beurre)', 'butter'],
  ['optional: 2 rashers bacon', 'bacon'],
  ['half', 'cream'],
  ['almond meal', 'almond flour'],
  ['lump crab meat', 'crab meat'],
  // display names must map back, or re-normalising renames everything
  ['paprika powder', 'paprika'],
  ['spring onion', 'scallion'],
  ['chicken stock', 'chicken broth'],
  ['chopped tomatoes', 'tomato passata']
];

keyCases.forEach(([name, wanted]) => expect(`keyOf("${name}")`, Ing.keyOf(name), wanted));

// ---------------------------------------------------------------------------
section('Junk and compound rows');
// ---------------------------------------------------------------------------
expect('"reserved" is dropped', Ing.resolve({ name: 'reserved', amount: 8, unit: 'servings' }).length, 0);
expect('"servings" is dropped', Ing.resolve({ name: 'servings', amount: 4, unit: 'st.' }).length, 0);
expect('"salt and pepper" splits in two',
  Ing.resolve({ name: 'salt and pepper', amount: 2, unit: 'servings' }).map(i => i.key),
  ['salt', 'pepper']);
expect('"Lemon juice & Parsley" splits in two',
  Ing.resolve({ name: 'Lemon juice & Parsley', amount: 1, unit: 'to taste' }).map(i => i.key),
  ['lemon juice', 'parsley']);
expect('"Carrots & Leeks & Celery" splits in three',
  Ing.resolve({ name: 'Carrots & Leeks & Celery', amount: 1, unit: 'bundle' }).map(i => i.key),
  ['carrot', 'leek', 'celery']);

// ---------------------------------------------------------------------------
section('Pantry staples');
// ---------------------------------------------------------------------------
[['salt', true], ['pepper', true], ['olive oil', true], ['water', true],
 ['flour', true], ['baking powder', true], ['cinnamon', true],
 ['onion', false], ['chicken breasts', false], ['butter', false],
 ['mussels', false], ['bread', false]
].forEach(([name, wanted]) => {
  expect(`${name} staple?`, Ing.isStaple(name, Ing.aisleFor(name)), wanted);
});

// ---------------------------------------------------------------------------
section('Scaling');
// ---------------------------------------------------------------------------
expect('3 onions x2 = 6', Ing.scaleAmount(3, 'st.', 2), 6);
expect('3 onions x1.25 rounds up to 4', Ing.scaleAmount(3, 'st.', 1.25), 4);
expect('500 g x1.5 = 750', Ing.scaleAmount(500, 'g', 1.5), 750);
expect('to taste never scales', Ing.scaleAmount(null, 'to taste', 4), null);
expect('a pinch never scales', Ing.scaleAmount(2, 'pinch', 4), null);

// ---------------------------------------------------------------------------
section('Merging');
// ---------------------------------------------------------------------------
const merged = Ing.dedupe([
  { key: 'onion', unit: 'st.', amount: 2 },
  { key: 'onion', unit: 'st.', amount: 3 },
  { key: 'onion', unit: 'g', amount: 200 },
  { key: 'salt', unit: 'to taste', amount: null }
]);
expect('same key and unit are summed', merged.filter(i => i.unit === 'st.')[0].amount, 5);
expect('a different unit keeps its own row', merged.length, 3);

// ---------------------------------------------------------------------------
section('Diet flags');
// ---------------------------------------------------------------------------
const ing = (en) => ({ name: { en: en, nl: en, fr: en }, key: Ing.keyOf(en) });

const dietCases = [
  ['walnut cake is not nut-free', [ing('flour'), ing('walnuts')], 'isNutFree', false],
  ['almond milk is not nut-free', [ing('almond milk')], 'isNutFree', false],
  ['coconut milk is nut-free', [ing('coconut milk')], 'isNutFree', true],
  ['nutmeg is nut-free', [ing('nutmeg')], 'isNutFree', true],
  ['bread is not gluten-free', [ing('bread')], 'isGlutenFree', false],
  ['beer is not gluten-free', [ing('dark abbey beer')], 'isGlutenFree', false],
  ['rice is gluten-free', [ing('rice')], 'isGlutenFree', true],
  ['butter is not dairy-free', [ing('butter')], 'isDairyFree', false],
  ['oat cream is dairy-free', [ing('oat cream')], 'isDairyFree', true],
  ['soy milk is dairy-free', [ing('soy milk')], 'isDairyFree', true],
  ['eggplant is egg-free', [ing('eggplant')], 'isEggFree', true],
  ['eggs are not egg-free', [ing('eggs')], 'isEggFree', false],
  ['mayonnaise is not egg-free', [ing('mayonnaise')], 'isEggFree', false],
  ['beef is not vegetarian', [ing('beef chuck')], 'isVegetarian', false],
  ['mussels are not vegetarian', [ing('mussels')], 'isVegetarian', false],
  ['vegetables are vegetarian', [ing('carrot'), ing('leek')], 'isVegetarian', true],
  ['butter is not vegan', [ing('carrot'), ing('butter')], 'isVegan', false],
  ['honey is not vegan', [ing('carrot'), ing('honey')], 'isVegan', false],
  ['plain vegetables are vegan', [ing('carrot'), ing('leek')], 'isVegan', true],
  ['potatoes are not keto', [ing('potato')], 'isKeto', false],
  ['steak and butter are keto', [ing('beef chuck'), ing('butter')], 'isKeto', true]
];

dietCases.forEach(([label, ingredients, flag, wanted]) => {
  expect(label, Ing.deriveDietFlags(ingredients, {})[flag], wanted);
});

expect('a source flag can only tighten a claim',
  Ing.deriveDietFlags([ing('carrot')], { isVegetarian: false }).isVegetarian, false);

// ---------------------------------------------------------------------------
section('Import duplicate detection');
// ---------------------------------------------------------------------------
const RecipeDb = require('./recipe_db.js');
const book = RecipeDb.load();

const dupeCases = [
  ['same id', { id: 'carbonnade-flamande', title: 'Totally different name' }, 'carbonnade-flamande'],
  ['identical title', { id: 'fresh', title: 'Chinese Potstickers' }, 'spoonacular-638693'],
  ['title in another case', { id: 'fresh', title: 'COLCANNON' }, 'spoonacular-639900'],
  ['half of a bilingual title', { id: 'fresh', title: 'Gaufres de Liège' }, 'gaufre-liege'],
  ['same but unaccented', { id: 'fresh', title: 'gaufres de liege' }, 'gaufre-liege'],
  ['matched via translations', { id: 'fresh', translations: { en: { title: 'Colcannon' } } }, 'spoonacular-639900'],
  ['genuinely new dish', { id: 'fresh', title: 'Mattentaart van Geraardsbergen' }, null]
];

dupeCases.forEach(([label, candidate, wantedId]) => {
  const found = RecipeDb.findDuplicate(book, candidate);
  expect(label, found ? found.id : null, wantedId);
});

// Fragments under 4 characters are too generic to match a whole dish on.
expect('short fragments are not treated as titles', RecipeDb.titleVariants('Pie / X'), ['pie x']);
expect('long halves are kept', RecipeDb.titleVariants('Stoemp met Worst / Stoemp Saucisse'),
  ['stoemp met worst stoemp saucisse', 'stoemp met worst', 'stoemp saucisse']);

// ---------------------------------------------------------------------------
section('Measure parsing  "free text" -> [amount, unit]');
// ---------------------------------------------------------------------------
// Every shape below appeared in TheMealDB and used to land on the shopping
// list as "1 piece", because the importer read the leading digit and threw the
// rest away. A piece is a valid unit, so nothing ever complained.
const measureCases = [
  // plain
  ['200ml', [200, 'ml']],
  ['4 Tablespoons', [4, 'tablespoons']],
  ['2 Litres', [2, 'litres']],
  ['Dash', [null, 'dash']],
  ['', [null, '']],
  // fractions
  ['3/4 cup', [0.75, 'cup']],
  ['½ tsp', [0.5, 'tsp']],
  ['¼ teaspoon', [0.25, 'teaspoon']],
  // mixed numbers, in all the ways they get written
  ['1 1/2 cups', [1.5, 'cups']],
  ['1 ½ tbsp', [1.5, 'tbsp']],
  ['1½ tablespoon', [1.5, 'tablespoon']],
  ['2-1/2 cups', [2.5, 'cups']],
  ['1 and 1/8 cup', [1.125, 'cup']],
  // ranges resolve to the upper bound — better over than short at the shop
  ['2-3 tbsp', [3, 'tbsp']],
  ['1-2tbsp', [2, 'tbsp']],
  // both measuring systems at once, either order
  ['75g/3oz', [75, 'g']],
  ['6oz/180g', [180, 'g']],
  // counts of sized containers: the contents are what you buy
  ['1 (12 oz.)', [12, 'oz']],
  ['2 (14 oz) tins', [28, 'oz']],
  ['1 x 300ml', [300, 'ml']],
  ['3 x 100g', [300, 'g']],
  // a unit followed by words about the ingredient, not the measure
  ['2 tbs chopped', [2, 'tbs']],
  ['1 tablespoon chopped', [1, 'tablespoon']],
  ['2 tsp ground', [2, 'tsp']],
  ['14 oz jar', [14, 'oz']]
];

measureCases.forEach(([input, wanted]) => {
  const got = Measure.parseMeasure(input);
  expect(`parse ${JSON.stringify(input)}`, [got.amount, got.unit], wanted);
});

// End to end: the measure string all the way to a canonical shopping row.
const measuredCases = [
  ['1 1/2 cups', 'Flour', [188, 'g']],
  ['3/4 cup', 'soy sauce', [180, 'ml']],
  ['½ tsp', 'almond extract', [0.5, 'kl']],
  ['1 x 300ml', 'salsa', [300, 'ml']],
  ['2 Litres', 'beef stock', [2000, 'ml']]
];

measuredCases.forEach(([measure, name, wanted]) => {
  const rows = Measure.resolveMeasured(name, measure);
  expect(`${JSON.stringify(measure)} ${name}`,
    rows.length ? [rows[0].amount, rows[0].unit] : null, wanted);
});

// ---------------------------------------------------------------------------
console.log(`\n${failures === 0 ? `✅ ${count} dictionary checks passed` : `❌ ${failures} of ${count} failed`}\n`);
process.exit(failures === 0 ? 0 : 1);
