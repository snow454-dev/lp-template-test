import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { IconArrowRight, IconPhone } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[540px] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
        alt="長野の幹線道路を走る大型トラック"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,37,64,0.92) 0%, rgba(30,58,95,0.75) 55%, rgba(15,37,64,0.4) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <p className="text-[10px] font-normal tracking-[0.4em] text-brand-accent uppercase mb-5">
          General Cargo Transport · Nagano
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-snug mb-6">
          長野から、<br />確実に届ける。
        </h1>
        <div className="w-8 h-px bg-brand-accent mb-6" />
        <p className="text-sm md:text-base font-normal text-white/70 max-w-md leading-relaxed mb-10">
          一般貨物輸送を中心に、安全・確実・丁寧をモットーとした輸送サービスを提供しています。大切なお荷物を、責任を持ってお届けします。
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white text-sm font-normal px-7 py-3.5 rounded-md hover:opacity-90 transition-opacity"
          >
            お問い合わせ・お見積もり
            <IconArrowRight size={15} stroke={1.5} />
          </a>
          <a
            href={`tel:${siteConfig.company.tel}`}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/25 text-sm font-normal px-7 py-3.5 rounded-md hover:bg-white/20 transition-colors"
          >
            <IconPhone size={15} stroke={1.5} />
            {siteConfig.company.tel}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
