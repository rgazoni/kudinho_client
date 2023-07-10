/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#191919',
        text_primary: '#262626',
        primary: '#6266F0',
        secondary: '#5c17e5',
        bg_card_top: '#2D2D2D',
        bg_card_bottom: '#262626',

      },
      // Proportion 1 : .25 rem
      width: {
        '144': '36rem',
      },
      inset: {
        '5.5': '1.375rem'
      },
    },
  },
  plugins: []
});

