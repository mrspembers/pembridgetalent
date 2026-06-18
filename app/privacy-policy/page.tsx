"use client";

import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const content = {
  en: {
    label: "PRIVACY POLICY",
    title: "Privacy Policy",
    sections: [
      {
        title: "1. Information We Collect",
        body: "Pembridge Talent may collect personal information including your name, email address, company information, CV/resume, employment history and any information voluntarily submitted through our website or recruitment process.",
      },
      {
        title: "2. How We Use Your Information",
        body: "We use your information to provide recruitment services, communicate regarding employment opportunities, assess candidate suitability, respond to enquiries and improve our services.",
      },
      {
        title: "3. Information Sharing",
        body: "Personal information may be shared with clients, hiring organisations or trusted service providers solely for the purpose of delivering recruitment services and business operations.",
      },
      {
        title: "4. Cookies & Analytics",
        body: "This website uses cookies, Google Analytics and similar technologies to understand website usage, improve user experience and monitor website performance.",
      },
      {
        title: "5. Data Security",
        body: "We take reasonable administrative, technical and organisational measures to protect personal information from unauthorised access, disclosure, alteration or destruction.",
      },
      {
        title: "6. Contact Information",
        body: "If you have any questions regarding this Privacy Policy, please contact:",
        contact: "PEMBRIDGE TALENT\ninfo@pembridgetalent.com",
      },
    ],
  },

  jp: {
    label: "プライバシーポリシー",
    title: "プライバシーポリシー",
    sections: [
      {
        title: "1. 収集する情報",
        body: "PEMBRIDGE TALENTは、お名前、メールアドレス、会社情報、履歴書・職務経歴書、職歴、および当社ウェブサイトや採用プロセスを通じて任意で提供された情報を収集する場合があります。",
      },
      {
        title: "2. 情報の利用目的",
        body: "当社は、採用支援サービスの提供、求人機会に関するご連絡、候補者の適性確認、お問い合わせへの対応、およびサービス改善のために個人情報を利用します。",
      },
      {
        title: "3. 情報の共有",
        body: "個人情報は、採用支援サービスおよび事業運営の目的に限り、クライアント企業、採用企業、または信頼できるサービス提供会社と共有される場合があります。",
      },
      {
        title: "4. Cookieおよびアクセス解析",
        body: "本ウェブサイトでは、ウェブサイトの利用状況の把握、ユーザー体験の改善、サイトパフォーマンスの確認のため、Cookie、Google Analyticsおよび類似技術を使用する場合があります。",
      },
      {
        title: "5. データセキュリティ",
        body: "当社は、個人情報への不正アクセス、開示、改ざん、破壊を防ぐため、合理的な管理上・技術上・組織上の安全対策を講じます。",
      },
      {
        title: "6. お問い合わせ",
        body: "本プライバシーポリシーに関するご質問は、以下までお問い合わせください。",
        contact: "PEMBRIDGE TALENT\ninfo@pembridgetalent.com",
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