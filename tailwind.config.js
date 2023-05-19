/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ['Bebas Neue', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui",'flowbite/plugin')
  ],
}