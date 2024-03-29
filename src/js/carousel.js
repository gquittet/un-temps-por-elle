import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css'

export const setupCarousel = () => {
  new Splide('.splide', {
    start: 0,
    type: 'fade',
    arrows: true,
    cover: true,
    height: '20rem',
    width: '80vw',
    lazyLoad: 'nearby',
    interval: 4000,
    speed: 1500,
    rewindSpeed: 2000,
    rewind: true,
    rewindByDrag: true,
    drag: true,
    autoplay: true,
    pauseOnHover: false,
    pagination: true,
  }).mount()
}
