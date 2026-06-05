import {
  IconShieldCheck,
  IconClock,
  IconPackage,
  IconHeadset,
} from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

const iconMap = {
  shield: IconShieldCheck,
  clock: IconClock,
  package: IconPackage,
  headset: IconHeadset,
} as const;

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-brand-accent" />
          <span className="text-[10px] font-normal tracking-[0.35em] text-brand-accent uppercase">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
          選ばれる理由
        </h2>
        <p className="text-sm font-normal text-foreground/55 mb-12">
          荷主様に安心してご依頼いただくために、4つのことを大切にしています。
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.strengths.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div
                key={s.title}
                className="bg-white rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-brand-muted rounded-lg text-brand">
                  <Icon size={22} stroke={1.5} />
                </div>
                <p className="text-sm font-medium text-foreground">{s.title}</p>
                <p className="text-xs font-normal text-foreground/55 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
