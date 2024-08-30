// https://stereobooster.com/posts/react-native-web-with-vite/#final-config
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://tamagui.dev/docs/intro/installation
const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
  '.mjs',
];

const development = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: true,
  plugins: [
    tsconfigPaths(),
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'nativewind',
    }),
  ],
  define: {
    // https://github.com/bevacqua/dragula/issues/602#issuecomment-1296313369
    global: 'window',
    __DEV__: JSON.stringify(development),
    // https://tamagui.dev/docs/intro/installation
    DEV: JSON.stringify(development),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    extensions: extensions,
    alias: [
      {
        find: 'react-native/Libraries/NewAppScreen',
        replacement: './components/web/NewAppScreen/index.js',
      },
      {find: 'react-native', replacement: 'react-native-web'},
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      // https://github.com/vitejs/vite-plugin-react/issues/192#issuecomment-1627384670
      jsx: 'automatic',
      // need either this or the plugin below
      loader: {'.js': 'jsx'},
    },
  },
});
