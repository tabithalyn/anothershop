/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "comfortaa": ["Comfortaa", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"]
    },
    screens: {
      'xxs': {'min': '200px', 'max': '399px'},
      'xs': {'min': '400px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      boxShadow: {
        "3xl": "1px -1px 20px 5px rgba(253, 186, 116, 1)"
      }
    },
  },
  plugins: [],
}

