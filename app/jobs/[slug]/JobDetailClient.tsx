"use client";

import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/Header";

export default function JobDetailClient({ job }: { job: any }) {
  const { language } = useLanguage();

  const title = language === "en" ? job.title : job.titleJa || job.title;
  const location = language === "en" ? job.location : job.locationJa || job.location;

  const salary = language === "en" ? job.salary : job.salaryJa || job.salary;
  const company = language === "en" ? job.company : job.companyJa || job.company;
  const introduction =
    language === "en"
      ? job.introduction || job.description
      : job.introductionJa || job.descriptionJa || job.introduction || job.description;

  const responsibilities =
    language === "en"
      ? job.responsibilities
      : job.responsibilitiesJa || job.responsibilities;

  const requirements =
    language === "en"
      ? job.requirements
      : job.requirementsJa || job.requirements;

  return (
      <>
    <Header />
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
          {location} / {company}
        </p>

        <h1 className="text-5xl md:text-7xl mb-10">{title}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
                <li key={item} className="border-b border-white/10 pb-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {requirements?.length > 0 && (
          <section className="mb-16">
            <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
              {language === "en" ? "REQUIREMENTS" : "応募条件"}
            </p>
            <ul className="max-w-3xl space-y-4 text-gray-400 leading-8 text-lg">
              {requirements.map((item: string) => (
                <li key={item} className="border-b border-white/10 pb-4">
                  {item}
                </li>
              ))}
            </ul>
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