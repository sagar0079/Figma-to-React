/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        gray : "#242424",
        purple : "#260057",
        yellowlight : "rgba(252, 202, 63, 1)",
        yellowdark : "rgba(255, 234, 174, 1)",
        red : "#530B10",

      },
    },
  },
  plugins: [],
}
