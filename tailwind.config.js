/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '50px',
        'md':'500px',
        'lg':'700px',
        'xl':'1000px',
        'super':{'raw':'(max-width: 330px)'},
      },
    },
  },
  plugins: [],
}

