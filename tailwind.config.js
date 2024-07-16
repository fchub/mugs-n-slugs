const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['.*html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'unpackedGround': "url('./src/assets/Algonquin2021UnpackedGround.jpeg')",
      },
    }
  },
  plugins: [],
}