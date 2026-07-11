import cataloguePlaceholderImage from "@/assets/opal-logo-768.png";
import ringsImage from "@/assets/jewellery/IMG_6834.jpg";
import necklacesImage from "@/assets/jewellery/IMG_6841.jpg";
import braceletsImage from "@/assets/jewellery/IMG_6838.jpg";
import earringsImage from "@/assets/jewellery/IMG_6844.jpg";
import bridalImage from "@/assets/jewellery/IMG_6836.jpg";
import customImage from "@/assets/jewellery/IMG_6846.jpg";
import heirloomImage from "@/assets/jewellery/IMG_6843.jpg";
import type { Lang } from "@/lib/i18n";

export type CatalogueCategorySlug = string;

export type CatalogueFilterSlug = "all" | CatalogueCategorySlug;

type Localized = Record<Lang, string>;

export type CatalogueCategory = {
  slug: CatalogueCategorySlug;
  label: Localized;
  description: Localized;
  image: string;
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
  refinements: CatalogueProductRefinements;
  sortOrder: number;
};

export type CatalogueSpecification = {
  label: Localized;
  value: Localized;
};

export type CatalogueRefinementKey = "material" | "collection" | "stone";

export type CatalogueRefinementValue = {
  slug: string;
  label: Localized;
};

export type CatalogueProductRefinements = Record<CatalogueRefinementKey, CatalogueRefinementValue>;

export type CatalogueRefinementGroup = {
  key: CatalogueRefinementKey;
  label: Localized;
  options: Array<CatalogueRefinementValue & { count: number }>;
};

export type CatalogueRefinementState = Partial<Record<CatalogueRefinementKey, string>> & {
  sort?: "newest";
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

const refinementLabels: Record<CatalogueRefinementKey, Localized> = {
  material: { en: "Material", ar: "المادة" },
  collection: { en: "Collection", ar: "المجموعة" },
  stone: { en: "Stone", ar: "الحجر" },
};

const demoMaterial: CatalogueRefinementValue = {
  slug: "18k-gold-demo",
  label: { en: "18K Gold (Demo)", ar: "ذهب عيار 18 (تجريبي)" },
};

const demoStone: CatalogueRefinementValue = {
  slug: "demo-stone",
  label: { en: "Demo Stone", ar: "حجر تجريبي" },
};

const demoCollectionsByCategory: Record<CatalogueCategorySlug, CatalogueRefinementValue> = {
  rings: { slug: "signature-rings", label: { en: "Signature Rings", ar: "خواتم التوقيع" } },
  necklaces: {
    slug: "quiet-pendants",
    label: { en: "Quiet Pendants", ar: "تعليقات هادئة" },
  },
  bracelets: {
    slug: "wrist-studies",
    label: { en: "Wrist Studies", ar: "دراسات للسوار" },
  },
  earrings: {
    slug: "face-framing",
    label: { en: "Face Framing", ar: "حول ملامح الوجه" },
  },
  bridal: { slug: "bridal-suite", label: { en: "Bridal Suite", ar: "طقم العروس" } },
  custom: { slug: "one-of-one", label: { en: "One of One", ar: "قطعة لا تتكرر" } },
  heirloom: {
    slug: "memory-redrawn",
    label: { en: "Memory Redrawn", ar: "ذاكرة مُعاد رسمها" },
  },
};

const product = (
  id: string,
  category: CatalogueCategorySlug,
  reference: string,
  title: Localized,
  description: Localized,
  sortOrder: number,
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
  refinements: {
    material: demoMaterial,
    collection: demoCollectionsByCategory[category],
    stone: demoStone,
  },
  sortOrder,
});

export const catalogueCategoryDefinitions: CatalogueCategory[] = [
  {
    slug: "rings",
    label: { en: "Rings", ar: "الخواتم" },
    description: {
      en: "Private ring studies for promises, daily signatures, and family stones.",
      ar: "دراسات خواتم خاصة للوعد والتوقيع اليومي وأحجار العائلة.",
    },
    image: ringsImage,
    order: 10,
  },
  {
    slug: "necklaces",
    label: { en: "Necklaces", ar: "العقود" },
    description: {
      en: "Pendants, chains, and sculptural centres composed close to the collarbone.",
      ar: "تعليقات وسلاسل وقطع مركزية منحوتة تستقر قرب الترقوة.",
    },
    image: necklacesImage,
    order: 20,
  },
  {
    slug: "bracelets",
    label: { en: "Bracelets", ar: "الأساور" },
    description: {
      en: "Lines of gold and stones considered for gesture, light, and daily movement.",
      ar: "خطوط من الذهب والأحجار تُدرس للإيماءة والضوء والحركة اليومية.",
    },
    image: braceletsImage,
    order: 30,
  },
  {
    slug: "earrings",
    label: { en: "Earrings", ar: "الأقراط" },
    description: {
      en: "Pairs shaped around the face, the turn of the head, and evening light.",
      ar: "أزواج تُصاغ حول ملامح الوجه وحركة الرأس وضوء المساء.",
    },
    image: earringsImage,
    order: 40,
  },
  {
    slug: "bridal",
    label: { en: "Bridal", ar: "العروس" },
    description: {
      en: "Suites composed for ceremony, portrait, and the years that follow.",
      ar: "أطقم تُنسّق للحفل والبورتريه والسنوات التي تليه.",
    },
    image: bridalImage,
    order: 50,
  },
  {
    slug: "custom",
    label: { en: "Custom Pieces", ar: "قطع خاصة" },
    description: {
      en: "One-of-one directions for stories that ask for their own form.",
      ar: "اتجاهات لا تتكرر لحكايات تحتاج شكلها الخاص.",
    },
    image: customImage,
    order: 60,
  },
  {
    slug: "heirloom",
    label: { en: "Heirloom Redesign", ar: "إعادة صياغة الإرث" },
    description: {
      en: "Inherited stones redrawn so memory can return to the hand.",
      ar: "أحجار موروثة تُعاد صياغتها كي تعود الذاكرة إلى اليد.",
    },
    image: heirloomImage,
    order: 70,
  },
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
    103,
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
    102,
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
    101,
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
    203,
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
    202,
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
    201,
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
    303,
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
    302,
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
    301,
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
    403,
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
    402,
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
    401,
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
    503,
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
    502,
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
    501,
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
    603,
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
    602,
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
    601,
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
    703,
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
    702,
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
    701,
  ),
];

const ALL_FILTER_LABEL: Localized = { en: "All", ar: "الكل" };

const categoriesBySlug = new Map(
  catalogueCategoryDefinitions.map((category) => [category.slug, category]),
);

export const getCatalogueCategories = () =>
  [...catalogueCategoryDefinitions].sort((a, b) => a.order - b.order);

export const getCatalogueCategoryBySlug = (slug: CatalogueCategorySlug) =>
  categoriesBySlug.get(slug);

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

export const getCatalogueProductsByCategory = (category: CatalogueCategorySlug) =>
  catalogueProducts
    .filter((productItem) => productItem.category === category)
    .sort((a, b) => b.sortOrder - a.sortOrder);

export const getCatalogueRefinementGroups = (
  products: CatalogueProduct[],
): CatalogueRefinementGroup[] =>
  (Object.keys(refinementLabels) as CatalogueRefinementKey[]).map((key) => {
    const optionsBySlug = products.reduce((map, productItem) => {
      const refinement = productItem.refinements[key];
      const existing = map.get(refinement.slug);
      map.set(refinement.slug, {
        ...refinement,
        count: (existing?.count ?? 0) + 1,
      });
      return map;
    }, new Map<string, CatalogueRefinementValue & { count: number }>());

    return {
      key,
      label: refinementLabels[key],
      options: [...optionsBySlug.values()].sort((a, b) => a.label.en.localeCompare(b.label.en)),
    };
  });

export const getRefinedCatalogueProducts = (
  category: CatalogueCategorySlug,
  refinements: CatalogueRefinementState = {},
) => {
  const selectedKeys = (Object.keys(refinementLabels) as CatalogueRefinementKey[]).filter(
    (key) => refinements[key],
  );
  const products = getCatalogueProductsByCategory(category).filter((productItem) =>
    selectedKeys.every((key) => productItem.refinements[key].slug === refinements[key]),
  );

  return refinements.sort === "newest"
    ? [...products].sort((a, b) => b.sortOrder - a.sortOrder)
    : products;
};

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

export const getProductByCategoryAndId = (category: CatalogueCategorySlug, id: string) =>
  catalogueProducts.find(
    (productItem) => productItem.category === category && productItem.id === id,
  );

export const getCategoryPath = (category: CatalogueCategory | CatalogueCategorySlug) =>
  `/collections/${typeof category === "string" ? category : category.slug}`;

export const getProductPath = (productItem: CatalogueProduct) =>
  `${getCategoryPath(productItem.category)}/${productItem.id}`;

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
