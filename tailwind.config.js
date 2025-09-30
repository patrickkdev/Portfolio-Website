const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-sarif'],
      },
      colors: {
        primary: {
          50: '#f0f5f9', // very light icy blue
          100: '#d9e3ed', // soft cool gray-blue
          200: '#b8c9da', // muted steel blue
          300: '#97afc6', // soft slate blue
          400: '#7896b2', // mid-tone dusty blue
          500: '#5f7f9e', // medium sophisticated blue accent
          600: '#4d6a85', // darker blue for dark mode/highlight
          700: '#3c5469', // rich, muted navy
          800: '#2b3f4f', // deep slate for dark backgrounds
          900: '#192933', // near-black, elegant
        },
        // primary: {
        //   "50": "#e8f9f1",
        //   "100": "#77d9ab",
        //   "200": "#61d29d",
        //   "300": "#4acc8f",
        //   "400": "#34c581",
        //   "500": "#1dbf73",
        //   "600": "#1aac68",
        //   "700": "#17995c",
        //   "800": "#148651",
        //   "900": "#117345",
        // },
        indigo: {
          overlay: 'rgba(99,102,241, 0.8)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.primary.500'),
              fontSize: theme('fontSize.xl'),
              fontStyle: 'not-italic',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
