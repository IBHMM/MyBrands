/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1541': { 'max': '1540px' },
        'max-1250': { 'max': '1250px' },
      },
    },
  },
  plugins: [],
}
