/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  module: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
