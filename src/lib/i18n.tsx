import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
type Entry = { en: string; ar: string };

export const t = {
  // nav
  nav_commission: { en: "Private Commission", ar: "طلب خاص" },
  nav_design: { en: "Design Ritual", ar: "صمّمي قطعتكِ" },
  nav_atelier: { en: "Atelier", ar: "الأتيليه" },
  nav_creations: { en: "Archive", ar: "الأرشيف" },
  nav_redesign: { en: "Heirloom Redesign", ar: "إعادة الصياغة" },
  nav_book: { en: "Book Privately", ar: "استشارة خاصة" },

  // hero
  hero_eyebrow: {
    en: "By private appointment with Hanan Bugshan",
    ar: "بموعد خاص مع حنان بقشان",
  },
  hero_l1: { en: "A jewel for", ar: "جوهرة لما" },
  hero_l2: { en: "what only you carry.", ar: "تحملينه وحدكِ." },
  hero_sub: {
    en: "A private maison for bespoke pieces, bridal suites, and heirlooms reborn with quiet precision.",
    ar: "ميزون خاص للقطع المصمّمة لكِ، لأطقم الزفاف، وللذكريات التي تستحق صياغة جديدة بهدوء ودقّة.",
  },
  hero_cta1: { en: "Request an Appointment", ar: "اطلبي موعداً خاصاً" },
  hero_cta2: { en: "Enter the Atelier", ar: "ادخلي الأتيليه" },
  hero_scroll: { en: "Continue", ar: "تابعي" },

  // commission
  com_eyebrow: { en: "Private Commission", ar: "الطلب الخاص" },
  com_title_a: { en: "Begin with", ar: "ابدئي من" },
  com_title_b: { en: "the piece.", ar: "القطعة." },
  com_sub: {
    en: "Select the form closest to your intention. Each commission is drawn, proportioned, and refined around the woman who will wear it.",
    ar: "اختاري الشكل الأقرب إلى نيّتكِ. كل طلب يُرسم وتُضبط نسبه ويُصقل حول المرأة التي سترتديه.",
  },
  com_ring: { en: "A Ring", ar: "خاتم خاص" },
  com_ring_d: {
    en: "For a promise, a signature, or the ritual of every day.",
    ar: "لوعد، لتوقيع شخصي، أو لطقس يومي لا يشبه غيره.",
  },
  com_neck: { en: "A Necklace", ar: "عقد" },
  com_neck_d: {
    en: "A pendant, a line of gold, or a sculptural centrepiece.",
    ar: "تعليقة، خط من الذهب، أو قطعة منحوتة تتوسّط الحضور.",
  },
  com_ear: { en: "Earrings", ar: "أقراط" },
  com_ear_d: {
    en: "Studs, drops, or a pair shaped for the face.",
    ar: "أقراط صغيرة، متدلية، أو زوج يُصاغ لملامح الوجه.",
  },
  com_brace: { en: "A Bracelet", ar: "سوار" },
  com_brace_d: {
    en: "A tennis line, a cuff, or a chain with private restraint.",
    ar: "خط تنس، كفّ، أو سلسلة تحفظ أناقتها بهدوء.",
  },
  com_bridal: { en: "A Bridal Suite", ar: "طقم عروس" },
  com_bridal_d: {
    en: "A suite composed for the ceremony, then kept for life.",
    ar: "طقم يُنسّق للحفل، ثم يبقى لما بعده بسنوات.",
  },
  com_redo: { en: "Rework an Heirloom", ar: "إعادة صياغة إرث" },
  com_redo_d: {
    en: "Preserve the memory, change the way it lives on you.",
    ar: "احفظي الذاكرة، وغيّري الطريقة التي تسكن بها عليكِ.",
  },
  com_unique: { en: "A Singular Piece", ar: "قطعة لا تتكرر" },
  com_unique_d: {
    en: "Outside every category, held only by your story.",
    ar: "خارج كل تصنيف، تحملها حكايتكِ وحدها.",
  },
  com_begin: { en: "Begin privately", ar: "ابدئي بهدوء" },

  // design your piece
  dyp_eyebrow: { en: "The First Direction", ar: "الاتجاه الأول" },
  dyp_title_a: { en: "A few choices", ar: "اختيارات قليلة" },
  dyp_title_b: { en: "before the first sketch.", ar: "قبل الرسم الأول." },
  dyp_sub: {
    en: "These details do not define the jewel. They simply help Hanan prepare for a more precise private conversation.",
    ar: "لا تُقيّد هذه التفاصيل الجوهرة. بل تمنح حنان بداية أدقّ لحواركِ الخاص.",
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
    en: "A slower process, for a piece that stays.",
    ar: "مسار هادئ لقطعة تبقى.",
  },
  pr_1_t: { en: "Private Appointment", ar: "موعد خاص" },
  pr_1_d: {
    en: "The first conversation is about the woman, the occasion, and what should remain unsaid.",
    ar: "الحوار الأول عنكِ، وعن اللحظة، وعن المعنى الذي لا يحتاج إلى شرح طويل.",
  },
  pr_2_t: { en: "Direction", ar: "الاتجاه" },
  pr_2_d: {
    en: "Stones, references, and proportion are edited into one clear line.",
    ar: "تُحرّر الأحجار والمراجع والنِسب حتى يظهر خط واحد واضح.",
  },
  pr_3_t: { en: "Sketch", ar: "الرسم" },
  pr_3_d: {
    en: "The drawing is refined with restraint before the atelier touches the metal.",
    ar: "يُصقل الرسم بتأنّ قبل أن يلمس الأتيليه المعدن.",
  },
  pr_4_t: { en: "Making", ar: "الصياغة" },
  pr_4_d: {
    en: "Gold, setting, and finish are handled by hand, with attention kept close.",
    ar: "يُعامل الذهب والترصيع والتشطيب يدوياً، بتفاصيل قريبة لا تُستعجل.",
  },
  pr_5_t: { en: "Private Presentation", ar: "التقديم الخاص" },
  pr_5_d: {
    en: "The piece is presented quietly, ready to be worn, kept, and carried forward.",
    ar: "تُقدَّم القطعة بهدوء، جاهزة لأن تُرتدى وتُحفظ وتنتقل معكِ.",
  },

  // signature
  sig_eyebrow: { en: "Private Archive", ar: "أرشيف خاص" },
  sig_title: { en: "Created once, remembered often.", ar: "تُصاغ مرة، وتبقى طويلاً." },
  sig_sub: {
    en: "Selected pieces from the atelier, shown as traces of possibility. None are repeated in the same way.",
    ar: "قطع مختارة من الأتيليه، تُعرض كأثر لما يمكن أن يولد. ولا تعود بالطريقة ذاتها.",
  },

  // redesign
  rd_eyebrow: { en: "Heirloom Redesign", ar: "إعادة صياغة الإرث" },
  rd_t1: { en: "Old meaning,", ar: "المعنى القديم،" },
  rd_t2: { en: "new form.", ar: "بصياغة جديدة." },
  rd_body: {
    en: "A ring from a grandmother. A necklace kept for years. Stones too meaningful to leave unworn. We preserve what matters, then redraw the piece for the woman you are now.",
    ar: "خاتم من جدّة. عقد بقي أعواماً في علبته. أحجار لا يليق بها أن تبقى بعيدة. نحفظ ما يستحق البقاء، ثم نرسم القطعة للمرأة التي أصبحتِها اليوم.",
  },
  rd_cta: { en: "Begin the Redesign", ar: "ابدئي الصياغة الجديدة" },

  // stories
  st_eyebrow: { en: "Private Client Stories", ar: "حكايات خاصة" },
  st_title: { en: "Four commissions, no repetition.", ar: "أربع قطع، ولا تكرار." },
  story1_tag: { en: "Wedding Suite", ar: "طقم زفاف" },
  story1_q: {
    en: "A bridal suite composed for a private ceremony in Jeddah.",
    ar: "طقم عروس صيغ لحفل خاص في جدة.",
  },
  story1_b: {
    en: "Three pieces, one quiet presence. Diamonds were set by hand along a clean line, then refined across six conversations.",
    ar: "ثلاث قطع وحضور واحد هادئ. رُصّع الألماس يدوياً على خط نقي، ثم صُقل عبر ست جلسات.",
  },
  story2_tag: { en: "Anniversary", ar: "ذكرى زواج" },
  story2_q: {
    en: "An emerald necklace for the tenth year.",
    ar: "عقد زمرد للعام العاشر.",
  },
  story2_b: {
    en: "The piece began with a stone she had loved since childhood. The setting was redrawn until the necklace felt inevitable.",
    ar: "بدأت القطعة من حجر أحبّته منذ طفولتها. أُعيد رسم الترصيع حتى بدا العقد كأنه كان ينتظرها.",
  },
  story3_tag: { en: "Heirloom Reworked", ar: "إرث أُعيدت صياغته" },
  story3_q: { en: "Her grandmother's ring, redrawn for today.", ar: "خاتم جدّتها، مرسوماً لليوم." },
  story3_b: {
    en: "Two old rings were dismantled with care. Their stones returned as one sculptural band made for daily wear.",
    ar: "فُكّ خاتمان قديمان بعناية. عادت أحجارهما كخاتم منحوت، قريب بما يكفي لليوم العادي.",
  },
  story4_tag: { en: "Private Gift", ar: "هدية خاصة" },
  story4_q: {
    en: "A pendant for a daughter's eighteenth birthday.",
    ar: "تعليقة لعيد ميلاد ابنة في عامها الثامن عشر.",
  },
  story4_b: {
    en: "A quiet gold form held a family stone kept for a generation, intimate enough to be worn every day.",
    ar: "صياغة ذهبية هادئة احتضنت حجراً احتفظت به العائلة لجيل كامل، حتى صار قريباً بما يكفي للارتداء اليومي.",
  },

  // founder
  fd_eyebrow: { en: "The Founder", ar: "المؤسِّسة" },
  fd_title: { en: "Hanan Bugshan.", ar: "حنان بقشان." },
  fd_body: {
    en: "Hanan founded Opal Stones as a private atelier for women who want jewellery with meaning. Her work begins with instinct and ends in proportion, closer to portraiture than product.",
    ar: "أسّست حنان أوبال ستونز كأتيليه خاص للنساء اللواتي يبحثن عن مجوهرات تحمل معنى. يبدأ عملها بالحدس وينتهي بالنِسب، أقرب إلى البورتريه منه إلى المنتج.",
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
    en: "Share the occasion, the stone, or the feeling the piece should hold. Hanan reviews every inquiry personally before the first conversation is arranged.",
    ar: "شاركينا المناسبة، الحجر، أو الإحساس الذي تودّين أن تحمله القطعة. تراجع حنان كل طلب بنفسها قبل ترتيب الحوار الأول.",
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
    en: "A private jewellery maison for pieces made with intention.",
    ar: "ميزون مجوهرات خاص لقطع تُصاغ بنيّة واضحة.",
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
