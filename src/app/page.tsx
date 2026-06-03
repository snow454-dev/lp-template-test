import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Kodawari from "@/components/sections/Kodawari";
import News from "@/components/sections/News";
import Access from "@/components/sections/Access";
import Footer from "@/components/sections/Footer";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    url: siteConfig.company.url,
    email: siteConfig.company.email,
    telephone: siteConfig.company.tel,
    address: {
      "@type": "PostalAddress",
      postalCode: siteConfig.company.address.zip,
      streetAddress: siteConfig.company.address.line1,
      addressCountry: "JP",
    },
    openingHours: ["Mo Tu We Th Fr 10:00-19:00", "Sa Su 10:00-18:00"],
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
        <Products />
        <Kodawari />
        <News />
        <Access />
      </main>
      <Footer />
    </>
  );
}
