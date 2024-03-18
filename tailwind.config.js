/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        poppins: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'], // Corrected here
      },
    },
  },
  plugins: [],
}
