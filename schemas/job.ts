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
    {
  name: "industry",
  title: "Industry (EN)",
  type: "string",
},
{
  name: "industryJa",
  title: "Industry (JA)",
  type: "string",
},

{
  name: "employmentType",
  title: "Employment Type (EN)",
  type: "string",
  options: {
    list: [
      { title: "Permanent", value: "Permanent" },
      { title: "Contract", value: "Contract" },
      { title: "Temporary", value: "Temporary" },
      { title: "Freelance", value: "Freelance" },
    ],
  },
},
{
  name: "employmentTypeJa",
  title: "Employment Type (JA)",
  type: "string",
},

{
  name: "idealCandidate",
  title: "Ideal Candidate (EN)",
  type: "text",
},
{
  name: "idealCandidateJa",
  title: "Ideal Candidate (JA)",
  type: "text",
},

{
  name: "languages",
  title: "Languages",
  type: "object",
  fields: [
    {
      name: "japanese",
      title: "Japanese",
      type: "string",
    },
    {
      name: "english",
      title: "English",
      type: "string",
    },
  ],
},
  ],
};

export default job;