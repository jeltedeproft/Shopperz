/**
 * Fetch the bundled typefaces into fonts/ and write fonts/fonts.css.
 *
 *   node scripts/fetch_fonts.js
 *
 * The app works offline, so the fonts cannot be linked from anyone else's
 * server: they are downloaded once, committed, and cached by the service
 * worker like any other asset. Both families are under the SIL Open Font
 * Licence, which is what makes that redistribution allowed — the licence is
 * downloaded alongside them.
 *
 * Only the latin and latin-ext subsets are kept. latin alone would be enough
 * for English, Dutch and French prose, but not for the recipe titles: Šúĺlance
 * s Makom, Fašírky, Rømmegrøt and Kvæfjord Cake all reach past it, and a
 * missing subset shows up as a different font mid-word.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT = path.join(__dirname, '..', 'fonts');
const KEEP = ['latin', 'latin-ext'];

// A browser user-agent, or the API serves truetype instead of woff2.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const FAMILIES = [
  {
    // The display face. Fraunces is an old-style serif with soft, slightly
    // wonky terminals — it is the opposite of a grotesque UI face, which is
    // the whole point.
    name: 'Fraunces',
    query: 'Fraunces:opsz,wght@9..144,400..700'
  },
  {
    // The reading face, drawn for long text on screen.
    name: 'Literata',
    query: 'Literata:ital,opsz,wght@0,7..72,400..600;1,7..72,400..600'
  }
];

function get(url, asBuffer) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, res => {
      if (res.statusCode !== 200) { reject(new Error(`${res.statusCode} for ${url}`)); return; }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(asBuffer ? Buffer.concat(chunks) : Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject);
  });
}

/** Split the API's stylesheet into blocks, each tagged with its subset name. */
function parseFaces(css) {
  const faces = [];
  const re = /\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g;
  let m;
  while ((m = re.exec(css)) !== null) {
    const body = m[2];
    const pick = re2 => { const x = body.match(re2); return x ? x[1].trim() : null; };
    faces.push({
      subset: m[1],
      style: pick(/font-style:\s*([^;]+);/),
      weight: pick(/font-weight:\s*([^;]+);/),
      range: pick(/unicode-range:\s*([^;]+);/),
      url: pick(/src:\s*url\(([^)]+)\)/)
    });
  }
  return faces;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const rules = [];
  let bytes = 0;

  for (const family of FAMILIES) {
    const css = await get(`https://fonts.googleapis.com/css2?family=${family.query}&display=swap`, false);
    const faces = parseFaces(css).filter(f => KEEP.indexOf(f.subset) !== -1);
    if (faces.length === 0) throw new Error(`no ${KEEP.join('/')} faces found for ${family.name}`);

    for (const face of faces) {
      const italic = face.style === 'italic' ? 'i' : '';
      const file = `${family.name.toLowerCase()}-${face.weight.replace(/\s+/g, '')}${italic}-${face.subset}.woff2`;
      const data = await get(face.url, true);
      fs.writeFileSync(path.join(OUT, file), data);
      bytes += data.length;
      rules.push(
        `@font-face {\n` +
        `  font-family: '${family.name}';\n` +
        `  font-style: ${face.style};\n` +
        `  font-weight: ${face.weight};\n` +
        `  font-display: swap;\n` +
        `  src: url('${file}') format('woff2');\n` +
        `  unicode-range: ${face.range};\n` +
        `}`);
      console.log(`  ${file}  ${(data.length / 1024).toFixed(1)} kB`);
    }
  }

  const header =
    '/*\n' +
    ' * Bundled by scripts/fetch_fonts.js — do not edit by hand.\n' +
    ' *\n' +
    ' * Fraunces and Literata, both under the SIL Open Font Licence 1.1.\n' +
    ' * See fonts/OFL.txt. They are committed rather than linked because the\n' +
    ' * app has to render the same way with no network at all.\n' +
    ' */\n\n';
  fs.writeFileSync(path.join(OUT, 'fonts.css'), header + rules.join('\n\n') + '\n');

  const licence = await get('https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/OFL.txt', false);
  fs.writeFileSync(path.join(OUT, 'OFL.txt'), licence);

  console.log(`\n${rules.length} faces, ${(bytes / 1024).toFixed(0)} kB total`);
  console.log('wrote fonts/fonts.css and fonts/OFL.txt');
})().catch(err => { console.error(err.message); process.exit(1); });
