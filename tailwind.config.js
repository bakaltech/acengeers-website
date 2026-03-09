/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#06B6D4',
        'hero-start': '#FBBF24',
        'hero-end': '#F59E0B',
        'soft-bg': '#F0F9FF',
        'accent': '#22D3EE',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slow-drift': 'slowDrift 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slowDrift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(20px, 5px)' },
          '75%': { transform: 'translate(5px, 15px)' },
        },
      },
    },
  },
  plugins: [],
}