"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const job = {
  name: "job",
  title: "Jobs",
  type: "document",
  fields: [
    { name: "title", title: "Job Title", type: "string" },
     {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    { name: "location", title: "Location", type: "string" },
    { name: "category", title: "Category", type: "string" },
    { name: "salary", title: "Salary", type: "string" },
    { name: "description", title: "Description", type: "text" },
  ],
};

const config = defineConfig({
  basePath: "/studio",

  projectId: "z98bpqbb",
  dataset: "production",

  name: "default",
  title: "PEMBRIDGE TALENT CMS",

  plugins: [structureTool()],

  schema: {
    types: [job],
  },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}