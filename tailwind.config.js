/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "lightred-default": "#FF7B69",
      "blue-default": "#24B0FF",
      "purple-default": "#8348FF",
      "green-default": "#00C714",
      "gray-bg-default": "#C1c1c1"
    },
    fontFamily: {
      "display": "Inter"
    }
  },
  plugins: [],
}

