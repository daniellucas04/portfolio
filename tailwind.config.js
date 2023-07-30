/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs-screen': '370px',
    },
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"], 
    }
  },
  plugins: [],
}

