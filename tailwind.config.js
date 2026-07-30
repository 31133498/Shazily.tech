/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        zinc: {
          300: '#D4D4D8',
          500: '#71717A',
          800: '#27272A',
        },
        neutral: {
          DEFAULT: '#404040',
        },
      },
    },
  },
  plugins: [],
}

