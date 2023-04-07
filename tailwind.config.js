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
          100: '#d1efdb',
          200: '#a2deb6',
          300: '#74ce92',
          400: '#45bd6d',
          500: '#17ad49',
          600: '#128a3a',
          700: '#0e682c',
          800: '#09451d',
          900: '#05230f',
        },
        success: colors.green,
        danger: colors.rose,
        warning: colors.yellow,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('autoprefixer')],
};
