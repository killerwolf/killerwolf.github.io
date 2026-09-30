import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://h4md1.fr',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
