/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        dm: "'DM Sans', sans-serif",
        inter: "'Inter', sans-serif",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        dark: {
          100: "#4b5364",
          200: "#3f4654",
          300: "#343a45",
          400: "#282d36",
          500: "#1d2026",
          600: "#121418",
          700: "#111317",
          800: "#080808",
          900: "#060608",
        },
      },
    },
  },
  plugins: [],
};
