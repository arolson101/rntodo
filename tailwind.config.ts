import type {Config} from 'tailwindcss';

export default {
  content: ['./index.html', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [[require('nativewind/preset')]],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
