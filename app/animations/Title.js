import Animation from 'classes/Animation'
import { calculate, split } from 'utils/text'
import each from 'lodash/each'
import GSAP from 'gsap'

export default class Title extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })

    split({ element: this.element, append: true })
    split({ element: this.element, append: true })

    this.elementLinesSpans = this.element.querySelectorAll('span span')
  }

  animateIn () {
    this.animateInTimeline = GSAP.timeline({
      delay: 0.5
    })

    this.animateInTimeline.set(this.element, {
      autoAlpha: 1
    })

    each(this.elementLines, (line, index) => {
      this.animateInTimeline.fromTo(line, {
        yPercent: 100
      }, {
        delay: index * 0.2,
        duration: 1.5,
        ease: 'expo.out',
        yPercent: 0
      }, 0)
    })
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  onResize () {
    this.elementLines = calculate(this.elementLinesSpans)
  }
}
