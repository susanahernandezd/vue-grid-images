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
        statuses: [200]
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
        maxAgeSeconds: 30 * 60, // 30 minutes
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [200]
      })
    ]
  }),
  'GET'
)

// Queue up failed requests and retry them when future sync events are fired
const bgSyncPlugin = new workbox.backgroundSync.Plugin('DeleteCardQueue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
})

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/photos/(.*)'),
  workbox.strategies.networkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'DELETE'
)

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
