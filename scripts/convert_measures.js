/**
 * Convert the imperial measures left in recipe prose.
 *
 * The ingredient lists were canonicalised to metric at import time; the
 * instructions were not, so a recipe could tell you to heat the oven to 350
 * degrees while its own ingredient list was in grams. This is the other half
 * of that job.
 *
 *   node scripts/convert_measures.js --check    report every change, write nothing
 *   node scripts/convert_measures.js            apply to recipes.js
 *
 * The voice batches in scripts/voice/ are deliberately *not* touched. They are
 * the faithful transcription of each source recipe, and a source recipe that
 * said 350 degrees should keep saying so. apply_voice.js runs this conversion
 * on the way into the database instead, so the batches stay honest and the
 * database stays metric no matter how often the voice pass is re-run.
 *
 * Two kinds of edit happen here and they carry very different risk:
 *
 *   STRIP    the recipe already gives both scales ("180C/350F/Gas 4",
 *            "325ml/11fl oz", "1/4 cup (60 ml)") and the imperial half is
 *            deleted. No arithmetic, so nothing can be got wrong.
 *   CONVERT  only imperial is given and a number is computed.
 *
 * Every change of either kind is printed, grouped by rule, so the whole diff
 * can be read before it is committed.
 */
const U = require('./units.js');
const db = require('./recipe_db.js');

const LANGS = ['en', 'nl', 'fr'];

const changes = [];
function record(rule, before, after) {
  changes.push({ rule, before, after });
  return after;
}

// A number in any of the forms the sources use: 9, 1 1/2, 1/4, ½, 1½, 3.75.
// The decimal separator has to be either, because the French text writes 3,75.
const NUM = '\\d+(?:[.,]\\d+)?(?:\\s*\\d*\\s*\\/\\s*\\d+)?|[½⅓⅔¼¾⅛⅜⅝⅞]|\\d+\\s*[½⅓⅔¼¾⅛⅜⅝⅞]';

// Bare "C" last, for the same reason as bare "F" below — and it has to be
// here, or "180C/350F/Gas 4" reads as having no Celsius in it at all, the
// strip declines to fire, and the 350F is converted alongside the 180C that
// was already the same temperature: "180C/180 °C/Gas 4".
// The degree sign is written two ways in the imported prose: the real one (°)
// and the ring above (˚, U+02DA), which a couple of sources use and which looks
// identical on the page. Both are accepted, and the letter after it may be
// lower case — "325°f (160°c)" is one recipe's own spelling. Only the forms
// carrying a degree sign are case-relaxed; the bare "C" below stays upper case,
// because a lower-case one would match the "c" of "c'est".
const C_UNIT = '(?:[°˚]\\s*[Cc]\\b|℃|degrees?\\s*C\\b|degrees\\s+Celsius|graden\\s*C\\b|graden\\s+Celsius|degrés\\s*C\\b|degrés\\s+Celsius|C\\b)';
// The bare "F" of "Heat the oven to 350F" comes last, so the fuller spellings
// win the alternation when they are present.
const F_UNIT = '(?:[°˚]\\s*[Ff]\\b|℉|degrees?\\s*F\\b|degrees\\s+Fahrenheit|graden\\s*F\\b|graden\\s+Fahrenheit|degrés\\s*F\\b|degrés\\s+Fahrenheit|F\\b)';
// The brackets of "180C (fan)" have to be allowed, or the run of oven settings
// ends at the 180C, the gas mark trailing it is never part of the match, and it
// survives a strip that was supposed to remove it.
const FAN = '(?:\\(?\\s*(?:fan|hetelucht|chaleur\\s+tournante)\\s*\\)?)';
const GAS = '(?:[Gg]as\\s*(?:mark|stand)?\\s*\\d+|thermostat\\s*\\d+)';
const METRIC = '\\d+(?:\\.\\d+)?(?:\\s*[x×]\\s*\\d+(?:\\.\\d+)?)?\\s*(?:ml|cl|l|g|kg|cm|mm)';

/**
 * What can sit between the number and the unit.
 *
 * English hyphenates ("a 2-cup measure", "1/4-inch thick") and French puts a
 * preposition in ("3/4 de pouce", "2/3 de tasse"). Missing either one is worse
 * than it looks: the Dutch and French take their answers from the English by
 * position, so a measure that matches in one language and not another slides
 * every later answer in that recipe onto the wrong measure.
 */
const SEP = "(?:\\s*-\\s*|\\s+de\\s+|\\s+d'\\s*|\\s*)";

/**
 * ---------------------------------------------------------------------------
 * Is a cup of this a volume or a weight?
 * ---------------------------------------------------------------------------
 *
 * A cup is 240 ml of a liquid or 125 g of a dry thing — a factor of two, so
 * this is the one decision in the file worth being slow about.
 *
 * It is taken from the English only, and the Dutch and French then take the
 * same answer for the same step. Deciding per language would mean three
 * vocabularies and three chances to be wrong, and Dutch defeats the technique
 * anyway: "olijfolie" and "kippenbouillon" are single words, so a list of
 * nouns cannot find the oil or the stock inside them, while "room" is cream in
 * Dutch and a place to stand in English.
 *
 * ingredients.js answers the same question for ingredient *lines* and is left
 * alone: its test is a bare substring match, which is why "1 cup Thai basil
 * leaves until just wilted" came back as a liquid — "jus" inside "just". On
 * ingredient names it never bites, all 3383 of them classify the same either
 * way, but a sentence is not a name.
 */
const LIQUID = /\b(?:water|milk|cream|oil|juice|broth|stock|bouillon|beer|stout|ale|wine|sherry|brandy|cognac|rum|vinegar|syrup|sauce|batter|liquor|liquid|marinade|brine|buttermilk|yogurt|yoghurt|pur[ée]e)\b/i;
const DRY = /\b(?:flour|sugar|cocoa|cheese|parmesan|rice|oats|oatmeal|cornmeal|semolina|nuts?|almonds?|walnuts?|pecans?|pistachios?|breadcrumbs?|crumbs?|chocolate|raisins?|peas|beans|shoots?|tomatoes|chunks?|leaves|salt|powder|starch|cornstarch|lentils?|couscous|quinoa|berries|cabbage|carrots?|onions?|basil|pineapple|bamboo)\b/i;

/**
 * The handful the lists cannot place, decided by reading the recipe.
 * Keyed on the English phrase exactly as the report prints it.
 */
const BY_HAND = {
  '1 cup [in total]': 'liquid',                     // osso buco: reduce the braising liquid to about 1 cup
  '1 cup [for medium]': 'liquid',                   // dried shrimp: a cup of water to hydrate medium ones
  '1 1/4 cup [for large —]': 'liquid',              // the same sentence, for large ones
  '1/2 cup [at a time]': 'dry',                     // "add the remaining flour, 1/2 cup at a time"
  '1/4 cup [at a time]': 'liquid',                  // cupcake batter, an ice cream scoop at a time
  '1/2 cup [more]': 'liquid',                       // "up to 1/2 cup more" hemp milk
  '1 1/2 cups []': 'dry',                           // "measure out 1 1/2 cups" of shredded cabbage
  '1.5 cups []': 'dry',                             // the same sentence in another recipe
  '3 cups []': 'liquid',                            // "this makes about 3 cups" — a yield
  '6 cups []': 'liquid',                            // "it makes about 6 cups" of barbecue sauce
  '1/4 cup [the filling in the middle]': 'liquid',  // egg roll filling, scooped
  '1/4 cup [the mixture for later]': 'dry',         // crumb topping held back
  '⅓ cup [each]': 'liquid',                         // portioning potato mash by the scoop
  // Butter measured in cups is measured by volume. Half a cup is 113 g, so
  // the 65 g the dry rule would give is nearly half the butter it should be.
  '1/2 cup [plus 1 tablespoon butter]': 'liquid',
  '1/4 cup [butter]': 'liquid',
  // Soft cheese scooped by the cup goes the same way: 3/4 cup of ricotta is
  // about 185 g, and the dry rule would call it 95 g.
  '3/4 cup [ricotta]': 'liquid',
  // A melted chocolate mixture folded into whites is a batter, whatever the
  // word "chocolate" suggests to the dry list.
  '1 cup [chocolate mixture into the white]': 'liquid',
  // Graduations on a measuring jug. "Bring it up to the 1-cup mark" is no use
  // to anyone holding a metric jug.
  '2-cup [measure]': 'liquid',
  '1-cup [mark]': 'liquid'
};

function subject(tail) {
  return String(tail || '')
    // Not "plus" and not a digit: "1/2 cup plus 1 tablespoon butter" has to
    // keep reaching as far as the butter, or it and "1/2 cup plus 2
    // tablespoons semolina" both come back as an empty subject and collide.
    .split(/\b(?:and|with|or|until)\b|[=:;,.]/)[0]
    .replace(/^\s*(?:the|a|an|of)\b\s*/i, '')
    .trim();
}

function classifyEnglish(phrase, name) {
  if (Object.prototype.hasOwnProperty.call(BY_HAND, phrase)) return BY_HAND[phrase];
  const dry = DRY.test(name);
  const liquid = LIQUID.test(name);
  if (liquid && !dry) return 'liquid';
  if (dry && !liquid) return 'dry';
  return null;
}

const undecided = new Map();

/**
 * ---------------------------------------------------------------------------
 * STRIP — the metric is already there
 * ---------------------------------------------------------------------------
 */
function stripBracketedCelsius(text) {
  const re = new RegExp('\\d+\\s*(?:' + F_UNIT + ')\\s*\\(\\s*(\\d+)\\s*(?:' + C_UNIT + ')\\s*\\)', 'g');
  return text.replace(re, (whole, c) => record('strip oven setting', whole, c + ' °C'));
}

/**
 * The same thing written the other way round: "170°C (340°F)".
 *
 * Without this the bracketed Fahrenheit is left for the convert pass below,
 * which turns it into a second Celsius reading and leaves the step saying
 * "170°C (170 °C)". The Celsius is already there, so the brackets are dropped
 * whole rather than converted.
 */
function stripBracketedFahrenheit(text) {
  const re = new RegExp('(\\d+)\\s*(?:' + C_UNIT + ')\\s*\\(\\s*\\d+\\s*(?:' + F_UNIT + ')\\s*\\)', 'g');
  return text.replace(re, (whole, c) => record('strip oven setting', whole, c + ' °C'));
}

function stripDualTemperature(text) {
  // The whole run of oven settings: any mix of C, F, fan and gas joined by
  // slashes or commas. Rebuilt keeping only the Celsius parts.
  const run = new RegExp(
    '(?:' + FAN + '\\s*)?\\d+\\s*(?:' + C_UNIT + '|' + F_UNIT + ')(?:\\s*' + FAN + ')?' +
    '(?:\\s*[\\/,]\\s*(?:' + FAN + '\\s*)?\\d+\\s*(?:' + C_UNIT + '|' + F_UNIT + ')(?:\\s*' + FAN + ')?|\\s*[\\/,]?\\s*' + GAS + ')+',
    'gi');

  return text.replace(run, whole => {
    const parts = whole.split(/\s*[\/,]\s*/).map(p => p.trim()).filter(Boolean);
    const celsius = parts.filter(p => new RegExp(C_UNIT).test(p));
    if (celsius.length === 0) return whole;            // convert pass handles it
    if (celsius.length === parts.length) return whole; // already metric-only
    const kept = celsius
      .map(p => p.replace(new RegExp('\\s*' + C_UNIT), ' °C').replace(/\s+/g, ' ').trim())
      .join(' / ');
    return record('strip oven setting', whole, kept);
  });
}

function stripDualMeasure(text) {
  const imperial = '[\\d½⅓⅔¼¾⅛\\/x×\\s\\.]+(?:fl\\.?\\s*oz|oz|ounces?|lbs?|pounds?|inch(?:es)?|in\\b|")';
  const slashed = new RegExp('(' + METRIC + ')\\s*\\/\\s*(?:' + imperial + ')', 'g');
  text = text.replace(slashed, (whole, keep) =>
    record('strip imperial half', whole, keep.replace(/\s+/g, '')));

  // The other way round, in brackets: "1/4 cup (60 ml) water", "12 inch (30 cm)".
  const bracketed = new RegExp(
    '(?:' + NUM + ')\\s*(?:cups?|tasses?|kopjes?|inch(?:es)?|in\\b|pouces?|duim|oz|ounces?|lbs?|pounds?)\\s*\\(\\s*(' + METRIC + ')\\s*\\)', 'gi');
  return text.replace(bracketed, (whole, keep) =>
    record('strip imperial half', whole, keep.replace(/\s+/g, ' ')));
}

/**
 * ---------------------------------------------------------------------------
 * CONVERT — only imperial is given
 * ---------------------------------------------------------------------------
 */
function convertTemperature(text) {
  // A difference, not a point on the scale: "drop the oven by 10 or 15
  // degrees". Subtracting 32 here would turn a nudge into a deep freeze.
  //
  // Every pattern insists on a bare degree word, never °F. A first attempt
  // accepted any of "by", "met" or "de" in front of a temperature, and French
  // ate it alive: "une température à cœur de 165°F" is a probe reading, not a
  // step, and "de" there is only the word "of". Requiring the bare word makes
  // the rule match how a change of setting is actually written and nothing else.
  //
  // The result is parked behind a placeholder, because the rules below would
  // otherwise read this rule's own output — "by 5 or 10 degrees" — as two more
  // Fahrenheit readings and turn the 10 into -10 °C.
  const DEG = '@@DEG@@';
  const deltas = [
    // "drop the oven by 10 or 15 degrees"
    /\bby\s+(\d+)(\s+or\s+(\d+))?\s*degrees\b/g,
    // "zet de oven 10 of 15 graden lager"
    /\b(\d+)(\s+of\s+(\d+))?\s*graden\s+(?=lager|hoger)/g,
    // "baisse le four de 10 ou 15 degrés"
    /\bde\s+(\d+)(\s+ou\s+(\d+))?\s*degrés\b/g
  ];
  const parked = [];
  for (const re of deltas) {
    text = text.replace(re, (whole, a, orPart, b) => {
      const one = U.fahrenheitStep(Number(a));
      const two = b === undefined ? null : U.fahrenheitStep(Number(b));
      const word = /graden/.test(whole) ? 'graden' : /degrés/.test(whole) ? 'degrés' : 'degrees';
      const out = whole
        .replace(/\d+/, String(one))
        .replace(/(\d+)(?![\s\S]*\d)/, two === null ? String(one) : String(two))
        .replace(/degrees|graden|degrés/, word);
      record('convert temperature step', whole, out);
      parked.push(out);
      return `${DEG}${parked.length - 1}${DEG}`;
    });
  }

  const explicit = new RegExp('(\\d+)\\s*(?:' + F_UNIT + ')', 'g');
  text = text.replace(explicit, (whole, f) =>
    record('convert temperature', whole, U.fahrenheitToCelsius(Number(f)) + ' °C'));

  // A bare "350 degrees". Every source that writes this is American.
  // "a 300 degree oven" is singular, and "a preheated 400 oven" names no unit
  // at all — both are still Fahrenheit, and both are how these sources write.
  //
  // But not every bare number is: "in a preheated oven 180 degrees" is a
  // European writing Celsius, and reading it as Fahrenheit turned three
  // recipes' ovens down to 80 °C, which bakes nothing. Above 200 the sources
  // are unanimous — 225 is a smoker, 300, 325, 350, 375, 400 and 425 are all
  // American ovens — while 180 and 200 are the two commonest marks on a
  // European dial and never appear as Fahrenheit oven settings. So the cut is
  // taken there: over 200 converts, 200 and under is already Celsius and only
  // gets its unit spelled out.
  //
  // The number is not enough on its own, though. A leg of lamb is roasted
  // "until an instant-read thermometer shows 130 degrees", and that one really
  // is Fahrenheit — a probe reading, not an oven dial. So a sentence naming a
  // thermometer is converted whatever the number says.
  const FAHRENHEIT_FLOOR = 200;
  const PROBE = /thermometer|thermomètre|kernthermometer|internal\s+temperature|kerntemperatuur|à\s+cœur/i;
  const sentenceAround = (whole, at) => {
    const start = whole.lastIndexOf('.', at) + 1;
    const end = whole.indexOf('.', at);
    return whole.slice(start, end === -1 ? whole.length : end);
  };
  const bare = new RegExp(
    '(\\d{2,3})\\s*(?:degrees?|graden|degrés)\\b(?!\\s*(?:C|Celsius))' +
    '|(?<=\\bpreheated\\s)(\\d{3})(?=\\s+oven\\b)' +
    '|(?<=\\bpréchauffé\\s+à\\s)(\\d{3})\\b(?!\\s*°)' +
    '|(?<=\\bvoorverwarmde\\s+oven\\s+van\\s)(\\d{3})\\b(?!\\s*°)', 'gi');
  text = text.replace(bare, (whole, ...groups) => {
    const source = groups.pop();
    const at = groups.pop();
    const n = groups.find(g => typeof g === 'string' && g);
    if (Number(n) <= FAHRENHEIT_FLOOR && !PROBE.test(sentenceAround(source, at))) {
      // Already Celsius: say so, rather than convert. Naming the unit is what
      // keeps this idempotent — a second pass sees "180 °C" and leaves it.
      return record('name bare degrees', whole, n + ' °C');
    }
    return record('convert bare degrees', whole, U.fahrenheitToCelsius(Number(n)) + ' °C');
  });

  // The steps come back out now that the absolute readings have been dealt with.
  return text.replace(new RegExp(DEG + '(\\d+)' + DEG, 'g'), (_, i) => parked[Number(i)]);
}

/** Words meaning the number in front of them is a vessel, not a measurement. */
const VESSEL = /^[\s-]*(?:heavy-bottomed\s+|heavy\s+|zware\s+|lourde?\s+)?(?:pot|pan|saucepan|dish|cooker|casserole|dutch oven|braiser|stockpot|chimney starter|starter|schoorsteenstarter|chemin[ée]e|schaal|braadpan|steelpan|cocotte|marmite|casserole)/i;

function convertVolume(text, cups, vessels) {
  // French says "1 tasse 1/2" where English says "1 1/2 cups" — the fraction
  // lands after the unit. Put it back in front so the rule below sees one and
  // a half rather than one, and so the amount matches the English it takes its
  // answer from.
  text = text.replace(
    new RegExp('(\\d+)\\s*(tasses?|cups?|kop(?:je|pen)?s?)\\s+(\\d+\\s*\\/\\s*\\d+|[½⅓⅔¼¾])', 'gi'),
    (whole, n, unit, frac) => `${n} ${frac} ${unit}`);

  // The tail is a lookahead, not part of the match, so "1 cup sugar and 1 cup
  // water" still offers the second cup to the next pass.
  const cupRe = new RegExp('(' + NUM + ')' + SEP + '(cups?|kop(?:je|pen)?s?|tasses?)\\b(?=([^.;)]{0,40}))', 'gi');
  text = text.replace(cupRe, (whole, amt, unit, tail) => {
    const n = U.parseAmount(amt);
    if (n === null) return whole;
    const kind = cups.next(String(n), whole.trim(), subject(tail));
    if (!kind) return whole;
    const out = kind === 'liquid'
      ? { amount: U.friendly(n * 240), unit: 'ml' }
      : { amount: U.friendly(n * 125), unit: 'g' };
    return record('convert cups', `${whole.trim()} (${kind})`, `${U.num(out.amount)} ${out.unit}`);
  });

  // A 6-quart pot keeps its number and changes its word; nobody sells a
  // 5.7-litre pot. A quart *of milk* is a measurement and goes to the table.
  // "3-qt." and "6 qt" and "6 to 7 quart" are all the same thing.
  const vesselRe = new RegExp('(\\d+(?:\\s*(?:to|tot|à)\\s*\\d+)?)' + SEP + '(?:quarts?|qt)\\.?(?![a-z])', 'gi');
  text = text.replace(vesselRe, (whole, amt, at) => {
    const around = text.slice(Math.max(0, at - 45), at + whole.length + 25);
    if (!vessels.next((amt.match(/\d+/g) || []).join('-'), around)) return whole;
    return record('convert vessel size', whole, `${amt} litre`);
  });

  const measures = new RegExp('(' + NUM + ')\\s*(pints?|pintes?|quarts?|qt|lbs?|pounds?|pond(?:en)?|livres?|fl\\.?\\s*oz|fluid ounces?|oz|ounces?)\\b(?=([^.;)]{0,30}))', 'gi');
  return text.replace(measures, (whole, amt, unit, tail) => {
    const n = U.parseAmount(amt);
    if (n === null) return whole;
    const key = /fl/i.test(unit) ? 'fl oz'
      : /^(?:oz|ounces?)$/i.test(unit) ? 'oz'
        : /^(?:lbs?|pounds?|pond(?:en)?|livres?)$/i.test(unit) ? 'lb'
          : /^pintes?s?$|^pints?$/i.test(unit) ? 'pint' : 'quart';
    const out = U.volume(n, key, subject(tail));
    if (!out) return whole;
    // Past a litre nobody counts in millilitres.
    const said = out.unit === 'ml' && out.amount >= 1000
      ? `${U.num(Math.round(out.amount / 100) / 10)} litre`
      : `${U.num(out.amount)} ${out.unit}`;
    return record('convert volume or weight', whole.trim(), said);
  });
}

function convertLength(text) {
  const unitRe = '(?:inch(?:es)?|in\\.|["″]|duim|pouces?)';
  const pair = new RegExp(
    // "13 by 9", "13x9", and the translations: Dutch says "13 bij 9" and
    // French "13 sur 9". Missing one of those converts only the second number
    // and leaves "13 bij 23 cm", which is not a size anyone can use.
    // The decimal has to allow a comma here too, or the French "8 X 3,75
    // pouces" matches only its second number and comes out as "8 X 9.5 cm".
    '(\\d+(?:[.,]\\d+)?)\\s*(?:' + unitRe + ')?\\s*(?:[x×]|-?\\s*by\\s*-?|\\s+bij\\s+|\\s+op\\s+|\\s+sur\\s+|\\s+par\\s+)\\s*(\\d+(?:[.,]\\d+)?)' + SEP + '(?:' + unitRe + ')', 'gi');
  text = text.replace(pair, (whole, a, b) => {
    const x = U.inchesToLength(Number(String(a).replace(',', '.')));
    const y = U.inchesToLength(Number(String(b).replace(',', '.')));
    if (x.unit !== y.unit) return whole;
    return record('convert tin size', whole, `${U.num(x.amount)}x${U.num(y.amount)} ${x.unit}`);
  });

  // A range that names its unit only once: "cut it into 1/4 to 1/2 inch cubes".
  // English tends to repeat the unit on both numbers and the translations do
  // not, so without this the Dutch converts the 1/2 and leaves the 1/4 beside
  // it — "van 1/4 tot 1.5 cm", which is not a size at all.
  const range = new RegExp(
    // "10- to 12-inch skillet" hangs a hyphen off the first number.
    '(' + NUM + ')\\s*-?\\s*(?:to|tot|à|–|—)\\s*(' + NUM + ')' + SEP + '(?:inch(?:es)?|in\\.|["″]|duim|pouces?)(?![a-z])', 'gi');
  text = text.replace(range, (whole, a, b) => {
    const from = U.parseAmount(a);
    const to = U.parseAmount(b);
    if (from === null || to === null) return whole;
    const x = U.inchesToLength(from);
    const y = U.inchesToLength(to);
    const joiner = /\btot\b/i.test(whole) ? 'tot' : /\bà\b/i.test(whole) ? 'à' : 'to';
    const said = x.unit === y.unit
      ? `${U.num(x.amount)} ${joiner} ${U.num(y.amount)} ${x.unit}`
      : `${U.num(x.amount)} ${x.unit} ${joiner} ${U.num(y.amount)} ${y.unit}`;
    return record('convert length range', whole, said);
  });

  // The lookbehind keeps a quoted setting — speed "2" — from being read as
  // two inches.
  const single = new RegExp('(?<!["″])(' + NUM + ')' + SEP + '(inch(?:es)?|in\\.|["″]|duim|pouces?)(?![a-z])', 'gi');
  return text.replace(single, (whole, amt) => {
    const n = U.parseAmount(amt);
    if (n === null) return whole;
    const out = U.inchesToLength(n);
    return record('convert length', whole.trim(), `${U.num(out.amount)} ${out.unit}`);
  });
}

function convert(text, cups, vessels) {
  if (typeof text !== 'string') return text;
  let out = text;
  out = stripBracketedCelsius(out);
  out = stripBracketedFahrenheit(out);
  out = stripDualTemperature(out);
  out = stripDualMeasure(out);
  out = convertTemperature(out);
  out = convertVolume(out, cups, vessels);
  out = convertLength(out);
  out = out.replace(/\s+([.,;])/g, '$1').replace(/[ \t]{2,}/g, ' ');
  // "an 8-by-8-inch tin" becomes "an 20x20 cm tin" unless the article is
  // fixed: 8 begins with a vowel sound and 20 does not.
  return out.replace(/\b([Aa])n (\d+)/g, (whole, a, n) =>
    /^(?:8|11|18|8\d)/.test(n) ? whole : `${a} ${n}`);
}

/**
 * Answers decided while the English is converted, handed back in the same
 * order for the Dutch and the French.
 *
 * Both questions this is used for — is a cup a volume or a weight, is a quart
 * a pot or a measurement — are answered by the words around the number, and
 * those words move when the sentence is translated. "In a 6 qt pot" puts the
 * noun after the number; "une casserole de 6 quarts" puts it before. Deciding
 * once, in one language, is both safer and self-consistent.
 */
function ledger(decide) {
  // Keyed on the amount rather than on plain position. A translation does not
  // always carry the same number of measures as its English: "a 12-cup muffin
  // tin" is "een muffinvorm met 12 holtes", which mentions no cup at all. With
  // a single running counter that one missing match slides every later answer
  // in the recipe onto the wrong measure; keyed by amount, an answer nobody
  // asks for is simply never collected.
  let log = new Map();
  let seen = new Map();
  let mode = 'record';
  return {
    start(which) {
      mode = which;
      seen = new Map();
      if (which === 'record') log = new Map();
    },
    next(key, ...args) {
      if (mode === 'replay') {
        const n = seen.get(key) || 0;
        seen.set(key, n + 1);
        const answers = log.get(key);
        return answers && n < answers.length ? answers[n] : null;
      }
      const answer = decide(...args);
      if (!log.has(key)) log.set(key, []);
      log.get(key).push(answer);
      return answer;
    }
  };
}

// A pot, a pan, a dish or an oven anywhere near the number means a vessel.
const VESSEL_NEARBY = new RegExp(
  '\\b(?:pot|pan|saucepan|skillet|dish|cooker|casserole|dutch oven|braiser|stockpot|' +
  'schaal|braadpan|steelpan|kookpot|cocotte|marmite|sauteuse|po[êe]le)\\b', 'i');

/**
 * One recipe's worth of conversion.
 *
 * The ledgers are per recipe and the English has to go first, so this hands
 * back a `{ start, convert }` pair rather than a bare function: callers walk
 * the languages in order and call start() as they change language.
 */
function converter() {
  const cups = ledger((phrase, name) => {
    const kind = classifyEnglish(`${phrase} [${name}]`, name);
    if (!kind) undecided.set(`${phrase} [${name}]`, (undecided.get(`${phrase} [${name}]`) || 0) + 1);
    return kind;
  });
  const vessels = ledger(around => VESSEL_NEARBY.test(around));
  return {
    start(lang) {
      const mode = lang === 'en' ? 'record' : 'replay';
      cups.start(mode);
      vessels.start(mode);
    },
    convert: text => convert(text, cups, vessels)
  };
}

module.exports = { converter, LANGS };

if (require.main !== module) return;

const APPLY = !process.argv.includes('--check');
const book = db.load();
const cups = ledger((phrase, name) => {
  const kind = classifyEnglish(`${phrase} [${name}]`, name);
  if (!kind) undecided.set(`${phrase} [${name}]`, (undecided.get(`${phrase} [${name}]`) || 0) + 1);
  return kind;
});
const vessels = ledger(around => VESSEL_NEARBY.test(around));
let touched = 0;

for (const r of book) {
  let changed = false;
  // English first, so its cup decisions are on record before the other two.
  for (const lang of LANGS) {
    const t = r.translations[lang];
    if (!t) continue;
    const mode = lang === 'en' ? 'record' : 'replay';
    cups.start(mode);
    vessels.start(mode);

    const sub = convert(t.subtitle, cups, vessels);
    const desc = convert(t.description, cups, vessels);
    if (sub !== t.subtitle) { t.subtitle = sub; changed = true; }
    if (desc !== t.description) { t.description = desc; changed = true; }
    if (Array.isArray(t.instructions)) {
      const next = t.instructions.map(s => convert(s, cups, vessels));
      if (next.some((s, k) => s !== t.instructions[k])) { t.instructions = next; changed = true; }
    }
  }
  if (changed) touched++;
}

if (APPLY) db.save(book);

const byRule = new Map();
for (const c of changes) {
  if (!byRule.has(c.rule)) byRule.set(c.rule, new Map());
  const key = c.before + '  ->  ' + c.after;
  byRule.get(c.rule).set(key, (byRule.get(c.rule).get(key) || 0) + 1);
}

console.log('\n📏 Imperial to metric across the prose\n');
for (const [rule, entries] of byRule) {
  console.log(`   ${rule} — ${entries.size} distinct, ${[...entries.values()].reduce((a, b) => a + b, 0)} in all`);
  [...entries.entries()].sort().forEach(([k, n]) => console.log(`      ${k}${n > 1 ? `   ×${n}` : ''}`));
  console.log('');
}
if (undecided.size) {
  console.log('   ⚠️  left alone — a cup of this is 240 ml or 125 g and the script will not guess.');
  console.log('       Decide it in BY_HAND at the top of this file.');
  [...undecided.entries()].sort().forEach(([k, n]) => console.log(`      ${k}${n > 1 ? `   ×${n}` : ''}`));
  console.log('');
}
console.log(`   recipes touched: ${touched}`);
console.log(APPLY ? '\n✅ recipes.js updated' : '\n(--check: nothing was written)');
