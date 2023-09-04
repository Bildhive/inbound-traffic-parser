import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
        entry: resolve(__dirname, 'src/lib/main.js'),
        name: 'Inbound traffic parser',
        fileName: 'inbound-traffic-parser',
    }
  },

  resolve: {
    alias: {
      'sec/lib': fileURLToPath(new URL('./src/lib', import.meta.url))
    }
  }
});