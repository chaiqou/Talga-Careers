/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "talga-gray-1": "#dadce0",
        "talga-green-1": "#137333",
        "talga-blue-1": "#1967d2",
      },
      boxShadow: {
        "talga-shadow-1": "0px 0px 3px 3px #4285f4",
      },
    },
  },
  plugins: [],
};
