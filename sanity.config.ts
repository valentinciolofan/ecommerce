import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./schemas/schema"

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "1ymeft4k",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});



