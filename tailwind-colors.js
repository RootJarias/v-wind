// Setting up extended default colors for tailwind config (https://maketintsandshades.com/)
import colors from 'tailwindcss/colors';

export default {
  primary: {
    100: '#cde9ee',
    200: '#9bd3dd',
    300: '#6abecc',
    400: '#38a8bb',
    500: '#0692aa',
    600: '#057588',
    700: '#045866',
    800: '#023a44',
    900: '#011d22',
  },
  success: colors.green,
  danger: colors.rose,
  warning: colors.yellow,
};
