import { getCategoryLabel, getProductPath, type CatalogueProduct } from "@/lib/catalogue";
import { useLang } from "@/lib/i18n";

export function CatalogueProductCard({
  product,
  featured,
}: {
  product: CatalogueProduct;
  featured?: boolean;
}) {
  const { lang } = useLang();

  return (
    <article
      className={`group flex flex-col border border-[color:var(--border)] bg-[color:var(--pearl)]/34 ${
        featured ? "xl:col-span-2 xl:row-span-2" : ""
      }`}
    >
      <a
        href={getProductPath(product)}
        className={`relative block overflow-hidden bg-[color:var(--charcoal)] ${
          featured ? "aspect-[4/5] md:aspect-[5/4] xl:aspect-[1.14]" : "aspect-[4/5]"
        }`}
        aria-label={`${lang === "ar" ? "عرض" : "View"} ${product.title[lang]}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(232,219,188,0.18),transparent_42%)]" />
        <img
          src={product.placeholderImage}
          alt={product.title[lang]}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 m-auto h-auto w-[62%] object-contain opacity-[0.84] transition-all duration-[1400ms] group-hover:scale-[1.035] group-hover:opacity-100"
        />
        <div className="absolute inset-0 border border-[color:var(--ivory)]/8" />
      </a>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div
          className={`text-[0.62rem] font-medium uppercase text-[color:var(--taupe)] ${
            lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
          }`}
        >
          {getCategoryLabel(product.category, lang)}
        </div>
        <h3 className="mt-4 font-display text-[2.15rem] font-light leading-[1.05] text-[color:var(--charcoal)]">
          {product.title[lang]}
        </h3>
        <p className="mt-4 text-[0.95rem] font-light leading-[1.75] text-[color:var(--charcoal)]/68">
          {product.description[lang]}
        </p>
        <div
          className={`mt-6 text-[0.68rem] font-medium uppercase text-[color:var(--charcoal)]/72 ${
            lang === "ar" ? "!tracking-[0px]" : "tracking-[0.16em]"
          }`}
        >
          {lang === "ar" ? "متاحة عند الطلب الخاص" : "Available Upon Private Request"}
        </div>
        <a
          href={getProductPath(product)}
          className={`mt-7 flex min-h-[54px] items-center justify-between border-t border-[color:var(--border)] pt-5 text-[0.72rem] font-medium uppercase text-[color:var(--charcoal)] transition-colors hover:text-[color:var(--gold)] ${
            lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
          }`}
        >
          {lang === "ar" ? "عرض القطعة" : "View Piece"}
          <span className="h-px w-10 bg-current transition-all duration-500 group-hover:w-16" />
        </a>
      </div>
    </article>
  );
}
