const image = (name) => {
  switch (name) {
    case 'brand.icon':
      return require('../assets/icons/covidfo-icon.svg');
    case 'brand.logo':
      return require('../assets/covidfo.svg');
    case 'hamburger':
      return require('../assets/icons/menu.svg');
    case 'cross':
      return require('../assets/icons/x.svg');
    case 'war':
      return require('../assets/desinfectant.svg');
    case 'confirm':
      return require('../assets/icons/infected.svg');
    case 'dead':
      return require('../assets/icons/dead.svg');
    case 'healthy':
      return require('../assets/icons/healthy.svg');
    case 'aid':
      return require('../assets/icons/aid.svg');
    case 'social_distancing':
      return require('../assets/social_distancing.png');
    case 'wash_hand':
      return require('../assets/wash_hand.png');
    case 'wear_mask':
      return require('../assets/wear_mask.png');
    case 'covid19':
      return require('../assets/covid_19.png');
    case 'dizzy':
      return require('../assets/dizzy.png');
    case 'fever':
      return require('../assets/fever.jpg');
    case 'cough':
      return require('../assets/cough.jpg');
    case 'github':
      return require('../assets/icons/github.svg');
    case 'instagram':
      return require('../assets/icons/instagram.svg');
    case 'refresh':
      return require('../assets/icons/refresh.svg');
    case 'facebook':
      return require('../assets/icons/facebook.svg');
    case 'linkedin':
      return require('../assets/icons/linkedin.svg');
    default:
      return require('../assets/icons/covidfo-icon.svg');
  }
}

const load = (name) => image(name).default;

export default load;
