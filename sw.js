// Basic app-shell cache with stale-while-revalidate for HTML
const VERSION = 'v1.1.1';
const BASE = '/pwa-photo-gallery/';
const APP_SHELL = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.webmanifest',
  BASE + 'sw.js',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-256.png',
  BASE + '404.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET') return;

  // Only handle same-origin requests
  if (url.origin === self.location.origin) {
    // HTML: network-first, fallback to cache, then 404 offline page
    if (req.headers.get('accept')?.includes('text/html')) {
      event.respondWith((async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(VERSION);
          cache.put(req, fresh.clone());
          return fresh;
        } catch (err) {
          const cached = await caches.match(req);
          return cached || caches.match(BASE + '404.html');
        }
      })());
      return;
    }

    // Others: cache-first, then network
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        const cache = await caches.open(VERSION);
        cache.put(req, res.clone());
        return res;
      } catch (err) {
        return new Response('Offline', { status: 503 });
      }
    })());
  }
});
