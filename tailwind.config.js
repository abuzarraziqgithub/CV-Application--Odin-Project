/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "575px" },
    },
    extend: {},
  },
  plugins: [],
};
