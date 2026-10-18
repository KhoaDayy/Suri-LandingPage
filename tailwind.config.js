/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Nunito'", "'Outfit'", 'sans-serif'],
        heading: ["'Nunito'", "'Outfit'", 'sans-serif'],
        fantasy: ["'Outfit'", 'sans-serif'],
        serif: ["'Be Vietnam Pro'", 'sans-serif'],
        body: ["'Be Vietnam Pro'", 'system-ui', 'sans-serif'],
        sans: ["'Be Vietnam Pro'", 'system-ui', 'sans-serif'],
        mono: ["'Be Vietnam Pro'", 'ui-monospace', 'monospace'],
      },
      colors: {
        page: {
          bg: '#FAFAF7',
          dark: '#141517',
        },
        charcoal: {
          950: '#0E0F11',
          900: '#111215',
          850: '#141517', // Base page canvas
          800: '#1B1D21', // Surface Level 1 (cards, navbar, panels)
          750: '#22252B', // Surface Level 2 (raised, insets, active tabs)
          700: '#2A2E36', // Surface Level 3 (elevated, dropdowns, modals)
          600: '#353A44',
          500: '#4D5360',
        },
        offwhite: {
          DEFAULT: '#ECEBE6', // Warm off-white primary text
          muted: '#A1A6B3',   // Muted neutral gray secondary text
          dim: '#7A808E',     // Tertiary metadata / caption text
        },
        brand: {
          blue: '#315D9C',
          'blue-dark': '#79ACE0', // Contrast-adapted celestial blue
          gold: '#C9A95C',
          'gold-dark': '#D4B86A', // Contrast-adapted archival gold
          violet: '#7660A7',
          'violet-dark': '#A593D1', // Contrast-adapted Irus violet
        },
        theme: {
          bg: 'var(--theme-bg)',
          surface: 'var(--theme-surface)',
          'surface-raised': 'var(--theme-surface-raised)',
          'surface-sunken': 'var(--theme-surface-sunken)',
          'surface-elevated': 'var(--theme-surface-elevated)',
          'text-primary': 'var(--theme-text-primary)',
          'text-secondary': 'var(--theme-text-secondary)',
          'text-muted': 'var(--theme-text-muted)',
          'accent-brand': 'var(--theme-accent-brand)',
          'accent-gold': 'var(--theme-accent-gold)',
          'accent-violet': 'var(--theme-accent-violet)',
          border: 'var(--theme-border)',
          'border-medium': 'var(--theme-border-medium)',
          'border-strong': 'var(--theme-border-strong)',
        },
        paper: {
          white: '#FFFFFF',
          ivory: '#F8F7F2',
          blue: '#EAF3FB',
        },
        ink: {
          DEFAULT: '#292D3A',
          secondary: '#555B6C',
          muted: '#858B98',
        },
        suri: {
          blue: '#75B8E6',
          cyan: '#70D7E1',
          deep: '#315D9C',
          lavender: '#A8A4DC',
        },
        accent: {
          gold: '#C9A95C',
          violet: '#7660A7',
          coral: '#CB7188',
        },
        cream: {
          DEFAULT: '#FFF5EE',
          50: '#FFFEFB',
          100: '#FAF5EE',
          200: '#F5ECE0',
          300: '#EBDDCF',
          400: '#DFCCBA',
        },
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
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'subtle-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '180': '180ms',
        '220': '220ms',
        '400': '400ms',
        '500': '500ms',
      },
      scale: {
        '1015': '1.015',
        '102': '1.02',
        '1025': '1.025',
      },
    },
  },
  plugins: [],
}
