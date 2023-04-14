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
        darkSecondary: "#303030",
        darkTertiary: "#424242",
        darkHeading: "#fefeff",
        darkText: "#bebfbe",
        darkAccent: "#004BA8",
        darkError: "#ED254E",
        darkSuccess: "#37FF8B",
        darkLinear:
          "linear-gradient(225deg, rgba(254,254,255,1) 0%, rgba(0,75,168,1) 100%)",
      },
    },
  },
  plugins: [],
};
