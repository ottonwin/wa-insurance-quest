const CACHE = "indie-quest-v9";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=8",
  "./app.js?v=8", "../sync-config.js?v=9", "../sync.js?v=9",
  "./data-week1.js?v=8",
  "./data-week2.js?v=8",
  "./data-week3.js?v=8",
  "./data-week4.js?v=8",
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
