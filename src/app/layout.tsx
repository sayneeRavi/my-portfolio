import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://athmisayneedev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Athmisaynee Raveendran — Data Analyst & Full-Stack Developer",
    template: "%s — Athmisaynee Raveendran",
  },
  description:
    "Athmisaynee Raveendran turns data into decisions. Final-year Software Engineering student at University of Moratuwa, Sri Lanka, building full-stack products with a data analytics edge.",
  keywords: [
    "Athmisaynee Raveendran",
    "data analyst",
    "full-stack developer",
    "Sri Lanka developer",
    "University of Moratuwa",
    "portfolio",
  ],
  authors: [{ name: "Athmisaynee Raveendran", url: siteUrl }],
  creator: "Athmisaynee Raveendran",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Athmisaynee Raveendran",
    title: "Athmisaynee Raveendran — Data Analyst & Full-Stack Developer",
    description:
      "Athmisaynee Raveendran turns data into decisions. Final-year Software Engineering student at University of Moratuwa, Sri Lanka, building full-stack products with a data analytics edge.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athmisaynee Raveendran — Data Analyst & Full-Stack Developer",
    description:
      "Athmisaynee Raveendran turns data into decisions. Final-year Software Engineering student at University of Moratuwa, Sri Lanka.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Athmisaynee Raveendran",
  jobTitle: "Data Analyst & Full-Stack Developer",
  url: siteUrl,
  sameAs: [
    "https://github.com/sayneeRavi",
    "https://medium.com/@athmiraveendran",
    "https://www.linkedin.com/in/athmisaynee-raveendran-968664267/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
