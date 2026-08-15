// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kaunatharva.com',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
