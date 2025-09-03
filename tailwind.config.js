/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#2C3E50',
        teal: '#6BBAA7',
        gold: '#F2C14E',
        dark: '#121212',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fade: 'fadeIn 0.6s ease forwards',
        borderGlow: 'borderGlow 4s linear infinite', // added here
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.7', filter: 'hue-rotate(0deg)' },
          '50%': { opacity: '1', filter: 'hue-rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
}
