import { createFileRoute } from "@tanstack/react-router";

import { CatalogueFooter, CatalogueHeader } from "@/components/catalogue/CatalogueChrome";
import {
  createWhatsAppHref,
  getCategoryLabel,
  getProductById,
  type CatalogueProduct,
} from "@/lib/catalogue";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/collections_/$productId")({
  head: () => ({
    meta: [
      { title: "Collection Piece Preview | Opal Stones by Hanan Bugshan" },
      {
        name: "description",
        content:
          "A preview product page for the Opal Stones luxury catalogue, with specifications and private WhatsApp inquiry.",
      },
      { property: "og:title", content: "Opal Stones Collection Piece Preview" },
    ],
  }),
  component: ProductRoute,
});

function ProductRoute() {
  const { productId } = Route.useParams();
  const product = getProductById(productId);

  if (!product) return <MissingProduct />;

  return <ProductPage product={product} />;
}

function MissingProduct() {
  const { lang } = useLang();
  return (
    <div
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "arabic-mode" : "english-mode"}
    >
      <CatalogueHeader />
      <main className="flex min-h-[100svh] items-center justify-center bg-[color:var(--ivory)] px-6 pt-28 text-[color:var(--charcoal)]">
        <div className="max-w-lg text-center">
          <h1 className="font-display text-[3.5rem] font-light leading-none">
            {lang === "ar" ? "القطعة غير موجودة" : "Piece not found"}
          </h1>
          <p className="mt-6 text-[1rem] font-light leading-[1.9] text-[color:var(--charcoal)]/72">
            {lang === "ar"
              ? "ربما تغير المرجع التجريبي. عودي إلى صفحة المجموعات لاختيار قطعة أخرى."
              : "The preview reference may have changed. Return to the collections page and choose another piece."}
          </p>
          <a
            href="/collections"
            className={`mt-9 inline-flex min-h-[56px] items-center justify-center bg-[color:var(--charcoal)] px-8 text-[0.72rem] font-medium uppercase text-[color:var(--ivory)] ${
              lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
            }`}
          >
            {lang === "ar" ? "العودة إلى المجموعات" : "Return to Collections"}
          </a>
        </div>
      </main>
    </div>
  );
}

function ProductPage({ product }: { product: CatalogueProduct }) {
  const { lang } = useLang();
  return (
    <div
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "arabic-mode bg-[color:var(--ivory)]" : "english-mode"}
    >
      <CatalogueHeader />
      <main className="bg-[color:var(--ivory)] text-[color:var(--charcoal)]">
        <section className="mx-auto grid max-w-[1680px] grid-cols-1 gap-10 px-6 pb-16 pt-[calc(env(safe-area-inset-top)+8.5rem)] md:grid-cols-12 md:px-12 md:pb-28 md:pt-44">
          <div className="md:col-span-7">
            <a
              href="/collections"
              className={`mb-8 inline-flex items-center text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] transition-colors hover:text-[color:var(--charcoal)] ${
                lang === "ar" ? "!tracking-[0px]" : "tracking-[0.2em]"
              }`}
            >
              {lang === "ar" ? "العودة إلى المجموعات" : "Back to Collections"}
            </a>
            <ProductGallery product={product} />
          </div>

          <aside className="md:col-span-5 md:ps-6 xl:ps-14">
            <div className="md:sticky md:top-32">
              <div
                className={`text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.22em]"
                }`}
              >
                {getCategoryLabel(product.category, lang)} · {product.whatsappReference}
              </div>
              <h1 className="mt-6 font-display text-[clamp(3.2rem,6vw,5.8rem)] font-light leading-[0.96] text-[color:var(--charcoal)]">
                {product.title[lang]}
              </h1>
              <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-[1.95] text-[color:var(--charcoal)]/74">
                {product.description[lang]}
              </p>
              <p className="mt-5 max-w-xl text-[0.96rem] font-light leading-[1.85] text-[color:var(--charcoal)]/62">
                {lang === "ar"
                  ? "هذه صفحة تجريبية توضح شكل عرض القطعة قبل إدخال الصور والبيانات النهائية."
                  : "This is a demonstration page showing how the final piece view will work once real imagery and product details are added."}
              </p>

              <dl className="mt-10 border-y border-[color:var(--border)]">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label.en}
                    className="grid grid-cols-[minmax(7rem,0.9fr)_1.2fr] gap-6 border-b border-[color:var(--border)] py-5 last:border-b-0"
                  >
                    <dt
                      className={`text-[0.68rem] font-medium uppercase text-[color:var(--taupe)] ${
                        lang === "ar" ? "!tracking-[0px]" : "tracking-[0.16em]"
                      }`}
                    >
                      {spec.label[lang]}
                    </dt>
                    <dd className="text-[0.95rem] font-light leading-[1.7] text-[color:var(--charcoal)]/78">
                      {spec.value[lang]}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={createWhatsAppHref(product, lang)}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 flex min-h-[66px] items-center justify-between bg-[color:var(--charcoal)] px-7 py-5 text-[0.74rem] font-medium uppercase text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--gold)] ${
                  lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
                }`}
              >
                {lang === "ar" ? "اطلبي هذه القطعة" : "Request This Piece"}
                <span className="h-px w-12 bg-current" />
              </a>
            </div>
          </aside>
        </section>
      </main>
      <CatalogueFooter />
    </div>
  );
}

function ProductGallery({ product }: { product: CatalogueProduct }) {
  const { lang } = useLang();
  return (
    <>
      <div className="hidden gap-4 md:grid md:grid-cols-12">
        <div className="relative col-span-9 aspect-[4/5] overflow-hidden bg-[color:var(--charcoal)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(232,219,188,0.18),transparent_44%)]" />
          <img
            src={product.futureGallery[0]}
            alt={product.title[lang]}
            loading="eager"
            decoding="async"
            className="absolute inset-0 m-auto h-auto w-[58%] object-contain opacity-[0.9]"
          />
          <div className="absolute inset-0 border border-[color:var(--ivory)]/10" />
        </div>
        <div className="col-span-3 grid gap-4">
          {product.futureGallery.map((image, index) => (
            <div
              key={`${product.id}-${index}`}
              className="relative aspect-square overflow-hidden bg-[color:var(--pearl)]"
            >
              <img
                src={image}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 m-auto h-auto w-[68%] object-contain opacity-[0.82]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="-mx-6 flex snap-x gap-3 overflow-x-auto px-6 [scrollbar-width:none] md:hidden">
        {product.futureGallery.map((image, index) => (
          <div
            key={`${product.id}-mobile-${index}`}
            className="relative aspect-[4/5] w-[82vw] shrink-0 snap-center overflow-hidden bg-[color:var(--charcoal)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(232,219,188,0.2),transparent_45%)]" />
            <img
              src={image}
              alt={index === 0 ? product.title[lang] : ""}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 m-auto h-auto w-[68%] object-contain opacity-[0.92]"
            />
            <div
              className={`absolute bottom-5 start-5 text-[0.62rem] font-medium uppercase text-[color:var(--ivory)]/66 ${
                lang === "ar" ? "!tracking-[0px]" : "tracking-[0.18em]"
              }`}
            >
              {String(index + 1).padStart(2, "0")} / 03
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
