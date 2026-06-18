"use client";

import { useLanguage } from "../context/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "TERMS OF USE",
      title: "Terms of Use",
      sections: [
        {
          title: "1. Use of Website",
          body: "By using this website, you agree to comply with these Terms of Use. This website is provided for general information regarding Pembridge Talent's recruitment and executive search services.",
        },
        {
          title: "2. Recruitment Information",
          body: "Job listings, salary information and recruitment content are provided for reference only and may be changed or removed without notice. Submission of an application does not guarantee interview, employment or placement.",
        },
        {
          title: "3. Intellectual Property",
          body: "All content, design, text, images and branding on this website are owned by Pembridge Talent or used with permission. You may not copy, reproduce or distribute website content without prior written consent.",
        },
        {
          title: "4. Prohibited Use",
          body: "You must not misuse this website, attempt unauthorized access, interfere with website operation, submit false information or use the website for unlawful purposes.",
        },
        {
          title: "5. Disclaimer",
          body: "Pembridge Talent makes reasonable efforts to keep information accurate and current, but does not guarantee completeness, accuracy or availability of all website content.",
        },
        {
          title: "6. Contact",
          body: "For questions regarding these Terms of Use, please contact:",
          contact: "info@pembridgetalent.com",
        },
      ],
    },

    jp: {
      label: "利用規約",
      title: "利用規約",
      sections: [
        {
          title: "1. ウェブサイトの利用",
          body: "本ウェブサイトを利用することにより、利用者は本利用規約に同意したものとみなされます。本ウェブサイトは、PEMBRIDGE TALENTの採用支援およびエグゼクティブサーチサービスに関する一般的な情報提供を目的としています。",
        },
        {
          title: "2. 採用情報について",
          body: "求人情報、給与情報および採用関連コンテンツは参考情報として提供されるものであり、予告なく変更または削除される場合があります。応募の提出は、面接、雇用、または紹介成立を保証するものではありません。",
        },
        {
          title: "3. 知的財産権",
          body: "本ウェブサイト上のすべてのコンテンツ、デザイン、文章、画像、ブランド要素は、PEMBRIDGE TALENTが所有するか、許可を得て使用しているものです。事前の書面による同意なく、ウェブサイトの内容を複製、転載、配布することはできません。",
        },
        {
          title: "4. 禁止事項",
          body: "利用者は、本ウェブサイトを不正に利用したり、不正アクセスを試みたり、ウェブサイトの運営を妨害したり、虚偽の情報を送信したり、違法な目的で使用してはなりません。",
        },
        {
          title: "5. 免責事項",
          body: "PEMBRIDGE TALENTは、掲載情報の正確性および最新性の維持に合理的な努力を行いますが、すべてのウェブサイトコンテンツの完全性、正確性、利用可能性を保証するものではありません。",
        },
        {
          title: "6. お問い合わせ",
          body: "本利用規約に関するご質問は、以下までお問い合わせください。",
          contact: "info@pembridgetalent.com",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
          {t.label}
        </p>

        <h1 className="text-5xl md:text-7xl mb-16">
          {t.title}
        </h1>

        <div className="space-y-12 text-gray-400 leading-8">
          {t.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-white text-2xl mb-4">
                {section.title}
              </h2>

              <p>{section.body}</p>

              {section.contact && (
                <p className="mt-4 whitespace-pre-line">
                  {section.contact}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}