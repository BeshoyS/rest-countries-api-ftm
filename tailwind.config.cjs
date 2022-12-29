/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nuntioSans: ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        semiBold: 600,
        extraBold: 800,
      },
      colors: {
        current: "currentColor",
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlue: {
          300: "hsl(207, 26%, 17%)",
          500: "hsl(200, 15%, 8%)",
        },
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
