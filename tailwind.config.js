/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#09080B',
          900: '#111014',
          800: '#1A151E',
          700: '#26202D',
        },
        plum: {
          900: '#16111C',
          800: '#22192E',
          700: '#342645',
        },
        lavender: {
          100: '#F5F0FF',
          200: '#E9DDFF',
          300: '#D5BFFF',
          400: '#BCA5D8',
          500: '#9E85BF',
        },
        roseAccent: {
          400: '#BA6D85',
          500: '#9D5369',
          600: '#7E3E52',
        },
        waterCyan: {
          400: '#38BDF8',
          500: '#0EA5E9',
          300: '#7DD3FC',
        },
        electricViolet: {
          400: '#A855F7',
          500: '#8B5CF6',
          300: '#C084FC',
        },
        ivory: {
          100: '#FFFFFF',
          200: '#FAF5F0',
          300: '#F2EAE5',
          400: '#E4D8D2',
        },
      },
      fontFamily: {
        gothic: ['Cinzel', 'Cinzel Decorative', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Noto Serif', 'serif'],
        display: ['Oxanium', 'Noto Sans', 'sans-serif'],
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
