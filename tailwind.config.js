const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins'],
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      colors: {
        primary: '#F4F5FC',
        secondary__light: '#faf5fc',
        secondary__dark: '#888'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(+100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle .3s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        'section::-webkit-scrollbar': {
          'display': 'none',
        }
      })
    })
  ],
}
