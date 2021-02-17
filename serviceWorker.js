const staticDevCoffee = "dev-prestamos-v1"
const urlsToCache = [
    "/",
    "./index.html",
    "./css/style.css",
    "./js/app.js",
    "./js/index.js",
    "./assets/img/logo-casa-peruana-min.png",
    "./assets/img/consultora-300.webp",
    "./assets/img/fondo-beneficios-300.webp",
    "./assets/img/cliente-satisfecho-1024.webp",
    "./assets/img/homeport-1024.jpg",
    "./assets/img/contacme.jpg",
    "./assets/img/beneficios/adelantar-cuotas-300.webp",
    "./assets/img/beneficios/cuotas-elegibles-300.webp",
    "./assets/img/beneficios/tasa-interes-300.webp",
    "./assets/img/beneficios/operacion-confiable-300.webp",
    "./assets/img/personas-estadist-medium.webp",
    "./assets/img/beneficios/sin-comisiones-300.webp",
    "./assets/img/usuarios/usuario3-300.webp",
    "./assets/img/usuarios/usuario2-300.webp",
    "./assets/img/usuarios/usuario1-300.webp",
    "./assets/img/clientes/cliente1A.png",
    "./assets/img/clientes/cliente2A.png",
    "./assets/img/clientes/cliente3A.png",
    "./assets/img/clientes/cliente4A.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})