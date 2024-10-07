module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#042A1D", // Add your custom color
        "another-green": "#31B779", // green color for the 'REGISTER' word in the event section
      },

      lineHeight: {
        70: "70px",
      },

      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
