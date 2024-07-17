/** @type {import('tailwindcss').Config} */
const {nextui, colors} = require("@nextui-org/react");
const { color } = require('framer-motion');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        shadows: ['Shadows Into Light', 'cursive'],
      },
      colors: {
        red: {
          dark: '#8B1B0E'
        },
        gray: {
          dark: '#D9D9D9'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
