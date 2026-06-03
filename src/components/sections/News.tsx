import { siteConfig } from "@/config/site.config";

function badge(category: string) {
  if (category === "新商品")
    return "bg-brand text-white";
  if (category === "イベント")
    return "bg-brand text-white opacity-70";
  return "bg-brand-muted text-brand border border-brand/20";
}

export default function News() {
  return (
    <section id="news" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[11px] font-normal tracking-[0.3em] text-brand-accent uppercase mb-3">
            INFORMATION
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            お知らせ
          </h2>
        </div>

        <div className="divide-y divide-border">
          {siteConfig.news.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 group cursor-pointer"
            >
              <time className="text-sm font-normal text-gray-400 shrink-0 tabular-nums">
                {item.date}
              </time>
              <span
                className={`text-[10px] font-normal tracking-wide px-2.5 py-1 rounded-md shrink-0 w-fit ${badge(
                  item.category
                )}`}
              >
                {item.category}
              </span>
              <p className="text-sm font-normal text-foreground group-hover:text-brand transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
