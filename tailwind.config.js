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
        // dark colors
        darkPrimary: "#121212",
        darkSecondary: "#1e1e1e",
        darkTertiary: "#242424",
        darkHeading: "#fefeff",
        darkText: "#bebfbe",
        darkAccent: "#004BA8",
        darkError: "#ED254E",
        darkSuccess: "#37FF8B",

        // white colors
        primary: "#ffffff",
        secondary: "#eeeeee",
        tertiary: "#dddddd",
        headeing: "#000000",
        text: "#111111",
        accent: "#3498db",
        error: "#FF6978",
        success: "#09BC8A",
      },
    },
  },
  plugins: [],
};
