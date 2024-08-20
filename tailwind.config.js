/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  theme: {
    screens: {
      mobile: "500px",
      // => @media (min-width: 576px) { ... }

      tablet: "960px",
      // => @media (min-width: 960px) { ... }

      laptop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  daisyui: {
    themes: ["dark", "light", "retro", "halloween", "cupcake"],
  },
};
