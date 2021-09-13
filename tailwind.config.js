const { colors } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  variants: {
    extend: {
      padding: ['hover'],
  }
  },
  darkMode :'media',
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
         gray: colors.white,
         blue:colors.blue,
        'blue': '#1DA1F2',
        'darkblue': '#2795D9',
        'lightblue': '#EFF9FF',
        'dark': '#657786',
        'light': '#AAB8C2',
        'lighter': '#E1E8ED',
        'lightest': '#F5F8FA',
      },
      fill:theme=> theme('colors'),
      overscrollBehavior: ['hover', 'focus'],
    },
   
  },

  plugins: [
    require('@tailwindcss/ui',),
    require('@tailwind-scrollbar')
  ]
};
