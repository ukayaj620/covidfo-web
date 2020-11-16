export default {
  load(name) {
    switch (name) {
      case 'brand.icon':
        return require('../assets/icons/covidfo-icon.svg').default;
      case 'brand.logo':
        return require('../assets/covidfo.svg').default;
      case 'hamburger':
        return require('../assets/icons/menu.svg').default;
      case 'cross':
        return require('../assets/icons/x.svg').default;
      default:
        return require('../assets/icons/covidfo-icon.svg').default;
    }
  }
}