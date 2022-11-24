/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        softOrange: '#e9ab53',
        softRed: '#f15e50',
        offWhite: '	#fffdfa',
        grayishBlue: '#c5c6ce',
        darkGrayishBlue: '#5d5f79',
        veryDarkBlue: '#00001a'
      },
      screens:{
        xs: "375px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1440px",
        xl: "1700px",
      }
    },
  },
  plugins: [],
}