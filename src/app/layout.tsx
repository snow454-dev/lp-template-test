import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | ${siteConfig.company.address.pref}の運送会社`,
  description: siteConfig.hero.lead,
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
