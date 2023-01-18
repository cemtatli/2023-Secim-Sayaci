/** @type {import('tailwindcss').Config} */
module.exports = {
  module: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
