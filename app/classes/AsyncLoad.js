import each from 'lodash/each'

import Component from 'classes/Component'

export default class AsyncLoad extends Component {
  constructor ({ element }) {
    super({
      element
    })

    this.createObserver()
  }

  createObserver () {
    this.observer = new window.IntersectionObserver(entries => {
      each(entries, (entry, key) => {
        if (entry.isIntersecting) {
          if (!this.element.src) {
            this.element.src = this.element.getAttribute('data-src')
            this.element.onload = _ => {
              this.element.classList.add('loaded')
            }
          }
        }
      })
    })

    this.observer.observe(this.element)
  }
}
