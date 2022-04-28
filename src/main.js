import { startAlpine } from './js/alpine'
import { setupCarousel } from './js/carousel'
import { applyWorkarounds } from './js/workaround'

// Go to anchor on scroll
if (location.hash) {
  location.href = location.hash
}

if ('serviceWorker' in navigator) {
  // noinspection JSIgnoredPromiseFromCall
  navigator.serviceWorker.register(new URL('service-worker.js', import.meta.url), {
    type: 'module',
  })
}

applyWorkarounds()
setupCarousel()

// Make sure Alpine is starting at the end of the program.
startAlpine()
