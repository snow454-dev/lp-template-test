import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={siteConfig.hero.image}
        alt="旬の食材"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(26,58,92,0.72) 0%, rgba(26,58,92,0.45) 50%, rgba(10,22,40,0.78) 100%)",
        }}
      />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-[11px] font-normal tracking-[0.35em] text-white/60 mb-7 uppercase">
          {siteConfig.hero.eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl font-medium leading-[1.15] whitespace-pre-line mb-7">
          {siteConfig.hero.title}
        </h1>
        <div className="w-8 h-px bg-brand-accent mx-auto mb-7" />
        <p className="text-sm md:text-base font-normal text-white/75 leading-relaxed max-w-md mx-auto mb-10">
          {siteConfig.hero.lead}
        </p>
        <a
          href="#products"
          className="inline-flex items-center justify-center px-9 py-3.5 rounded-md bg-white text-brand text-sm font-medium hover:bg-brand-muted transition-colors"
        >
          {siteConfig.hero.cta}
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
