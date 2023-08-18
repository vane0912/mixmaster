/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'stronger-green': '#101E19',
        'week-green': '#26453E',
        'buttons-orange': '#FC9049',
        'backgrounds-salmon': '#F4E8E2',
        'graytxt': '#2C2D26',
        'whitebg': '#FEFEFE'
      }
    }
  },
  plugins: [],
}

