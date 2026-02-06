/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: {
          700: '#0369a1', // Azul MTI
        },
        secondary: '#10b981', // Verde
      },
    },
  },
  plugins: [],
}