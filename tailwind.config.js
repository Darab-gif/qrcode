/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#407BFF",
      white: "#fff",
      black: "rgb(17, 24, 39)",
      lightGray: "#F8F8F9",
      gray: "rgb(104, 103, 108)",
      grey: "#E5E7EB",
    },
    extend: {
      fontSize: {
        small: "14px",
        normal: "18px",
        large: "20px",
        24: "24px",
        25: "25px",
        extralarge: "40px",
        42: "42px",
        xl: "48px",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
    },
  },
  plugins: [],
};
