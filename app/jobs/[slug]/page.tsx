import { client } from "../../../lib/sanity";
import JobDetailClient from "./JobDetailClient";
import Header from "../../components/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

 const job = await client.fetch(
  `*[_type == "job" && slug.current == $slug][0]{
    title,
    titleJa,

    location,
    locationJa,

    company,
    companyJa,

    salary,
    salaryJa,

    description,
    descriptionJa,

    industry,
    industryJa,

    employmentType,
idealCandidate,
idealCandidateJa,
languages,

    introduction,
    introductionJa,

    responsibilities,
    responsibilitiesJa,

    requirements,
    requirementsJa
  }`,
  { slug }
);

  return {
  title: `${job?.title || "Job Opportunity"} | PEMBRIDGE TALENT`,
  description:
    job?.introduction ||
    job?.description ||
    "Explore bilingual career opportunities across Japan with PEMBRIDGE TALENT.",

  alternates: {
    canonical: `https://www.pembridgetalent.com/jobs/${slug}`,
  },
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
      titleJa,
      location,
      locationJa,
      industry,
      industryJa,
      employmentType,
      idealCandidate,
      idealCandidateJa,
      languages,
      salary,
      salaryJa,
      description,
      descriptionJa,
      company,
      companyJa,
      introduction,
      introductionJa,
      responsibilities,
      responsibilitiesJa,
      requirements,
      requirementsJa
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
const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.introduction || job.description || job.title,
  employmentType: job.employmentType,
  hiringOrganization: {
    "@type": "Organization",
    name: "PEMBRIDGE TALENT",
    sameAs: "https://www.pembridgetalent.com",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: job.location || "Tokyo",
      addressCountry: "JP",
    },
  },
  industry: job.industry,
  url: `https://www.pembridgetalent.com/jobs/${slug}`,
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jobPostingJsonLd),
      }}
    />

    <Header />
    <JobDetailClient job={job} />
 
  </>
);
}