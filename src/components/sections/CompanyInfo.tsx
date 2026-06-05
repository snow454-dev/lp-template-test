import { siteConfig } from "@/config/site.config";

export default function CompanyInfo() {
  return (
    <section id="company" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-brand-accent" />
          <span className="text-[10px] font-normal tracking-[0.35em] text-brand-accent uppercase">
            Company
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12">
          会社概要
        </h2>

        <div className="bg-white rounded-lg overflow-hidden">
          <dl>
            {siteConfig.companyInfo.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row ${
                  i < siteConfig.companyInfo.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="w-full sm:w-40 shrink-0 px-6 py-4 text-xs font-normal text-foreground/45 bg-muted/60 flex items-center">
                  {row.label}
                </dt>
                <dd className="px-6 py-4 text-sm font-normal text-foreground flex items-center">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
