/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'darkBlue': 'hsl(209, 23%, 22%)',
        'veryDarkBlueDM': 'hsl(207, 26%, 17%)',
        'veryDarkBlueLM': 'hsl(200, 15%, 8%)',
        'darkGrayLM': 'hsl(0, 0%, 52%)',
        'veryLightGrayLM': 'hsl(0, 0%, 98%)',
        'whiteLMDM': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}
