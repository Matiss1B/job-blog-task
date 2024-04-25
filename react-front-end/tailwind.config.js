/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4bbbee",
          dark: "#356d85",
          light: "#f1e4c2",
        },
        close: {
          DEFAULT: "#f10909",
        },
        background: "#F3F4F6",
        secondary: {
          DEFAULT: "#aeb1b4",
          dark: "#7e8081",
          darkest: "#656969",
          light: "#dcdcdc",
          lightest: "#f5f5f5",
        },
        "header-icon": "#c1c1c1",
      },
    },
  },

  plugins: [],
}

