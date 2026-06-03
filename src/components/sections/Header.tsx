"use client";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex flex-col leading-none gap-0.5">
          <span className="text-sm font-medium text-brand tracking-widest">
            {siteConfig.company.name}
          </span>
          <span className="text-[9px] font-normal text-gray-400 tracking-[0.22em] uppercase">
            {siteConfig.company.nameEn}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-gray-600 hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-normal text-white bg-brand px-5 py-2 rounded-md hover:opacity-80 transition-opacity"
          >
            お問い合わせ
          </a>
        </nav>

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
              className="text-sm font-normal text-gray-700 py-1 hover:text-brand transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
