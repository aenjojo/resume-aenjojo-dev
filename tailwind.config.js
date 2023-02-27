const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-spl-sans)', ...fontFamily.sans],
        mono: ['var(--font-spl-mono)', ...fontFamily.mono],
      },
      colors: {
        'primary': {
          50: '#D6DCFF',
          100: '#ADB8FF',
          200: '#8595FF',
          300: '#5C72FF',
          400: '#334EFF',
          500: '#0020FF',
          600: '#001EE0',
          700: '#0018B8',
          800: '#00138F',
          900: '#000E66',
        },
        'secondary': {
          50: '#FCD9EB',
          100: '#FAB3D6',
          200: '#F78DC2',
          300: '#F466AD',
          400: '#F24099',
          500: '#EE1280',
          600: '#D20F70',
          700: '#AC0C5C',
          800: '#860947',
          900: '#5F0733',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
