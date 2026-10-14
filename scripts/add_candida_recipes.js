/**
 * Add the candida-diet dishes, after the recipes on thecandidadiet.com.
 * See candida_recipes.js for what was taken from there and what was not, and
 * add_recipes.js for what happens to each one.
 *
 *   node scripts/add_candida_recipes.js [--dry] [--replace]
 */
const fs = require('fs');
const path = require('path');
const { addRecipes } = require('./add_recipes.js');

const SOURCE = 'https://www.thecandidadiet.com/recipe/';

// Every candida_recipes*.js batch in this folder, in order.
const recipes = fs.readdirSync(__dirname)
  .filter(name => /^candida_recipes(_\d+)?\.js$/.test(name))
  .sort((a, b) => (parseInt(a.split('_')[2], 10) || 1) - (parseInt(b.split('_')[2], 10) || 1))
  .flatMap(name => require(path.join(__dirname, name)))
  .map(raw => ({ ...raw, id: `candida-${raw.slug}`, sourceUrl: `${SOURCE}${raw.slug}/` }));

addRecipes(recipes, { label: 'candida dishes' });
