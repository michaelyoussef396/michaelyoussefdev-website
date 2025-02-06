module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-fill": "#0e0e0e",
        "dark-grey": "#201F1F",
        "dark-solid": "#222222",
        "white": "#ffffff",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "main-dark": "#0E0E0E",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        h2: "55px", // Define custom heading size
      },
      letterSpacing: {
        wider: "0.15em",
      },
      lineHeight: {
        relaxed: "1.4em",
      },
      screens: {
        lg: "922px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
