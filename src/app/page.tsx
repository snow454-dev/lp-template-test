import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Strengths from "@/components/sections/Strengths";
import Flow from "@/components/sections/Flow";
import CompanyInfo from "@/components/sections/CompanyInfo";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    url: siteConfig.company.url,
    email: siteConfig.company.email,
    telephone: siteConfig.company.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressRegion: "長野県",
      addressCountry: "JP",
    },
    areaServed: ["長野県", "関東地方", "中部地方", "北陸地方"],
    serviceType: "一般貨物自動車運送事業",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Strengths />
        <Flow />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
