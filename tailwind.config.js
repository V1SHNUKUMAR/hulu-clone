/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // fontFamily: {
    //   display: ["Poppins", "sans-serif"],
    // },
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
