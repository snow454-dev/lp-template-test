import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div>
            <p className="text-base font-medium tracking-wider mb-0.5">
              {siteConfig.company.name}
            </p>
            <p className="text-[9px] font-normal tracking-[0.25em] text-white/45 uppercase mb-5">
              {siteConfig.company.nameEn}
            </p>
            <p className="text-sm font-normal text-white/60 leading-relaxed">
              {siteConfig.company.tagline}
            </p>
            <div className="w-6 h-px bg-brand-accent mt-5" />
          </div>

          <div>
            <p className="text-[10px] font-normal tracking-[0.25em] text-white/40 uppercase mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {siteConfig.footer.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-normal text-white/65 hover:text-white transition-colors"
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
            <div className="flex flex-col gap-2 text-sm font-normal text-white/65">
              <p>〒{siteConfig.company.address.zip}</p>
              <p>{siteConfig.company.address.line1}</p>
              <p>{siteConfig.company.address.line2}</p>
              <a
                href={`tel:${siteConfig.company.tel.replace(/-/g, "")}`}
                className="mt-2 hover:text-white transition-colors"
              >
                {siteConfig.company.tel}
              </a>
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.company.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-6">
            {siteConfig.footer.legal.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-normal text-white/35 hover:text-white/65 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-xs font-normal text-white/35">
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
