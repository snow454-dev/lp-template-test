import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Products() {
  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[11px] font-normal tracking-[0.3em] text-brand-accent uppercase mb-3">
            PRODUCTS
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            商品一覧
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-lg overflow-hidden border border-border group cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-brand text-white text-[10px] font-normal tracking-wide px-2.5 py-1 rounded-md">
                  {product.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-foreground mb-1.5">
                  {product.name}
                </h3>
                <p className="text-sm font-normal text-gray-500 leading-relaxed mb-3">
                  {product.description}
                </p>
                <p className="text-base font-medium text-brand">{product.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-brand text-brand text-sm font-normal hover:bg-brand hover:text-white transition-colors"
          >
            ご注文・お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}
