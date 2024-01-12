/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: ["dark", "light", "retro", "halloween", "cupcake"],
  },
};
