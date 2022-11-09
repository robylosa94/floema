import Animation from 'classes/Animation'
import GSAP from 'gsap'

export default class Highlight extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })
  }

  animateIn () {
    this.animateInTimeline = GSAP.timeline({
      delay: 0.5
    })

    this.animateInTimeline.fromTo(this.element, {
      autoAlpha: 0,
      scale: 1.2
    }, {
      autoAlpha: 1,
      duration: 1.5,
      ease: 'expo.out',
      scale: 1
    })
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }
}
