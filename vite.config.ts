import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/Component/index.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: "es5",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'cjs',
        inlineDynamicImports: false,
        exports: "named",
      },
    }
  },
  server: {
    port: 4173,
    watch: {
      usePolling: true,
    },
  },
});