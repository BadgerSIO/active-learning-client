/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      },
    },
  },
  plugins: [require("daisyui")],
};
