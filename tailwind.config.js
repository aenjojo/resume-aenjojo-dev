const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        100: '#CCD2FF',
        200: '#99A6FF',
        300: '#6679FF',
        400: '#334DFF',
        500: '#0020FF',
        600: '#001ACC',
        700: '#001399',
        800: '#000D66',
        900: '#000633',
      },
      'secondary': {
        100: '#FCCFE6',
        200: '#F8A0CC',
        300: '#F570B2',
        400: '#F14199',
        500: '#EE1280',
        600: '#BE0E66',
        700: '#8F0A4C',
        800: '#5F0733',
        900: '#300319',
      },
      'base': {
        100: '#F5FAFF',
        200: '#D5DCE3',
        300: '#B7BFC7',
        400: '#9AA2AB',
        500: '#7E868F',
        600: '#636B73',
        700: '#495057',
        800: '#30363B',
        900: '#181C1F',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-spl-sans)', ...fontFamily.sans],
        mono: ['var(--font-spl-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
