const CACHE_NAME = 'dart-advisor-v1.0.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Cache all core files immediately upon install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Clean up old caches when upgrading versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Network-first with offline cache fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clonedResponse = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});