"use client";
import { useState } from "react";
import { IconMenu2, IconX, IconPhone } from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex flex-col leading-none gap-0.5">
          <span className="text-sm font-medium text-brand">
            {siteConfig.company.name}
          </span>
          <span className="text-[9px] font-normal text-foreground/40 tracking-[0.2em]">
            一般貨物自動車運送事業
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {siteConfig.nav.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-foreground/60 hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.company.tel}`}
            className="flex items-center gap-1.5 text-sm font-medium text-brand"
          >
            <IconPhone size={15} stroke={1.5} />
            {siteConfig.company.tel}
          </a>
          <a
            href="#contact"
            className="text-sm font-normal text-white bg-brand-accent px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            お問い合わせ
          </a>
        </div>

        <button
          className="md:hidden text-brand p-1"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-border px-6 py-5 flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-foreground/70 py-1 border-b border-border last:border-0 hover:text-brand transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.company.tel}`}
            className="flex items-center gap-2 mt-2 text-sm font-medium text-brand"
          >
            <IconPhone size={16} stroke={1.5} />
            {siteConfig.company.tel}
          </a>
        </nav>
      )}
    </header>
  );
}
