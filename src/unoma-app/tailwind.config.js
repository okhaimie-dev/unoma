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
      },
      borderColor: {
        "purple": "#4E5275"
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}