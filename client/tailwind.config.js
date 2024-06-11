/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        deepBlue: '#02042a',
        lightBlue : "#2b84ea",
        lightBlue300 : "#4b94ed",
        lightBlue500 : "#0b72e7",
        greenLight : "#61cea6",
        darkGreenLight : "#00C07A",
        grayText : "#818597",
        lightgray : "#e2e2e2",
        grayBlue : "#344a6c",
        deepBlueHead : "#162f56",
        gray2 : "#525a76"
       },
    },
  },
  plugins: [],
}

