const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{svelte}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-spl-sans)', ...fontFamily.sans],
        mono: ['var(--font-spl-mono)', ...fontFamily.mono],
      },
    },
  },
}
