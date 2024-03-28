/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        userWhite: "hsl(0, 0%, 100%)",
        userLightPink: "hsl(275, 100%, 97%)",
        userGrayishPurple: "hsl(292, 16%, 49%)",
        userDarkPurple: "hsl(292, 42%, 14%)",
      },
      backgroundImage: {
        userMobileBg: "url(/background-pattern-mobile.svg)",
        userDesktopBg: "url(/background-pattern-desktop.svg)",
      }
    },
  },
  plugins: [],
}