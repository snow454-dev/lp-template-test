import { siteConfig } from "@/config/site.config";

export default function Hero() {
  return (
    <section className="bg-brand-light min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-sm font-normal text-brand tracking-widest uppercase mb-6">
          {siteConfig.hero.eyebrow}
        </p>
        <h1 className="text-4xl font-medium text-brand-dark leading-tight whitespace-pre-line mb-6">
          {siteConfig.hero.title}
        </h1>
        <p className="text-lg font-normal text-gray-700 leading-relaxed max-w-2xl mb-10">
          {siteConfig.hero.lead}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-brand text-white font-medium text-base transition-colors hover:bg-brand-dark"
          >
            お問い合わせ
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-brand text-brand font-medium text-base transition-colors hover:bg-brand hover:text-white"
          >
            サービス詳細
          </a>
        </div>
      </div>
    </section>
  );
}
