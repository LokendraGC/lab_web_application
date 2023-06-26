/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dpink: "#B54297",
        grlink: "#11A79C",
        prlink: "#1F2631",
        crit: "#0E1621",
        head: "#131B25",
      },
    },
  },
  plugins: [],
};

