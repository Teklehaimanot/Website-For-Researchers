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
          secondary: "#f8f8f2",
          icon: "#0e76a8",
          // Add more colors as needed
        },
        light: {
          bg: "#fff",
          bg2: "#efefef",
          text: "#333333",
          primary: "#1a202c",
          icon: "#bbdefb",
          // Add more colors as needed
        },
      },
    },
  },
  plugins: [],
};
