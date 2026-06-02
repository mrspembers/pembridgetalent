import { client } from "../../../lib/sanity";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = await client.fetch(
    `*[_type == "job" && slug.current == $slug][0]{
      title,
      location,
      category,
      salary,
      description
    }`,
    { slug }
  );

  return {
    title: `${job?.title || "Job Opportunity"} | PEMBRIDGE TALENT`,
    description:
      job?.description ||
      "Explore bilingual career opportunities across Japan with PEMBRIDGE TALENT.",
  };
}
export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = await client.fetch(
    `*[_type == "job" && slug.current == $slug][0]{
      title,
      location,
      category,
      salary,
      description
    }`,
    { slug }
  );

  if (!job) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Job not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-32">

      <div className="max-w-5xl mx-auto">

        <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
          {job.location} / {job.category}
        </p>

        <h1 className="text-5xl md:text-7xl mb-10">
          {job.title}
        </h1>

        <p className="text-3xl mb-16">
          {job.salary}
        </p>

        <div className="max-w-3xl text-gray-400 leading-8 text-lg">
          {job.description}
        </div>

        <a
  href={`/?apply=${encodeURIComponent(job.title)}#contact`}
  className="inline-block mt-16 bg-red-700 hover:bg-red-800 transition px-10 py-4 tracking-[0.2em] text-sm"
>
  APPLY NOW
</a>

      </div>

    </main>
  );
}