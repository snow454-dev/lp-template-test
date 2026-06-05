import { siteConfig } from "@/config/site.config";

export default function Flow() {
  return (
    <section id="flow" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-brand-accent" />
          <span className="text-[10px] font-normal tracking-[0.35em] text-brand-accent uppercase">
            Flow
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12">
          ご利用の流れ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.flow.map((item, i) => (
            <div key={item.step} className="relative flex flex-col gap-4">
              {i < siteConfig.flow.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(100%+1px)] w-6 h-px bg-border z-10" />
              )}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-medium text-brand/20">{item.step}</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-xs font-normal text-foreground/55 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted rounded-lg px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">まずはお気軽にご相談ください</p>
            <p className="text-xs font-normal text-foreground/55">
              見積もりのみのご依頼も歓迎しています。お気軽にお問い合わせください。
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-sm font-normal text-white bg-brand px-6 py-3 rounded-md hover:bg-brand-dark transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
