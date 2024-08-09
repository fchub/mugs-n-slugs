const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['.*html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'unpackedGround': "url('./src/assets/Algonquin2021Unpacked2.0.jpeg')",
        'dryingClothes': "url('./src/assets/Killarney2023dryingclothes.jpeg')",
        'silverPeakView': "url('./src/assets/Killarney2023SilverPeak.jpeg')",
        'canoeLake': "url('./src/assets/Algonquin2021CanoeLake.jpeg')",
        'mnsLogo': "url('.src/assets/MnSLogo.pns')"
      },
      colors: {
        'forest-green': '#076407',
        'golden-yellow': '#AEAE0B',
        'select-yellow': '#aeae0b52',
        'select-green': '#31652b52'
      }
    }
  },
  plugins: [],
}