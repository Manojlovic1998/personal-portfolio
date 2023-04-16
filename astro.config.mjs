import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site:"https://manojlovic1998.github.io",
  base: "/personal-portfolio",
  integrations: [mdx()]
});