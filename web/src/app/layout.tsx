import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const siteUrl = "https://khalidhasananik.com";
const title = "Khalid Hasan";
const description =
  "Portfolio of Khalid Hasan Anik, a software engineer based in Dhaka, Bangladesh, working across automation engineering, full-stack web development, and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Khalid Hasan",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Khalid Hasan Anik",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${epilogue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
