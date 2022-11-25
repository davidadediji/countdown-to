/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      background: "#F3F5FF",
      primary: "#0B0A33",
      secondary: "#B2255F",
      countDown: "#4D4C59",
      placeholders: "#888888",
      counterBg: "background: rgba(178, 37, 95, 0.8)",
      counterBoxShadow: "box-shadow: 0px 4px 8px rgba(178, 37, 95, 0.15)",
    },
    extend: {},
  },
  plugins: [],
}
