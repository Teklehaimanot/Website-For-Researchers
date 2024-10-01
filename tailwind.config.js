/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#282a36",
          bg2: "#23252f",
          text: "#ffffff",
          primary: "#4a90e2",
          // Add more colors as needed
        },
        light: {
          bg: "#fff",
          bg2: "#D3D3D3",
          text: "#333333",
          primary: "#1a202c",
          // Add more colors as needed
        },
      },
    },
  },
  plugins: [],
};
