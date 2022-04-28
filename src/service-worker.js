import { manifest, version } from '@parcel/service-worker'

async function install() {
  const cache = await caches.open(version)
  await cache.addAll(['/', ...manifest])
}

addEventListener('install', (e) => e.waitUntil(install()))

async function activate() {
  const keys = await caches.keys()
  await Promise.all(keys.map((key) => key !== version && caches.delete(key)))
}

addEventListener('activate', (e) => e.waitUntil(activate()))

addEventListener('fetch', (e) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (e.request.method !== 'GET') return

  // Prevent the default, and handle the request ourselves.
  e.respondWith(
    (async function () {
      // Try to get the response from a cache.
      const cache = await caches.open(version)
      const cachedResponse = await cache.match(e.request)

      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        e.waitUntil(cache.add(e.request))
        return cachedResponse
      }

      // If we didn't find a match in the cache, use the network.
      return fetch(e.request)
    })(),
  )
})
