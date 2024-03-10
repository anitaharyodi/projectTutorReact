const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Poppins",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {},
  },
  plugins: [nextui()],
}