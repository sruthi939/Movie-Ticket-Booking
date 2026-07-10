/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,営業}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F84565",
        "primary-dull": "#D63854",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      }
    },
  },
  plugins: [],
}
