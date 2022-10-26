/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        theme: "#0054a5",
        darkBg: "#151515",
        darkCardBg: "#202020",
      },
    },
  },
  plugins: [require("daisyui")],
};
