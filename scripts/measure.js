/**
 * Turn a recipe's free-text measure into { amount, unit } that ingredients.js
 * can normalise.
 *
 * The importers used to do this with one regex:
 *
 *     measure.match(/^(\d+(?:\.\d+)?)\s*(.*)$/)
 *
 * which reads "1 1/2 cups" as amount 1 and unit "1/2 cups", and "½ tsp" as no
 * number at all. Both then fell through to "1 piece". Across TheMealDB that is
 * roughly 600 ingredient rows landing on the shopping list as "1 st." — and it
 * is silent, because a piece is a perfectly valid unit.
 *
 * The shapes that actually turn up in the wild:
 *
 *     1 1/2 cups      mixed number
 *     ½ tsp / 1½ tbsp unicode fraction, sometimes glued to the whole number
 *     2-3 tbsp        a range
 *     2-1/2 cups      a mixed number written with a hyphen, NOT a range
 *     75g/3oz         metric and imperial together
 *     2 tbs chopped   unit followed by a preparation word
 *     14 oz jar       unit followed by a container word
 *     Dash            no number at all
 *
 * Ranges resolve to their upper bound. This is a shopping list: coming home
 * with too little is the failure that matters, and it matches how the app
 * already rounds countable things up rather than down.
 */
const Ingredients = require('../ingredients.js');

const VULGAR = {
  '½': 0.5, '⅓': 1 / 3, '⅔': 2 / 3, '¼': 0.25, '¾': 0.75,
  '⅕': 0.2, '⅖': 0.4, '⅗': 0.6, '⅘': 0.8,
  '⅙': 1 / 6, '⅚': 5 / 6, '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875
};

/** Words that follow a unit but describe the ingredient, not the measure. */
const TRAILING_NOISE = new RegExp(
  '^(?:' + [
    'chopped', 'minced', 'ground', 'grated', 'sliced', 'diced', 'crushed',
    'shredded', 'melted', 'softened', 'beaten', 'peeled', 'cubed', 'julienned',
    'fresh', 'freshly', 'finely', 'roughly', 'coarsely', 'thinly', 'lightly',
    'cold', 'warm', 'hot', 'room', 'temperature', 'plus', 'extra', 'more',
    'of', 'for', 'to', 'the', 'a', 'about', 'approx', 'approximately',
    'jar', 'jars', 'tub', 'tubs', 'carton', 'cartons', 'bag', 'bags',
    'sachet', 'sachets', 'block', 'blocks', 'punnet', 'punnets'
  ].join('|') + ')$', 'i'
);

/** Every unit word ingredients.js recognises, longest phrases first. */
const KNOWN_UNITS = (() => {
  const words = new Set();
  Object.keys(Ingredients.UNIT_ALIASES || {}).forEach(u => words.add(u));
  Object.keys(Ingredients.UNIT_CONVERSIONS || {}).forEach(u => words.add(u));
  (Ingredients.COUNTABLE_UNITS || []).forEach(u => words.add(u));
  (Ingredients.VAGUE_UNITS || []).forEach(u => words.add(u));
  ['g', 'ml', 'kg', 'el', 'kl', 'cup', 'cups'].forEach(u => words.add(u));
  return [...words].sort((a, b) => b.split(' ').length - a.split(' ').length || b.length - a.length);
})();

/** Expand "1½" to "1 ½" so the number and the fraction can be read apart. */
function spaceOutFractions(text) {
  return text.replace(/(\d)([½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])/g, '$1 $2');
}

/**
 * Read the leading quantity. Returns { amount, rest } with amount null when
 * the measure opens with a word ("Dash", "Handful", "To serve").
 */
function readAmount(text) {
  let s = spaceOutFractions(text).trim();

  // "75g/3oz" and "6oz/180g" — the same amount twice, once per system.
  // Keep whichever side is metric, in either order.
  const dual = s.match(/^([\d.]+)\s*([a-z]+)\s*\/\s*([\d.]+)\s*([a-z]+)\.?\s*(.*)$/i);
  if (dual) {
    const metric = /^(g|ml|kg|l|cl|dl)$/i;
    if (metric.test(dual[2]) && !metric.test(dual[4])) {
      return { amount: parseFloat(dual[1]), rest: dual[2] + ' ' + (dual[5] || '') };
    }
    if (metric.test(dual[4]) && !metric.test(dual[2])) {
      return { amount: parseFloat(dual[3]), rest: dual[4] + ' ' + (dual[5] || '') };
    }
  }

  const NUM = '(?:\\d+(?:\\.\\d+)?|[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])';
  const value = tok => (tok in VULGAR ? VULGAR[tok] : parseFloat(tok));

  // "3 x 100g" — a count of a measured pack. The contents are what you buy.
  const times = s.match(/^(\d+(?:\.\d+)?)\s*[x×]\s*(.+)$/i);
  if (times) {
    const inner = parseMeasure(times[2]);
    if (inner.amount !== null && inner.unit) {
      return { amount: inner.amount * parseFloat(times[1]), rest: inner.unit };
    }
  }

  // "1 1/2", "2-1/2", "1 and 1/8" and "1 ½" are all mixed numbers.
  const mixed = s.match(new RegExp(`^(\\d+)\\s*(?:-|\\s+and\\s+|\\s)\\s*(?:(\\d+)\\s*/\\s*(\\d+)|([½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]))\\s*(.*)$`));
  if (mixed) {
    const frac = mixed[4] ? VULGAR[mixed[4]] : parseFloat(mixed[2]) / parseFloat(mixed[3]);
    // Only a mixed number if the fraction really is one; "2-3" is a range.
    if (frac < 1) return { amount: parseFloat(mixed[1]) + frac, rest: mixed[5] };
  }

  // "2-3 tbsp", "1-2tbsp" — take the upper bound.
  const range = s.match(new RegExp(`^(${NUM})\\s*[-–—]\\s*(${NUM})\\s*(.*)$`));
  if (range) return { amount: Math.max(value(range[1]), value(range[2])), rest: range[3] };

  // "3/4 cup"
  const frac = s.match(/^(\d+)\s*\/\s*(\d+)\s*(.*)$/);
  if (frac) return { amount: parseFloat(frac[1]) / parseFloat(frac[2]), rest: frac[3] };

  // A plain number or a lone vulgar fraction.
  const plain = s.match(new RegExp(`^(${NUM})\\s*(.*)$`));
  if (plain) return { amount: value(plain[1]), rest: plain[2] };

  return { amount: null, rest: s };
}

/** Pull the unit off the front of the remainder, dropping whatever follows. */
function readUnit(rest) {
  let s = String(rest || '').trim().replace(/^[.,()]+|[.,()]+$/g, '').trim();
  if (!s) return '';

  const lower = s.toLowerCase();
  for (const unit of KNOWN_UNITS) {
    // Match on a word boundary so "tbs" does not swallow "tbspoonful".
    if (lower === unit || lower.startsWith(unit + ' ') || lower.startsWith(unit + '.')) {
      return unit;
    }
  }

  // Unknown: hand back the first word unless it is plainly a preparation word,
  // and let ingredients.js decide what to do with it.
  const first = s.split(/\s+/)[0].replace(/[.,]$/, '');
  return TRAILING_NOISE.test(first) ? '' : first;
}

/**
 * "1 1/2 cups" -> { amount: 1.5, unit: 'cups' }
 * "Dash"       -> { amount: null, unit: 'Dash' }
 */
function parseMeasure(measure) {
  const text = String(measure === null || measure === undefined ? '' : measure).trim();
  if (!text) return { amount: null, unit: '' };

  const { amount, rest } = readAmount(text);

  // "1 (12 oz.) tin" — a count of a sized container. What you actually want on
  // the list is the contents: one 12 oz tin is 12 oz, two of them are 24.
  const sized = String(rest || '').match(/^\(([^)]+)\)\s*(.*)$/);
  if (sized) {
    const inner = parseMeasure(sized[1]);
    if (inner.amount !== null && inner.unit) {
      return { amount: inner.amount * (amount === null ? 1 : amount), unit: inner.unit };
    }
  }

  return { amount, unit: readUnit(rest) };
}

/** Convenience: measure string straight to canonical ingredient rows. */
function resolveMeasured(name, measure) {
  const { amount, unit } = parseMeasure(measure);
  return Ingredients.resolve({ name, amount, unit });
}

module.exports = { parseMeasure, resolveMeasured };
