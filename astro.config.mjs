import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://primer.design',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
