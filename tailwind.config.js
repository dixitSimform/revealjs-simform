/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "000000",
      slate: {
        100: "#f0f9ff",
        200: "#d8d8d8",
        600: "#3d3d3d",
      },
      rose: {
        500: "#ef5366",
        600: "#ff4d63",
      },
    },
  },
  extend: {},
  plugins: [],
};
