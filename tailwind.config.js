/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        "3xl": "2500px",
      },
      colors: {
        subText: "#676C7A",
        primaryBrand: "#4E4BED",
        primaryBrandColor: "#0E0D35",

        // input colors

        inputPrimary: "#4E4BED",
        inputSecondary: "#FFB13D",
        inputText: "#0E0D35",
        inputPlaceholderTextColor: "#C6C8CD",
        inputBg: "#FEFEFE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
