import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@toolbox/sdk': resolve(__dirname, './sdk/index.ts'),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, './src/plugin.tsx'),
      formats: ['es'],
      fileName: () => 'plugin.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom/client', '@toolbox/sdk'],
      output: {
        globals: {},
      },
    },
  },
})
