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
    spacing: {
      '72': '18rem',
      '80': '20rem',
      '88': '22rem',
    },
    extend: {
      colors: {
        primary: '#073BC8',
        dark: '#00144C',
        muted: '#979797',
        accent: '#FAFAFA'
      }
    },
    placeholderColor: theme => theme('colors')
  },
  variants: {},
  plugins: [],
}
