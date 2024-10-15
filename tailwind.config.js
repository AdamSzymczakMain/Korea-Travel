/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        custom: "2fr 1fr 3fr 1fr",
      },
    },
  },
  plugins: [],
};
