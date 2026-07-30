/**
 * Shared access to recipes.js for the import scripts.
 *
 * Each importer used to read, parse and write the database its own way, and
 * only two of the three checked for duplicates — and only by id, so the same
 * dish arriving from a different source landed twice.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DB_PATH = path.join(__dirname, '..', 'recipes.js');

const HEADER = '// Trilingual recipe database (English, Dutch, French)\n' +
  '// Ingredients are canonicalised by ingredients.js: keys, metric units,\n' +
  '// supermarket aisles and pantry-staple flags. Diet flags are derived from\n' +
  '// the ingredient list — do not hand-edit them, run scripts/normalize_recipes.js.\n';

function load() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(DB_PATH, 'utf8'), sandbox);
  const recipes = sandbox.initialRecipes || sandbox.window.initialRecipes;
  if (!Array.isArray(recipes)) {
    throw new Error('Unable to parse initialRecipes from recipes.js');
  }
  return recipes;
}

function save(recipes) {
  fs.writeFileSync(DB_PATH, HEADER + 'window.initialRecipes = ' + JSON.stringify(recipes, null, 2) + ';\n', 'utf8');
  return recipes.length;
}

/** Titles differing only by case, accents or punctuation are the same dish. */
function normaliseTitle(title) {
  return String(title || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Every form a title might be recognised by: the whole thing, plus each half
 * of the bilingual names this book uses ("Luikse Wafels / Gaufres de Liège"),
 * so the same dish arriving under one of its names is still spotted.
 */
function titleVariants(title) {
  const whole = normaliseTitle(title);
  if (!whole) return [];
  const parts = String(title).split('/')
    .map(normaliseTitle)
    .filter(part => part.length >= 4);
  return [...new Set([whole, ...parts])];
}

function titlesOf(recipe) {
  const titles = [];
  if (recipe.title) titles.push(recipe.title);
  if (recipe.translations) {
    ['en', 'nl', 'fr'].forEach(lang => {
      const t = recipe.translations[lang] && recipe.translations[lang].title;
      if (t) titles.push(t);
    });
  }
  return titles;
}

/**
 * Returns the existing recipe this candidate would duplicate, or null.
 * Matches on id first, then on the title in any of the three languages.
 */
function findDuplicate(recipes, candidate) {
  if (!candidate) return null;

  if (candidate.id) {
    const byId = recipes.find(r => r.id === candidate.id);
    if (byId) return byId;
  }

  const wanted = new Set(titlesOf(candidate).flatMap(titleVariants));
  if (wanted.size === 0) return null;

  return recipes.find(r =>
    titlesOf(r).flatMap(titleVariants).some(variant => wanted.has(variant))
  ) || null;
}

module.exports = { DB_PATH, load, save, normaliseTitle, titleVariants, findDuplicate };
