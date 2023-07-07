/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        small: "361px",
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
      },
    },
  },
  plugins: [],
};
