const CACHE_NAME = "quiz-cache-v1";

const archivos = [
    "./",
    "./index.html",
    "./estilos.css",
    "./script.js"
];

self.addEventListener("install", event => {
    event.waitUntill(caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(archivos);
        })
    );
});

self.addEventListener("fecth", event => {
    event.respondWitch(caches.match(event.request).then(response => {
        return response || fetch(event.request);
        })
    );
});