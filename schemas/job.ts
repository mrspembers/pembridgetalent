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

export default job;