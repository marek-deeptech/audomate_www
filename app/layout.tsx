import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://audomate.eu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Audomate — AI Compliance Platform for EU Regulations",
  description:
    "Audomate automates compliance audits, gap analysis, documentation and continuous monitoring across DORA, MiCA, NIS2, GDPR and ISO 27001 — with AI agents built by EU compliance experts, on 100% EU infrastructure. Audit-ready in days, not months.",
  keywords: [
    "Audomate", "RegTech", "compliance automation", "AI compliance platform",
    "DORA compliance software", "MiCA whitepaper generator", "NIS2 compliance platform",
    "GDPR", "ISO 27001", "PSD2", "PSR", "EU AI Act", "compliance audit AI",
    "EU data sovereignty", "on-premise LLM", "DeepTech",
  ],
  authors: [{ name: "DeepTech Sp. z o.o." }],
  openGraph: {
    title: "Audomate — AI Compliance Platform for EU Regulations",
    description:
      "Audit-ready in days, not months. Automate audits, gap analysis, documentation and continuous monitoring across DORA, MiCA, NIS2, GDPR & ISO 27001 — on 100% EU infrastructure.",
    url: siteUrl,
    siteName: "Audomate",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audomate — AI Compliance Platform for EU Regulations",
    description:
      "Audit-ready in days, not months. AI compliance for DORA, MiCA, NIS2, GDPR & ISO 27001 — built by EU experts, run on EU infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${instrument.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
