/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        mM: "375px",
        mL: "425px",
        "4k": "1408px"
      },
      spacing: {
        md: "100% - 48px"
      }
    }
  },
  plugins: []
};
