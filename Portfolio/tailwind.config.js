/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          custom: ['Archivo Black', 'sans'], // Use the same font name as defined in the Google Fonts URL
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}

