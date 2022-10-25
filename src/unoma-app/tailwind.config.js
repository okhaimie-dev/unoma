/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue": "#008BEE",
        "purple": "#4E5275"
      },
      textColor: {
        "blue": "#008BEE"
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    borderColor: {
      "purple": "#4E5275"
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}