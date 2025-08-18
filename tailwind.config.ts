import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1c64f2",
      },
      screens: {
        xs: "530px",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
