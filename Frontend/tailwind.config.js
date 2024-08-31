/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // Substitui a fonte padrão sans-serif
      },
    },
    screens: {
      'sm': '240px',
      'md': '480px',
      'lg': '720px',
      'xl': '960px'
    },
  },
  plugins: [],
}
