/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./privacy/**/*.html",
    "./terms/**/*.html",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          ink: "#334155"
        }
      }
    }
  },
  plugins: [],
};