"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  company: "",
  department: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [success, setSuccess] = useState(false);
const [jobs, setJobs] = useState<any[]>([]);
const [language, setLanguage] = useState<"en" | "jp">("en");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  setLoading(false);

  if (data.success) {
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      company: "",
      department: "",
      message: "",
    });
  }
};
const handleApply = (jobTitle: string) => {
  setForm({
    ...form,
    message: `I would like to apply for the ${jobTitle} position.`,
  });

  setTimeout(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};
useEffect(() => {
  async function loadJobs() {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data);
  }

  loadJobs();

  const params = new URLSearchParams(window.location.search);
  const applyJob = params.get("apply");

  if (applyJob) {
    setForm((prev) => ({
      ...prev,
      message: `I would like to apply for the ${applyJob} position.`,
    }));

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  }
}, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
    {/* HEADER */}
<header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
  <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-center md:justify-between">

    <a href="#" className="block">
      <img
        src="/logo.png"
        alt="PEMBRIDGE TALENT"
        className="w-[170px] md:w-[200px] object-contain"
      />
    </a>

    <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest text-gray-300">
      <a href="#about" className="hover:text-white transition">ABOUT</a>
      <a href="#candidate" className="hover:text-white transition">CANDIDATE</a>
      <a href="#clients" className="hover:text-white transition">COMPANIES</a>
      <a href="#jobs" className="hover:text-white transition">JOBS</a>
      <a href="#contact" className="hover:text-white transition">CONTACT</a>
    <button
  type="button"
  onClick={() => setLanguage(language === "en" ? "jp" : "en")}
  className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
>
  {language === "en" ? "JP" : "EN"}
</button>
    </nav>

    <button
      type="button"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden absolute right-6 flex flex-col gap-1"
      aria-label="Open menu"
    >
      <span className="block w-7 h-[1px] bg-white"></span>
      <span className="block w-7 h-[1px] bg-white"></span>
      <span className="block w-7 h-[1px] bg-white"></span>
    </button>
  </div>

  {mobileMenuOpen && (
    <div className="md:hidden border-t border-white/10 bg-black/95">
      <nav className="flex flex-col items-center gap-6 py-8 text-sm tracking-[0.25em] text-gray-300">
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
        <a href="#candidate" onClick={() => setMobileMenuOpen(false)}>CANDIDATE</a>
        <a href="#clients" onClick={() => setMobileMenuOpen(false)}>COMPANIES</a>
        <a href="#jobs" onClick={() => setMobileMenuOpen(false)}>JOBS</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
      <button
  type="button"
  onClick={() => setLanguage(language === "en" ? "jp" : "en")}
  className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
>
  {language === "en" ? "JP" : "EN"}
</button>
      </nav>
    </div>
  )}
</header>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50+
bg-black/50"
        >
          <source
  src="/hero.mp4"
  type="video/mp4"
/>
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 pt-32 md:pt-0">
          
          <p className="tracking-[0.4em] text-red-700 text-sm mb-6">
            JAPAN BILINGUAL TALENT SOLUTIONS
          </p>

          <h1 className="text-6xl md:text-8xl font-semibold leading-tight">
            Built on Trust.
        
            <br />
            Driven by Results.
          </h1>

          <p className="text-gray-300 mt-8">
  {language === "en"
    ? "Decades of bilingual recruitment expertise in Japan"
    : "数十年におよぶ、日本市場でのバイリンガル採用スペシャリスト"}
</p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            
           
 <a
  href="#jobs"
  className="bg-red-700 hover:bg-red-800 transition px-8 py-4 tracking-widest text-sm"
>
  {language === "en" ? "VIEW OPPORTUNITIES" : "求人を見る"}
</a>

<a
  href="#contact"
  className="bg-red-700 hover:bg-red-800 transition px-8 py-4 tracking-widest text-sm"
>
  {language === "en" ? "HIRE TALENT" : "採用相談"}
</a>

          </div>
        </div>
      </section>

{/* ABOUT */}
<section
  id="about"
  className="py-32 px-6 md:px-20 border-t border-white/10"
>
  <div className="max-w-7xl mx-auto">

    <div className="max-w-4xl mb-16">
      <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
        ABOUT PEMBRIDGE TALENT
      </p>

      <h2 className="text-4xl md:text-6xl leading-tight">
        {language === "en"
  ? "We draw on our deep knowledge & experience in Japan’s recruitment market to match your needs and expectations."
  : "日本の採用市場における豊富な知見と実績をもとに、企業と人材、それぞれの期待を超える最適なマッチングを実現します"}
      </h2>
    </div>

    <div className="relative mb-20 overflow-hidden">
      <img
        src="/about.png"
        alt="Minimal luxury architecture"
        className="w-full h-[520px] object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>

    <div className="max-w-3xl ml-auto space-y-7 text-gray-400 text-lg leading-8">
  {language === "en" ? (
    <>
      <p>
        Pembridge Talent is a specialist bilingual recruitment agency in Japan, connecting exceptional Japanese-English bilingual professionals with leading multinational corporations and domestic companies across the Japanese market. We partner with organisations across both B2B and B2C industries, delivering tailored recruitment and executive search solutions for companies seeking top bilingual talent in Japan.
      </p>

      <p>
        Our expertise covers a wide range of corporate functions including Marketing, Finance, Accounting, HR, Sales, Supply Chain, Operations, Digital, E-commerce, and senior commercial leadership roles. We support hiring across industries including Consumer Goods, FMCG, Luxury, Retail, Technology, Professional Services, Healthcare, Manufacturing & Industrial and other internationally focused sectors where bilingual communication and cross-cultural experience are essential.
      </p>

      <p>
        As an experienced recruitment consultancy in Japan, Pembridge Talent understands the unique challenges of hiring bilingual professionals and international talent within the Japanese market. We work closely with both employers and candidates to create successful long-term matches, helping companies hire high-performing professionals while supporting candidates searching for bilingual jobs, English-speaking jobs, and international career opportunities in Japan.
      </p>
    </>
  ) : (
    <>
      <p>
        日本市場におけるバイリンガル人材採用の複雑さを深く理解する
        専門コンサルタントとして、企業文化や事業戦略、
        候補者のキャリアビジョンまで丁寧に理解し、
        長期的な成功につながるマッチングを実現します。
      </p>

      <p>
        バイリンガル採用、外資系採用、エグゼクティブサーチ、
        人材紹介サービスを通じて、企業には優秀な人材との出会いを、
        候補者には外資系求人や英語を活かせるキャリア機会を提供しています。
      </p>
    </>
  )}
</div>

  </div>
</section>
{/* CANDIDATE SERVICES */}
<section
  id="candidate"
  className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#070707]"
>
  <div className="max-w-7xl mx-auto">
    <div className="max-w-4xl mb-20">
      <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
        CANDIDATES 
      </p>

      <h2 className="text-4xl md:text-6xl leading-tight">
  {language === "en" ? (
    <>
      Unlock Your Potential
      <br />
      with Pembridge Talent
    </>
  ) : (
    <>
      あなたの可能性を、
      <br />
      次のステージへ
    </>
  )}
</h2>
</div>
      <div className="space-y-7 text-gray-400 text-lg leading-8">
  {language === "en" ? (
    <>
      <p>
        Your career deserves more than just a search. It deserves a strategy.
        We advocate for elite professionals, connecting you with visionary
        organizations that value high-performance impact.
      </p>

      <p>
        With deep expertise in recruitment in Japan, we partner with bilingual
        professionals, returnees, and internationally minded talent seeking
        career growth with global companies, foreign-affiliated firms, and
        innovative Japanese businesses. From finance and technology to
        marketing, operations, and executive leadership, we help exceptional
        candidates secure opportunities that align with their ambitions, skills,
        and long-term career goals.
      </p>

      <p>
        Whether you are searching for bilingual jobs in Tokyo, Osaka, or across
        Japan, Pembridge Talent provides tailored recruitment support, market
        insight, and access to exclusive opportunities with leading
        international employers.
      </p>
    </>
  ) : (
    <>
      <p>
        転職は単なる仕事探しではありません。
        理想のキャリアを実現するための戦略であるべきだと私たちは考えています。
      </p>

      <p>
        PEMBRIDGE TALENTは、優秀なバイリンガル人材と、
        グローバル企業、外資系企業、そして成長を続ける日本企業を結びつけ、
        長期的な成功につながるキャリア機会を提供しています。
      </p>

      <p>
        日本におけるバイリンガル転職・外資系転職の専門パートナーとして、
        英日バイリンガル人材、帰国子女、グローバル志向のプロフェッショナルを支援。
        金融、IT、マーケティング、営業、オペレーション、人事、
        エグゼクティブポジションまで幅広い領域に対応し、
        一人ひとりの経験や強み、将来のビジョンに合った最適な機会をご紹介します。
      </p>

      <p>
        東京・大阪をはじめ日本全国の外資系企業やグローバル企業との
        強固なネットワークを活かし、一般には公開されていない求人情報や
        独占案件へのアクセスも提供しています。
      </p>

      <p>
        市場動向に関する情報提供から面接対策、オファー交渉まで、
        PEMBRIDGE TALENTはあなたのキャリアパートナーとして、
        次の挑戦を成功へと導きます。
      </p>
    </>
  )}
</div>

</div>
{/* CANDIDATE IMAGE */}
<div className="mb-20 overflow-hidden border border-white/10">
  <img
    src="/candidate.png"
    alt="Bilingual professional"
    className="w-full h-[620px] object-cover"
  />
</div>

{/* CANDIDATE TESTIMONIALS */}
<div className="max-w-7xl mx-auto">
  <div className="text-center">
    <p className="tracking-[0.4em] text-red-700 text-sm mb-4">
      {language === "en" ? "CANDIDATE TESTIMONIALS" : "求職者様の声"}
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        quote:
          language === "en"
            ? "Accurately assesses people’s aptitude and offers them positions that fit them perfectly."
            : "一人ひとりの適性を的確に見極め、その人に本当に合ったポジションを提案してくれました。",
        name: "Masa",
        title:
          language === "en"
            ? "Executive Level Bilingual Candidate"
            : "エグゼクティブレベル バイリンガル求職者",
      },
      {
        quote:
          language === "en"
            ? "I couldn’t have asked for a better agent. They understood my needs right away, introduced extremely attractive opportunities, kept me motivated throughout the process, and negotiated excellently in finalizing the offer."
            : "これ以上ないほど素晴らしいエージェントでした。私の希望をすぐに理解し、非常に魅力的な機会を紹介してくれました。選考中も励まし続けてくれ、最後のオファー交渉まで非常に心強いサポートでした。",
        name: "Yu",
        title:
          language === "en"
            ? "Senior Level Bilingual Candidate"
            : "シニアレベル バイリンガル求職者",
      },
      {
        quote:
          language === "en"
            ? "A great contributor to my career and the best agent I have ever worked with. Their timely opinions, market insights and company knowledge helped me make a very important career decision."
            : "私のキャリアに大きく貢献してくれた、これまでで最高のエージェントです。市場・業界・企業に関する的確な意見や洞察をタイムリーに提供してくれたことで、重要なキャリアの決断をすることができました。",
        name: "Naomi",
        title:
          language === "en"
            ? "Senior Bilingual Candidate"
            : "シニア バイリンガル求職者",
      },
      {
        quote:
          language === "en"
            ? "Very reliable. They deliver strong results with a personal touch. I highly recommend them to anyone looking for a job, and to companies looking for employees."
            : "とても信頼できるエージェントです。丁寧で親身な対応をしながら、しっかりと結果を出してくれました。転職を考えている方にも、採用を考えている企業にも自信を持っておすすめできます。",
        name: "Maya",
        title:
          language === "en"
            ? "Senior Level Bilingual Candidate"
            : "シニアレベル バイリンガル求職者",
      },
    ].map((story) => (
      <div
        key={story.name}
        className="border border-white/10 p-8 bg-black/40 hover:border-red-700 transition"
      >
        <p className="text-gray-300 leading-8 mb-8">“{story.quote}”</p>

        <div className="border-t border-white/10 pt-5">
          <p className="text-white tracking-widest text-sm">{story.name}</p>
          <p className="text-gray-500 text-sm mt-2">{story.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

{/* CLIENT SERVICES */}
<section id="clients" className="py-32 px-6 md:px-20 border-t border-white/10">
  <div className="max-w-7xl mx-auto">

    <div className="max-w-4xl mb-20">
      <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
        {language === "en" ? "COMPANIES" : "企業向けサービス"}
      </p>

      <h2 className="text-4xl md:text-6xl leading-tight mb-8">
        {language === "en" ? (
          <>
            Elite Talent Acquisition
            <br />
            for Global Industry Leaders
          </>
        ) : (
          <>
            グローバル企業の成長を支える
            <br />
            戦略的人材採用パートナー
          </>
        )}
      </h2>
    </div>

    <div className="max-w-4xl text-gray-400 text-lg leading-8 space-y-8">
      {language === "en" ? (
        <>
          <p>
            Elite Recruitment Solutions delivers high-performance talent
            strategies for the world's most innovative organizations. We don't
            just fill roles; we build the future of leadership.
          </p>

          <p>
            Specializing in bilingual recruitment in Japan, we help
            international companies, foreign-owned businesses, and
            growth-focused organizations secure exceptional English-Japanese
            bilingual talent across a wide range of industries. Our
            consultative approach combines deep local market knowledge with an
            international perspective, enabling us to identify professionals
            who deliver both technical expertise and cultural alignment.
          </p>

          <p>
            From mid-level specialists to executive leadership hiring,
            Pembridge Talent supports companies across Japan with strategic
            recruitment solutions designed to attract, engage, and retain top
            bilingual professionals in competitive markets.
          </p>
        </>
      ) : (
        <>
          <p>
            PEMBRIDGE TALENTは、企業の成長を支える優秀な人材の採用を通じて、
            長期的な競争力向上を実現する採用パートナーです。
            単なる欠員補充ではなく、組織の未来を担う人材との出会いを創出します。
          </p>

          <p>
            日本におけるバイリンガル採用・外資系採用の専門コンサルタントとして、
            グローバル企業、外資系企業、成長志向の日本企業に対し、
            英語・日本語の双方で活躍できる優秀なバイリンガル人材をご紹介しています。
            深い市場知識と国際的な視点を組み合わせることで、
            高い専門性と企業文化への適応力を兼ね備えた人材を見極めます。
          </p>

          <p>
            マーケティング、営業、ファイナンス、人事、オペレーション、
            サプライチェーン、IT、エグゼクティブポジションまで幅広い領域に対応。
            人材紹介、エグゼクティブサーチ、採用支援を通じて、
            日本国内の競争が激しい採用市場において企業の採用成功を支援します。
          </p>
        </>
      )}
    </div>

    {/* CLIENT IMAGE */}
    <div className="mt-20 mb-20 overflow-hidden border border-white/10">
      <img
        src="/client.png"
        alt="Client services"
        className="w-full h-[520px] object-cover"
      />
    </div>

    {/* CLIENT TESTIMONIALS */}
    <div className="text-center">
      <p className="tracking-[0.4em] text-red-700 text-sm mb-4">
        {language === "en" ? "COMPANY TESTIMONIALS" : "企業様の声"}
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          quote:
            language === "en"
              ? "When hiring for my team, they are always the first people I contact because they consistently deliver exceptional results and high-performing talent. More than recruiters, they are trusted advisors and business partners."
              : "チーム採用を行う際は、まず最初に相談しています。常に高い成果を出し、優秀な人材を紹介してくれるからです。単なるリクルーターではなく、信頼できるアドバイザーであり、ビジネスパートナーです。",
          company: "Executive, US Company",
        },
        {
          quote:
            language === "en"
              ? "As part of a major transformation program in Japan, we needed highly skilled bilingual professionals. They quickly understood both the direction of the business and the soft skills required. We successfully hired several strong professionals and I would highly recommend working with them."
              : "日本での組織変革プロジェクトにおいて、高いスキルを持つバイリンガル人材の採用が必要でした。事業の方向性や求めるソフトスキルを素早く理解し、複数の優秀な人材の採用につなげてくれました。",
          company: "Executive, US Company",
        },
        {
          quote:
            language === "en"
              ? "A highly focused and dedicated recruiter who took the time to truly understand our business needs and challenges. Despite our difficult office location outside central Tokyo, they successfully convinced excellent candidates to join our organization. Highly recommended."
              : "私たちの事業ニーズや課題を丁寧に理解してくれる、非常に集中力と献身性の高いリクルーターです。都心から離れた難しい勤務地にもかかわらず、優秀な候補者を説得し、入社につなげてくれました。",
          company: "Executive, European Company",
        },
      ].map((story, index) => (
        <div
          key={index}
          className="border border-white/10 p-8 bg-black/40 hover:border-red-700 transition"
        >
          <p className="text-gray-300 leading-8 mb-10">“{story.quote}”</p>

          <div className="border-t border-white/10 pt-5">
            <p className="text-gray-500 text-sm tracking-widest">
              {story.company}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
{/* LIVE JOBS */}
<section id="jobs" className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#070707]">
  
  <div className="max-w-7xl mx-auto">
    
    <div className="flex items-end justify-between mb-16">
      
      <div>
        <p className="text-red-700 tracking-[0.3em] text-sm mb-4">
          JOBS
        </p>

        <h2 className="text-4xl md:text-5xl leading-tight">
          Featured Roles
        </h2>
      </div>

      <button className="hidden md:block border border-white/20 px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition">
        VIEW ALL
      </button>

    </div>

    <div className="space-y-6">

     

          </div>

        </div>
      

  {jobs.map((job) => (
  <div
    key={job._id}
    className="group border border-white/10 hover:border-red-700 transition p-8 bg-black/40 backdrop-blur-sm"
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      <div>
        <p className="text-sm tracking-[0.2em] text-gray-500 mb-3">
          {language === "en"
  ? job.location
  : job.locationJa}
{" / "}
{language === "en"
  ? job.category
  : job.categoryJa}
        </p>

        <a
  href={`/jobs/${job.slug?.current}`}
  className="block"
>
  <h3 className="text-3xl mb-4 group-hover:text-red-600 transition">
    {language === "en"
  ? job.title
  : job.titleJa}
  </h3>
</a>

        <p className="text-gray-400 max-w-2xl">
          {language === "en"
  ? job.description
  : job.descriptionJa}
        </p>
      </div>

      <div className="text-left md:text-right">

        <p className="text-2xl mb-3">
          {language === "en"
  ? job.salary
  : job.salaryJa}
        </p>

        <button
  type="button"
  onClick={() => handleApply(job.title)}
  className="inline-block border border-white/20 px-5 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
>
  APPLY
</button>

      </div>
    </div>
  </div>
))}
</section>
{/* CONTACT */}
<section
  id="contact"
  className="relative py-32 px-6 md:px-20 border-t border-white/10 overflow-hidden"
>

  {/* BACKGROUND IMAGE */}
  <img
    src="/contact.png"
    alt="Luxury corporate background"
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <form onSubmit={handleSubmit}>
      <p className="text-red-700 tracking-[0.3em] text-sm mb-6">
        CONTACT
      </p>

      <h2 className="text-4xl md:text-6xl leading-tight mb-8">
        Let’s Build Exceptional Teams Together
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto leading-8 mb-16">
        Whether you are searching for transformative talent or exploring your next career move,
        PEMBRIDGE TALENT provides discreet and globally minded recruitment solutions.
      </p>

      <div className="space-y-6 text-left">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full bg-black border border-white/20 px-6 py-5 outline-none focus:border-red-700 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-black border border-white/20 px-6 py-5 outline-none focus:border-red-700 transition"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full bg-black border border-white/20 px-6 py-5 outline-none focus:border-red-700 transition"
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="w-full bg-black border border-white/20 px-6 py-5 outline-none focus:border-red-700 transition"
        />
      </div>

      <div className="mt-6 text-left">
        <p className="text-gray-400 mb-3 tracking-[0.25em] text-xs">
          UPLOAD CV (RESUME)/JOB DESCRIPTION
        </p>

        <div className="border border-dashed border-white/20 px-6 py-6 text-center hover:border-red-700 transition">
          <input
            type="file"
            className="text-sm text-gray-400"
          />

          <p className="text-gray-600 text-xs mt-3">
            PDF, DOCX up to 10MB
          </p>
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Your Message *"
        required
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="w-full mt-6 bg-black border border-white/20 px-6 py-5 outline-none focus:border-red-700 transition"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-8 border border-red-700 text-red-600 hover:bg-red-700 hover:text-white transition px-10 py-5 tracking-[0.3em] text-sm"
      >
        {loading ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {success && (
        <p className="mt-6 text-green-500 tracking-widest text-sm">
          MESSAGE SENT SUCCESSFULLY
        </p>
      )}
    </form>
  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 py-12 px-6 md:px-20">
  
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    <div>
      <p className="tracking-[0.3em] text-sm">
        PEMBRIDGE TALENT
      </p>

      <p className="text-gray-500 text-sm mt-2">
        Japan Recruitment Boutique
      </p>
      <p className="text-gray-600 text-sm mt-4">
  © 2026 PEMBRIDGE TALENT. All Rights Reserved.
</p>
    </div>

   <div className="flex items-center gap-8 text-sm tracking-widest text-gray-400">

  <a
    href="/privacy-policy"
    className="hover:text-white transition"
  >
    PRIVACY POLICY
  </a>

</div>

  </div>
</footer>
    </main>
  )
}