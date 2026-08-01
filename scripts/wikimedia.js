/**
 * Shared Wikimedia photo lookup for the recipe importers.
 *
 * Extracted from add_belgian_recipes.js when the MealDB importer needed the
 * same thing, for the same reason recipe_db.js exists: two copies of a
 * rate-limited, licence-checking API client is one copy too many.
 *
 * The rule this module exists to enforce: a photo only ships if its licence
 * permits reuse and we can name the photographer. Anything else returns null
 * and the caller falls back to a placeholder.
 */
const fs = require('fs');

// Licences that permit reuse with attribution. Anything else is skipped.
const FREE_LICENCE = /^(cc0|cc by|cc by-sa|public domain|pd)/i;

const UA = 'MijnKookpot/1.0 (personal recipe app; https://github.com/jeltedeproft/Shopperz)';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Wikimedia rate-limits hard and returns 429. Requests go one at a time with a
 * pause between them, and back off when asked to.
 * See https://www.mediawiki.org/wiki/Wikimedia_APIs/Rate_limits
 */
let lastCall = 0;
async function api(url, attempt = 0) {
  const since = Date.now() - lastCall;
  if (since < 1200) await sleep(1200 - since);
  lastCall = Date.now();

  const res = await fetch(url, { headers: { 'User-Agent': UA } });

  if (res.status === 429 && attempt < 3) {
    const wait = 5000 * (attempt + 1);
    console.log(`   ⏳ rate limited, waiting ${wait / 1000}s…`);
    await sleep(wait);
    return api(url, attempt + 1);
  }

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/**
 * Lead image of a Wikipedia article. Candidates are "lang:Title", most likely
 * first, so each recipe costs one or two requests rather than nine.
 */
async function findArticleImage(candidates) {
  for (const candidate of candidates) {
    const [wiki, ...rest] = candidate.split(':');
    const title = rest.join(':');
    try {
      const data = await api(
        `https://${wiki}.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=original&titles=${encodeURIComponent(title)}`
      );
      const page = Object.values(data.query.pages)[0];
      if (page && page.original && page.original.source) {
        return { url: page.original.source, article: `${wiki}.wikipedia.org/wiki/${title}` };
      }
    } catch (err) {
      console.log(`   ⚠️  ${candidate}: ${err.message}`);
    }
  }
  return null;
}

/**
 * Ask Wikipedia which article a dish name refers to, so the importer does not
 * have to guess the exact page title. Returns "en:Title" candidates.
 */
async function searchArticles(term, limit = 3) {
  try {
    const data = await api(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srlimit=${limit}&srsearch=${encodeURIComponent(term)}`
    );
    return ((data.query && data.query.search) || []).map(hit => `en:${hit.title}`);
  } catch (err) {
    return [];
  }
}

/** Author and licence for a Commons file, or null when it is not reusable. */
async function licenceFor(imageUrl) {
  const fileName = decodeURIComponent(imageUrl.split('/').pop());
  try {
    const data = await api(
      `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=extmetadata&titles=${encodeURIComponent('File:' + fileName)}`
    );
    const page = Object.values(data.query.pages)[0];
    if (!page || !page.imageinfo) return null;

    const meta = page.imageinfo[0].extmetadata || {};
    const licence = (meta.LicenseShortName && meta.LicenseShortName.value) || '';
    if (!FREE_LICENCE.test(licence)) return null;

    const artist = ((meta.Artist && meta.Artist.value) || 'Unknown')
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    return {
      licence,
      licenceUrl: (meta.LicenseUrl && meta.LicenseUrl.value) || '',
      author: artist.slice(0, 80),
      file: fileName
    };
  } catch (err) {
    return null;
  }
}

async function downloadImage(url, targetPath) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 2000) throw new Error('suspiciously small');
  fs.writeFileSync(targetPath, buffer);
  return buffer.length;
}

/**
 * Find a reusable photo for a dish and save it. Returns { file, credit } or
 * null when nothing suitably licensed turned up.
 */
async function fetchLicensedPhoto(candidates, targetDir, baseName) {
  const found = await findArticleImage(candidates);
  if (!found) return null;

  const credit = await licenceFor(found.url);
  if (!credit) return null;

  const ext = (found.url.match(/\.(jpe?g|png)$/i) || [null, 'jpg'])[1].toLowerCase();
  const fileName = `${baseName}.${ext === 'jpeg' ? 'jpg' : ext}`;
  const bytes = await downloadImage(found.url, require('path').join(targetDir, fileName));

  return {
    file: fileName,
    bytes,
    credit: {
      author: credit.author,
      licence: credit.licence,
      licenceUrl: credit.licenceUrl,
      source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(credit.file)}`
    }
  };
}

module.exports = {
  FREE_LICENCE, UA, api, findArticleImage, searchArticles,
  licenceFor, downloadImage, fetchLicensedPhoto
};
