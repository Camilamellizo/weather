/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('./assets/nuves.png')",
       
      },
      colors: {
        'blue-sky': '#272b4a',
        'blue-dark': '#100E1D',
        'blue-buttom': '#3C47E9',
        'gray': '#6E707A',


      },
    },
  },
  plugins: [],
}
