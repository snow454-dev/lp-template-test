import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-sm font-medium mb-1">{siteConfig.company.name}</p>
            <p className="text-[9px] font-normal tracking-[0.2em] text-white/40 mb-5">
              一般貨物自動車運送事業
            </p>
            <p className="text-sm font-normal text-white/55 leading-relaxed">
              {siteConfig.company.tagline}
            </p>
            <div className="w-6 h-px bg-brand-accent mt-5" />
          </div>

          <div>
            <p className="text-[10px] font-normal tracking-[0.25em] text-white/40 uppercase mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-normal text-white/55 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-normal tracking-[0.25em] text-white/40 uppercase mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm font-normal text-white/55">
              <div className="flex items-start gap-2">
                <IconMapPin size={15} stroke={1.5} className="mt-0.5 shrink-0" />
                <span>{siteConfig.company.address}</span>
              </div>
              <a
                href={`tel:${siteConfig.company.tel}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <IconPhone size={15} stroke={1.5} />
                {siteConfig.company.tel}
              </a>
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <IconMail size={15} stroke={1.5} />
                {siteConfig.company.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
          <div className="flex gap-5">
            <a href="/privacy" className="text-xs font-normal text-white/30 hover:text-white/60 transition-colors">
              プライバシーポリシー
            </a>
            <a href="/tokusho" className="text-xs font-normal text-white/30 hover:text-white/60 transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
          <p className="text-xs font-normal text-white/30">
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
