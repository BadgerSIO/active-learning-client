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
      padding: {
        DEFAULT: "10px",
        sm: "15px",
        md: "20px",
        lg: "20px",
        xl: "20px",
        "2xl": "20px",
      },
    },
    extend: {
      colors: {
        theme: "#0054a5",
        darkBg: "#010409",
        darkCardBg: "#0D1117",
        darkBorder: "#21262d",
        darkText: "#c9d1d9",
      },
    },
  },
  plugins: [require("daisyui")],
};
