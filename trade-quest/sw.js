const CACHE = "trade-quest-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=5",
  "./app.js?v=5",
  "./data-week1.js?v=5",
  "./data-week2.js?v=5",
  "./data-week3.js?v=5",
  "./data-week4.js?v=5",
  "./data-week5.js?v=5",
  "./data-week6.js?v=5",
  "./data-week7.js?v=5",
  "./data-week8.js?v=5",
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
