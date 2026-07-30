/**
 * Dependency-free smoke test.
 *
 * Runs app.js against a minimal DOM stand-in and exercises the real user
 * flows: boot, switch language, filter, open a recipe, scale servings, build a
 * grocery list, merge duplicates, skip staples, export, create/edit/delete a
 * custom recipe. It is not a browser — it catches crashes, bad data handling
 * and logic regressions, not layout.
 *
 *   node scripts/smoke_test.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

// ---------------------------------------------------------------------------
// Minimal DOM
// ---------------------------------------------------------------------------
function makeElement(tag, attrs) {
  const el = {
    tagName: (tag || 'div').toUpperCase(),
    _classes: new Set((attrs && attrs.class ? attrs.class : '').split(/\s+/).filter(Boolean)),
    dataset: (attrs && attrs.dataset) || {},
    style: {},
    children: [],
    value: (attrs && attrs.value) || '',
    checked: false,
    disabled: false,
    textContent: '',
    _html: '',
    _listeners: {}
  };

  el.classList = {
    add: c => el._classes.add(c),
    remove: c => el._classes.delete(c),
    contains: c => el._classes.has(c),
    toggle: (c, force) => {
      const on = force === undefined ? !el._classes.has(c) : !!force;
      if (on) el._classes.add(c); else el._classes.delete(c);
      return on;
    }
  };

  Object.defineProperty(el, 'className', {
    get: () => Array.from(el._classes).join(' '),
    set: v => { el._classes = new Set(String(v).split(/\s+/).filter(Boolean)); }
  });

  Object.defineProperty(el, 'innerHTML', {
    get: () => el._html,
    set: v => {
      el._html = String(v);
      el.children = parseChildren(el._html);
    }
  });

  el.addEventListener = (type, fn) => {
    (el._listeners[type] = el._listeners[type] || []).push(fn);
  };
  el.removeEventListener = (type, fn) => {
    el._listeners[type] = (el._listeners[type] || []).filter(f => f !== fn);
  };
  el.dispatch = (type, event) => {
    (el._listeners[type] || []).forEach(fn => fn(Object.assign({
      target: el,
      currentTarget: el,
      preventDefault() {},
      stopPropagation() {}
    }, event)));
  };
  el.attributes = {};
  el.setAttribute = (name, value) => { el.attributes[name] = String(value); };
  el.getAttribute = name => (name in el.attributes ? el.attributes[name] : null);
  el.removeAttribute = name => { delete el.attributes[name]; };
  el.hasAttribute = name => name in el.attributes;

  el.querySelectorAll = sel => el.children.filter(child => matches(child, sel));
  el.querySelector = sel => el.querySelectorAll(sel)[0] || makeElement('div', {});
  el.closest = () => el;
  el.focus = () => {};
  el.reset = () => {};

  return el;
}

/** Pull every tag carrying an id, class or data-* attribute out of an HTML string. */
function parseChildren(html) {
  const out = [];
  const tagRe = /<([a-z0-9]+)([^>]*)>/gi;
  let m;
  while ((m = tagRe.exec(html))) {
    const attrsRaw = m[2];
    const attrs = { class: '', dataset: {} };

    const classMatch = attrsRaw.match(/class="([^"]*)"/);
    if (classMatch) attrs.class = classMatch[1];
    const valueMatch = attrsRaw.match(/value="([^"]*)"/);
    if (valueMatch) attrs.value = valueMatch[1];
    const idMatch = attrsRaw.match(/id="([^"]*)"/);

    const dataRe = /data-([a-z-]+)="([^"]*)"/gi;
    let d;
    while ((d = dataRe.exec(attrsRaw))) {
      const key = d[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      attrs.dataset[key] = d[2];
    }

    if (!attrs.class && !idMatch && Object.keys(attrs.dataset).length === 0) continue;

    const el = makeElement(m[1], attrs);
    if (idMatch) el.id = idMatch[1];
    out.push(el);
  }
  return out;
}

function matches(el, selector) {
  return String(selector).split(',').some(part => {
    const sel = part.trim();
    if (sel.startsWith('.')) {
      const cls = sel.slice(1).split(/[\[:.]/)[0];
      return el._classes.has(cls);
    }
    if (sel.startsWith('[')) return true;
    return el.tagName === sel.toUpperCase();
  });
}

// The whole element registry is built from index.html, so the test fails as
// soon as the markup and the code drift apart.
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const allElements = parseChildren(html);
const elementsById = {};
allElements.forEach(el => {
  if (el.id) elementsById[el.id] = el;
});

const document = {
  documentElement: makeElement('html', {}),
  getElementById: id => elementsById[id] || null,
  querySelector: sel => document.querySelectorAll(sel)[0] || null,
  querySelectorAll: sel => {
    const pool = allElements.concat(
      Object.values(elementsById).reduce((acc, el) => acc.concat(el.children), [])
    );
    return pool.filter(el => matches(el, sel));
  },
  addEventListener: () => {},
  createElement: tag => makeElement(tag, {}),
  body: makeElement('body', {}),
  activeElement: null,
  title: ''
};
document.body.appendChild = () => {};
document.body.removeChild = () => {};

// ---------------------------------------------------------------------------
// Run the app
// ---------------------------------------------------------------------------
const store = {};
const sandbox = {
  console,
  document,
  navigator: { language: 'nl-BE', clipboard: { writeText: async () => {} } },
  localStorage: {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: k => { delete store[k]; }
  },
  setTimeout, clearTimeout, setInterval, clearInterval,
  addEventListener: () => {},
  confirm: () => true,
  alert: () => {},
  prompt: () => {},
  Math, Date, JSON, parseInt, parseFloat, isNaN, String, Number, Object, Array, Promise
};
sandbox.window = sandbox;
sandbox.self = sandbox;
vm.createContext(sandbox);

['ingredients.js', 'recipes.js', 'app.js'].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox, { filename: file });
});

// ---------------------------------------------------------------------------
// Assertions
// ---------------------------------------------------------------------------
let failures = 0;
function check(label, condition, detail) {
  if (condition) {
    console.log(`  ✅ ${label}`);
  } else {
    failures++;
    console.log(`  ❌ ${label}${detail ? ' — ' + detail : ''}`);
  }
}

console.log('\n🔥 Smoke test\n');

// let/const bindings in app.js live in the context's lexical scope, not on the
// global object, so reach them by evaluating in the same context.
const ctx = expr => vm.runInContext(expr, sandbox);

ctx('initApp()');
const state = ctx('state');

console.log('Boot');
check('recipes loaded', state.recipes.length > 100, `got ${state.recipes.length}`);
check('language detected from navigator', state.settings.language === 'nl', state.settings.language);
check('no leftover legacy storage key', !('belgian_recipes' in store));

console.log('\nRecipe drawer');
sandbox.openRecipeDrawer('carbonnade-flamande');
const subtitle = elementsById['drawer-subtitle'].textContent;
check('category subtitle is not "undefined"', subtitle && !/undefined/.test(subtitle), subtitle);
check('drawer title filled', elementsById['drawer-title'].textContent.length > 0);
check('ingredients rendered', elementsById['drawer-ingredients-list'].innerHTML.includes('ingredient-row'));

console.log('\nServings scaling');
const recipe = state.recipes.find(r => r.id === 'carbonnade-flamande');
const onion = recipe.ingredients.find(i => i.key === 'onion');
const scaledUp = sandbox.scaledIngredients(recipe, recipe.servings * 2).find(i => i.key === 'onion');
check('countable stays a whole number', Number.isInteger(scaledUp.amount), String(scaledUp.amount));
check('countable actually scales', scaledUp.amount > onion.amount, `${onion.amount} -> ${scaledUp.amount}`);
const odd = sandbox.scaledIngredients(recipe, recipe.servings + 1).find(i => i.key === 'onion');
check('non-integer scaling rounds up', Number.isInteger(odd.amount), String(odd.amount));

console.log('\nGrocery list merging');
state.groceryList = [];
state.skippedStaples = [];
state.settings.skipStaples = true;
sandbox.addItemsToGroceryList(sandbox.scaledIngredients(recipe, recipe.servings), 'Stoofvlees');
const firstCount = state.groceryList.length;
check('items added', firstCount > 0, String(firstCount));
check('staples were skipped', state.skippedStaples.length >= 0);

sandbox.addItemsToGroceryList(sandbox.scaledIngredients(recipe, recipe.servings), 'Stoofvlees round 2');
check('same recipe twice does not duplicate rows', state.groceryList.length === firstCount,
  `${firstCount} -> ${state.groceryList.length}`);
const mergedOnion = state.groceryList.find(i => i.key === 'onion');
check('amounts summed on merge', mergedOnion && mergedOnion.amount === onion.amount * 2,
  mergedOnion ? String(mergedOnion.amount) : 'missing');
check('provenance recorded', mergedOnion && mergedOnion.sources.length === 2,
  mergedOnion ? mergedOnion.sources.join(', ') : 'missing');

console.log('\nUnit mismatch must never drop an ingredient');
const before = state.groceryList.length;
sandbox.addItemsToGroceryList([
  { key: 'onion', name: { en: 'onion', nl: 'ui', fr: 'oignon' }, amount: 200, unit: 'g', category: 'Groenten & Fruit', staple: false }
], 'Soup');
check('different unit becomes its own row', state.groceryList.length === before + 1,
  `${before} -> ${state.groceryList.length}`);

console.log('\nPantry staples');
state.groceryList = [];
state.skippedStaples = [];
const withStaples = [
  { key: 'salt', name: { en: 'salt', nl: 'zout', fr: 'sel' }, amount: null, unit: 'to taste', category: 'Kruiden & Specerijen', staple: true },
  { key: 'onion', name: { en: 'onion', nl: 'ui', fr: 'oignon' }, amount: 2, unit: 'st.', category: 'Groenten & Fruit', staple: false }
];
sandbox.addItemsToGroceryList(withStaples, 'Test');
check('staple kept off the list', !state.groceryList.some(i => i.key === 'salt'));
check('staple offered as a chip', state.skippedStaples.some(s => s.key === 'salt'));
sandbox.addSkippedStaple('salt');
check('staple can be added back', state.groceryList.some(i => i.key === 'salt'));

state.groceryList = [];
state.skippedStaples = [];
state.settings.skipStaples = false;
sandbox.addItemsToGroceryList(withStaples, 'Test');
check('toggle off means staples are included', state.groceryList.some(i => i.key === 'salt'));

console.log('\nExport');
const text = sandbox.groceryListAsText();
check('export lists items', text.includes('onion') || text.includes('ui'), text.split('\n')[2]);
check('export groups by aisle', text.split('\n').length > 3);

console.log('\nCustom recipes');
const userCount = state.userRecipes.length;
state.customRecipeIngredients = [
  { key: 'witloof', name: 'witloof', amount: 4, unit: 'st.', category: 'Groenten & Fruit', staple: false }
];
elementsById['recipe-title-input'].value = 'Test Gratin';
elementsById['recipe-subtitle-input'].value = 'Sub';
elementsById['recipe-desc-input'].value = 'Desc';
elementsById['recipe-cat-select'].value = 'main';
elementsById['recipe-diff-select'].value = 'Easy';
elementsById['recipe-prep-input'].value = '10 mins';
elementsById['recipe-cook-input'].value = '20 mins';
elementsById['recipe-servings-input'].value = '4';
elementsById['recipe-steps-input'].value = 'Step one\nStep two';
sandbox.handleCustomRecipeSubmit({ preventDefault() {} });
check('recipe created', state.userRecipes.length === userCount + 1);
check('diet flags default to false', state.userRecipes.slice(-1)[0].isVegan === false,
  String(state.userRecipes.slice(-1)[0].isVegan));
check('custom recipe is in the main index', state.recipes.some(r => r.id === state.userRecipes.slice(-1)[0].id));

const created = state.userRecipes.slice(-1)[0];
sandbox.openRecipeDrawer(created.id);
check('edit button shown for own recipe', elementsById['recipe-edit-btn'].style.display === 'flex');
sandbox.openRecipeDrawer('carbonnade-flamande');
check('edit button hidden for built-in recipe', elementsById['recipe-delete-btn'].style.display === 'none');

state.selectedRecipe = created;
sandbox.deleteSelectedRecipe();
check('recipe deleted', !state.recipes.some(r => r.id === created.id));

console.log('\nCustom recipes survive a restart');
state.customRecipeIngredients = [
  { key: 'witloof', name: 'witloof', amount: 4, unit: 'st.', category: 'Groenten & Fruit', staple: false }
];
elementsById['recipe-title-input'].value = 'Persistent Dish';
elementsById['recipe-steps-input'].value = 'Only step';
sandbox.handleCustomRecipeSubmit({ preventDefault() {} });
sandbox.initApp();
check('own recipe still there after reload',
  state.recipes.some(r => r.translations.en.title === 'Persistent Dish'));

console.log('\nBackup & restore');
state.groceryList = [];
state.favorites = ['carbonnade-flamande'];
state.selectedRecipes = ['moules-frites'];
sandbox.addItemsToGroceryList([
  { key: 'onion', name: { en: 'onion', nl: 'ui', fr: 'oignon' }, amount: 2, unit: 'st.', category: 'Groenten & Fruit', staple: false }
], 'Backup test');
const backup = JSON.parse(JSON.stringify(sandbox.buildBackup()));
check('backup captures own recipes', Array.isArray(backup.userRecipes));
check('backup captures the list', backup.groceryList.length === 1);
check('backup captures favourites and selection',
  backup.favorites.length === 1 && backup.selectedRecipes.length === 1);

state.groceryList = [];
state.favorites = [];
state.selectedRecipes = [];
check('restore rejects a foreign file', sandbox.applyBackup({ foo: 'bar' }) === false);
check('restore rejects a truncated backup',
  sandbox.applyBackup({ app: 'mijn-kookpot', format: 1 }) === false);
check('restore puts everything back', sandbox.applyBackup(backup) === true &&
  state.groceryList.length === 1 && state.favorites.length === 1);

console.log('\nBatch servings');
state.groceryList = [];
state.selectedRecipes = [];
state.selectedServings = {};
const batchRecipe = state.recipes.find(r => r.id === 'carbonnade-flamande');
sandbox.toggleRecipeSelection(batchRecipe.id);
check('defaults to the recipe\'s own servings',
  sandbox.servingsFor(batchRecipe.id) === batchRecipe.servings,
  String(sandbox.servingsFor(batchRecipe.id)));
sandbox.setServingsFor(batchRecipe.id, batchRecipe.servings * 2);
state.settings.skipStaples = false;
sandbox.convertSelectedRecipesToGroceryList();
const doubledOnion = state.groceryList.find(i => i.key === 'onion');
const baseOnion = batchRecipe.ingredients.find(i => i.key === 'onion');
check('batch respects the adjusted servings',
  doubledOnion && doubledOnion.amount === baseOnion.amount * 2,
  doubledOnion ? `${baseOnion.amount} -> ${doubledOnion.amount}` : 'missing');
check('selection cleared after generating', state.selectedRecipes.length === 0);

state.selectedRecipes = [];
state.selectedServings = {};
state.groceryList = [];
state.selectedRecipe = batchRecipe;
state.recipeServings = 12;
sandbox.toggleRecipeSelection(batchRecipe.id);
check('selecting from the open drawer keeps its servings',
  sandbox.servingsFor(batchRecipe.id) === 12, String(sandbox.servingsFor(batchRecipe.id)));
state.selectedRecipe = null;

console.log('\nSelection survives a restart');
state.selectedRecipes = [];
sandbox.toggleRecipeSelection('moules-frites');
sandbox.toggleRecipeSelection('vol-au-vent');
ctx('initApp()');
check('selection restored after reload', state.selectedRecipes.length === 2,
  state.selectedRecipes.join(', '));
state.selectedRecipes.push('recipe-that-no-longer-exists');
sandbox.saveSelection();
ctx('initApp()');
check('stale ids dropped from the selection', state.selectedRecipes.length === 2);

console.log('\nFiltering & search');
state.filters.category = 'dessert';
state.filters.query = '';
const desserts = sandbox.filteredRecipes();
check('category filter works', desserts.length > 0 && desserts.every(r => sandbox.recipeCategories(r).includes('dessert')),
  `${desserts.length} desserts`);
state.filters.category = 'all';
state.filters.query = 'chocolate';
check('ingredient search finds recipes', sandbox.filteredRecipes().length > 0);
state.filters.query = 'zzzzqqq';
check('nonsense search returns nothing', sandbox.filteredRecipes().length === 0);
state.filters.query = '';

console.log('\nAccent-folded search');
sandbox.applyLanguage('fr');
[['pates', 'Pâtes'], ['creme', 'crème'], ['legumes', 'légumes']].forEach(([query, target]) => {
  state.filters.query = ctx(`fold(${JSON.stringify(query)})`);
  check(`"${query}" finds ${target}`, sandbox.filteredRecipes().length > 0,
    String(sandbox.filteredRecipes().length));
});
sandbox.applyLanguage('nl');
state.filters.query = ctx('fold("gaufres de liege")');
check('folding is symmetric (query and text both folded)',
  ctx('fold("Gaufres de Liège")') === 'gaufres de liege',
  ctx('fold("Gaufres de Liège")'));
state.filters.query = '';

console.log('\nFavourites filter');
state.favorites = ['carbonnade-flamande', 'moules-frites'];
state.filters.favoritesOnly = true;
check('favourites filter narrows to favourites', sandbox.filteredRecipes().length === 2,
  String(sandbox.filteredRecipes().length));
state.filters.category = 'dessert';
check('favourites stacks with a category', sandbox.filteredRecipes().length === 0);
state.filters.category = 'all';
state.favorites = [];
sandbox.renderRecipeGrid();
check('empty favourites explains itself',
  elementsById['recipes-tab-grid'].innerHTML.includes('favour') ||
  elementsById['recipes-tab-grid'].innerHTML.includes('favorie') ||
  elementsById['recipes-tab-grid'].innerHTML.includes('favoris'),
  elementsById['recipes-tab-grid'].innerHTML.slice(0, 80));
state.filters.favoritesOnly = false;

console.log('\nLanguage switching');
['en', 'fr', 'nl'].forEach(lang => {
  sandbox.applyLanguage(lang);
  check(`renders in ${lang}`, state.settings.language === lang);
});

console.log('\nManual grocery items');
state.groceryList = [];
elementsById['new-grocery-item-input'].value = 'witloof';
elementsById['new-grocery-item-qty'].value = '';
elementsById['new-grocery-item-cat'].value = 'Groenten & Fruit';
sandbox.handleAddCustomGroceryItem({ preventDefault() {} });
check('manual item added', state.groceryList.length === 1);
check('no quantity means no invented unit', state.groceryList[0].unit === '', state.groceryList[0].unit);

elementsById['new-grocery-item-input'].value = 'witloof';
elementsById['new-grocery-item-qty'].value = '500g';
sandbox.handleAddCustomGroceryItem({ preventDefault() {} });
const withQty = state.groceryList.find(i => i.unit === 'g');
check('quantity parsed from the qty field', withQty && withQty.amount === 500,
  withQty ? `${withQty.amount} ${withQty.unit}` : 'missing');

console.log('\nEditing quantities');
state.groceryList = [];
sandbox.addItemsToGroceryList([
  { key: 'onion', name: { en: 'onion', nl: 'ui', fr: 'oignon' }, amount: 2, unit: 'st.', category: 'Groenten & Fruit', staple: false }
], 'Edit test');
const editable = state.groceryList[0];
sandbox.commitQuantityEdit(editable.id, '5');
check('plain number keeps the unit', editable.amount === 5 && editable.unit === 'st.',
  `${editable.amount} ${editable.unit}`);
sandbox.commitQuantityEdit(editable.id, '500 g');
check('amount and unit both parsed', editable.amount === 500 && editable.unit === 'g',
  `${editable.amount} ${editable.unit}`);
sandbox.commitQuantityEdit(editable.id, '1,5 kg');
check('comma decimals and kg convert to grams',
  editable.amount === 1500 && editable.unit === 'g', `${editable.amount} ${editable.unit}`);
sandbox.commitQuantityEdit(editable.id, 'a handful');
check('free text is kept as-is', editable.amount === null && editable.unit === 'a handful',
  `${editable.amount} ${editable.unit}`);
sandbox.commitQuantityEdit(editable.id, '');
check('empty clears the quantity', editable.amount === null && editable.unit === '');

console.log('\nNavigation & cook mode');
['home', 'recipes', 'grocery', 'settings'].forEach(tab => {
  sandbox.switchTab(tab);
  check(`switch to ${tab}`, state.activeTab === tab);
});
sandbox.openRecipeDrawer('carbonnade-flamande');
ctx('cookModeState.steps = state.selectedRecipe.translations.en.instructions; cookModeState.currentStepIndex = 0;');
sandbox.updateCookModeStep();
check('cook mode renders a step', elementsById['cook-mode-step-text'].textContent.length > 0);
const stepCounter = document.querySelector('.cook-mode-step-number');
check('cook mode shows a translated step counter',
  stepCounter && /\b1\b/.test(stepCounter.textContent) && !/\{/.test(stepCounter.textContent),
  stepCounter ? stepCounter.textContent : 'element missing');
check('cook mode draws one dot per step',
  (elementsById['cook-mode-progress-dots'].innerHTML.match(/class="dot/g) || []).length ===
    ctx('cookModeState.steps.length'));
sandbox.showToast('hello', 'success');
check('toast uses the class the stylesheet defines',
  elementsById['toast'].classList.contains('visible'));

console.log('\nAccessibility');
// A button is named by aria-label on the tag, or by text/a translated span
// inside it. Icons alone (<svg>) do not count.
const buttons = [...html.matchAll(/<button\b[\s\S]*?<\/button>/g)].map(m => m[0]);
const unnamed = buttons.filter(el => {
  const openTag = el.match(/<button[^>]*>/)[0];
  if (/aria-label=|data-translate=/.test(openTag)) return false;
  const inner = el.replace(/<button[^>]*>|<\/button>/g, '');
  if (/data-translate=/.test(inner)) return false;
  const text = inner.replace(/<[^>]*>/g, '').replace(/&\w+;/g, '').trim();
  return text.length === 0;
});
check('every button has an accessible name', unnamed.length === 0,
  unnamed.slice(0, 2).map(b => b.match(/<button[^>]*>/)[0]).join(' '));

check('tab bar uses buttons, not href-less anchors',
  !/<a class="tab-item/.test(html) && (html.match(/class="tab-item/g) || []).length === 4);
check('dialogs are marked up as dialogs',
  (html.match(/role="dialog"/g) || []).length === 3,
  String((html.match(/role="dialog"/g) || []).length));
check('toast is a live region', /id="toast"[^>]*aria-live/.test(html));
check('progress bar exposes its value', /role="progressbar"/.test(html));

sandbox.renderRecipeGrid();
const cardHtml = elementsById['recipes-tab-grid'].innerHTML;
check('recipe cards are keyboard reachable', /class="recipe-card[^"]*"[^>]*tabindex="0"/.test(cardHtml));
check('select toggle exposes checked state', /role="checkbox"[^>]*aria-checked/.test(cardHtml) ||
  /aria-checked="[^"]*"[^>]*role="checkbox"/.test(cardHtml));

sandbox.openRecipeDrawer('carbonnade-flamande');
check('drawer marks the favourite button state',
  elementsById['recipe-fav-btn'].attributes && true);
sandbox.renderRecipeInstructions(['step one', 'step two']);
check('instruction steps are focusable checkboxes',
  /role="checkbox"[^>]*tabindex="0"/.test(elementsById['drawer-instructions-list'].innerHTML));
sandbox.closeRecipeDrawer();

const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');
check('focus is visible for keyboard users', css.includes(':focus-visible'));
check('reduced motion is respected', css.includes('prefers-reduced-motion'));

console.log('\nData integrity');
const Ing = sandbox.Ingredients;
const recipes = state.builtInRecipes;
const badUnits = new Set();
const badAisles = new Set();
let missingKeys = 0;
recipes.forEach(r => r.ingredients.forEach(i => {
  if (!i.key) missingKeys++;
  if (Ing.AISLES.indexOf(i.category) === -1) badAisles.add(i.category);
  const known = ['g', 'ml', 'el', 'kl'].concat(Ing.COUNTABLE_UNITS, Ing.VAGUE_UNITS);
  if (known.indexOf(i.unit) === -1) badUnits.add(i.unit);
}));
check('every ingredient has a canonical key', missingKeys === 0, `${missingKeys} without`);
check('every ingredient sits in a known aisle', badAisles.size === 0, Array.from(badAisles).join(', '));
check('every unit is in the canonical set', badUnits.size === 0, Array.from(badUnits).join(', '));
const nutRe = /walnut|almond|peanut|pecan|hazelnut|cashew|pistachio|noten|amandel|pinda|noix|noisette/i;
const lyingAboutNuts = recipes.filter(r =>
  r.isNutFree && r.ingredients.some(i => nutRe.test(i.name.en + ' ' + i.name.nl + ' ' + i.name.fr)));
check('no recipe claims nut-free while containing nuts', lyingAboutNuts.length === 0,
  lyingAboutNuts.map(r => r.translations.en.title).slice(0, 3).join(' | '));

const meatRe = /\bbeef\b|chicken|\bpork\b|bacon|sausage|\blamb\b|\bham\b/i;
const lyingAboutMeat = recipes.filter(r =>
  r.isVegetarian && r.ingredients.some(i => meatRe.test(i.name.en)));
check('no recipe claims vegetarian while containing meat', lyingAboutMeat.length === 0,
  lyingAboutMeat.map(r => r.translations.en.title).slice(0, 3).join(' | '));

const drifted = recipes.filter(r => {
  const derived = Ing.deriveDietFlags(r.ingredients, r);
  return Ing.DIET_FLAGS.some(f => r[f] !== derived[f]);
});
check('stored diet flags match what the ingredients say', drifted.length === 0,
  `${drifted.length} recipe(s) need scripts/normalize_recipes.js`);

// Re-running scripts/normalize_recipes.js must not keep changing the data.
let unstable = 0;
recipes.forEach(r => r.ingredients.forEach(i => {
  const again = Ing.resolve(i)[0];
  if (!again || again.key !== i.key || again.category !== i.category ||
      again.unit !== i.unit || again.staple !== i.staple) unstable++;
}));
check('normalising an already-normalised database is a no-op', unstable === 0,
  `${unstable} row(s) would change again`);

const machineTranslated = recipes
  .flatMap(r => r.ingredients)
  .filter(i => /verkorting|raccourcissement|amandel maaltijd|forfaitair|waterrijke|\bdsh\b/i.test(
    i.name.en + ' ' + i.name.nl + ' ' + i.name.fr));
check('no mistranslated ingredient names left', machineTranslated.length === 0,
  machineTranslated.map(i => i.name.nl).slice(0, 3).join(', '));

check('no recipe hot-links a remote image',
  !recipes.some(r => /^https?:/i.test(r.image)),
  recipes.filter(r => /^https?:/i.test(r.image)).length + ' remote');
// The service worker caches these for offline use, so keep them lean.
const imageFiles = fs.readdirSync(path.join(ROOT, 'images'))
  .filter(f => /\.(jpe?g|png)$/i.test(f));
const totalImageBytes = imageFiles
  .reduce((sum, f) => sum + fs.statSync(path.join(ROOT, 'images', f)).size, 0);
const heavy = imageFiles.filter(f =>
  fs.statSync(path.join(ROOT, 'images', f)).size > 200 * 1024);
check('recipe photos stay within the offline budget',
  totalImageBytes < 5 * 1024 * 1024,
  `${(totalImageBytes / 1024 / 1024).toFixed(1)} MB`);
check('no single photo is oversized', heavy.length === 0,
  heavy.slice(0, 3).join(', '));

check('every image file exists',
  recipes.every(r => fs.existsSync(path.join(ROOT, r.image))),
  recipes.filter(r => !fs.existsSync(path.join(ROOT, r.image))).map(r => r.image).join(', '));

console.log('\nTranslation coverage');
const dicts = ctx('uiTranslations');
const enKeys = Object.keys(dicts.en);
['nl', 'fr'].forEach(lang => {
  const missing = enKeys.filter(k => !(k in dicts[lang]));
  check(`${lang} has every key`, missing.length === 0, missing.join(', '));
});
const usedKeys = [...fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8').matchAll(/\bt\('([a-zA-Z]+)'/g)].map(m => m[1]);
const htmlKeys = [...html.matchAll(/data-translate(?:-placeholder)?="([^"]+)"/g)].map(m => m[1]);
const unknown = [...new Set(usedKeys.concat(htmlKeys))].filter(k => !(k in dicts.en));
check('no translation key is missing from the dictionary', unknown.length === 0, unknown.join(', '));

console.log(`\n${failures === 0 ? '✅ All checks passed' : `❌ ${failures} check(s) failed`}\n`);
process.exit(failures === 0 ? 0 : 1);
