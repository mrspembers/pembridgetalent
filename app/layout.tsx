import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    url: "https://pembridgetalent.com",
    siteName: "PEMBRIDGE TALENT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}