/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#2b3945',
      'very-dark-blue-dark-mode': '#202c37',
      'very-dark-blue-light-mode': '#111517',
      'dark-gray-light-mode': '#858585',
      'very-light-mode-background': '#fafafa',
      'white': '#ffffff',
    }
  },
  plugins: [],
}
