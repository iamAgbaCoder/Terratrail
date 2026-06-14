/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A2570',
          800: '#1a3a8a',
        },
        primary: '#2F5FFF',
        success: '#22C55E',
        text: '#111827',
        muted: '#6B7280',
        border: '#E5E7EB',
        'light-gray': '#F5F7FA',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '2xs': '0.75rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'xl': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'feature': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
