"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
  <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-center md:justify-between">

    <a href="#" className="block">
      <img
        src="/logo.png"
        alt="PEMBRIDGE TALENT"
        className="w-[150px] md:w-[170px] object-contain"
      />
    </a>

    <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest text-gray-300">
      <a href="#about" className="hover:text-white transition">
  {language === "en" ? "ABOUT" : "会社概要"}
</a>

<a href="#candidate" className="hover:text-white transition">
  {language === "en" ? "CANDIDATE" : "候補者向け"}
</a>

<a href="#clients" className="hover:text-white transition">
  {language === "en" ? "COMPANIES" : "企業向け"}
</a>

<a href="#jobs" className="hover:text-white transition">
  {language === "en" ? "JOBS" : "求人情報"}
</a>

<a href="#contact" className="hover:text-white transition">
  {language === "en" ? "CONTACT" : "お問い合わせ"}
</a>
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
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>
          {language === "en" ? "ABOUT" : "会社概要"}
        </a>
        <a href="#candidate" onClick={() => setMobileMenuOpen(false)}>
          {language === "en" ? "CANDIDATE" : "候補者向け"}
        </a>
        <a href="#clients" onClick={() => setMobileMenuOpen(false)}>
          {language === "en" ? "COMPANIES" : "企業向け"}
        </a>
        <a href="#jobs" onClick={() => setMobileMenuOpen(false)}>
          {language === "en" ? "JOBS" : "求人情報"}
        </a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
          {language === "en" ? "CONTACT" : "お問い合わせ"}
        </a>
      <button
  type="button"
  onClick={() => {
  setLanguage(language === "en" ? "jp" : "en");
  setMobileMenuOpen(false);
}}
  className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
>
  {language === "en" ? "JP" : "EN"}
</button>
      </nav>
    </div>
  )}
</header>
  );
}