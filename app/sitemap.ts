import { MetadataRoute } from "next";
import { client } from "../lib/sanity";

type JobSitemapItem = {
  slug?: {
    current?: string;
  };
  _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs: JobSitemapItem[] = await client.fetch(
    `*[_type == "job"] {
      slug,
      _updatedAt
    }`
  );

  const jobUrls = jobs
  .filter((job) => job.slug?.current)
  .map((job) => ({
    url: `https://www.pembridgetalent.com/jobs/${job.slug!.current}`,
    lastModified: new Date(job._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.pembridgetalent.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.pembridgetalent.com/jobs",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...jobUrls,
  ];
}