const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'marvel':['Marvel', 'Poppins', 'sans-serif'],
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      use: {
       blue: '#000266',
       yellow: '#d0ff00',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      amber: colors.amber,
      orange: colors.orange,
      green: colors.green,
      teal: colors.teal,
      amber: colors.amber,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      yellow:colors.yellow,
      rose:colors.rose,
      
    },
    extend: {
      backgroundImage: theme => ({
     
      }),
  },},
  variants: {
    extend: {},
  },
  plugins: [],
}