/**
 * Table-driven tests for the prose unit conversions.
 *
 * Every row here was taken from a real sentence in recipes.js. The awkward
 * ones are at the bottom: they are the cases that would have gone wrong
 * silently, and they are the reason this file exists.
 */
const U = require('./units.js');

let failed = 0;

function check(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) { console.log(`  ✅ ${label}`); return; }
  console.log(`  ❌ ${label}\n       expected ${e}\n       got      ${a}`);
  failed++;
}

console.log('\nOven and probe temperatures');
[
  // Dial settings, from the conventional table. These are the numbers this
  // book's own British recipes already print next to the Fahrenheit.
  [300, 150], [325, 160], [350, 180], [375, 190], [400, 200], [425, 220],
  [450, 230], [200, 95], [550, 290],
  // Between the marks, arithmetic: an oil bath and two probes. All three round
  // *up* off the exact value, which is the safe direction for a temperature
  // you are cooking a chicken to.
  [360, 180], [165, 75], [145, 65], [130, 55]
].forEach(([f, c]) => check(`${f} °F -> ${c} °C`, U.fahrenheitToCelsius(f), c));

console.log('\nA difference in degrees is not a temperature');
// "if it is simmering too hard, drop the oven by 10 or 15 degrees" — treating
// these as points on the scale gives -12 °C and -9 °C, which is nonsense.
check('a 10 °F step is 5 °C', U.fahrenheitStep(10), 5);
check('a 15 °F step is 10 °C', U.fahrenheitStep(15), 10);
check('a step never rounds away to nothing', U.fahrenheitStep(5), 5);

console.log('\nLength');
[
  [9, { amount: 23, unit: 'cm' }],
  [8, { amount: 20, unit: 'cm' }],
  [13, { amount: 33, unit: 'cm' }],
  [10, { amount: 25, unit: 'cm' }],
  [7, { amount: 18, unit: 'cm' }],
  [2, { amount: 5, unit: 'cm' }],
  [1, { amount: 2.5, unit: 'cm' }],
  [1.5, { amount: 4, unit: 'cm' }],
  [3.75, { amount: 9.5, unit: 'cm' }],
  [0.5, { amount: 1.5, unit: 'cm' }],
  [0.25, { amount: 6, unit: 'mm' }],
  [0.125, { amount: 3, unit: 'mm' }]
].forEach(([inch, out]) => check(`${inch} inch`, U.inchesToLength(inch), out));

console.log('\nVolume and weight go through the ingredient table');
[
  [0.5, 'cup', 'water', { amount: 120, unit: 'ml' }],
  [1, 'cup', 'water', { amount: 240, unit: 'ml' }],
  [0.25, 'cup', 'orange juice', { amount: 60, unit: 'ml' }],
  [4, 'cup', 'water', { amount: 960, unit: 'ml' }],
  // A cup of a dry thing is a weight, not a volume — the same call that
  // ingredients.js makes when it reads the ingredient line.
  [1, 'cup', 'flour', { amount: 125, unit: 'g' }],
  [2 / 3, 'cup', 'flour', { amount: 85, unit: 'g' }],
  [0.25, 'cup', 'granulated sugar', { amount: 30, unit: 'g' }],
  [1, 'lb', 'chicken', { amount: 450, unit: 'g' }],
  [0.5, 'pint', 'water', { amount: 240, unit: 'ml' }],
  [1, 'quart', 'whole milk', { amount: 950, unit: 'ml' }]
].forEach(([n, unit, name, out]) => check(`${n} ${unit} ${name}`, U.volume(n, unit, name), out));

console.log('\nA pot is sold by its round size');
// 6 quarts is 5.68 litres, but no shop sells a 5.68-litre pot.
check('6 qt pot', U.quartVessel(6), { amount: 6, unit: 'litre' });

console.log('\nFriendly numbers');
[[83, 85], [120, 120], [125, 125], [31, 30], [454, 450], [237, 240], [946, 950], [7, 5], [2, 0]]
  .forEach(([raw, out]) => check(`${raw} -> ${out}`, U.friendly(raw), out === 0 ? 2 : out));

console.log('\nMixed and vulgar fractions');
[
  ['1 1/2', 1.5], ['½', 0.5], ['2/3', 2 / 3], ['1½', 1.5], ['3', 3],
  ['1 1/4', 1.25], ['3.75', 3.75], ['¾', 0.75]
].forEach(([text, n]) => check(`"${text}"`, Math.round(U.parseAmount(text) * 1000) / 1000, Math.round(n * 1000) / 1000));

if (failed) {
  console.log(`\n❌ ${failed} unit check(s) failed`);
  process.exit(1);
}
console.log('\n✅ all unit conversions check out');
