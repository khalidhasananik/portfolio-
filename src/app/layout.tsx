import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const siteUrl = "https://khalidhasananik.com";
const title = "Khalid Hasan Anik — Technical Project Coordinator in Dhaka, Bangladesh";
const description =
  "Khalid Hasan Anik is a Technical Project Coordinator at AWTOMATIG in Dhaka, Bangladesh, working hands-on as a full-stack developer, DevOps engineer, and AI automation builder.";
const ogDescription =
  "Technical Project Coordinator at AWTOMATIG — full-stack development, AI automation, and DevOps in Dhaka, Bangladesh.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Khalid Hasan Anik",
      alternateName: "Khalid Hasan",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image.jpg`,
      jobTitle: "Technical Project Coordinator",
      description,
      email: "mailto:contact@khalidhasananik.com",
      telephone: "+8801640577943",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      worksFor: {
        "@type": "Organization",
        name: "AWTOMATIG",
        url: "https://www.awtomatig.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "North South University",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "BSc in Computer Science and Engineering",
        educationalLevel: "Bachelor's degree",
      },
      sameAs: [
        "https://github.com/khalidhasananik",
        "https://www.linkedin.com/in/khalidhasananik/",
        "https://www.instagram.com/khalidhasananik__/",
        "https://www.facebook.com/khalidHanik/",
        "https://www.pinterest.com/khalidhasananik/",
      ],
      knowsAbout: [
        "Technical Project Coordination",
        "AI Agents & RAG Systems",
        "Workflow Automation (n8n)",
        "Full-Stack Web Development (Next.js, React)",
        "DevOps (Docker, CI/CD, Linux VPS Administration)",
        "Analytics & Tracking (GA4, Google Tag Manager, Google Ads)",
        "Team Mentoring & Client Delivery",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Khalid Hasan Anik",
      url: siteUrl,
      about: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Khalid Hasan",
  },
  description,
  openGraph: {
    title,
    description: ogDescription,
    url: siteUrl,
    siteName: "Khalid Hasan Anik",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ogDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${epilogue.variable} h-full antialiased`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <body className="min-h-full flex flex-col">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
