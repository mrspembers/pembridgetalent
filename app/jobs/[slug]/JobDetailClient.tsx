"use client";

import { useLanguage } from "@/app/context/LanguageContext";
type EmploymentType =
  | "Permanent"
  | "Contract"
  | "Temporary"
  | "Freelance";

type Job = {
  title?: string;
  titleJa?: string;
  location?: string;
  locationJa?: string;
  company?: string;
  companyJa?: string;
  salary?: string;
  salaryJa?: string;
  description?: string;
  descriptionJa?: string;
  introduction?: string;
  introductionJa?: string;
  responsibilities?: string[];
  responsibilitiesJa?: string[];
  requirements?: string[];
  requirementsJa?: string[];

  industry?: string;
  industryJa?: string;
  employmentType?: EmploymentType;
  idealCandidate?: string;
  idealCandidateJa?: string;
  languages?: {
    japanese?: string;
    english?: string;
  };
};
function formatEmploymentType(
  employmentType: EmploymentType | undefined,
  language: string
) {
  if (!employmentType) return "";

  if (language === "en") return employmentType;

  const labels: Record<EmploymentType, string> = {
    Permanent: "正社員",
    Contract: "契約社員",
    Temporary: "派遣社員",
    Freelance: "業務委託",
  };

  return labels[employmentType];
}

function formatLanguageLevel(level: string | undefined, language: string) {
  if (!level) return "";

  if (language === "en") return level;

  const labels: Record<string, string> = {
    Fluent: "流暢",
    Native: "ネイティブ",
    Business: "ビジネスレベル",
    "Business Level": "ビジネスレベル",
    Conversational: "日常会話レベル",
    Basic: "基礎レベル",
  };

  return labels[level] || level;
}

export default function JobDetailClient({ job }: { job: Job }) {
  const { language } = useLanguage();

const title =
  language === "en"
    ? job.title || ""
    : job.titleJa || job.title || "";
  const location = language === "en" ? job.location : job.locationJa || job.location;

  const salary = language === "en" ? job.salary : job.salaryJa || job.salary;
  const company = language === "en" ? job.company : job.companyJa || job.company;
  const industry = language === "en" ? job.industry : job.industryJa || job.industry;

const idealCandidate =
  language === "en"
    ? job.idealCandidate
    : job.idealCandidateJa || job.idealCandidate;

const languages = job.languages;
  const introduction =
    language === "en"
      ? job.introduction || job.description
      : job.introductionJa || job.descriptionJa || job.introduction || job.description;

  const responsibilities =
  language === "en"
    ? job.responsibilities || []
    : job.responsibilitiesJa || job.responsibilities || [];

const requirements =
  language === "en"
    ? job.requirements || []
    : job.requirementsJa || job.requirements || [];

  return (
      <>
    <main className="min-h-screen bg-black text-white px-6 md:px-20 pt-24 pb-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
          {location} / {company}
        </p>

        <h1 className="text-5xl md:text-7xl mb-10">{title}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="border border-white/10 p-6 bg-black/40">
            <p className="text-gray-500 text-sm tracking-[0.3em] mb-3">
              {language === "en" ? "SALARY RANGE" : "給与レンジ"}
            </p>
            <p className="text-2xl">{salary}</p>
          </div>

          <div className="border border-white/10 p-6 bg-black/40">
            <p className="text-gray-500 text-sm tracking-[0.3em] mb-3">
             {language === "en" ? "COMPANY" : "企業"}
            </p>
            <p className="text-2xl">{company}</p>
          </div>
          {industry && (
  <div className="border border-white/10 p-6 bg-black/40">
    <p className="text-gray-500 text-sm tracking-[0.3em] mb-3">
      {language === "en" ? "INDUSTRY" : "業界"}
    </p>
    <p className="text-2xl">{industry}</p>
  </div>
)}

{job.employmentType && (
  <div className="border border-white/10 p-6 bg-black/40">
    <p className="text-gray-500 text-sm tracking-[0.3em] mb-3">
      {language === "en" ? "EMPLOYMENT" : "雇用形態"}
    </p>
    <p className="text-2xl">
  {formatEmploymentType(job.employmentType, language)}
</p>
  </div>
)}
        </div>
<div className="mb-20">
  <a
    href={`/?apply=${encodeURIComponent(title ?? "")}#contact`}
    className="inline-block bg-red-700 hover:bg-red-800 transition px-10 py-4 tracking-[0.2em] text-sm"
  >
    {language === "en" ? "APPLY NOW" : "応募する"}
  </a>
</div>
        {introduction && (
          <section className="mb-16">
            <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
              {language === "en" ? "INTRODUCTION" : "概要"}
            </p>
            <div className="max-w-3xl text-gray-400 leading-8 text-lg whitespace-pre-line">
              {introduction}
            </div>
          </section>
        )}

        {responsibilities?.length > 0 && (
          <section className="mb-16">
            <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
              {language === "en" ? "RESPONSIBILITIES" : "仕事内容"}
            </p>
            <ul className="max-w-3xl space-y-4 text-gray-400 leading-8 text-lg">
              {responsibilities.map((item: string) => (
                <li
  key={item}
  className="border-l-2 border-red-700 pl-5 py-2"
>
  {item}
</li>
              ))}
            </ul>
          </section>
        )}

        {requirements.length > 0 && (
  <section className="mb-16">
    <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
      {language === "en" ? "REQUIREMENTS" : "応募条件"}
    </p>
    <ul className="max-w-3xl space-y-4 text-gray-400 leading-8 text-lg">
      {requirements.map((item: string) => (
        <li
  key={item}
  className="border-l-2 border-red-700 pl-5 py-2"
>
  {item}
</li>
      ))}
    </ul>
  </section>
)}

{languages && (languages.japanese || languages.english) && (
  <section className="mb-16">
    <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
      {language === "en" ? "LANGUAGES" : "語学力"}
    </p>

    <div className="max-w-3xl grid md:grid-cols-2 gap-6">
      {languages.japanese && (
        <div className="border border-white/10 p-6 bg-black/40">
          <p className="text-gray-500 text-sm tracking-[0.3em] mb-3">
            {language === "en" ? "JAPANESE" : "日本語"}
          </p>
         <p className="text-xl text-gray-300">
  {formatLanguageLevel(languages.japanese, language)}
</p>
        </div>
      )}

      {languages.english && (
        <div className="border border-white/10 p-6 bg-black/40">
          <p className="text-gray-500 text-sm tracking-[0.3em] mb-3">
            {language === "en" ? "ENGLISH" : "英語"}
          </p>
          <p className="text-xl text-gray-300">
  {formatLanguageLevel(languages.english, language)}
</p>
        </div>
      )}
    </div>
  </section>
)}
{idealCandidate && (
  <section className="mb-16">
    <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
      {language === "en" ? "IDEAL CANDIDATE" : "求める人物像"}
    </p>

    <div className="max-w-3xl text-gray-400 leading-8 text-lg whitespace-pre-line">
      {idealCandidate}
    </div>
  </section>
)}

        <a
          href={`/?apply=${encodeURIComponent(title)}#contact`}
          className="inline-block mt-4 bg-red-700 hover:bg-red-800 transition px-10 py-4 tracking-[0.2em] text-sm"
        >
          {language === "en" ? "APPLY NOW" : "応募する"}
        </a>
      </div>
    </main>
      </>
  );
}