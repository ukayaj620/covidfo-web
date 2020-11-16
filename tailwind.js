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
      },
    },
    placeholderColor: theme => theme('colors')
  },
  variants: {},
  plugins: [],
}
