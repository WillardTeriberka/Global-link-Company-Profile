// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: { host: true },  // 或 host: '0.0.0.0'
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});