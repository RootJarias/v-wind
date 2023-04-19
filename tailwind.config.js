/* 
  Notes:
    - Hex Shade Generator (https://maketintsandshades.com/)
/*

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const customColors = require('./tailwind-colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Note: @media (min-width: 1200px) || Large Laptops and above+
      xl: { min: '1200px' },

      // Note: @media (max-width: 1199px) || Laptops
      lg: { max: '1199px' },

      // Note: @media (max-width: 991px) || Tablets
      md: { max: '991px' },

      // Note: @media (max-width: 767px) || Mobiles
      sm: { max: '767px' },

      // Note: @media (max-width: 425px) || Small Mobiles and below-
      xs: { max: '425px' },
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: customColors,
    },
  },
  plugins: [require('@tailwindcss/typography'), require('autoprefixer')],
};
