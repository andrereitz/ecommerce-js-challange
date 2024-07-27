import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'off-white': '#FAFAFA',
      'off-black': '#0F0D23',
      'gray-dark': '#323232',
      'gray-light': '#646464',
      'gray-x-light': '#808080',
      'gray-xx-light': '#969696',
      'orange': '#FF9F24'
    },
    fontFamily: {
      'dm': ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}