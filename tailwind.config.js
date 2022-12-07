/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('./assets/nuves.png')",
       
      }
    },
  },
  plugins: [],
}
