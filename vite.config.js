import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
        entry: resolve(__dirname, 'src/lib/main.js'),
        name: 'Inbound traffic parser',
        fileName: 'inbound-traffic-parser',
    }
  }
});