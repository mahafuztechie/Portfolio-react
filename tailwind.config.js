const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
       'waveup': "url('./images/waveup.png')",
       'wavedown': "url('./images/wavedown.png')",
       'wave-up': "url('./images/wave-up.png')",
       'wave-down': "url('./images/wave-down.png')",
       'tilttop': "url('./images/tilttop.svg')",
       'tiltbot': "url('./images/tiltbot.svg')",
       'wavet': "url('./images/wavet.svg')",
       'waveb': "url('./images/waveb.svg')",
       'nueralblue': "url('./images/neuralblue.jpg')",
       'nueralwhite': "url('./images/neuralwhite.jpg')",
       'white3d': "url('./images/white3d.jpg')",




      }),
  },},
  variants: {
    extend: {},
  },
  plugins: [],
}