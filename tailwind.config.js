/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'lightPink' : '#f9dece',
      'gray': {
        300: '#d1d5db',
        400: '#9ca3af',
      },
      'neutral': {
        100: '#f5f5f5',
      },
      'black' :'#0c0a09',
      'white' : '#fafafa',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    
    
  },
  plugins: [],
};
