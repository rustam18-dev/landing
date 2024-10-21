/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        alabaster: "#F1F3F5",
        gray: "#B5BFCA",
        gold: "#B89F00",
        "gold-active": "#948002",
        blue: "#184456",
        "blue-active": "#133241",
      },
    },
    screens: {
      mobile: { max: "530px" },
      tablet: { max: "772px" },
      laptop: { max: "1024px" },
      "mobile-min": { min: "530px" },
      "tablet-min": { min: "772px" },
      "laptop-min": { min: "1024px" },
    },
  },
  plugins: [],
};
