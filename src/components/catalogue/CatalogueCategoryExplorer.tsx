import {
  getCatalogueCategories,
  getCatalogueProductsByCategory,
  getCategoryPath,
  type CatalogueCategory,
} from "@/lib/catalogue";
import { useLang } from "@/lib/i18n";

export function CatalogueCategoryExplorer({ surface = "home" }: { surface?: "home" | "landing" }) {
  const { lang } = useLang();
  const categories = getCatalogueCategories();
  const isLanding = surface === "landing";

  return (
    <section
      id="collections"
      className={`overflow-hidden bg-[color:var(--ivory)] text-[color:var(--charcoal)] ${
        isLanding ? "pt-[calc(env(safe-area-inset-top)+8.5rem)] md:pt-44" : "py-20 md:py-36"
      }`}
    >
      <div className="mx-auto max-w-[1680px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div
              className={`text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] ${
                lang === "ar" ? "!tracking-[0px]" : "tracking-[0.22em]"
              }`}
            >
              {lang === "ar" ? "اختاري المجموعة" : "Choose the collection"}
            </div>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.15rem,7vw,6rem)] font-light leading-[0.98] text-[color:var(--charcoal)]">
              {lang === "ar" ? (
                <>
                  <span className="block">استكشفي</span>
                  <span className="block text-[color:var(--taupe)]">المجموعات.</span>
                </>
              ) : (
                <>
                  <span className="block">Explore the</span>
                  <span className="block italic text-[color:var(--taupe)]">collections.</span>
                </>
              )}
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:flex md:items-end">
            <p className="max-w-xl text-[1.02rem] font-light leading-[1.9] text-[color:var(--charcoal)]/72 md:text-[1.08rem]">
              {lang === "ar"
                ? "ابدئي بالفئة الأقرب إلى القطعة. كل مجموعة تفتح مباشرة على قطعها التجريبية، ثم يمكن تضييق الاختيار من داخل الصفحة."
                : "Begin with the form closest to the piece. Each collection opens directly to its preview pieces, with refinements available only after the category is chosen."}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:auto-rows-[320px] md:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-4 xl:auto-rows-[340px]">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.slug}
              category={category}
              featured={index === 0}
              count={getCatalogueProductsByCategory(category.slug).length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  featured,
  count,
}: {
  category: CatalogueCategory;
  featured?: boolean;
  count: number;
}) {
  const { lang } = useLang();
  const layoutClass =
    category.slug === "custom"
      ? "lg:col-span-2"
      : category.slug === "heirloom"
        ? "md:col-span-2 lg:col-span-2"
        : featured
          ? "lg:col-span-2 lg:row-span-2"
          : "";
  const countLabel =
    lang === "ar"
      ? `${new Intl.NumberFormat("ar").format(count)} قطع تجريبية`
      : `${new Intl.NumberFormat("en").format(count)} preview pieces`;

  return (
    <a
      href={getCategoryPath(category)}
      className={`group relative flex min-h-[470px] overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)] md:min-h-0 ${layoutClass}`}
      aria-label={`${lang === "ar" ? "استكشاف" : "Explore"} ${category.label[lang]}`}
    >
      <img
        src={category.image}
        alt=""
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.88] transition-transform duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.045]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.32)_42%,rgba(0,0,0,.82))]" />
      <div
        className={`relative z-10 mt-auto flex w-full flex-col justify-end p-6 md:p-7 xl:p-9 ${
          featured ? "min-h-[54%] md:min-h-[48%]" : "min-h-[58%]"
        }`}
      >
        <div
          className={`text-[0.66rem] font-medium uppercase text-[color:var(--ivory)]/70 ${
            lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
          }`}
        >
          {countLabel}
        </div>
        <h3 className="mt-4 font-display text-[3rem] font-light leading-[0.98] md:text-[3.45rem]">
          {category.label[lang]}
        </h3>
        <p className="mt-5 max-w-[34ch] text-[0.96rem] font-light leading-[1.75] text-[color:var(--ivory)]/74">
          {category.description[lang]}
        </p>
        <div
          className={`mt-7 flex min-h-[44px] items-center justify-between border-t border-[color:var(--ivory)]/18 pt-5 text-[0.68rem] font-medium uppercase text-[color:var(--ivory)] transition-colors group-hover:text-[color:var(--champagne)] ${
            lang === "ar" ? "!tracking-[0px]" : "tracking-[0.16em]"
          }`}
        >
          {lang === "ar" ? "ادخلي المجموعة" : "Enter Collection"}
          <span className="h-px w-10 bg-current transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
    </a>
  );
}
