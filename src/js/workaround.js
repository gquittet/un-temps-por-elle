export const fixVhForMobile = () => {
  // Viewport height fix for mobile
  // Use calc(var(--vh, 1vh) * 100) right after 100vh in CSS.
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const applyWorkarounds = () => {
  fixVhForMobile()
}
