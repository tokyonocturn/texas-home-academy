import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Base is relative so the built site can be self-hosted from any subfolder
// (GitHub Pages project sites, a USB stick, a home NAS, or file://-adjacent hosts).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
