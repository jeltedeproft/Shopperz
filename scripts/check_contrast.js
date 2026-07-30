/**
 * WCAG contrast check for the theme's text/background pairs.
 *
 * A dark theme is easy to get wrong — the old build had 9px grey text on near
 * black in several places. Colours are read straight out of style.css, so this
 * fails as soon as a token is dimmed too far.
 *
 *   node scripts/check_contrast.js
 */
const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');

/** Pull `--name: #hex;` declarations out of :root. */
function tokens() {
  const root = css.slice(css.indexOf(':root'), css.indexOf('}', css.indexOf(':root')));
  const found = {};
  [...root.matchAll(/(--[a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)].forEach(m => {
    found[m[1]] = m[2];
  });
  return found;
}

function toRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
}

function luminance(hex) {
  const [r, g, b] = toRgb(hex).map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

const T = tokens();

// [label, foreground, background, minimum]
// 4.5 is the AA floor for body text; 3.0 covers large/bold display text and
// non-text boundaries like borders and icons.
const pairs = [
  ['body text on app background',      T['--paper'],       T['--ink-800'], 4.5],
  ['body text on cards',               T['--paper'],       T['--ink-700'], 4.5],
  ['body text on inputs',              T['--paper'],       T['--ink-600'], 4.5],
  ['secondary text on app background', T['--paper-dim'],   T['--ink-800'], 4.5],
  ['secondary text on cards',          T['--paper-dim'],   T['--ink-700'], 4.5],
  ['faint text on cards',              T['--paper-faint'], T['--ink-700'], 3.0],
  ['brass text on app background',     T['--brass'],       T['--ink-800'], 4.5],
  ['brass text on cards',              T['--brass'],       T['--ink-700'], 4.5],
  ['bright brass on cards',            T['--brass-bright'], T['--ink-700'], 4.5],
  ['sage on cards',                    T['--sage'],        T['--ink-700'], 4.5],
  ['rust on cards',                    T['--rust'],        T['--ink-700'], 4.5],
  ['dark ink on brass fills',          T['--on-brass'],    T['--brass'],   4.5],
  ['dark ink on sage checkbox',        T['--on-brass'],    T['--sage'],    4.5],
  ['progress fill on its track',       T['--brass'],       T['--ink-500'], 3.0]
];

let failures = 0;

console.log('\n🎨 Contrast\n');
pairs.forEach(([label, fg, bg, min]) => {
  if (!fg || !bg) {
    failures++;
    console.log(`  ❌ ${label} — token missing`);
    return;
  }
  const ratio = contrast(fg, bg);
  const ok = ratio >= min;
  if (!ok) failures++;
  console.log(`  ${ok ? '✅' : '❌'} ${label.padEnd(36)} ${ratio.toFixed(2)}:1  (min ${min})`);
});

// Nothing should be smaller than 10px, and only sparingly below 12px.
const sizes = [...css.matchAll(/font-size:\s*(\d+(?:\.\d+)?)px/g)].map(m => parseFloat(m[1]));
const tiny = sizes.filter(s => s < 10);
console.log(`\n🔠 Smallest literal font-size: ${Math.min(...sizes)}px`);
if (tiny.length) {
  failures++;
  console.log(`  ❌ ${tiny.length} rule(s) below 10px`);
} else {
  console.log('  ✅ nothing below 10px');
}

console.log(`\n${failures === 0 ? '✅ contrast checks passed' : `❌ ${failures} check(s) failed`}\n`);
process.exit(failures === 0 ? 0 : 1);
