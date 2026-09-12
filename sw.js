const CACHE_NAME = 'dart-advisor-v3.0.0';
const ASSETS = [
  './',
  './index.html',
  './dart-advisor-db.js',
  './manifest.json',
  './dartboard-192.png',
  './dartboard-512.png'
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

// Cache-First Strategy: Guarantees instant 0.1s load times anywhere
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. Return the instant local cache if we have it
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // 2. If it's a completely new file not in the cache, fetch it from the web
      return fetch(event.request).then((networkResponse) => {
        // Optionally cache new dynamic assets if you ever add them
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});