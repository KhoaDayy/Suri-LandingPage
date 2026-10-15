/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Instrument Serif'", 'serif'],
        body: ["'Barlow'", 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FFFEFB',
          100: '#FAF5EE',
          200: '#F5ECE0',
          300: '#EBDDCF',
          400: '#DFCCBA',
        },
      },
    },
  },
  plugins: [],
}
