/**
 * Imperial -> metric for recipe *prose*.
 *
 * The ingredient lists were converted at import time by ingredients.js. The
 * instruction text was not, so a recipe could tell you to heat the oven to 350
 * degrees while its own ingredient list was in grams. This module is the other
 * half of that job.
 *
 * Volumes and weights are handed straight to ingredients.normalizeUnit, so a
 * cup of flour in a sentence and a cup of flour in the ingredient list can
 * never disagree — there is one conversion table, not two. Only temperature
 * and length are defined here, because neither ever appears in an ingredient
 * line and ingredients.js has no opinion about them.
 */
const Ingredients = require('../ingredients.js');

/**
 * Cookbook numbers, not laboratory ones. A reader who is told 83 g of flour
 * hears a machine talking; 85 g is the same flour and sounds like a person.
 * Under 200 we round to the nearest 5, above it to the nearest 10 — which is
 * how a printed conversion table reads, and it keeps 125 g at 125 g.
 */
function friendly(amount) {
  if (amount === null || amount === undefined) return null;
  const step = amount >= 200 ? 10 : 5;
  const rounded = Math.round(amount / step) * step;
  return rounded === 0 ? Math.round(amount * 10) / 10 : rounded;
}

/**
 * The conventional oven table, not the arithmetic.
 *
 * 350 °F is 176.7 °C, but no European oven has a 175 mark on it and no
 * European cookbook prints one: the answer is 180. This is not sloppiness,
 * it is the table every translated cookbook uses, and — decisively — it is
 * what this book already says about itself. The BBC recipes that came in with
 * both scales spell out 180C/350F twelve times and 200C/400F twenty-one times.
 * Converting by calculator would have made a British recipe and an American
 * one disagree about the same oven.
 */
const OVEN_F_TO_C = {
  200: 95, 225: 110, 250: 120, 275: 140, 300: 150, 325: 160, 350: 180,
  375: 190, 400: 200, 425: 220, 450: 230, 475: 240, 500: 250, 525: 270, 550: 290
};

/**
 * An oven dial, an oil bath or a meat probe. Dial settings come off the table
 * above; anything between the marks — a 360 °F oil bath, a 165 °F probe — is
 * arithmetic to the nearest 5 °C.
 */
function fahrenheitToCelsius(f) {
  if (Object.prototype.hasOwnProperty.call(OVEN_F_TO_C, f)) return OVEN_F_TO_C[f];
  return Math.round(((f - 32) * 5 / 9) / 5) * 5;
}

/**
 * A *difference* in degrees, not a point on the scale — "drop the oven by 15
 * degrees". Subtracting 32 here would turn a small nudge into a deep freeze.
 */
function fahrenheitStep(f) {
  return Math.max(5, Math.round((f * 5 / 9) / 5) * 5);
}

/**
 * Tin sizes, dough thickness and dice. Below a centimetre people say
 * millimetres, and a half-centimetre is as fine as any tin is ever quoted.
 */
function inchesToLength(inches) {
  const cm = inches * 2.54;
  if (cm < 1) return { amount: Math.round(cm * 10), unit: 'mm' };
  if (cm <= 10) return { amount: Math.round(cm * 2) / 2, unit: 'cm' };
  return { amount: Math.round(cm), unit: 'cm' };
}

/**
 * Cups, ounces, pounds, pints and quarts, via the shared table.
 * `name` matters: ingredients.js reads a cup of water as 240 ml and a cup of
 * flour as 125 g, and prose has to make the same distinction.
 */
function volume(amount, unit, name) {
  const out = Ingredients.normalizeUnit(amount, unit, name || '');
  if (!out || out.amount === null) return null;
  return { amount: friendly(out.amount), unit: out.unit };
}

/**
 * A 6-quart pot is a 6-litre pot. Vessels are sold in round sizes and nobody
 * calls it a 5.7-litre pot, so the number is kept and only the word changes.
 * An actual quart *of milk* is a measurement and goes through the table.
 */
function quartVessel(n) {
  return { amount: n, unit: 'litre' };
}

/** "3 1/2", "½", "2/3", "1½" -> a number. */
const VULGAR = { '½': 0.5, '⅓': 1 / 3, '⅔': 2 / 3, '¼': 0.25, '¾': 0.75, '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875 };

function parseAmount(text) {
  const raw = String(text).trim();
  let total = 0;
  let seen = false;
  // French writes 3,75 where English writes 3.75.
  const re = /(\d+)\s*\/\s*(\d+)|(\d+(?:[.,]\d+)?)|([½⅓⅔¼¾⅛⅜⅝⅞])/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    if (m[1]) total += Number(m[1]) / Number(m[2]);
    else if (m[3]) total += Number(m[3].replace(',', '.'));
    else total += VULGAR[m[4]];
    seen = true;
  }
  return seen ? total : null;
}

/** Trim a float for printing: 2.5 stays 2.5, 23.0 becomes 23. */
function num(n) {
  return String(Math.round(n * 100) / 100);
}

module.exports = {
  friendly,
  fahrenheitToCelsius,
  fahrenheitStep,
  inchesToLength,
  volume,
  quartVessel,
  parseAmount,
  num
};
