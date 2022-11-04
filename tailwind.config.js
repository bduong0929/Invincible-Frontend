/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: "bodoni",
        shapiro: "shapiro",
        achivo: "achivo"
      }
    },
  },
  plugins: [],
}