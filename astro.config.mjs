import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site:'https://mirelyLaboriano.github.io',
  base:'clone-pw'
});