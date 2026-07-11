import { useMemo, useState } from "react";

import { CatalogueFooter, CatalogueHeader } from "@/components/catalogue/CatalogueChrome";
import { CatalogueProductCard } from "@/components/catalogue/CatalogueProductCard";
import {
  getCatalogueRefinementGroups,
  getRefinedCatalogueProducts,
  type CatalogueCategory,
  type CatalogueRefinementKey,
  type CatalogueRefinementState,
} from "@/lib/catalogue";
import { useLang } from "@/lib/i18n";

export function CatalogueCategoryPage({ category }: { category: CatalogueCategory }) {
  const { lang } = useLang();
  const [refinements, setRefinements] = useState<CatalogueRefinementState>({});
  const products = useMemo(
    () => getRefinedCatalogueProducts(category.slug, refinements),
    [category.slug, refinements],
  );
  const allProducts = useMemo(() => getRefinedCatalogueProducts(category.slug), [category.slug]);
  const groups = useMemo(() => getCatalogueRefinementGroups(allProducts), [allProducts]);
  const visibleGroups = useMemo(() => groups.filter((group) => group.options.length > 1), [groups]);
  const formatCount = useMemo(() => new Intl.NumberFormat(lang === "ar" ? "ar" : "en"), [lang]);
  const hasRefinements = Object.keys(refinements).length > 0;

  const toggleRefinement = (key: CatalogueRefinementKey, slug: string) => {
    setRefinements((current) => {
      const next = { ...current };
      if (next[key] === slug) delete next[key];
      else next[key] = slug;
      return next;
    });
  };

  return (
    <div
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "arabic-mode bg-[color:var(--ivory)]" : "english-mode"}
    >
      <CatalogueHeader />
      <main className="bg-[color:var(--ivory)] text-[color:var(--charcoal)]">
        <section className="mx-auto grid max-w-[1680px] grid-cols-1 gap-7 px-6 pb-8 pt-[calc(env(safe-area-inset-top)+7.2rem)] md:grid-cols-12 md:gap-10 md:px-12 md:pb-20 md:pt-44">
          <div className="md:col-span-6">
            <a
              href="/collections"
              className={`inline-flex min-h-[44px] items-center text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] transition-colors hover:text-[color:var(--charcoal)] ${
                lang === "ar" ? "!tracking-[0px]" : "tracking-[0.2em]"
              }`}
            >
              {lang === "ar" ? "كل المجموعات" : "All Collections"}
            </a>
            <h1 className="mt-5 font-display text-[clamp(3.4rem,8vw,6.4rem)] font-light leading-[0.98] text-[color:var(--charcoal)] md:mt-7 md:leading-[0.95]">
              {category.label[lang]}
            </h1>
            <p className="mt-6 max-w-xl text-[1rem] font-light leading-[1.85] text-[color:var(--charcoal)]/72 md:mt-8 md:text-[1.05rem] md:leading-[1.95]">
              {category.description[lang]}
            </p>
          </div>

          <div className="relative hidden min-h-[420px] overflow-hidden bg-[color:var(--charcoal)] md:col-span-5 md:col-start-8 md:block md:min-h-[540px]">
            <img
              src={category.image}
              alt=""
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.9]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.42))]" />
            <div
              className={`absolute bottom-7 start-7 text-[0.68rem] font-medium uppercase text-[color:var(--ivory)]/72 ${
                lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
              }`}
            >
              {formatCount.format(allProducts.length)}{" "}
              {lang === "ar" ? "قطع تجريبية" : "preview pieces"}
            </div>
          </div>
        </section>

        <section className="sticky top-[calc(env(safe-area-inset-top)+76px)] z-30 border-y border-[color:var(--border)] bg-[color:var(--ivory)]/94 backdrop-blur-md md:top-[calc(env(safe-area-inset-top)+84px)]">
          <div className="mx-auto max-w-[1680px] px-0 md:px-12">
            <div className="flex gap-2 overflow-x-auto px-6 py-4 [scrollbar-width:none] md:px-0 md:py-5">
              <button
                type="button"
                onClick={() => setRefinements({})}
                aria-pressed={!hasRefinements}
                className={`shrink-0 border px-5 py-3 text-[0.68rem] font-medium uppercase transition-all duration-500 md:px-6 ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
                } ${
                  !hasRefinements
                    ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                    : "border-[color:var(--border)] text-[color:var(--charcoal)]/68 hover:border-[color:var(--charcoal)]/48 hover:text-[color:var(--charcoal)]"
                }`}
              >
                {lang === "ar" ? "كل القطع" : `All ${category.label.en}`}
              </button>

              {visibleGroups.flatMap((group) =>
                group.options.map((option) => {
                  const selected = refinements[group.key] === option.slug;
                  return (
                    <button
                      key={`${group.key}-${option.slug}`}
                      type="button"
                      onClick={() => toggleRefinement(group.key, option.slug)}
                      aria-pressed={selected}
                      className={`shrink-0 border px-5 py-3 text-[0.68rem] font-medium uppercase transition-all duration-500 md:px-6 ${
                        lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
                      } ${
                        selected
                          ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                          : "border-[color:var(--border)] text-[color:var(--charcoal)]/68 hover:border-[color:var(--charcoal)]/48 hover:text-[color:var(--charcoal)]"
                      }`}
                    >
                      {group.label[lang]}: {option.label[lang]}
                    </button>
                  );
                }),
              )}

              <button
                type="button"
                onClick={() =>
                  setRefinements((current) => {
                    const next = { ...current };
                    if (next.sort === "newest") delete next.sort;
                    else next.sort = "newest";
                    return next;
                  })
                }
                aria-pressed={refinements.sort === "newest"}
                className={`shrink-0 border px-5 py-3 text-[0.68rem] font-medium uppercase transition-all duration-500 md:px-6 ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
                } ${
                  refinements.sort === "newest"
                    ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                    : "border-[color:var(--border)] text-[color:var(--charcoal)]/68 hover:border-[color:var(--charcoal)]/48 hover:text-[color:var(--charcoal)]"
                }`}
              >
                {lang === "ar" ? "الأحدث" : "Newest"}
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1680px] px-6 py-10 md:px-12 md:py-24">
          <div className="mb-8 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className={`text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.22em]"
                }`}
              >
                {formatCount.format(products.length)}{" "}
                {lang === "ar" ? "نتائج داخل المجموعة" : "pieces in this collection"}
              </div>
              <h2 className="mt-4 font-display text-[2.55rem] font-light leading-[1.05] md:text-[4.1rem]">
                {lang === "ar" ? `كل ${category.label[lang]}` : `All ${category.label[lang]}`}
              </h2>
            </div>
            <p className="max-w-md text-[0.95rem] font-light leading-[1.85] text-[color:var(--charcoal)]/68">
              {lang === "ar"
                ? "هذه المعاينة توضّح كيف ستُعرض القطع الحقيقية داخل كل مجموعة، مع طلب خاص بدلاً من سلة شراء."
                : "This preview shows how real pieces will sit within each collection, with private request instead of cart or checkout."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <CatalogueProductCard key={product.id} product={product} featured={index === 0} />
            ))}
          </div>
        </section>
      </main>
      <CatalogueFooter />
    </div>
  );
}
