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
        100: '#F3F5F7',
        200: '#C8CCD0',
        300: '#ADB3B8',
        400: '#9299A0',
        500: '#768089',
        600: '#5F666D',
        700: '#474D52',
        800: '#2F3337',
        900: '#181A1B',
      },
      'info': {
        light: '#C8DFF8',
        main: '#3875EA',
        dark: '#0D2759',
      },
      'success': {
        light: '#C9F5D8',
        main: '#23B93A',
        dark: '#0C4014',
      },
      'warning': {
        light: '#F6F6E8',
        main: '#CADD32',
        dark: '#2B2C07',
      },
      'error': {
        light: '#FAD8D8',
        main: '#DC2E2E',
        dark: '#570F0F',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
