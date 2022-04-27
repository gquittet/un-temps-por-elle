import { startAlpine } from './js/alpine'
import { setupCarousel } from './js/carousel'
import { applyWorkarounds } from './js/workaround'

// Go to anchor on scroll
if (location.hash) {
  location.href = location.hash
}

applyWorkarounds()
setupCarousel()

// Make sure Alpine is starting at the end of the program.
startAlpine()
