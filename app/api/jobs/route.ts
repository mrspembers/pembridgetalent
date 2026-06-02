import { client } from "../../../lib/sanity";

export async function GET() {
  const jobs = await client.fetch(`
    *[_type == "job"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      location,
      category,
      salary,
      description
    }
  `);

  return Response.json(jobs);
}