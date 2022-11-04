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
}
