/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFB',
          100: '#FAF5EE',
          200: '#F5ECE0',
          300: '#EBDDCF',
          400: '#DFCCBA',
        },
        taro: {
          50: '#FAF7FF',
          100: '#F3ECFF',
          200: '#E6DAFE',
          300: '#D0BCFF',
          400: '#B095F2',
          500: '#9472E8',
          600: '#754ED3',
          700: '#5A35B3',
        },
        berry: {
          50: '#FFF5F7',
          100: '#FFE6EC',
          200: '#FFCCD7',
          300: '#FFA3B7',
          400: '#F28B9F',
          500: '#E05E7B',
          600: '#C73859',
        },
        pudding: {
          50: '#FFFDF5',
          100: '#FFF8E1',
          200: '#FFEDB3',
          300: '#FFDD80',
          400: '#FFB84C',
          500: '#F29C38',
          600: '#D47B1E',
        },
        mint: {
          50: '#F0FDFB',
          100: '#DCFAF6',
          200: '#B5F3EB',
          300: '#7DE7DA',
          400: '#46D4C3',
          500: '#26B4A3',
        },
        chocolate: {
          900: '#1D1726',
          800: '#2B2338',
          700: '#3D324E',
          600: '#534668',
          500: '#6E6085',
          400: '#8E80A5',
          300: '#B3A7C7',
          200: '#DBD3EB',
        },
      },
      fontFamily: {
        kawaii: ['"Comfortaa"', '"M PLUS Rounded 1c"', 'sans-serif'],
        display: ['"Quicksand"', '"Outfit"', 'sans-serif'],
        story: ['"M PLUS Rounded 1c"', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-soft': 'floatSoft 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'wiggle-gentle': 'wiggleGentle 3s ease-in-out infinite',
        'bubble-rise': 'bubbleRise 5s ease-in-out infinite',
        'jiggle': 'jiggle 0.6s ease-in-out',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.8deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggleGentle: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        bubbleRise: {
          '0%': { transform: 'translateY(15px) scale(0.9)', opacity: '0.4' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-20px) scale(1.05)', opacity: '0' },
        },
        jiggle: {
          '0%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.08, 0.92)' },
          '60%': { transform: 'scale(0.95, 1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'cafe': '0 12px 35px -8px rgba(90, 53, 179, 0.08), 0 4px 12px -2px rgba(242, 139, 159, 0.06)',
        'pudding': '0 10px 25px -4px rgba(242, 156, 56, 0.25)',
        'berry': '0 10px 25px -4px rgba(242, 139, 159, 0.3)',
        'taro': '0 10px 30px -4px rgba(148, 114, 232, 0.3)',
      },
    },
  },
  plugins: [],
}
