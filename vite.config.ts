// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/data') }
    ]
  }
});