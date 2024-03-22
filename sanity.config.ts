import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas/schema";


export default defineConfig({
  name: "ecommerce", // Can be whatever
  title: "ecommerce website", // Can be whatever
  projectId: '1ymeft4k',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});





