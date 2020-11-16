module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      header: ['Quicksand', 'sans-serif'],
      content: ['Inter', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        primary: '#073BC8',
        dark: '#00144C',
        muted: '#979797',
        accent: '#FAFAFA'
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      }
    },
    placeholderColor: theme => theme('colors')
  },
  variants: {},
  plugins: [],
}
