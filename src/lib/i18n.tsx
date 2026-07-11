import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
type Entry = { en: string; ar: string };

export const t = {
  // nav
  nav_commission: { en: "Commission", ar: "اطلبي قطعة" },
  nav_design: { en: "Direction", ar: "التمهيد" },
  nav_atelier: { en: "Atelier", ar: "الأتيليه" },
  nav_creations: { en: "Creations", ar: "الإبداعات" },
  nav_collections: { en: "Collections", ar: "المجموعات" },
  nav_redesign: { en: "Redesign", ar: "إعادة التصميم" },
  nav_book: { en: "Private Appointment", ar: "استشارة خاصة" },

  // hero
  hero_eyebrow: {
    en: "Private appointments with Hanan Bugshan",
    ar: "بموعد خاص مع حنان بقشان",
  },
  hero_l1: { en: "A jewel for", ar: "جوهرة لما" },
  hero_l2: { en: "what only you carry.", ar: "تحملينه وحدكِ." },
  hero_sub: {
    en: "Bespoke jewels, bridal suites, and heirlooms redrawn inside a private atelier.",
    ar: "مجوهرات تُصاغ لكِ، وأطقم زفاف، وإرث يُعاد رسمه داخل أتيليه خاص.",
  },
  hero_cta1: { en: "Request a Private Appointment", ar: "اطلبي موعداً خاصاً" },
  hero_cta2: { en: "View Commissions", ar: "شاهدي الطلبات الخاصة" },
  hero_scroll: { en: "Continue", ar: "تابعي" },

  // editorial films
  film_prelude_eyebrow: { en: "A private arrival", ar: "حضور خاص" },
  film_prelude_title: {
    en: "Before a jewel is drawn, it is studied in motion.",
    ar: "قبل أن تُرسم الجوهرة، تُدرَس في الحركة.",
  },
  film_prelude_body: {
    en: "Where a pendant rests. How a ring catches light. What should stay almost unseen.",
    ar: "أين يستقر العقد. كيف يلتقط الخاتم الضوء. وما الذي يليق به أن يبقى شبه خفي.",
  },
  film_commission_label: { en: "Proportion on the hand", ar: "النِسب على اليد" },
  film_commission_eyebrow: { en: "Private fitting", ar: "تجربة خاصة" },
  film_commission_body: {
    en: "Each commission is tested against gesture, skin, and the private rituals of wearing.",
    ar: "كل طلب خاص يُختبر على الإيماءة، وعلى البشرة، وعلى طقوس الارتداء الخاصة.",
  },
  film_process_eyebrow: { en: "At the bench", ar: "على طاولة الصياغة" },
  film_process_body: {
    en: "Pressure, patience, and finish decide the final line before the jewel leaves the bench.",
    ar: "الضغط والصبر والتشطيب ترسم الخط الأخير قبل أن تغادر الجوهرة طاولة الصياغة.",
  },
  film_signature_label: { en: "Archive in motion", ar: "الأرشيف في حركة" },
  film_redesign_label: { en: "Memory held in gold", ar: "ذاكرة يحملها الذهب" },
  film_story_label: { en: "A private portrait", ar: "بورتريه خاص" },
  film_founder_label: { en: "Behind the sitting", ar: "خلف الجلسة" },

  // commission
  com_eyebrow: { en: "Private Commission", ar: "الطلب الخاص" },
  com_title_a: { en: "Begin with", ar: "ابدئي من" },
  com_title_b: { en: "the piece.", ar: "القطعة." },
  com_sub: {
    en: "Choose the form nearest to your intention. Proportion, stone, and setting are then edited around the woman who will wear it.",
    ar: "اختاري الشكل الأقرب إلى نيّتكِ. بعدها تُحرّر النِسب والحجر والترصيع حول المرأة التي سترتديه.",
  },
  com_ring: { en: "A Ring", ar: "خاتم خاص" },
  com_ring_d: {
    en: "For a promise, a signature, or a daily ritual.",
    ar: "لوعد، أو توقيع شخصي، أو طقس يومي هادئ.",
  },
  com_neck: { en: "A Necklace", ar: "عقد" },
  com_neck_d: {
    en: "A pendant, a line of gold, or a sculptural centre.",
    ar: "تعليقة، أو خط من الذهب، أو قطعة منحوتة تتوسّط الحضور.",
  },
  com_ear: { en: "Earrings", ar: "أقراط" },
  com_ear_d: {
    en: "Studs, drops, or a pair shaped for the face.",
    ar: "أقراط صغيرة، متدلية، أو زوج يُصاغ لملامح الوجه.",
  },
  com_brace: { en: "A Bracelet", ar: "سوار" },
  com_brace_d: {
    en: "A tennis line, a cuff, or a chain with quiet restraint.",
    ar: "خط تنس، أو كفّ، أو سلسلة تحفظ أناقتها بهدوء.",
  },
  com_bridal: { en: "A Bridal Suite", ar: "طقم عروس" },
  com_bridal_d: {
    en: "A suite composed for the ceremony and kept beyond it.",
    ar: "طقم يُنسّق للحفل، ويبقى لما بعده بسنوات.",
  },
  com_redo: { en: "Rework an Heirloom", ar: "إعادة صياغة إرث" },
  com_redo_d: {
    en: "Keep the memory. Change how it lives on you.",
    ar: "احفظي الذاكرة، وغيّري الطريقة التي تسكن بها عليكِ.",
  },
  com_unique: { en: "A Singular Piece", ar: "قطعة لا تتكرر" },
  com_unique_d: {
    en: "Outside every category, held by your story alone.",
    ar: "خارج كل تصنيف، تحملها حكايتكِ وحدها.",
  },
  com_begin: { en: "Begin privately", ar: "ابدئي بهدوء" },

  // design your piece
  dyp_eyebrow: { en: "First Direction", ar: "الاتجاه الأول" },
  dyp_title_a: { en: "A quiet beginning", ar: "بداية هادئة" },
  dyp_title_b: { en: "before the sketch.", ar: "قبل الرسم." },
  dyp_sub: {
    en: "A few decisions give the first conversation shape without deciding the jewel too soon.",
    ar: "اختيارات قليلة تمنح الحوار الأول شكله، من دون أن تُقيّد الجوهرة قبل أوانها.",
  },
  tab_occasion: { en: "Occasion", ar: "اللحظة" },
  tab_metal: { en: "Metal", ar: "المعدن" },
  tab_style: { en: "Line", ar: "الخط" },
  tab_stones: { en: "Stone", ar: "الحجر" },
  oc_eng: { en: "Engagement", ar: "خطوبة" },
  oc_wed: { en: "Wedding", ar: "زفاف" },
  oc_ann: { en: "Anniversary", ar: "ذكرى" },
  oc_gift: { en: "A Meaningful Gift", ar: "هدية بمعنى" },
  oc_mile: { en: "Private Milestone", ar: "محطة شخصية" },
  mt_yellow: { en: "Yellow Gold", ar: "ذهب أصفر" },
  mt_white: { en: "White Gold", ar: "ذهب أبيض" },
  mt_rose: { en: "Rose Gold", ar: "ذهب وردي" },
  mt_plat: { en: "Platinum", ar: "بلاتين" },
  st_classic: { en: "Enduring", ar: "خالد" },
  st_modern: { en: "Clean", ar: "نقي" },
  st_statement: { en: "Sculptural", ar: "منحوت" },
  st_minimal: { en: "Quiet", ar: "هادئ" },
  gs_dia: { en: "Diamond", ar: "ألماس" },
  gs_em: { en: "Emerald", ar: "زمرّد" },
  gs_sap: { en: "Sapphire", ar: "ياقوت أزرق" },
  gs_ruby: { en: "Ruby", ar: "ياقوت أحمر" },
  gs_custom: { en: "A Family Stone", ar: "حجر من العائلة" },
  dyp_cta: { en: "Request the Appointment", ar: "اطلبي الموعد" },
  dyp_chosen: { en: "First direction", ar: "الاتجاه الأول" },
  dyp_empty: { en: "Awaiting your first choices", ar: "بانتظار اختياراتكِ الأولى" },

  // process
  pr_eyebrow: { en: "Inside the Atelier", ar: "داخل الأتيليه" },
  pr_title: {
    en: "Made slowly, held close to the hand.",
    ar: "صناعة هادئة تبقى قريبة من اليد.",
  },
  pr_1_t: { en: "Private Appointment", ar: "موعد خاص" },
  pr_1_d: {
    en: "The first conversation is about the woman, the occasion, and what should remain private.",
    ar: "الحوار الأول عنكِ، وعن اللحظة، وعن المعنى الذي يجب أن يبقى خاصاً.",
  },
  pr_2_t: { en: "Direction", ar: "الاتجاه" },
  pr_2_d: {
    en: "Stones, references, and proportion are edited into one clear direction.",
    ar: "تُحرّر الأحجار والمراجع والنِسب حتى يظهر اتجاه واحد واضح.",
  },
  pr_3_t: { en: "Sketch", ar: "الرسم" },
  pr_3_d: {
    en: "The drawing is reduced until only the necessary line remains.",
    ar: "يُختصر الرسم حتى يبقى الخط الضروري وحده.",
  },
  pr_4_t: { en: "Making", ar: "الصياغة" },
  pr_4_d: {
    en: "Gold, setting, and finish are handled by hand, without hurry.",
    ar: "يُعامل الذهب والترصيع والتشطيب يدوياً، من دون استعجال.",
  },
  pr_5_t: { en: "Private Presentation", ar: "التقديم الخاص" },
  pr_5_d: {
    en: "The piece is presented quietly, ready to be worn and carried forward.",
    ar: "تُقدَّم القطعة بهدوء، جاهزة لأن تُرتدى وتنتقل معكِ.",
  },

  // signature
  sig_eyebrow: { en: "Private Archive", ar: "أرشيف خاص" },
  sig_title: { en: "Made once, remembered often.", ar: "تُصاغ مرة، وتبقى طويلاً." },
  sig_sub: {
    en: "Selected atelier pieces, shown as traces rather than inventory. Each begins again when it is made for another woman.",
    ar: "قطع مختارة من الأتيليه، تُعرض كأثر لا كمخزون. كل قطعة تبدأ من جديد حين تُصاغ لامرأة أخرى.",
  },

  // redesign
  rd_eyebrow: { en: "Heirloom Redesign", ar: "إعادة صياغة الإرث" },
  rd_t1: { en: "Old meaning,", ar: "المعنى القديم،" },
  rd_t2: { en: "new form.", ar: "بصياغة جديدة." },
  rd_body: {
    en: "A grandmother's ring. A necklace kept in its box. Stones too meaningful to leave unworn. We keep the memory intact, then redraw the form for the woman you are now.",
    ar: "خاتم من جدّة. عقد بقي في علبته. أحجار لا يليق بها أن تبقى بعيدة. نحفظ الذاكرة كما هي، ثم نعيد رسم الشكل للمرأة التي أصبحتِها اليوم.",
  },
  rd_cta: { en: "Begin the Redesign", ar: "ابدئي الصياغة الجديدة" },

  // stories
  st_eyebrow: { en: "Private Client Stories", ar: "حكايات خاصة" },
  st_title: {
    en: "Pieces that begin in private memory.",
    ar: "قطع تبدأ من ذاكرة خاصة.",
  },
  story1_tag: { en: "Wedding Suite", ar: "طقم زفاف" },
  story1_q: {
    en: "A bridal suite composed for a quiet ceremony in Jeddah.",
    ar: "طقم عروس صيغ لحفل هادئ في جدة.",
  },
  story1_b: {
    en: "Three pieces, one calm presence. Diamonds were set by hand along a clean line and refined across six conversations.",
    ar: "ثلاث قطع وحضور واحد هادئ. رُصّع الألماس يدوياً على خط نقي، ثم صُقل عبر ست محادثات.",
  },
  story2_tag: { en: "Anniversary", ar: "ذكرى زواج" },
  story2_q: {
    en: "An emerald necklace for the tenth year.",
    ar: "عقد زمرد للعام العاشر.",
  },
  story2_b: {
    en: "The piece began with a stone she had loved since childhood. The setting was redrawn until the necklace felt inevitable on her.",
    ar: "بدأت القطعة من حجر أحبّته منذ طفولتها. أُعيد رسم الترصيع حتى بدا العقد كأنه كان ينتظرها.",
  },
  story3_tag: { en: "Heirloom Reworked", ar: "إرث أُعيدت صياغته" },
  story3_q: {
    en: "Her grandmother's ring, redrawn for the present.",
    ar: "خاتم جدّتها، مرسوماً للحاضر.",
  },
  story3_b: {
    en: "Two old rings were opened with care. Their stones returned as one sculptural band for daily wear.",
    ar: "فُتح خاتمان قديمان بعناية. عادت أحجارهما كخاتم منحوت للارتداء اليومي.",
  },
  story4_tag: { en: "Private Gift", ar: "هدية خاصة" },
  story4_q: {
    en: "A pendant for a daughter's eighteenth birthday.",
    ar: "تعليقة لعيد ميلاد ابنة في عامها الثامن عشر.",
  },
  story4_b: {
    en: "A quiet gold form held a family stone kept for a generation, intimate enough to become part of her every day.",
    ar: "صياغة ذهبية هادئة احتضنت حجراً احتفظت به العائلة لجيل كامل، حتى صار جزءاً من يومها.",
  },

  // founder
  fd_eyebrow: { en: "The Founder", ar: "المؤسِّسة" },
  fd_title: { en: "Hanan Bugshan.", ar: "حنان بقشان." },
  fd_body: {
    en: "Hanan founded Opal Stones for women who want jewellery to carry memory, instinct, and proportion. Her work begins with listening and ends closer to portraiture than product.",
    ar: "أسّست حنان أوبال ستونز للنساء اللواتي يردن مجوهرات تحمل الذاكرة والحدس والنِسب. يبدأ عملها بالإنصات وينتهي أقرب إلى البورتريه منه إلى المنتج.",
  },
  fd_quote: {
    en: "“The piece matters when it feels like it has always belonged to her.”",
    ar: "«تكتمل القطعة حين تبدو كأنها كانت تنتمي إليها دائماً.»",
  },

  // consultation
  cs_eyebrow: { en: "Private Appointment", ar: "موعد خاص" },
  cs_l1: { en: "Request a", ar: "اطلبي" },
  cs_l2: { en: "private appointment.", ar: "موعدكِ الخاص." },
  cs_sub: {
    en: "Share the occasion, the stone, or the feeling the piece should hold. Hanan reads each inquiry before the first conversation is arranged.",
    ar: "شاركينا المناسبة، الحجر، أو الإحساس الذي تودّين أن تحمله القطعة. تقرأ حنان كل طلب قبل ترتيب الحوار الأول.",
  },
  f_name: { en: "Name", ar: "الاسم" },
  f_wa: { en: "WhatsApp number", ar: "رقم واتساب" },
  f_create: { en: "What should we begin with?", ar: "بماذا نبدأ؟" },
  f_idea: { en: "Tell us what the piece should hold", ar: "اكتبي ما تريدين أن تحمله القطعة" },
  f_budget: { en: "Preferred range", ar: "النطاق المفضّل" },
  f_when: { en: "Preferred timing", ar: "التوقيت المفضّل" },
  f_budget_ph: { en: "A private range is welcome", ar: "يمكنكِ كتابة نطاق تقريبي" },
  f_when_ph: { en: "Occasion date or desired month", ar: "تاريخ المناسبة أو الشهر المفضّل" },
  f_other: { en: "Something else", ar: "شيء آخر" },
  f_send: { en: "Request the Appointment", ar: "اطلبي الموعد" },

  // concierge
  cc_title: { en: "Private Desk", ar: "المكتب الخاص" },
  cc_sub: { en: "Begin with Hanan", ar: "ابدئي مع حنان" },
  cc_wa: { en: "Message on WhatsApp", ar: "تواصلي عبر واتساب" },
  cc_ig: { en: "Write on Instagram", ar: "اكتبي عبر إنستغرام" },
  cc_form: { en: "Open the appointment form", ar: "افتحي نموذج الموعد" },

  // footer
  foot_tag: {
    en: "A private jewellery maison for pieces made with memory, proportion, and intent.",
    ar: "ميزون مجوهرات خاص لقطع تُصاغ بذاكرة ونِسب ونيّة واضحة.",
  },
  foot_place: { en: "Jeddah / private appointments", ar: "جدة / مواعيد خاصة" },
  foot_rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
} satisfies Record<string, Entry>;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (k: keyof typeof t) => string };
const LangCtx = createContext<Ctx | null>(null);
const LANGUAGE_STORAGE_KEY = "opal-stones-language";

const isLang = (value: unknown): value is Lang => value === "en" || value === "ar";

const readStoredLanguage = (): Lang | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLang(stored) ? stored : null;
  } catch {
    return null;
  }
};

const writeStoredLanguage = (lang: Lang) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Language still works for the current page even if storage is unavailable.
  }
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [storageReady, setStorageReady] = useState(false);
  const tr = (k: keyof typeof t) => t[k][lang];

  const setLang = useCallback((nextLang: Lang) => {
    setStorageReady(true);
    setLangState(nextLang);
    writeStoredLanguage(nextLang);
  }, []);

  useEffect(() => {
    const stored = readStoredLanguage();
    if (stored) setLangState(stored);
    setStorageReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("arabic-mode", lang === "ar");
    document.body.classList.toggle("english-mode", lang === "en");
    if (storageReady) writeStoredLanguage(lang);
    return () => {
      document.body.classList.remove("arabic-mode", "english-mode");
      document.body.removeAttribute("dir");
    };
  }, [lang, storageReady]);

  return <LangCtx.Provider value={{ lang, setLang, tr }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang outside provider");
  return ctx;
}
