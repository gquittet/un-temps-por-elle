import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css'

export const setupCarousel = (settings = {}) => {
  new Splide('.splide', {
    cover: true,
    height: '20rem',
    width: '60%',
    lazyLoad: true,
    interval: 4000,
    autoplay: true,
    rewind: true,
    arrows: false,
    ...settings,
  }).mount()
}
