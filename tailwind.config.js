/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-gray': '#121212',
        'spotify-gray-dark': '#0d0d0d',
        'spotify-gray-light': '#161616',
        'spotify-gray-lighter': '#181818',
        'spotify-gray-lightest': '#282828',
      }
    },
  },
  plugins: [],
}

