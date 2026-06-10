import { client } from "../../../lib/sanity";

export async function GET() {
  const jobs = await client.fetch(`
    *[_type == "job"] | order(_createdAt desc) {
      _id,

      title,
      titleJa,

      slug,

      location,
      locationJa,

      category,
      categoryJa,

      salary,
      salaryJa,

      description,
      descriptionJa
    }
  `);

  return Response.json(jobs);
}