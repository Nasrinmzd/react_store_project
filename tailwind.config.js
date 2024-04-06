/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height:{
      "100": "44rem"
    },
    fontFamily:{
      "petit": ['Petit Formal Script', 'san-serif']
    },
    extend: {},
  },
  plugins: [],
}

