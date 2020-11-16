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
      case 'war':
        return require('../assets/desinfectant.svg').default;
      case 'confirm':
        return require('../assets/icons/infected.svg').default;
      case 'dead':
        return require('../assets/icons/dead.svg').default;
      case 'healthy':
        return require('../assets/icons/healthy.svg').default;
      case 'aid':
        return require('../assets/icons/aid.svg').default;
      default:
        return require('../assets/icons/covidfo-icon.svg').default;
    }
  }
}