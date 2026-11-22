const CACHE = "trade-quest-v13";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=15",
  "./app.js?v=15", "../sync-config.js?v=16", "../sync.js?v=16", "../ask.js?v=16",
  "./picks.js?v=15",
  "./data-week1.js?v=15",
  "./data-week2.js?v=15",
  "./data-week3.js?v=15",
  "./data-week4.js?v=15",
  "./data-week5.js?v=15",
  "./data-week6.js?v=15",
  "./data-week7.js?v=15",
  "./data-week9.js?v=2",
  "./data-week10.js?v=2",
  "./data-week8.js?v=15",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
