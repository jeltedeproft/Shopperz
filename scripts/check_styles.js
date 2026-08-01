/**
 * Cross-check the stylesheet against the markup and the code.
 *
 * There is no browser here to eyeball, so the next best thing is proving that
 * every class the app can render has a rule, and that the stylesheet is not
 * carrying rules for classes nothing uses any more. Both directions have
 * bitten this project before: toasts were invisible because the CSS defined
 * .toast-msg.visible while the code added .show.
 *
 *   node scripts/check_styles.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');

// Classes that appear in class="..." attributes, in both files.
const used = new Set();
[...html.matchAll(/class="([^"]*)"/g)].forEach(m => {
  m[1].split(/\s+/).filter(Boolean).forEach(c => used.add(c));
});
// Template literals in app.js: class="foo ${cond ? 'bar' : ''}"
[...js.matchAll(/class="([^"]*)"/g)].forEach(m => {
  m[1].replace(/\$\{[^}]*\}/g, ' ').split(/\s+/).filter(Boolean).forEach(c => used.add(c));
});
// classList.add/remove/toggle('foo') and the ternaries inside templates.
[...js.matchAll(/classList\.(?:add|remove|toggle|contains)\('([^']+)'/g)].forEach(m => used.add(m[1]));
// Elements built with createElement carry their class via className.
[...js.matchAll(/\.className\s*=\s*'([^']+)'/g)].forEach(m => {
  m[1].split(/\s+/).filter(Boolean).forEach(c => used.add(c));
});
[...js.matchAll(/\?\s*'([a-z][a-z0-9-]+)'\s*:\s*''/gi)].forEach(m => used.add(m[1]));
// photoMarkup(recipe, alt, 'recipe-card-img', lazy) — the one helper that
// takes the class to emit as an argument, so the literal never appears inside
// a class="..." attribute at the call site.
[...js.matchAll(/photoMarkup\([^)]*?'([a-z][a-z0-9-]+)'/g)].forEach(m => used.add(m[1]));

// Classes the stylesheet defines. Strip comments, url()s and hex colours
// first, or "fonts.googleapis.com" reads as a class and #C79F5E as an id.
const cssNoComments = css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/url\([^)]*\)/g, '')
  .replace(/#[0-9a-fA-F]{3,8}\b/g, '');

const defined = new Set();
[...cssNoComments.matchAll(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g)].forEach(m => defined.add(m[1]));

// Hooks the code queries but that carry no styling of their own.
const JS_ONLY = new Set(['diet-filter-cb', 'intol-filter-cb', 'recipe-diet-cb', 'toast-text']);
JS_ONLY.forEach(c => defined.add(c));

const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));

const unstyled = [...used].filter(c => !defined.has(c)).sort();
const orphaned = [...defined].filter(c => !used.has(c)).sort();

// Ids the stylesheet targets that no longer exist in the markup.
const styledIds = new Set([...cssNoComments.matchAll(/#([a-zA-Z][a-zA-Z0-9_-]*)/g)].map(m => m[1]));
const staleIds = [...styledIds].filter(id => !ids.has(id)).sort();

console.log(`classes used:    ${used.size}`);
console.log(`classes styled:  ${defined.size}`);

let problems = 0;

if (unstyled.length) {
  problems += unstyled.length;
  console.log(`\n❌ rendered but unstyled (${unstyled.length}):`);
  unstyled.forEach(c => console.log(`   .${c}`));
} else {
  console.log('\n✅ every rendered class has a rule');
}

if (staleIds.length) {
  problems += staleIds.length;
  console.log(`\n❌ styled #ids missing from the markup (${staleIds.length}):`);
  staleIds.forEach(id => console.log(`   #${id}`));
} else {
  console.log('✅ every styled #id exists');
}

if (orphaned.length) {
  console.log(`\n⚠️  styled but never rendered (${orphaned.length}) — dead rules:`);
  orphaned.forEach(c => console.log(`   .${c}`));
} else {
  console.log('✅ no dead rules');
}

// Structural sanity on the markup: a stray closing tag silently reparents half
// the app, which is exactly the kind of thing there is no browser here to catch.
const containers = ['div', 'section', 'main', 'nav', 'form', 'button', 'ol', 'ul', 'li'];
const unbalanced = containers.filter(tag => {
  const open = (html.match(new RegExp(`<${tag}(?=[\\s>])`, 'g')) || []).length;
  const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
  return open !== close;
});

if (unbalanced.length) {
  problems += unbalanced.length;
  console.log(`\n❌ unbalanced tags in index.html: ${unbalanced.join(', ')}`);
  unbalanced.forEach(tag => {
    const open = (html.match(new RegExp(`<${tag}(?=[\\s>])`, 'g')) || []).length;
    const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    console.log(`   <${tag}>: ${open} open, ${close} close`);
  });
} else {
  console.log('✅ markup tags balance');
}

// Cheap structural sanity: balanced braces.
let depth = 0;
for (const ch of cssNoComments) {
  if (ch === '{') depth++;
  else if (ch === '}') depth--;
}
if (depth !== 0) {
  problems++;
  console.log(`\n❌ unbalanced braces (${depth})`);
}

process.exit(problems === 0 ? 0 : 1);
