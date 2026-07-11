import { createFileRoute } from "@tanstack/react-router";

import { CatalogueCategoryExplorer } from "@/components/catalogue/CatalogueCategoryExplorer";
import { CatalogueFooter, CatalogueHeader } from "@/components/catalogue/CatalogueChrome";
import { getCatalogueStats } from "@/lib/catalogue";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Explore the Collections | Opal Stones by Hanan Bugshan" },
      {
        name: "description",
        content:
          "Choose an Opal Stones collection first, then browse private preview pieces by category.",
      },
      { property: "og:title", content: "Opal Stones Collections" },
      {
        property: "og:description",
        content:
          "A category-first private catalogue preview for rings, necklaces, bracelets, earrings, bridal, custom pieces, and heirloom redesign.",
      },
    ],
  }),
  component: CollectionsRoute,
});

function CollectionsRoute() {
  const { lang } = useLang();
  const stats = getCatalogueStats();
  const formatCount = new Intl.NumberFormat(lang === "ar" ? "ar" : "en");

  return (
    <div
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "arabic-mode bg-[color:var(--ivory)]" : "english-mode"}
    >
      <CatalogueHeader />
      <main className="bg-[color:var(--ivory)] text-[color:var(--charcoal)]">
        <CatalogueCategoryExplorer surface="landing" />

        <section className="mx-auto max-w-[1680px] px-6 pb-16 md:px-12 md:pb-28">
          <div className="grid grid-cols-1 border-y border-[color:var(--border)] md:grid-cols-3">
            {[
              {
                en: `${formatCount.format(stats.categoryCount)} collection categories`,
                ar: `${formatCount.format(stats.categoryCount)} فئات للمجموعات`,
              },
              {
                en: `${formatCount.format(stats.productCount)} preview pieces`,
                ar: `${formatCount.format(stats.productCount)} قطعة تجريبية`,
              },
              {
                en: "Private request only",
                ar: "طلب خاص فقط",
              },
            ].map((item) => (
              <div
                key={item.en}
                className="border-b border-[color:var(--border)] px-0 py-7 last:border-b-0 md:border-b-0 md:border-e md:px-8 md:last:border-e-0"
              >
                <div
                  className={`text-[0.72rem] font-medium uppercase text-[color:var(--taupe)] ${
                    lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
                  }`}
                >
                  {item[lang]}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <CatalogueFooter />
    </div>
  );
}
