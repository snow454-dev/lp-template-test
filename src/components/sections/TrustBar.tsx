import { siteConfig } from "@/config/site.config";

export default function TrustBar() {
  return (
    <section className="bg-brand py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-medium text-white mb-1">{stat.value}</p>
              <p className="text-xs font-normal text-white/55 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
