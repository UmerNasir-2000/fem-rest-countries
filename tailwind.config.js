
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'ver-dark-blue-text': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

