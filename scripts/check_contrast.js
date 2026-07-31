/**
 * WCAG contrast check for the theme's text/background pairs.
 *
 * The app ships two palettes, and a colour that reads well on cream can
 * disappear on cocoa (and the other way round), so every pair below is
 * checked against *both*. Colours are read straight out of style.css, so
 * this fails as soon as a token is dimmed too far in either theme.
 *
 *   node scripts/check_contrast.js
 */
const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');

/**
 * Pull `--name: #hex;` declarations out of one rule block.
 *
 * The selector is matched literally and the block ends at the first `}`,
 * which holds because the token blocks contain no nested rules.
 */
function blockTokens(selector) {
  const at = css.indexOf(selector);
  if (at === -1) throw new Error(`no ${selector} block in style.css`);
  const open = css.indexOf('{', at);
  const body = css.slice(open, css.indexOf('}', open));
  const found = {};
  [...body.matchAll(/(--[a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)].forEach(m => {
    found[m[1]] = m[2];
  });
  return found;
}

/** Tokens shared by both themes (the over-photo pair lives here). */
const shared = blockTokens('1c. Shared by both themes');

const themes = {
  light: Object.assign({}, shared, blockTokens(':root,\n:root[data-theme="light"]')),
  dark: Object.assign({}, shared, blockTokens(':root[data-theme="dark"]'))
};

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

// [label, foreground token, background token, minimum]
// 4.5 is the AA floor for body text; 3.0 covers large/bold display text and
// non-text boundaries like borders, icons and progress fills.
const pairs = [
  ['body text on the page',            '--ink',        '--bg',        4.5],
  ['body text on cards',               '--ink',        '--surface-2', 4.5],
  ['body text on inputs',              '--ink',        '--surface-3', 4.5],
  ['secondary text on the page',       '--ink-dim',    '--bg',        4.5],
  ['secondary text on cards',          '--ink-dim',    '--surface-2', 4.5],
  ['faint text on cards',              '--ink-faint',  '--surface-2', 3.0],

  ['terracotta on the page',           '--accent',     '--bg',        4.5],
  ['terracotta on cards',              '--accent',     '--surface-2', 4.5],
  ['terracotta on inputs',             '--accent',     '--surface-3', 4.5],
  ['emphasised terracotta on cards',   '--accent-hi',  '--surface-2', 4.5],

  ['olive on cards',                   '--herb',       '--surface-2', 4.5],
  ['paprika on cards',                 '--berry',      '--surface-2', 4.5],
  ['honey on cards',                   '--honey',      '--surface-2', 4.5],
  ['plum on cards',                    '--plum',       '--surface-2', 4.5],

  ['type on a terracotta fill',        '--on-accent',  '--accent',    4.5],
  ['type on an olive checkbox',        '--on-accent',  '--herb',      4.5],
  ['type on a paprika fill',           '--on-accent',  '--berry',     4.5],
  ['type on a honey fill',             '--on-accent',  '--honey',     4.5],
  ['type on a plum fill',              '--on-accent',  '--plum',      4.5],

  ['progress fill on its track',       '--accent',     '--surface-4', 3.0],
  ['cards against the page',           '--surface-2',  '--bg',        1.02],

  // These two sit over a photograph, so they are the same in both themes.
  ['photo caption on its scrim',       '--on-photo-dim', '--scrim-flat', 4.5],
  ['photo title on its scrim',         '--on-photo',     '--scrim-flat', 4.5]
];

let failures = 0;

/**
 * --scrim is rgba over an unknown photo. The worst realistic case is the
 * scrim over a light patch of the image, so flatten it onto white and check
 * the over-photo type against that.
 */
function flattenScrim(theme) {
  const m = css.match(/--scrim:\s*rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (!m) return null;
  const a = parseFloat(m[4]);
  const over = [255, 255, 255];
  const rgb = [1, 2, 3].map(i => Math.round(parseInt(m[i], 10) * a + over[i - 1] * (1 - a)));
  return '#' + rgb.map(v => v.toString(16).padStart(2, '0')).join('');
}

console.log('\n🎨 Contrast');

Object.keys(themes).forEach(name => {
  const T = themes[name];
  T['--scrim-flat'] = flattenScrim(name);
  console.log(`\n  ${name === 'light' ? '☀️' : '🌙'}  ${name}\n`);
  pairs.forEach(([label, fgKey, bgKey, min]) => {
    const fg = T[fgKey];
    const bg = T[bgKey];
    if (!fg || !bg) {
      failures++;
      console.log(`     ❌ ${label} — missing ${!fg ? fgKey : bgKey}`);
      return;
    }
    const ratio = contrast(fg, bg);
    const ok = ratio >= min;
    if (!ok) failures++;
    console.log(`     ${ok ? '✅' : '❌'} ${label.padEnd(32)} ${ratio.toFixed(2)}:1  (min ${min})`);
  });
});

// Both palettes must define exactly the same tokens, or a rule that works in
// one theme falls back to an inherited or invalid value in the other.
const lightKeys = Object.keys(themes.light).filter(k => k !== '--scrim-flat').sort();
const darkKeys = Object.keys(themes.dark).filter(k => k !== '--scrim-flat').sort();
const onlyLight = lightKeys.filter(k => !darkKeys.includes(k));
const onlyDark = darkKeys.filter(k => !lightKeys.includes(k));
console.log('\n🎛  Token parity');
if (onlyLight.length || onlyDark.length) {
  failures++;
  if (onlyLight.length) console.log(`     ❌ light only: ${onlyLight.join(', ')}`);
  if (onlyDark.length) console.log(`     ❌ dark only:  ${onlyDark.join(', ')}`);
} else {
  console.log(`     ✅ both themes define the same ${lightKeys.length} colour tokens`);
}

// Nothing should be smaller than 10px, and only sparingly below 12px.
const sizes = [...css.matchAll(/font-size:\s*(\d+(?:\.\d+)?)px/g)].map(m => parseFloat(m[1]));
const tiny = sizes.filter(s => s < 10);
console.log(`\n🔠 Smallest literal font-size: ${Math.min(...sizes)}px`);
if (tiny.length) {
  failures++;
  console.log(`     ❌ ${tiny.length} rule(s) below 10px`);
} else {
  console.log('     ✅ nothing below 10px');
}

console.log(`\n${failures === 0 ? '✅ contrast checks passed' : `❌ ${failures} check(s) failed`}\n`);
process.exit(failures === 0 ? 0 : 1);
