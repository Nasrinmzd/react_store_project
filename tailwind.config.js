/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height:{
      "100": "42rem",
      "101": "14rem",
      "102": "25rem",
      "103": "10rem"
    },
    maxHeight: {
      "100": "65.2rem"
    },
    width:{
      "101": "14rem",
      "102": "23rem"
    },
    fontFamily:{
      "petit": ['Petit Formal Script', 'san-serif']
    },
    extend: {},
  },
  plugins: [],
}

