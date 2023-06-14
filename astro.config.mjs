import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  // site: 'erounate.deno.dev',
  integrations: [tailwind(), sitemap(), mdx()],
  output: "server",
  adapter: deno()
});
