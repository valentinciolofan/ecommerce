import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

export default defineConfig({
  integrations: [
    sanity({
      projectId: "1ymeft4k",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react()],
});
