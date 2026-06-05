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

          <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
            Decades of bilingual recruitment expertise in Japan 
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            
            <button className="bg-red-700 hover:bg-red-800 transition px-8 py-4 tracking-widest text-sm">
              VIEW OPPORTUNITIES
            </button>

            <button className="bg-red-700 hover:bg-red-800 transition px-8 py-4 tracking-widest text-sm">
              HIRE TALENT
            </button>

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
        We draw on our deep knowledge & experience in Japan’s recruitment market to match your needs and expectations.
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
      <p>
        Pembridge Talent is a specialist bilingual recruitment agency in Japan, connecting exceptional Japanese-English bilingual professionals with leading multinational corporations and domestic companies across the Japanese market. We partner with organisations across both B2B and B2C industries, delivering tailored recruitment and executive search solutions for companies seeking top bilingual talent in Japan.
      </p>

      <p>
        Our expertise covers a wide range of corporate functions including Marketing, Finance, Accounting, HR, Sales, Supply Chain, Operations, Digital, E-commerce, and senior commercial leadership roles. We support hiring across industries including Consumer Goods, FMCG, Luxury, Retail, Technology, Professional Services, Healthcare, Manufacturing & Industrial and other internationally focused sectors where bilingual communication and cross-cultural experience are essential.
      </p>

      <p>
       As an experienced recruitment consultancy in Japan, Pembridge Talent understands the unique challenges of hiring bilingual professionals and international talent within the Japanese market. We work closely with both employers and candidates to create successful long-term matches, helping companies hire high-performing professionals while supporting candidates searching for bilingual jobs, English-speaking jobs, and international career opportunities in Japan.
      </p>
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

      <h2 className="text-4xl md:text-6xl leading-tight mb-8">
        Unlock Your Potential with Pembridge Talent
      </h2>
</div>
      <div className="max-w-4xl text-gray-400 text-lg leading-8 space-y-8">

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
    candidates secure opportunities that align with their ambitions,
    skills, and long-term career goals.
  </p>

  <p>
    Whether you are searching for bilingual jobs in Tokyo, Osaka, or across
    Japan, Pembridge Talent provides tailored recruitment support, market
    insight, and access to exclusive opportunities with leading
    international employers.
  </p>

</div>
{/* CANDIDATE IMAGE */}
<div className="mb-20 overflow-hidden border border-white/10">
  <img
    src="/candidate.png"
    alt="Bilingual professional"
    className="w-full h-[620px] object-cover"
  />
</div>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          quote:
            "Accurately assesses people’s aptitude and offers them positions that fit them perfectly.",
          name: "Masa",
          title: "Executive Level Bilingual Candidate",
        },
        {
          quote:
            "I couldn’t have asked for a better agent. They understood my needs right away, introduced extremely attractive opportunities, kept me motivated throughout the process, and negotiated excellently in finalizing the offer.",
          name: "Yu",
          title: "Senior Level Bilingual Candidate",
        },
        {
          quote:
            "A great contributor to my career and the best agent I have ever worked with. Their timely opinions, market insights and company knowledge helped me make a very important career decision.",
          name: "Naomi",
          title: "Senior Level Bilingual Candidate",
        },
        {
          quote:
            "Very reliable. They deliver strong results with a personal touch. I highly recommend them to anyone looking for a job, and to companies looking for employees.",
          name: "Maya",
          title: "Senior Level Bilingual Candidate",
        },
      ].map((story) => (
        <div
          key={story.name}
          className="border border-white/10 p-8 bg-black/40 hover:border-red-700 transition"
        >
          <p className="text-gray-300 leading-8 mb-8">
            “{story.quote}”
          </p>

          <div className="border-t border-white/10 pt-5">
            <p className="text-white tracking-widest text-sm">
              {story.name}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {story.title}
            </p>
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
        COMPANIES
      </p>

      <h2 className="text-4xl md:text-6xl leading-tight mb-8">
        Elite Talent Acquisition for Global Industry Leaders
      </h2>
</div>
      <div className="max-w-4xl text-gray-400 text-lg leading-8 space-y-8">

  <p>
    Elite Recruitment Solutions delivers high-performance talent strategies
    for the world's most innovative organizations. We don't just fill
    roles; we build the future of leadership.
  </p>

  <p>
    Specializing in bilingual recruitment in Japan, we help international
    companies, foreign-owned businesses, and growth-focused organizations
    secure exceptional English-Japanese bilingual talent across a wide
    range of industries. Our consultative approach combines deep local
    market knowledge with an international perspective, enabling us to
    identify professionals who deliver both technical expertise and
    cultural alignment.
  </p>

  <p>
    From mid-level specialists to executive leadership hiring, Pembridge
    Talent supports companies across Japan with strategic recruitment
    solutions designed to attract, engage, and retain top bilingual
    professionals in competitive markets.
  </p>

</div>
{/* CLIENT IMAGE */}
<div className="mb-20 overflow-hidden border border-white/10">
  <img
    src="/client.png"
    alt="Executive boardroom"
    className="w-full h-[620px] object-cover"
  />
</div>
    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          quote:
            "When hiring for my team, they are always the first people I contact because they consistently deliver exceptional results and high-performing talent. More than recruiters, they are trusted advisors and business partners.",
          company: "Executive, US Company",
        },

        {
          quote:
            "As part of a major transformation program in Japan, we needed highly skilled bilingual professionals. They quickly understood both the direction of the business and the soft skills required. We successfully hired several strong professionals and I would highly recommend working with them.",
          company: "Executive, US Company",
        },

        {
          quote:
            "A highly focused and dedicated recruiter who took the time to truly understand our business needs and challenges. Despite our difficult office location outside central Tokyo, they successfully convinced excellent candidates to join our organization. Highly recommended.",
          company: "Executive, European Company",
        },
      ].map((story, index) => (
        <div
          key={index}
          className="border border-white/10 p-8 bg-black/40 hover:border-red-700 transition"
        >
          <p className="text-gray-300 leading-8 mb-10">
            “{story.quote}”
          </p>

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
          {job.location} / {job.category}
        </p>

        <a
  href={`/jobs/${job.slug?.current}`}
  className="block"
>
  <h3 className="text-3xl mb-4 group-hover:text-red-600 transition">
    {job.title}
  </h3>
</a>

        <p className="text-gray-400 max-w-2xl">
          {job.description}
        </p>
      </div>

      <div className="text-left md:text-right">

        <p className="text-2xl mb-3">
          {job.salary}
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