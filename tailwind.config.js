/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      
      colors: {
        sch: {
          yellow: '#FCD980', 
          orange: '#FF9F68',
          blue: '#AECBEB',
          green: '#9BE3A6',
          purple: '#E0C3FC',
          dark: '#111827', 
          light: '#F9FAFB'
        }
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}