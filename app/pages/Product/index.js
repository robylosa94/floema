import Button from 'classes/Button'
import Page from 'classes/Page'

export default class Product extends Page {
  constructor () {
    super({
      element: '.product',
      elements: {
        button: '.product__button'
      },
      id: 'product'
    })
  }

  create () {
    super.create()

    this.link = new Button({
      element: this.elements.button
    })
  }

  destroy () {
    super.destroy()

    this.link.removeEventListeners()
  }
}
