import { IconTruckDelivery } from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-brand-accent" />
          <span className="text-[10px] font-normal tracking-[0.35em] text-brand-accent uppercase">
            Services
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          {siteConfig.service.title}
        </h2>
        <p className="text-sm font-normal text-foreground/60 max-w-2xl leading-relaxed mb-12">
          {siteConfig.service.lead}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-muted rounded-lg p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-brand">
              <IconTruckDelivery size={28} stroke={1.5} />
              <span className="text-base font-medium">サービス詳細</span>
            </div>
            <dl className="divide-y divide-border">
              {siteConfig.service.details.map((d) => (
                <div key={d.label} className="py-4 flex gap-4">
                  <dt className="text-xs font-normal text-foreground/45 w-24 shrink-0 pt-0.5">
                    {d.label}
                  </dt>
                  <dd className="text-sm font-normal text-foreground leading-relaxed">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-border rounded-lg p-6">
              <p className="text-xs font-normal tracking-[0.2em] text-foreground/40 uppercase mb-3">
                対応エリアイメージ
              </p>
              <p className="text-sm font-normal text-foreground/60 leading-relaxed">
                長野県を拠点に、関東（東京・埼玉・神奈川など）・中部（愛知・岐阜・静岡など）・北陸（富山・石川・福井など）へ対応しています。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["長野県内", "関東方面", "中部方面", "北陸方面"].map((area) => (
                  <span
                    key={area}
                    className="text-xs font-normal text-brand bg-brand-muted px-3 py-1 rounded-md"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <p className="text-xs font-normal tracking-[0.2em] text-foreground/40 uppercase mb-3">
                貨物の例
              </p>
              <div className="flex flex-wrap gap-2">
                {["工業製品", "建築資材", "食品・飲料", "日用品", "精密機器", "家具・什器"].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-xs font-normal text-foreground/70 bg-muted px-3 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <p className="text-xs font-normal text-foreground/45 mt-4">
                ※ 危険物・特殊貨物については別途ご相談ください
              </p>
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-brand text-white text-sm font-normal py-3.5 rounded-md hover:bg-brand-dark transition-colors"
            >
              輸送のご相談・お見積もりはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
