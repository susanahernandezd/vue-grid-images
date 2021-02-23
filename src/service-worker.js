workbox.setConfig({
  debug: true
})

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://(?:json|via.)placeholder(.*).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'api-json-placeholder',
    // networkTimeoutSeconds: 3,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 48,
        maxAgeSeconds: 5 * 60, // 5 minutes
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  }),
  'GET'
)

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typecode.com/photos/(.*)'),
  workbox.strategies.networkOnly({
    plugins: [
      new workbox.backgroundSync.Plugin('deleteCardQueue', {
        maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
      })
    ]
  }),
  'DELETE'
)

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
