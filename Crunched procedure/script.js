const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.link', { opacity: 0, stagger: .5 })
  .from('.right', { duration: 2, x: '-100vw', ease: 'circ.inOut' }, 1)
  .from('.left', { x: '-100%' }, '<.1')
  .to('.footer', {  y: 0, ease: 'elastic' })
  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

const button = document.querySelector('.button')

button.addEventListener('click', () => {
  timeline.timeScale(2) // To reverse the animations in 2x speed
  timeline.reverse()
})