/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gothic A1', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#05112A',
          900: '#0A1F5C',
          800: '#0F2A7A',
          700: '#1a3a8a',
          600: '#2151C5',
        },
        brand: {
          blue: '#2563EB',
          indigo: '#4F46E5',
          light: '#DBEAFE',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '18': '4.5rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.06)',
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'elevated': '0 12px 40px rgba(0,0,0,0.14)',
        'glow': '0 0 40px rgba(37,99,235,0.18)',
        'glow-lg': '0 0 80px rgba(37,99,235,0.22)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.12)',
        'feature': '0 20px 60px -10px rgba(0,0,0,0.2)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
