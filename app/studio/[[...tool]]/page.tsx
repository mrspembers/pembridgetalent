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
      name: "salary",
      title: "Salary Range (EN)",
      type: "string",
    },
    {
      name: "salaryJa",
      title: "Salary Range (JA)",
      type: "string",
    },
    {
      name: "company",
      title: "Company (EN)",
      type: "string",
    },
    {
      name: "companyJa",
      title: "Company (JA)",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction (EN)",
      type: "text",
    },
    {
      name: "introductionJa",
      title: "Introduction (JA)",
      type: "text",
    },
    {
      name: "responsibilities",
      title: "Responsibilities (EN)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "responsibilitiesJa",
      title: "Responsibilities (JA)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "requirements",
      title: "Requirements (EN)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "requirementsJa",
      title: "Requirements (JA)",
      type: "array",
      of: [{ type: "string" }],
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