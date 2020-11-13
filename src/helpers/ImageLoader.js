export default {
  image: (name) => {
    switch (name) {
      case 'brand.icon':
        return require('../assets/covidfo-icon.svg');
      case 'brand.logo':
        return require('../assets/covidfo.svg');
      default:
        return require('../assets/covidfo-icon.svg')
    }
  }
}