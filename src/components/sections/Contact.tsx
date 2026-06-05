"use client";
import { IconPhone, IconMail, IconClock } from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-brand-accent" />
          <span className="text-[10px] font-normal tracking-[0.35em] text-brand-accent uppercase">
            Contact
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
          お問い合わせ
        </h2>
        <p className="text-sm font-normal text-white/60 mb-12 max-w-xl leading-relaxed">
          輸送のご依頼・お見積もり・その他ご不明な点は、お電話またはメールにてお気軽にお問い合わせください。原則24時間以内にご返答いたします。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <a
              href={`tel:${siteConfig.company.tel}`}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-lg px-6 py-5"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-brand-accent/20 rounded-lg text-brand-accent">
                <IconPhone size={20} stroke={1.5} />
              </div>
              <div>
                <p className="text-xs font-normal text-white/50 mb-0.5">電話でのお問い合わせ</p>
                <p className="text-lg font-medium text-white">{siteConfig.company.tel}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.company.email}`}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-lg px-6 py-5"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-brand-accent/20 rounded-lg text-brand-accent">
                <IconMail size={20} stroke={1.5} />
              </div>
              <div>
                <p className="text-xs font-normal text-white/50 mb-0.5">メールでのお問い合わせ</p>
                <p className="text-sm font-medium text-white">{siteConfig.company.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/5 rounded-lg px-6 py-4">
              <IconClock size={18} stroke={1.5} className="text-white/40 shrink-0" />
              <p className="text-xs font-normal text-white/50 leading-relaxed">
                受付時間：月〜土 8:00〜18:00<br />
                ※ 緊急時は時間外でもご相談ください
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-sm font-medium text-white mb-5">メールでのお問い合わせ</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-normal text-white/50 block mb-1.5">
                  会社名・お名前
                </label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm font-normal text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent"
                  placeholder="○○株式会社 ○○様"
                />
              </div>
              <div>
                <label className="text-xs font-normal text-white/50 block mb-1.5">
                  電話番号またはメールアドレス
                </label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm font-normal text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent"
                  placeholder="000-000-0000 / info@example.co.jp"
                />
              </div>
              <div>
                <label className="text-xs font-normal text-white/50 block mb-1.5">
                  お問い合わせ内容
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm font-normal text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent resize-none"
                  placeholder="輸送品目・数量・配送先・希望日時など、お気軽にご記入ください"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-accent text-white text-sm font-normal py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
