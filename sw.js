/**
 * Service worker — makes the app usable with no signal (basement of a Colruyt,
 * for instance) and installable on the home screen.
 *
 * Bump ASSET_VERSION whenever you change index.html / app.js / style.css /
 * recipes.js — it must match the ?v= query strings in index.html.
 */
// Must match the ?v= query strings in index.html exactly, or the precached
// URLs never match what the page actually requests.
const ASSET_VERSION = '24';
const SHELL_CACHE = `kookpot-shell-${ASSET_VERSION}`;
const IMAGE_CACHE = 'kookpot-images';

// Everything needed to boot the app with no network at all.
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  `./style.css?v=${ASSET_VERSION}`,
  `./ingredients.js?v=${ASSET_VERSION}`,
  `./recipes.js?v=${ASSET_VERSION}`,
  `./app.js?v=${ASSET_VERSION}`,
  './images/icon-192.png',
  './images/icon-512.png',
  // The typefaces are part of the shell, not a nicety. They used to be linked
  // from Google's CDN, which meant that offline — the one situation this app
  // is built for — the whole book fell back to whatever serif the device had.
  `./fonts/fonts.css?v=${ASSET_VERSION}`,
  './fonts/archivo-black-400-latin.woff2',
  './fonts/archivo-black-400-latin-ext.woff2',
  './fonts/work-sans-400600-latin.woff2',
  './fonts/work-sans-400600-latin-ext.woff2',
  './fonts/cormorant-garamond-500600-latin.woff2',
  './fonts/cormorant-garamond-500600-latin-ext.woff2',
  './fonts/literata-400600-latin.woff2',
  './fonts/literata-400600-latin-ext.woff2',
  './fonts/literata-400600i-latin.woff2',
  './fonts/literata-400600i-latin-ext.woff2'
];

self.addEventListener('install', event => {
  // Deliberately no skipWaiting() here: swapping the shell out from under a
  // running page can mix old and new assets. The page asks us to take over
  // once the user has accepted the update.
  event.waitUntil(
    caches.open(SHELL_CACHE).then(cache => cache.addAll(SHELL_ASSETS))
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('kookpot-shell-') && key !== SHELL_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

/** Recipe photos: serve from cache, fetch once, keep forever. */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  // Opaque responses (no CORS) are fine to store for images and fonts.
  if (response && (response.ok || response.type === 'opaque')) {
    cache.put(request, response.clone());
  }
  return response;
}

/** App code: use the network when it is there, fall back to the cached copy. */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request) || await cache.match('./index.html');
    if (cached) return cached;
    throw err;
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (!sameOrigin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, SHELL_CACHE));
    return;
  }

  if (request.destination === 'image') {
    event.respondWith(
      cacheFirst(request, IMAGE_CACHE).catch(() => caches.match('./images/icon-192.png'))
    );
    return;
  }

  // Shell assets: cache first so a cold offline start is instant, but refresh
  // in the background so a new deploy is picked up on the next launch.
  event.respondWith(
    caches.open(SHELL_CACHE).then(async cache => {
      const cached = await cache.match(request);
      const network = fetch(request)
        .then(response => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
