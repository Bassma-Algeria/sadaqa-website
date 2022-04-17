// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#FF7937",
      primaryHover: "#FC6013",
      secondary: "#fefdfc",
      white: "#fff",
      black: "#000",
    },
  },
  variants: {
    extend: {
      gap: ["hover"],
    },
  },
  plugins: [],
};
