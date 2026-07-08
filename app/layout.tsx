import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata = {
  title: "PEMBRIDGE TALENT | Bilingual Recruitment & Executive Search in Japan",

  description:
    "PEMBRIDGE TALENT is a boutique recruitment and executive search firm connecting global companies with bilingual talent across Japan, Tokyo, Osaka and international markets.",

  keywords: [
    "bilingual recruitment Japan",
    "executive search Japan",
    "recruitment agency Tokyo",
    "bilingual jobs Tokyo",
    "foreign-affiliated companies Japan",
    "English Japanese bilingual talent",
    "marketing recruitment Japan",
    "finance recruitment Japan",
    "IT recruitment Japan",
  ],

  verification: {
    google: "GXF1UeqdygQT9kbRK0pVRHDK3qtPUQIWNOpBjMoL_XE",
  },
  openGraph: {
  title: "PEMBRIDGE TALENT | Bilingual Recruitment in Japan",
  description:
    "Boutique recruitment and executive search connecting global companies with bilingual professionals across Japan.",
  url: "https://www.pembridgetalent.com",
  siteName: "PEMBRIDGE TALENT",
  type: "website",
  images: [
    {
      url: "https://www.pembridgetalent.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "PEMBRIDGE TALENT",
    },
  ],
},
};
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PEMBRIDGE TALENT",
  url: "https://www.pembridgetalent.com",
  logo: "https://www.pembridgetalent.com/logo.png",
  description:
    "PEMBRIDGE TALENT is a boutique recruitment and executive search firm connecting global companies with bilingual talent across Japan.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@pembridgetalent.com",
    areaServed: "JP",
    availableLanguage: ["English", "Japanese"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PEMBRIDGE TALENT",
  url: "https://www.pembridgetalent.com",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} h-full antialiased`}

    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZ8J2KDJ02"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RZ8J2KDJ02');
          `}
        </Script>
        <Script
  id="organization-json-ld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationJsonLd),
  }}
/>

<Script
  id="website-json-ld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteJsonLd),
  }}
/>
      </head>

      <body className="min-h-full flex flex-col font-sans">
  <LanguageProvider>
    <Header />
    {children}
  </LanguageProvider>
</body>
    </html>
  );
}