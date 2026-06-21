/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hatake: {
          green: '#0B5D35',
          greendeep: '#083F25',
          orange: '#FF8A00',
          cream: '#FBF8F2',
          creamdeep: '#F3EEE2',
        },
      },
    },
  },
  plugins: [],
}
