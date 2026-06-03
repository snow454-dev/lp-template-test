import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Kodawari() {
  return (
    <section id="kodawari" className="bg-brand-muted py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[11px] font-normal tracking-[0.3em] text-brand-accent uppercase mb-3">
            OUR VALUES
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            こだわり
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.kodawari.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg overflow-hidden border border-border"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(26,58,92,0.18)" }}
                />
                <span className="absolute bottom-4 left-5 text-[9px] font-normal tracking-[0.28em] text-white/75 uppercase">
                  {item.label}
                </span>
              </div>
              <div className="p-6">
                <div className="w-5 h-px bg-brand-accent mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-normal text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
