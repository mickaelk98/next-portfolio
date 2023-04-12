/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        darkHeading: "#fefeff",
        darkText: "#bebfbe",
        darkAccent: "#004BA8",
        darkError: "#ED254E",
        darkSuccess: "#37FF8B",
      },
    },
  },
  plugins: [],
};
