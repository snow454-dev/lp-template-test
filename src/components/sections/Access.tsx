import { IconMapPin, IconPhone, IconMail, IconClock } from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

export default function Access() {
  const { address, hours, tel, email } = siteConfig.company;

  return (
    <section id="access" className="bg-brand-muted py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[11px] font-normal tracking-[0.3em] text-brand-accent uppercase mb-3">
            LOCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            アクセス
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 rounded-lg overflow-hidden border border-border h-80 lg:h-96 bg-white">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                address.line1
              )}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗地図"
              className="w-full h-full"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-7">
            <div>
              <p className="text-lg font-medium text-foreground mb-0.5">
                {siteConfig.company.name}
              </p>
              <p className="text-xs font-normal text-gray-400 tracking-widest uppercase">
                {siteConfig.company.nameEn}
              </p>
            </div>

            <div className="flex items-start gap-4">
              <IconMapPin size={18} className="text-brand shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-normal text-gray-400">所在地</p>
                <p className="text-sm font-normal text-foreground">
                  〒{address.zip}
                </p>
                <p className="text-sm font-normal text-foreground">
                  {address.line1}
                </p>
                <p className="text-sm font-normal text-foreground">
                  {address.line2}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconClock size={18} className="text-brand shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-normal text-gray-400">営業時間</p>
                <p className="text-sm font-normal text-foreground">
                  平日：{hours.weekday}
                </p>
                <p className="text-sm font-normal text-foreground">
                  土日祝：{hours.weekend}
                </p>
                <p className="text-xs font-normal text-gray-400 mt-1">
                  定休日：{hours.closed}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <IconPhone size={18} className="text-brand shrink-0" />
              <div>
                <p className="text-xs font-normal text-gray-400">電話番号</p>
                <a
                  href={`tel:${tel.replace(/-/g, "")}`}
                  className="text-sm font-normal text-foreground hover:text-brand transition-colors"
                >
                  {tel}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <IconMail size={18} className="text-brand shrink-0" />
              <div>
                <p className="text-xs font-normal text-gray-400">
                  メールアドレス
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-normal text-foreground hover:text-brand transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
