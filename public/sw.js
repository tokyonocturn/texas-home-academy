/*
 * Offline app shell for Texas Home Academy.
 * Strategy: precache the built HTML and every local asset it references, then
 * serve same-origin GETs cache-first with a navigation fallback to index.html.
 * Bump CACHE_VERSION on release.
 */
const CACHE_VERSION = 'tha-v4';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

/**
 * The production build fingerprints its JavaScript and CSS, so the file names
 * cannot be listed here. Read the deployed index.html during install and cache
 * every same-origin script, stylesheet, icon, and manifest it references. This
 * is what makes the *first* online visit sufficient for a later offline load:
 * the page's own assets finish loading before the worker exists, so runtime
 * caching alone would leave the first offline reload with no JavaScript.
 */
async function precacheUrls() {
  // Normalize to absolute URLs so the static shell and the index-discovered
  // references deduplicate; cache.addAll rejects a list with duplicate URLs.
  const urls = new Set(SHELL.map((url) => new URL(url, self.location.href).href));
  const response = await fetch('./index.html', { cache: 'reload' });
  if (response.ok) {
    const html = await response.text();
    for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      const raw = match[1];
      if (
        !raw ||
        raw.startsWith('#') ||
        raw.startsWith('data:') ||
        raw.startsWith('//') ||
        /^[a-z][a-z0-9+.-]*:/i.test(raw)
      ) {
        continue;
      }
      urls.add(new URL(raw, self.location.href).href);
    }
  }
  return [...urls];
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      await cache.addAll(await precacheUrls());
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() =>
        caches
          .match('./index.html', { ignoreVary: true })
          .then((hit) => hit || caches.match('./', { ignoreVary: true })),
      ),
    );
    return;
  }

  event.respondWith(
    // Some static hosts add `Vary: Origin` to JS/CSS. Module-script requests
    // carry an Origin header, so a strict Vary check misses the cached copy and
    // turns an otherwise complete offline shell into a blank page.
    caches.match(request, { ignoreVary: true }).then((hit) => {
      if (hit) return hit;
      return fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => hit || Response.error());
    }),
  );
});
