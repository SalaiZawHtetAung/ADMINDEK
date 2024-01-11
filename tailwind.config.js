/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
    
  theme: {
    extend: {
      sans: ["Montserrat", "sans-serif", "Open Sans"],
      robo: ["Roboto", "'Rubik'", "Padauk"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
