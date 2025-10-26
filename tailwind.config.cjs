/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#3d5a3c',
          light: '#5a7a59',
        }
      }
    },
  },
  plugins: [],
}

