import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css'

export const setupCarousel = () => {
  new Splide('.splide', {
    arrows: true,
    cover: true,
    height: '20rem',
    width: '80vw',
    lazyLoad: 'nearby',
    interval: 4000,
    speed: 1500,
    rewindSpeed: 2000,
    rewind: true,
    rewindByDrag: false,
    drag: false,
    autoplay: true,
    pauseOnHover: false,
  }).mount()
}
