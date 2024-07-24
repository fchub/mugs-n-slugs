const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['.*html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'unpackedGround': "url('./src/assets/Algonquin2021Unpacked2.0.jpeg')",
        'dryingClothes': "url('./src/assets/Killarney2023dryingclothes.jpeg')",
      },
    }
  },
  plugins: [],
}