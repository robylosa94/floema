import Component from 'classes/Component'
import each from 'lodash/each'

export default class Animation extends Component {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })

    this.createObserver()

    this.animateOut()
  }

  createObserver () {
    this.observer = new window.IntersectionObserver(entries => {
      each(entries, (entry, key) => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    })

    this.observer.observe(this.element)
  }

  animateIn () {

  }

  animateOut () {

  }

  onResize () {

  }
}
