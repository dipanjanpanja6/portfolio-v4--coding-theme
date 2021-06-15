self.addEventListener("install", function (e) {
  self.skipWaiting()
})

self.addEventListener("activate", function (e) {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll()
    })
    .then(function (clients) {
      clients.forEach(client => client.navigate(client.url))
    })
})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (let registration of registrations) {
        registration.unregister().then(bool => {
          console.log("unregister: ", bool)
        })
      }
    })
  })
}
