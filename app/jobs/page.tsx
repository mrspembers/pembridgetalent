import Header from "../components/Header";
import { client } from "../../lib/sanity";
import JobsClient from "./JobsClient";

type Job = {
  _id: string;
  title?: string;
  titleJa?: string;
  location?: string;
  locationJa?: string;
  salary?: string;
  salaryJa?: string;
  industry?: string;
  industryJa?: string;
  slug?: {
    current?: string;
  };
};

export default async function JobsPage() {
  const jobs: Job[] = await client.fetch(
    `*[_type == "job"] | order(_createdAt desc) {
      _id,
      title,
      titleJa,
      location,
      locationJa,
      salary,
      salaryJa,
      industry,
      industryJa,
      slug
    }`
  );

  return (
    <>
      <Header />
      <JobsClient jobs={jobs} />
    </>
  );
}