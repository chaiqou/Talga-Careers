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
        "talga-gray-2": "#f8f9fa",
        "talga-gray-3": "$80868b",
        "talga-green-1": "#137333",
        "talga-blue-1": "#1967d2",
        "talga-blue-2": "#4285f4",
      },
      boxShadow: {
        "talga-shadow-1": "0px 0px 3px 3px #4285f4",
        "talga-shadow-gray": "0 1px 3px 0 rgba(60,64,67,0.3)",
      },
    },
  },
  plugins: [],
};
