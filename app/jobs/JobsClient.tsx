"use client";

import { useLanguage } from "../context/LanguageContext";

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

export default function JobsClient({ jobs }: { jobs: Job[] }) {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
          {language === "en" ? "JOBS" : "求人情報"}
        </p>

        <h1 className="text-3xl md:text-7xl mb-10 md:mb-16">
          {language === "en" ? "All Jobs" : "求人一覧"}
        </h1>

        <div className="space-y-6">
          {jobs.map((job) => (
            <a
              key={job._id}
              href={`/jobs/${job.slug?.current}`}
              className="group block border border-white/10 hover:border-red-700 transition p-4 md:p-8 bg-black/40"
            >
              <p className="text-xs md:text-sm tracking-[0.2em] text-gray-500 mb-3">
                {language === "en"
                  ? job.location
                  : job.locationJa || job.location}
                {" / "}
                {language === "en"
                  ? job.industry
                  : job.industryJa || job.industry}
              </p>

              <h2 className="text-xl md:text-4xl leading-snug mb-3">
                {language === "en"
                  ? job.title
                  : job.titleJa || job.title}
              </h2>

              <p className="text-base md:text-2xl text-gray-300">
                {language === "en"
                  ? job.salary
                  : job.salaryJa || job.salary}
              </p>
              <p className="mt-6 inline-block text-sm tracking-[0.2em] text-red-700 group-hover:text-red-500 transition">
  {language === "en" ? "VIEW DETAILS →" : "詳細を見る →"}
</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}