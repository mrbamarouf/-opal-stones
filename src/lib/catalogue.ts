import cataloguePlaceholderImage from "@/assets/opal-logo-768.png";
import type { Lang } from "@/lib/i18n";

export type CatalogueCategorySlug = string;

export type CatalogueFilterSlug = "all" | CatalogueCategorySlug;

type Localized = Record<Lang, string>;

export type CatalogueCategory = {
  slug: CatalogueCategorySlug;
  label: Localized;
  order: number;
};

export type CatalogueProduct = {
  id: string;
  category: CatalogueCategorySlug;
  title: Localized;
  description: Localized;
  placeholderImage: string;
  futureGallery: string[];
  futureVideo: string | null;
  whatsappReference: string;
  specifications: CatalogueSpecification[];
};

export type CatalogueSpecification = {
  label: Localized;
  value: Localized;
};

export type CatalogueFilter = {
  slug: CatalogueFilterSlug;
  label: Localized;
  count: number;
};

const demoGallery = [
  cataloguePlaceholderImage,
  cataloguePlaceholderImage,
  cataloguePlaceholderImage,
];

const demoSpecifications: CatalogueSpecification[] = [
  {
    label: { en: "Material", ar: "المادة" },
    value: { en: "18K Gold (Demo)", ar: "ذهب عيار 18 (تجريبي)" },
  },
  { label: { en: "Gemstone", ar: "الحجر" }, value: { en: "Demo", ar: "تجريبي" } },
  {
    label: { en: "Availability", ar: "التوفر" },
    value: { en: "Made To Order", ar: "تُصاغ حسب الطلب" },
  },
  {
    label: { en: "Pricing", ar: "التسعير" },
    value: { en: "Available Upon Private Request", ar: "متاحة عند الطلب الخاص" },
  },
];

const product = (
  id: string,
  category: CatalogueCategorySlug,
  reference: string,
  title: Localized,
  description: Localized,
): CatalogueProduct => ({
  id,
  category,
  title,
  description,
  placeholderImage: cataloguePlaceholderImage,
  futureGallery: demoGallery,
  futureVideo: null,
  whatsappReference: reference,
  specifications: demoSpecifications,
});

export const catalogueCategoryDefinitions: CatalogueCategory[] = [
  { slug: "rings", label: { en: "Rings", ar: "الخواتم" }, order: 10 },
  { slug: "necklaces", label: { en: "Necklaces", ar: "العقود" }, order: 20 },
  { slug: "bracelets", label: { en: "Bracelets", ar: "الأساور" }, order: 30 },
  { slug: "earrings", label: { en: "Earrings", ar: "الأقراط" }, order: 40 },
  { slug: "bridal", label: { en: "Bridal", ar: "العروس" }, order: 50 },
  { slug: "custom", label: { en: "Custom Pieces", ar: "قطع خاصة" }, order: 60 },
  { slug: "heirloom", label: { en: "Heirloom Redesign", ar: "إعادة صياغة الإرث" }, order: 70 },
];

export const catalogueProducts: CatalogueProduct[] = [
  product(
    "noor-ring",
    "rings",
    "OP-R-001",
    { en: "Noor Ring", ar: "خاتم نور" },
    {
      en: "A quiet ring reference for a private promise, shaped around proportion and daily wear.",
      ar: "مرجع هادئ لخاتم خاص، يُبنى حول النِسب وطقس الارتداء اليومي.",
    },
  ),
  product(
    "lina-ring",
    "rings",
    "OP-R-002",
    { en: "Lina Ring", ar: "خاتم لينا" },
    {
      en: "A refined ring study for a personal milestone, restrained in line and intimate in scale.",
      ar: "دراسة مصقولة لخاتم يرافق لحظة شخصية، بخط هادئ وحجم حميم.",
    },
  ),
  product(
    "mira-ring",
    "rings",
    "OP-R-003",
    { en: "Mira Ring", ar: "خاتم ميرا" },
    {
      en: "A signature ring direction, made to hold one chosen stone with deliberate simplicity.",
      ar: "اتجاه لخاتم توقيع شخصي، يحتضن حجراً مختاراً ببساطة محسوبة.",
    },
  ),
  product(
    "luna-necklace",
    "necklaces",
    "OP-N-001",
    { en: "Luna Necklace", ar: "عقد لونا" },
    {
      en: "A pendant-led necklace reference for a piece that sits close to the collarbone.",
      ar: "مرجع لعقد بتعليقة هادئة، يستقر قريباً من عظمة الترقوة.",
    },
  ),
  product(
    "raya-pendant",
    "necklaces",
    "OP-N-002",
    { en: "Raya Pendant", ar: "تعليقة راية" },
    {
      en: "A private pendant study for a meaningful stone, edited for softness and presence.",
      ar: "دراسة لتعليقة خاصة حول حجر ذي معنى، تُهذّب للنعومة والحضور.",
    },
  ),
  product(
    "selene-necklace",
    "necklaces",
    "OP-N-003",
    { en: "Selene Necklace", ar: "عقد سيلين" },
    {
      en: "A necklace direction for a sculptural centre, balanced between ceremony and ease.",
      ar: "اتجاه لعقد بقطعة مركزية منحوتة، يوازن بين المناسبة والخفة.",
    },
  ),
  product(
    "alya-bracelet",
    "bracelets",
    "OP-B-001",
    { en: "Alya Bracelet", ar: "سوار عليا" },
    {
      en: "A bracelet reference with a restrained line, intended for movement and daily light.",
      ar: "مرجع لسوار بخط متوازن، صُمم للحركة والضوء اليومي.",
    },
  ),
  product(
    "dana-cuff",
    "bracelets",
    "OP-B-002",
    { en: "Dana Cuff", ar: "كف دانة" },
    {
      en: "A cuff study for a confident wrist piece, softened through private proportion.",
      ar: "دراسة لكف واضح الحضور، تلطفه النِسب الخاصة.",
    },
  ),
  product(
    "vera-line-bracelet",
    "bracelets",
    "OP-B-003",
    { en: "Vera Line Bracelet", ar: "سوار فيرا الخطي" },
    {
      en: "A line bracelet direction for stones set with quiet continuity.",
      ar: "اتجاه لسوار خطي، تترابط فيه الأحجار بهدوء واستمرارية.",
    },
  ),
  product(
    "aura-earrings",
    "earrings",
    "OP-E-001",
    { en: "Aura Earrings", ar: "أقراط أورا" },
    {
      en: "An earring reference shaped around the face, light, and the turn of the head.",
      ar: "مرجع لأقراط تُصاغ حول ملامح الوجه والضوء وحركة الرأس.",
    },
  ),
  product(
    "jana-drops",
    "earrings",
    "OP-E-002",
    { en: "Jana Drops", ar: "أقراط جنى المتدلية" },
    {
      en: "A drop earring study for soft movement and a measured evening presence.",
      ar: "دراسة لأقراط متدلية بحركة ناعمة وحضور مسائي موزون.",
    },
  ),
  product(
    "naya-studs",
    "earrings",
    "OP-E-003",
    { en: "Naya Studs", ar: "أقراط نايا" },
    {
      en: "A pair of studs considered for close detail, clean scale, and everyday intimacy.",
      ar: "زوج أقراط صغير بتفاصيل قريبة وحجم نقي وحميمية يومية.",
    },
  ),
  product(
    "royal-bridal-set",
    "bridal",
    "OP-BR-001",
    { en: "Royal Bridal Set", ar: "طقم رويال للعروس" },
    {
      en: "A bridal suite direction composed for ceremony, photographs, and years beyond.",
      ar: "اتجاه لطقم عروس يُنسق للحفل والصور وما بعدهما بسنوات.",
    },
  ),
  product(
    "leen-bridal-suite",
    "bridal",
    "OP-BR-002",
    { en: "Leen Bridal Suite", ar: "طقم لين للعروس" },
    {
      en: "A softer bridal set reference, designed as one calm presence across several pieces.",
      ar: "مرجع لطقم عروس أكثر نعومة، يحضر كإحساس واحد عبر عدة قطع.",
    },
  ),
  product(
    "vow-suite",
    "bridal",
    "OP-BR-003",
    { en: "Vow Suite", ar: "طقم الوعد" },
    {
      en: "A wedding suite study for a private ceremony and a lasting family memory.",
      ar: "دراسة لطقم زفاف خاص، يصون لحظة العهد وذاكرة العائلة.",
    },
  ),
  product(
    "signature-piece",
    "custom",
    "OP-C-001",
    { en: "Signature Piece", ar: "القطعة المميّزة" },
    {
      en: "A custom piece reference for an idea outside the usual categories.",
      ar: "مرجع لقطعة خاصة تبدأ من فكرة لا تنتمي إلى تصنيف واحد.",
    },
  ),
  product(
    "private-motif",
    "custom",
    "OP-C-002",
    { en: "Private Motif", ar: "الرمز الخاص" },
    {
      en: "A personal motif direction, translated into gold with restraint and discretion.",
      ar: "اتجاه لرمز شخصي، يُترجم إلى ذهب برهافة وخصوصية.",
    },
  ),
  product(
    "one-life-piece",
    "custom",
    "OP-C-003",
    { en: "One Life Piece", ar: "قطعة حياة واحدة" },
    {
      en: "A one-of-one reference for a story that needs its own form.",
      ar: "مرجع لقطعة لا تتكرر، تصاغ لحكاية تحتاج شكلها الخاص.",
    },
  ),
  product(
    "heirloom-revival",
    "heirloom",
    "OP-H-001",
    { en: "Heirloom Revival", ar: "إحياء الإرث" },
    {
      en: "A redesign reference for inherited stones that should return to daily life.",
      ar: "مرجع لإعادة صياغة أحجار موروثة كي تعود إلى الحياة اليومية.",
    },
  ),
  product(
    "memory-setting",
    "heirloom",
    "OP-H-002",
    { en: "Memory Setting", ar: "ترصيع الذاكرة" },
    {
      en: "A setting study that keeps the memory intact while changing the way it is worn.",
      ar: "دراسة لترصيع يحفظ الذاكرة ويغيّر طريقة حضورها على الجسد.",
    },
  ),
  product(
    "inherited-stone",
    "heirloom",
    "OP-H-003",
    { en: "Inherited Stone", ar: "الحجر الموروث" },
    {
      en: "A private redesign direction for a family stone ready for a new setting.",
      ar: "اتجاه خاص لحجر عائلي مستعد لترصيع جديد.",
    },
  ),
];

const ALL_FILTER_LABEL: Localized = { en: "All", ar: "الكل" };

const categoriesBySlug = new Map(
  catalogueCategoryDefinitions.map((category) => [category.slug, category]),
);

export const getCatalogueFilters = (
  products: CatalogueProduct[] = catalogueProducts,
): CatalogueFilter[] => {
  const counts = products.reduce(
    (map, productItem) => map.set(productItem.category, (map.get(productItem.category) ?? 0) + 1),
    new Map<CatalogueCategorySlug, number>(),
  );

  const categoryFilters = [...counts.entries()]
    .map(([slug, count]) => {
      const category = categoriesBySlug.get(slug);
      if (!category) {
        throw new Error(`Missing catalogue category definition for "${slug}".`);
      }
      return { slug, label: category.label, count, order: category.order };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ slug, label, count }) => ({ slug, label, count }));

  return [{ slug: "all", label: ALL_FILTER_LABEL, count: products.length }, ...categoryFilters];
};

export const getCatalogueProducts = (filter: CatalogueFilterSlug = "all") =>
  filter === "all"
    ? catalogueProducts
    : catalogueProducts.filter((productItem) => productItem.category === filter);

export const getCatalogueStats = (products: CatalogueProduct[] = catalogueProducts) => {
  const categoryCount = new Set(products.map((productItem) => productItem.category)).size;
  return {
    categoryCount,
    productCount: products.length,
  };
};

export const getCategoryLabel = (category: CatalogueFilterSlug, lang: Lang) => {
  if (category === "all") return ALL_FILTER_LABEL[lang];
  return categoriesBySlug.get(category)?.label[lang] ?? category;
};

export const getProductById = (id: string) =>
  catalogueProducts.find((productItem) => productItem.id === id);

export const getProductPath = (productItem: CatalogueProduct) => `/collections/${productItem.id}`;

export const createWhatsAppHref = (productItem: CatalogueProduct, lang: Lang) => {
  const productTitle = productItem.title[lang];
  const lines =
    lang === "ar"
      ? [
          "مرحباً،",
          "",
          "أرغب بالاستفسار عن القطعة التالية:",
          "",
          "اسم القطعة:",
          productTitle,
          "",
          "المرجع:",
          productItem.whatsappReference,
          "",
          "وأرغب بمعرفة التفاصيل.",
        ]
      : [
          "Hello,",
          "",
          "I would like to inquire about:",
          "",
          "Product:",
          productTitle,
          "",
          "Reference:",
          productItem.whatsappReference,
          "",
          "Please provide availability and details.",
        ];

  return `https://wa.me/966500000000?text=${encodeURIComponent(lines.join("\n"))}`;
};
