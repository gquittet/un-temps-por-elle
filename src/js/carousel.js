import 'swiper/swiper-bundle.min.css'
// noinspection JSFileReferences
import Swiper from 'swiper/swiper-bundle.min.js'

export const setupCarousel = () => {
  new Swiper('.swiper', {
    // configure Swiper to use modules
    loop: true,

    speed: 1500,
    autoplay: {
      delay: 4000,
    },

    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
  })
}
