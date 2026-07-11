import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CatalogueFooter, CatalogueHeader } from "@/components/catalogue/CatalogueChrome";
import {
  getCatalogueFilters,
  getCatalogueProducts,
  getCatalogueStats,
  getCategoryLabel,
  getProductPath,
  type CatalogueFilterSlug,
  type CatalogueProduct,
} from "@/lib/catalogue";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections Preview | Opal Stones by Hanan Bugshan" },
      {
        name: "description",
        content:
          "A preview luxury catalogue for Opal Stones, showing categories, filters, product pages, and private WhatsApp inquiry flow.",
      },
      { property: "og:title", content: "Opal Stones Collections Preview" },
      {
        property: "og:description",
        content:
          "Browse the preview catalogue and request pieces through a private WhatsApp inquiry.",
      },
    ],
  }),
  component: CollectionsRoute,
});

function CollectionsRoute() {
  const { lang } = useLang();
  const [active, setActive] = useState<CatalogueFilterSlug>("all");
  const filters = useMemo(() => getCatalogueFilters(), []);
  const catalogueStats = useMemo(() => getCatalogueStats(), []);
  const formatCount = useMemo(() => new Intl.NumberFormat(lang === "ar" ? "ar" : "en"), [lang]);
  const filteredProducts = useMemo(() => getCatalogueProducts(active), [active]);

  return (
    <div
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "arabic-mode bg-[color:var(--ivory)]" : "english-mode"}
    >
      <CatalogueHeader />
      <main className="bg-[color:var(--ivory)] text-[color:var(--charcoal)]">
        <section className="mx-auto max-w-[1680px] px-6 pb-12 pt-[calc(env(safe-area-inset-top)+8.5rem)] md:px-12 md:pb-20 md:pt-44">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <div
                className={`text-[0.72rem] font-medium uppercase text-[color:var(--taupe)] ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.28em]"
                }`}
              >
                {lang === "ar" ? "كتالوغ تجريبي" : "Collection Catalogue Preview"}
              </div>
              <h1 className="mt-8 max-w-4xl font-display text-[clamp(3.6rem,8.5vw,6rem)] font-light leading-[0.95] text-[color:var(--charcoal)]">
                {lang === "ar" ? (
                  <>
                    <span className="block font-arabic-heading">المجموعات</span>
                    <span className="block font-arabic-heading text-[color:var(--taupe)]">
                      قبل التصوير النهائي.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">Collections,</span>
                    <span className="block italic text-[color:var(--taupe)]">
                      before the final pieces arrive.
                    </span>
                  </>
                )}
              </h1>
            </div>

            <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
              <p className="max-w-xl text-[1.02rem] font-light leading-[1.95] text-[color:var(--charcoal)]/76 md:text-[1.08rem]">
                {lang === "ar"
                  ? "هذه معاينة للكتالوغ القادم. الصور مؤقتة وتستخدم شعار أوبال ستونز الرسمي، بينما توضّح البنية طريقة التصفح، اختيار الفئة، فتح القطعة، وطلب التفاصيل عبر واتساب."
                  : "This preview uses one official Opal Stones placeholder image so the client can review the browsing path: choose a category, open a piece, read the details, and request it privately on WhatsApp."}
              </p>
              <div className="mt-10 grid grid-cols-3 border-y border-[color:var(--border)] text-center md:max-w-xl">
                {[
                  {
                    en: `${formatCount.format(catalogueStats.categoryCount)} Categories`,
                    ar: `${formatCount.format(catalogueStats.categoryCount)} فئات`,
                  },
                  {
                    en: `${formatCount.format(catalogueStats.productCount)} Demo Pieces`,
                    ar: `${formatCount.format(catalogueStats.productCount)} قطعة تجريبية`,
                  },
                  { en: "Private Request", ar: "طلب خاص" },
                ].map((item) => (
                  <div
                    key={item.en}
                    className="border-e border-[color:var(--border)] px-3 py-5 last:border-e-0"
                  >
                    <div
                      className={`text-[0.66rem] font-medium uppercase text-[color:var(--taupe)] ${
                        lang === "ar" ? "!tracking-[0px]" : "tracking-[0.16em]"
                      }`}
                    >
                      {item[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[calc(env(safe-area-inset-top)+76px)] z-30 border-y border-[color:var(--border)] bg-[color:var(--ivory)]/94 backdrop-blur-md md:top-[calc(env(safe-area-inset-top)+84px)]">
          <div className="mx-auto max-w-[1680px] px-0 md:px-12">
            <div className="flex gap-2 overflow-x-auto px-6 py-4 [scrollbar-width:none] md:px-0 md:py-5">
              {filters.map((category) => {
                const selected = active === category.slug;
                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActive(category.slug)}
                    aria-pressed={selected}
                    className={`shrink-0 border px-5 py-3 text-[0.68rem] font-medium uppercase transition-all duration-500 md:px-6 ${
                      lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
                    } ${
                      selected
                        ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                        : "border-[color:var(--border)] text-[color:var(--charcoal)]/68 hover:border-[color:var(--charcoal)]/48 hover:text-[color:var(--charcoal)]"
                    }`}
                  >
                    {category.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1680px] px-6 py-14 md:px-12 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className={`text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.22em]"
                }`}
              >
                {getCategoryLabel(active, lang)}
              </div>
              <h2 className="mt-4 font-display text-[2.6rem] font-light leading-[1.05] md:text-[4.1rem]">
                {lang === "ar" ? "قطع للمعاينة فقط" : "Preview pieces only"}
              </h2>
            </div>
            <p className="max-w-md text-[0.95rem] font-light leading-[1.85] text-[color:var(--charcoal)]/68">
              {lang === "ar"
                ? "لا توجد أسعار ولا خطوات شراء عامة. كل قطعة تُفتح كصفحة خاصة وتنتهي بطلب واتساب."
                : "No public purchase flow is included. Each piece opens as a private detail page and ends with a WhatsApp request."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <CatalogueCard key={product.id} product={product} featured={index === 0} />
            ))}
          </div>
        </section>
      </main>
      <CatalogueFooter />
    </div>
  );
}

function CatalogueCard({ product, featured }: { product: CatalogueProduct; featured?: boolean }) {
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
