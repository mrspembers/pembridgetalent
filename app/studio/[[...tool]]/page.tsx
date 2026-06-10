"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const job = {
  name: "job",
  title: "Jobs",
  type: "document",
  fields: [
  {
    name: "title",
    title: "Job Title (EN)",
    type: "string",
  },
  {
    name: "titleJa",
    title: "Job Title (JA)",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
  },
  {
    name: "location",
    title: "Location (EN)",
    type: "string",
  },
  {
    name: "locationJa",
    title: "Location (JA)",
    type: "string",
  },
  {
    name: "category",
    title: "Category (EN)",
    type: "string",
  },
  {
    name: "categoryJa",
    title: "Category (JA)",
    type: "string",
  },
  {
    name: "salary",
    title: "Salary (EN)",
    type: "string",
  },
  {
    name: "salaryJa",
    title: "Salary (JA)",
    type: "string",
  },
  {
    name: "description",
    title: "Description (EN)",
    type: "text",
  },
  {
    name: "descriptionJa",
    title: "Description (JA)",
    type: "text",
  },
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