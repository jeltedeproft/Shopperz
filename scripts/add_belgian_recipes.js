/**
 * Add the hand-written Belgian classics to the database.
 * See add_recipes.js for what happens to each one.
 *
 *   node scripts/add_belgian_recipes.js [--dry] [--replace]
 */
const { addRecipes } = require('./add_recipes.js');

// Batches are separate files purely to keep each one readable.
const recipes = [
  ...require('./belgian_recipes.js'),
  ...require('./belgian_recipes_2.js')
];

addRecipes(recipes, { label: 'Belgian classics', fallbackImage: 'images/witloof_gratin.jpg' });
