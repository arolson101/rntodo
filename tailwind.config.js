/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [[require('nativewind/preset')]],
  theme: {
    extend: {},
  },
  plugins: [],
};
