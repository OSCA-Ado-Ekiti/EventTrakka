module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#042A1D", // Add your custom color
        "another-green": "#31B779", // green color for the 'REGISTER' word in the event section
        "hero-text": "#3A3A3A",
        "event-mgt": "#00C7E5",
        "view-bk": "#EDFCF4",
      },

      spacing: {
        880: "80vh",
      },

      lineHeight: {
        70: "70px",
      },

      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },

      maxHeight: {
        "hero-img-h": "596px",
        "about-us-img-h": "457px",
        "login-h": "697px",
      },

      maxWidth: {
        "hero-img-w": "540px",
        "about-us-img-w": "530px",
        "login-w": "535px",
      },

      letterSpacing: {
        wider: ".2em",
        widest: ".3em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
