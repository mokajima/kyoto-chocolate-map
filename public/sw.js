const CACHE_NAME = 'kyoto-chocolate-map-v1';
const urlsToCache = [
  '/',
  'favicon.ico',
  'locations.json',
  'manifest.json',
  'powered-by-foursquare-white.svg',
  'static/js/bundle.js',
  'https://fonts.googleapis.com/css?family=Open+Sans|Sofia'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('kyoto-chocolate-map-') && cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return cache.delete(cacheName);
        })
      );
    })
  );
});
