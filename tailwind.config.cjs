/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        35: "8.75rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-bg": "#0c1625",
      },
    },
  },
  plugins: [],
});
