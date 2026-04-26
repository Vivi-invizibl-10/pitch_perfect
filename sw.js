self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(k => {
          if (k !== "app-cache") return caches.delete(k);
        })
      );
    })
  );
});
