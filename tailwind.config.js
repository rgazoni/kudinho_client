/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#191919',
        text_primary: '#262626',
        primary: '#6266F0',
        secondary: '#5c17e5',
      },
      // Proportion 1 : .25 rem
      width: {
        '144': '36rem',
      },
      inset: {
        '5.5': '1.375rem'
      }
    },
  },
  plugins: [],
}

