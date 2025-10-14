const CACHE_NAME = "rlb-matrix-cache-v1";
const urlsToCache = [
  "./matrix_weather_rlb_final.html",
  "./manifest.json"
];

// install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});