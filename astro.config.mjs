import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { vercel } from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    sanity({
      projectId: "1ymeft4k",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react()
  ],
  output: 'server',  
  adapter: vercel(),
});
