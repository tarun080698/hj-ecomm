/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Montserrat+Alternates"],
      },
      colors: {
        ivory: {
          DEFAULT: "#FFFFF0",
        },
        coral: {
          DEFAULT: "#FF6F61",
          dark: "#E55B50",
          light: "#FF7F71",
        },
        black: {
          DEFAULT: "#000000",
          dark: "#1C1C1C",
        },
        gray: {
          light: "#F0F0F0",
          DEFAULT: "#4A4A4A",
          border: "#CCCCCC",
          placeholder: "#A9A9A9",
        },
        success: {
          background: "#D1FAE5",
          text: "#047857",
        },
        warning: {
          background: "#FEF3C7",
          text: "#92400E",
        },
        error: {
          background: "#FECACA",
          text: "#991B1B",
        },
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
      backgroundColor: ["hover", "focus"],
      textColor: ["hover", "focus"],
      borderColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
