/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Dela Gothic One'", "'Syne'", 'sans-serif'],
        heading: ["'Syne'", "'Dela Gothic One'", 'sans-serif'],
        body: ["'Plus Jakarta Sans'", "'Barlow'", 'sans-serif'],
        serif: ["'Instrument Serif'", 'serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FFF5EE',
          50: '#FFFEFB',
          100: '#FAF5EE',
          200: '#F5ECE0',
          300: '#EBDDCF',
          400: '#DFCCBA',
        },
        candy: {
          cream: '#FFF5EE',
          pink: '#FF79AC',
          cyan: '#65E4E0',
          yellow: '#FFE36E',
          lilac: '#B7A1FF',
          ink: '#282436',
        },
        ink: '#282436',
      },
      boxShadow: {
        'pop-sm': '2px 2px 0px #282436',
        'pop': '4px 4px 0px #282436',
        'pop-md': '6px 6px 0px #282436',
        'pop-lg': '8px 8px 0px #282436',
        'pop-pink': '4px 4px 0px #FF79AC',
        'pop-cyan': '4px 4px 0px #65E4E0',
        'pop-yellow': '4px 4px 0px #FFE36E',
        'pop-lilac': '4px 4px 0px #B7A1FF',
      },
    },
  },
  plugins: [],
}
