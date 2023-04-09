/* 
  Notes:
    - Hex Shade Generator (https://maketintsandshades.com/)
/*

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Note: @media (min-width: 1279px) || Large Laptops and above+
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
      colors: {
        primary: {
          100: '#cdf0f7',
          200: '#9ce2ee',
          300: '#6ad3e6',
          400: '#39c5dd',
          500: '#07b6d5',
          600: '#0692aa',
          700: '#046d80',
          800: '#034955',
          900: '#01242b',
        },
        success: colors.green,
        danger: colors.rose,
        warning: colors.yellow,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('autoprefixer')],
};
