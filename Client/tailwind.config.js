/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-black': '#252525', // Custom soft black
        'secondary-black': '#2D2D2D',  // Custom dark gray
      },
      scale: {
        '102': '1.01', // This changes scale-105 to 110%
      },

    },
  },
  plugins: [],
};
