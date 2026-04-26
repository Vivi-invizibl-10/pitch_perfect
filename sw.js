self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/pitch_perfect/",
        "/pitch_perfect/index.html"
      ]);
    })
  );
});
