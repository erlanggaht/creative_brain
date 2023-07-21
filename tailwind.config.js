/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors : {
        "dasar" : "#090915" ,
        "ping" : "#f86f7f",
        'ungu' : "#7079FE"
      },
      backgroundImage : {
        "hero" : "url('/src/assets/business-3d-pink-brain (1).png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}