import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import job from "./schemas/job";

export default defineConfig({
  name: "default",
  title: "PEMBRIDGE TALENT CMS",

  projectId: "z98bpqbb",
dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: [job],
  },
});