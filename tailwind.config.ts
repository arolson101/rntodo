import type {Config} from 'tailwindcss';

export default {
  // darkMode: 'class',
  content: ['./index.*', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [[require('nativewind/preset')]],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
