import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
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
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
        ],
      },
      colors: {
        primary: {
          50:  '#EBEDF4',
          100: '#D4D7E9',
          200: '#A9AFD3',
          300: '#7F88BD',
          400: '#5A689F',
          500: '#3A4F89',  // main midtone
          600: '#2F3E6D',
          700: '#232E52',
          800: '#172036',
          900: '#0B1020'   // your base
        }
      }
      ,
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

export default config;