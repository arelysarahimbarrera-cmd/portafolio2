/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#d9e2ff',
          200: '#b3c5ff',
          300: '#8aa3ff',
          400: '#5e7dff',
          500: '#3b5bdb',
          600: '#2a44b8',
          700: '#1f3490',
          800: '#15256a',
          900: '#0d1a4d',
          950: '#070f33',
        },
        electric: {
          50: '#eaf6ff',
          100: '#d0ecff',
          200: '#a5d9ff',
          300: '#6cc0ff',
          400: '#34a5ff',
          500: '#0b87f5',
          600: '#0069d6',
          700: '#0054ac',
          800: '#00458a',
          900: '#063a72',
        },
        turquoise: {
          50: '#e6fbfa',
          100: '#c4f5f3',
          200: '#90ebe9',
          300: '#52dcd9',
          400: '#22c2c0',
          500: '#10a8a7',
          600: '#0c8787',
          700: '#0f6b6b',
          800: '#115555',
          900: '#114747',
        },
        accent: {
          50: '#f3eeff',
          100: '#e6dbff',
          200: '#cdb4ff',
          300: '#b087ff',
          400: '#9460f5',
          500: '#7c3ef0',
          600: '#6628d6',
          700: '#521fae',
          800: '#431c8c',
          900: '#391c72',
        },
      },
      boxShadow: {
        glow: '0 0 24px -4px rgba(11, 135, 245, 0.45)',
        'glow-turquoise': '0 0 24px -4px rgba(34, 194, 192, 0.4)',
        'glow-soft': '0 0 40px -12px rgba(59, 91, 219, 0.35)',
        card: '0 8px 30px -12px rgba(7, 15, 51, 0.25)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(13,26,77,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,26,77,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(120,160,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,160,255,0.07) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(11,135,245,0.25), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(34,194,192,0.12), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
