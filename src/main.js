import { startAlpine } from './js/alpine'
import { setupCarousel } from './js/carousel'

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

setupCarousel()

// Make sure Alpine is starting at the end of the program.
startAlpine()
