self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request).catch(() => {
        return new Response("Offline", { status: 200 });
      });
    })
  );
});
