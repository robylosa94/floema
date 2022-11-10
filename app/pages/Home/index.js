import Button from 'classes/Button'
import Page from 'classes/Page'

export default class Home extends Page {
  constructor () {
    super({
      element: '.home',
      elements: {
        link: '.home__link',
        navigation: document.querySelector('.navigation')
      },
      id: 'home'
    })
  }

  create () {
    super.create()

    this.link = new Button({
      element: this.elements.link
    })
  }

  destroy () {
    super.destroy()

    this.link.removeEventListeners()
  }
}
