/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "default": "#FF7B69"
    },
    fontFamily: {
      "display": "Inter"
    }
  },
  plugins: [],
}

