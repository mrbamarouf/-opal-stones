import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
type Entry = { en: string; ar: string };

export const t = {
  // nav
  nav_commission: { en: "Commission", ar: "اطلب قطعة" },
  nav_design: { en: "Design", ar: "مقدّمي" },
  nav_atelier: { en: "Atelier", ar: "الأتيليه" },
  nav_creations: { en: "Creations", ar: "الإبداعات" },
  nav_redesign: { en: "Redesign", ar: "إعادة التصميم" },
  nav_book: { en: "Private Consultation", ar: "استشارة خاصة" },

  // hero
  hero_eyebrow: {
    en: "Private Jewellery Atelier · Hanan Bugshan",
    ar: "أتيليه مجوهرات خاص · حنان بقشان",
  },
  hero_l1: { en: "Jewellery made", ar: "مجوهرات تُصاغ" },
  hero_l2: { en: "for no one else.", ar: "لكِ وحدكِ." },
  hero_sub: {
    en: "Each piece begins with a private conversation: a memory, an occasion, or a feeling worth holding close.",
    ar: "تبدأ كل قطعة بحوار خاص: ذكرى، مناسبة، أو إحساس يستحق أن يبقى قريباً منكِ.",
  },
  hero_cta1: { en: "Start Your Private Commission", ar: "ابدئي طلبكِ الخاص" },
  hero_cta2: { en: "Explore the Atelier", ar: "اكتشفي الأتيليه" },
  hero_scroll: { en: "Discover", ar: "اكتشفي" },

  // commission
  com_eyebrow: { en: "01 · Private Commission", ar: "٠١ · طلب خاص" },
  com_title_a: { en: "What would you like", ar: "ما الذي تودّين" },
  com_title_b: { en: "us to create?", ar: "أن نصوغه لكِ؟" },
  com_sub: {
    en: "Choose the piece you have in mind. Every commission is sketched, proportioned, and crafted around you.",
    ar: "اختاري القطعة الأقرب إلى رغبتكِ. كل طلب يُرسم وتُضبط تفاصيله ويُصاغ على مقاسكِ.",
  },
  com_ring: { en: "A Ring", ar: "خاتم" },
  com_ring_d: {
    en: "Engagement, signature, or daily ritual.",
    ar: "للخطوبة، للتوقيع الشخصي، أو للحضور اليومي.",
  },
  com_neck: { en: "A Necklace", ar: "عقد" },
  com_neck_d: {
    en: "A pendant, a chain, or a sculptural statement.",
    ar: "تعليقة، سلسلة، أو قطعة لافتة بحضور ناعم.",
  },
  com_ear: { en: "Earrings", ar: "أقراط" },
  com_ear_d: {
    en: "Studs, drops, or sculpted pairs.",
    ar: "أقراط صغيرة، متدلية، أو منحوتة كزوج خاص.",
  },
  com_brace: { en: "A Bracelet", ar: "سوار" },
  com_brace_d: { en: "Tennis, cuff, or a refined chain.", ar: "تنس، كف، أو سلسلة مصاغة بعناية." },
  com_bridal: { en: "A Bridal Set", ar: "طقم زفاف" },
  com_bridal_d: {
    en: "A complete suite for the ceremony and beyond.",
    ar: "طقم متكامل ليوم الزفاف وما بعده.",
  },
  com_redo: { en: "Redesign a Piece", ar: "إعادة تصميم قطعة" },
  com_redo_d: {
    en: "Rework jewellery you already carry with meaning.",
    ar: "أعيدي صياغة قطعة تحملين لها معنى.",
  },
  com_unique: { en: "Something Entirely Unique", ar: "قطعة فريدة بالكامل" },
  com_unique_d: {
    en: "Beyond categories, shaped only for you.",
    ar: "خارج التصنيفات، تُصاغ لكِ وحدكِ.",
  },
  com_begin: { en: "Begin", ar: "ابدئي الطلب" },

  // design your piece
  dyp_eyebrow: { en: "02 · Design Your Piece", ar: "٠٢ · صمّمي قطعتكِ" },
  dyp_title_a: { en: "Step inside", ar: "ادخلي إلى" },
  dyp_title_b: { en: "the creative process.", ar: "العملية الإبداعية." },
  dyp_sub: {
    en: "A few considered choices help us prepare the first conversation with care.",
    ar: "بضع اختيارات مدروسة تساعدنا على تحضير حواركِ الأول بعناية.",
  },
  tab_occasion: { en: "Occasion", ar: "المناسبة" },
  tab_metal: { en: "Metal", ar: "المعدن" },
  tab_style: { en: "Style", ar: "الأسلوب" },
  tab_stones: { en: "Gemstones", ar: "الأحجار" },
  oc_eng: { en: "Engagement", ar: "خطوبة" },
  oc_wed: { en: "Wedding", ar: "زفاف" },
  oc_ann: { en: "Anniversary", ar: "ذكرى سنوية" },
  oc_gift: { en: "A Meaningful Gift", ar: "هدية خاصة" },
  oc_mile: { en: "Personal Milestone", ar: "محطة شخصية" },
  mt_yellow: { en: "Yellow Gold", ar: "ذهب أصفر" },
  mt_white: { en: "White Gold", ar: "ذهب أبيض" },
  mt_rose: { en: "Rose Gold", ar: "ذهب وردي" },
  mt_plat: { en: "Platinum", ar: "بلاتين" },
  st_classic: { en: "Classic", ar: "كلاسيكي" },
  st_modern: { en: "Modern", ar: "عصري" },
  st_statement: { en: "Statement", ar: "بارز" },
  st_minimal: { en: "Minimal", ar: "بسيط" },
  gs_dia: { en: "Diamond", ar: "ألماس" },
  gs_em: { en: "Emerald", ar: "زمرّد" },
  gs_sap: { en: "Sapphire", ar: "ياقوت أزرق" },
  gs_ruby: { en: "Ruby", ar: "ياقوت أحمر" },
  gs_custom: { en: "Custom Stone", ar: "حجر مخصّص" },
  dyp_cta: { en: "Continue to Private Consultation", ar: "تابعي إلى الاستشارة الخاصة" },
  dyp_chosen: { en: "Your first direction", ar: "اتجاهكِ الأول" },

  // process
  pr_eyebrow: { en: "03 · The Atelier Process", ar: "٠٣ · مسار الأتيليه" },
  pr_title: { en: "Five chapters, one creation.", ar: "خمسة فصول، قطعة واحدة." },
  pr_1_t: { en: "Private Consultation", ar: "استشارة خاصة" },
  pr_1_d: {
    en: "We listen to the woman, the occasion, and the meaning behind the piece.",
    ar: "نُصغي إليكِ، للمناسبة، وللمعنى الذي ستحمله القطعة.",
  },
  pr_2_t: { en: "Creative Direction", ar: "اتجاه إبداعي" },
  pr_2_d: {
    en: "References, stones, and proportion settle into a clear direction.",
    ar: "تجتمع المراجع والأحجار والنِسب في اتجاه واضح.",
  },
  pr_3_t: { en: "Sketch & Design", ar: "رسم وتصميم" },
  pr_3_d: {
    en: "Sketches and renderings are refined with you before production begins.",
    ar: "تُصقل الرسومات والتصوّرات معكِ قبل بدء التنفيذ.",
  },
  pr_4_t: { en: "Craftsmanship", ar: "حرفة" },
  pr_4_d: {
    en: "Goldsmiths and setters bring every detail into form by hand.",
    ar: "يصوغ الحرفيون كل تفصيلة يدوياً حتى تكتمل القطعة.",
  },
  pr_5_t: { en: "Final Creation", ar: "الإبداع النهائي" },
  pr_5_d: {
    en: "Presented privately, ready to be worn and carried forward.",
    ar: "تُقدَّم لكِ بخصوصية، جاهزة لتُرتدى وتُحفظ.",
  },

  // signature
  sig_eyebrow: { en: "04 · Signature Creations", ar: "٠٤ · إبداعات مميّزة" },
  sig_title: { en: "A private archive.", ar: "أرشيف خاص." },
  sig_sub: {
    en: "Pieces created inside the atelier, shared for inspiration and never repeated.",
    ar: "قطع وُلدت داخل الأتيليه، تُعرض للإلهام ولا تتكرر.",
  },

  // redesign
  rd_eyebrow: { en: "05 · Heirloom Redesign", ar: "٠٥ · إعادة تصميم القطع المتوارثة" },
  rd_t1: { en: "Give new life", ar: "امنحي حياة جديدة" },
  rd_t2: { en: "to a piece you love.", ar: "إلى قطعة تحملينها بحب." },
  rd_body: {
    en: "An inherited ring. A necklace kept in its box. Stones that still hold meaning. We preserve the memory and translate it into a modern piece that feels entirely yours.",
    ar: "خاتم متوارث. عقد بقي في علبته. أحجار ما زالت تحمل معنى. نحفظ الذكرى ونترجمها إلى قطعة معاصرة تشبهكِ تماماً.",
  },
  rd_cta: { en: "Begin a Redesign", ar: "ابدئي إعادة التصميم" },

  // stories
  st_eyebrow: { en: "06 · Private Client Stories", ar: "٠٦ · حكايات العميلات" },
  st_title: { en: "Pieces with a story.", ar: "قطع تحمل حكاية." },
  story1_tag: { en: "A Wedding Commission", ar: "طلب زفاف" },
  story1_q: {
    en: "A bridal suite for a private ceremony in Jeddah.",
    ar: "طقم عروس لحفل خاص في جدة.",
  },
  story1_b: {
    en: "Three pieces, one presence. Hand-set diamonds with a quiet modern line, refined across six conversations.",
    ar: "ثلاث قطع وحضور واحد. ألماس مرصّع يدوياً بخط معاصر هادئ، صُقل عبر ست جلسات.",
  },
  story2_tag: { en: "An Anniversary Piece", ar: "قطعة ذكرى سنوية" },
  story2_q: {
    en: "An emerald necklace for a tenth anniversary.",
    ar: "عقد زمرد لذكرى الزواج العاشرة.",
  },
  story2_b: {
    en: "Built around a single stone she had loved since childhood. The setting was redrawn until the jewel felt effortless on her.",
    ar: "بُني حول حجر أحبّته منذ طفولتها. أُعيد رسم الترصيع حتى بدا العقد طبيعياً عليها.",
  },
  story3_tag: { en: "A Redesigned Heirloom", ar: "قطعة متوارثة أُعيد تصميمها" },
  story3_q: { en: "Her grandmother's ring, made for today.", ar: "خاتم جدّتها، صُنع لليوم." },
  story3_b: {
    en: "Two old rings were dismantled, their stones preserved, and reborn as one sculptural band for daily wear.",
    ar: "فُكّ خاتمان قديمان، حُفظت أحجارهما، ووُلدا من جديد كخاتم منحوت ترتديه كل يوم.",
  },
  story4_tag: { en: "A Meaningful Gift", ar: "هدية خاصة" },
  story4_q: {
    en: "A pendant for a daughter's eighteenth birthday.",
    ar: "تعليقة لعيد ميلاد ابنتها الثامن عشر.",
  },
  story4_b: {
    en: "A quiet gold form holding a family stone kept for a generation, made intimate enough to wear every day.",
    ar: "صياغة ذهبية هادئة تحتضن حجراً احتفظت به العائلة لجيل كامل، وأصبح قريباً بما يكفي لارتدائه يومياً.",
  },

  // founder
  fd_eyebrow: { en: "07 · The Founder", ar: "٠٧ · المؤسِّسة" },
  fd_title: { en: "Hanan Bugshan.", ar: "حنان بقشان." },
  fd_body: {
    en: "Hanan founded Opal Stones as a private space for women who want jewellery with meaning. Her work is intimate, instinctive, and personal, closer to portraiture than product.",
    ar: "أسّست حنان أوبال ستونز كمساحة خاصة للنساء اللواتي يبحثن عن مجوهرات تحمل معنى. عملها حميمي وفطري وشخصي، أقرب إلى البورتريه منه إلى المنتج.",
  },
  fd_quote: {
    en: "“I never design a piece. I design for a woman.”",
    ar: "«لا أُصمّم قطعة. أُصمّم لامرأة.»",
  },

  // consultation
  cs_eyebrow: { en: "08 · Private Consultation", ar: "٠٨ · استشارة خاصة" },
  cs_l1: { en: "Begin your", ar: "ابدئي" },
  cs_l2: { en: "private commission.", ar: "طلبكِ الخاص." },
  cs_sub: {
    en: "Share the occasion, the stone, or the feeling you want the piece to hold. Hanan replies personally, often within the day.",
    ar: "شاركينا المناسبة، الحجر، أو الإحساس الذي تودّين أن تحمله القطعة. تردّ حنان شخصياً، غالباً خلال اليوم نفسه.",
  },
  f_name: { en: "Your name", ar: "الاسم" },
  f_wa: { en: "WhatsApp number", ar: "رقم واتساب" },
  f_create: { en: "What would you like us to create?", ar: "ما الذي تودّين أن نصوغه؟" },
  f_idea: { en: "Tell us about your idea", ar: "اكتبي لنا عن فكرتكِ" },
  f_budget: { en: "Preferred budget range", ar: "الميزانية المفضّلة" },
  f_when: { en: "Preferred completion date", ar: "موعد التسليم المفضّل" },
  f_other: { en: "Other", ar: "أخرى" },
  f_send: { en: "Begin Your Commission", ar: "ابدئي طلبكِ" },

  // concierge
  cc_title: { en: "Jewellery Concierge", ar: "كونسيرج المجوهرات" },
  cc_sub: { en: "How may we begin your piece?", ar: "كيف نبدأ قطعتكِ؟" },
  cc_wa: { en: "Message on WhatsApp", ar: "تواصلي عبر واتساب" },
  cc_ig: { en: "Direct on Instagram", ar: "مباشرة عبر إنستغرام" },
  cc_form: { en: "Open the private inquiry", ar: "افتحي الطلب الخاص" },

  // footer
  foot_tag: {
    en: "A private atelier for bespoke fine jewellery.",
    ar: "أتيليه خاص للمجوهرات الفاخرة المصمّمة حسب الطلب.",
  },
  foot_rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
} satisfies Record<string, Entry>;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (k: keyof typeof t) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (k: keyof typeof t) => t[k][lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle("arabic-mode", lang === "ar");
    document.body.classList.toggle("english-mode", lang === "en");
    return () => {
      document.body.classList.remove("arabic-mode", "english-mode");
    };
  }, [lang]);

  return <LangCtx.Provider value={{ lang, setLang, tr }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang outside provider");
  return ctx;
}
