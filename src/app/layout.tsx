import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | ${siteConfig.company.tagline}`,
  description: siteConfig.company.description,
  openGraph: {
    title: `${siteConfig.company.name} | ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    url: siteConfig.company.url,
    siteName: siteConfig.company.name,
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.company.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
