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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.sky.500'),
              '&:hover': {
                color: theme('colors.sky.600'),
              },
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.sky.500'),
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