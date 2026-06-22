import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLang, t as TDICT, type Lang } from "@/lib/i18n";

import j1 from "@/assets/jewellery/IMG_6823.jpg";
import j2 from "@/assets/jewellery/IMG_6824.jpg";
import j3 from "@/assets/jewellery/IMG_6825.jpg";
import j4 from "@/assets/jewellery/IMG_6826.jpg";
import j5 from "@/assets/jewellery/IMG_6827.jpg";
import j6 from "@/assets/jewellery/IMG_6828.jpg";
import j7 from "@/assets/jewellery/IMG_6829.jpg";
import j8 from "@/assets/jewellery/IMG_6830.jpg";
import j9 from "@/assets/jewellery/IMG_6831.jpg";
import j10 from "@/assets/jewellery/IMG_6832.jpg";
import j11 from "@/assets/jewellery/IMG_6834.jpg";
import j12 from "@/assets/jewellery/IMG_6835.jpg";
import j13 from "@/assets/jewellery/IMG_6836.jpg";
import j14 from "@/assets/jewellery/IMG_6837.jpg";
import j15 from "@/assets/jewellery/IMG_6838.jpg";
import j16 from "@/assets/jewellery/IMG_6840.jpg";
import j17 from "@/assets/jewellery/IMG_6841.jpg";
import j18 from "@/assets/jewellery/IMG_6842.jpg";
import j19 from "@/assets/jewellery/IMG_6843.jpg";
import j20 from "@/assets/jewellery/IMG_6844.jpg";
import j21 from "@/assets/jewellery/IMG_6845.jpg";
import j22 from "@/assets/jewellery/IMG_6846.jpg";
import j23 from "@/assets/jewellery/IMG_6847.jpg";
import j24 from "@/assets/jewellery/IMG_6849.jpg";
import j25 from "@/assets/jewellery/IMG_6850.jpg";
import opalLogo384 from "@/assets/opal-logo-384.png";
import opalLogo768 from "@/assets/opal-logo-768.png";
import opalLogo from "@/assets/opal-logo.png";

const u = (a: string) => a;
const OFFICIAL_LOGO_ALT = "Opal Stones by Hanan Bugshan";

const HERO = j11;
const REDESIGN_IMG = j19;
const FOUNDER_IMG = j8;
const CONS_BG = j14;

const GALLERY = [j1, j3, j4, j6, j7, j9, j10, j12, j13, j15, j16, j18, j20, j21, j24, j25];

const STORY_IMAGES = [j2, j17, j23, j22];

const WHATSAPP_NUM = "966500000000";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUM}`;
const INSTAGRAM = "https://www.instagram.com/opal.stones?igsh=MWw0eWFsZG5xZWVybg==";

type TKey = keyof typeof TDICT;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Opal Stones by Hanan Bugshan | Private Jewellery Maison" },
      {
        name: "description",
        content:
          "A private jewellery maison for bespoke commissions, bridal suites, and heirlooms redrawn by Hanan Bugshan.",
      },
      { property: "og:title", content: "Opal Stones | Private Jewellery Maison" },
      {
        property: "og:description",
        content:
          "Bespoke jewellery shaped through private appointments, meaningful stones, and quiet atelier craft.",
      },
      { property: "og:image", content: opalLogo },
      { property: "og:image:alt", content: OFFICIAL_LOGO_ALT },
      { name: "twitter:image", content: opalLogo },
      { name: "twitter:image:alt", content: OFFICIAL_LOGO_ALT },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/* Reveal + Parallax                                                   */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Parallax({
  children,
  amount = 50,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (rect.top + rect.height / 2 - vh / 2) / vh;
      setY(Math.max(-1, Math.min(1, p)) * -amount);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [amount]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{ transform: `translate3d(0,${y}px,0) scale(1.14)` }}
        className="h-full w-full will-change-transform transition-transform duration-300 ease-out"
      >
        {children}
      </div>
    </div>
  );
}

function OfficialLogo({
  className = "",
  loading = "lazy",
  sizes = "(max-width: 768px) 150px, 190px",
}: {
  className?: string;
  loading?: "eager" | "lazy";
  sizes?: string;
}) {
  return (
    <img
      src={u(opalLogo768)}
      srcSet={`${u(opalLogo384)} 384w, ${u(opalLogo768)} 768w, ${u(opalLogo)} 1536w`}
      sizes={sizes}
      alt={OFFICIAL_LOGO_ALT}
      width={1536}
      height={1024}
      loading={loading}
      decoding="async"
      draggable={false}
      className={`block h-auto object-contain ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Index() {
  const { lang } = useLang();
  const [concierge, setConcierge] = useState(false);
  const [prefill, setPrefill] = useState<{ create?: string; whisper?: string }>({});

  const openInquiry = (data?: { create?: string; whisper?: string }) => {
    if (data) setPrefill((p) => ({ ...p, ...data }));
    requestAnimationFrame(() => {
      document
        .getElementById("consultation")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "arabic-mode font-arabic [&_*]:!tracking-normal" : "english-mode"}
    >
      <Nav onConcierge={() => setConcierge(true)} />
      <Hero />
      <Commission onChoose={(create) => openInquiry({ create })} />
      <DesignYourPiece onContinue={(whisper) => openInquiry({ whisper })} />
      <Process />
      <Signature />
      <Redesign onBegin={() => openInquiry({ create: TDICT.com_redo[lang] })} />
      <Stories />
      <Founder />
      <Consultation prefill={prefill} />
      <Footer />
      <Concierge
        open={concierge}
        setOpen={setConcierge}
        onInquiry={() => {
          setConcierge(false);
          openInquiry();
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav({ onConcierge }: { onConcierge: () => void }) {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const items: { k: TKey; href: string }[] = [
    { k: "nav_commission", href: "#commission" },
    { k: "nav_design", href: "#design" },
    { k: "nav_atelier", href: "#atelier" },
    { k: "nav_creations", href: "#creations" },
    { k: "nav_redesign", href: "#redesign" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[color:var(--ivory)]/92 backdrop-blur-md border-b border-[color:var(--border)]/70 shadow-[0_8px_30px_-26px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-5 py-4 md:px-10 md:py-5 xl:px-12">
        <a href="#top" aria-label={OFFICIAL_LOGO_ALT} className="block shrink-0">
          <OfficialLogo
            loading="eager"
            sizes="(max-width: 767px) 118px, (max-width: 1279px) 150px, 166px"
            className={`w-[118px] md:w-[150px] xl:w-[166px] transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-[0.92]"
            }`}
          />
        </a>

        <nav className="hidden xl:flex items-center gap-7 2xl:gap-9">
          {items.map((i) => (
            <a
              key={i.k}
              href={i.href}
              className={`group relative py-3 text-[0.68rem] font-medium tracking-[0.24em] uppercase transition-colors ${
                scrolled
                  ? "text-[color:var(--charcoal)]/80 hover:text-[color:var(--charcoal)]"
                  : "text-[color:var(--ivory)]/85 hover:text-[color:var(--ivory)]"
              }`}
            >
              {tr(i.k)}
              <span className="absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--gold)] transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#consultation"
            className={`text-[0.68rem] font-medium tracking-[0.24em] uppercase border px-6 py-3.5 transition-all duration-500 ${
              scrolled
                ? "border-[color:var(--charcoal)] text-[color:var(--charcoal)] hover:bg-[color:var(--charcoal)] hover:text-[color:var(--ivory)]"
                : "border-[color:var(--ivory)] text-[color:var(--ivory)] hover:bg-[color:var(--ivory)] hover:text-[color:var(--charcoal)]"
            }`}
          >
            {tr("nav_book")}
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <div
            className={`flex items-center text-[0.68rem] font-medium tracking-[0.24em] uppercase transition-colors ${scrolled ? "text-[color:var(--charcoal)]" : "text-[color:var(--ivory)]"}`}
          >
            <button
              onClick={() => setLang("en")}
              className={`px-1.5 transition-opacity ${lang === "en" ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
            >
              EN
            </button>
            <span className="opacity-35">/</span>
            <button
              onClick={() => setLang("ar")}
              className={`px-1.5 transition-opacity ${lang === "ar" ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
            >
              ع
            </button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`xl:hidden flex h-11 w-11 flex-col items-center justify-center gap-[5px] border transition-colors ${
              scrolled || open
                ? "border-[color:var(--charcoal)]/20"
                : "border-[color:var(--ivory)]/30"
            }`}
          >
            <span
              className={`block h-px w-6 transition-transform ${open ? "translate-y-[6px] rotate-45 bg-[color:var(--charcoal)]" : scrolled ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
            />
            <span
              className={`block h-px w-6 transition-opacity ${open ? "opacity-0" : scrolled ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
            />
            <span
              className={`block h-px w-6 transition-transform ${open ? "-translate-y-[6px] -rotate-45 bg-[color:var(--charcoal)]" : scrolled ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-hidden bg-[color:var(--ivory)] transition-[max-height,opacity] duration-700 ${
          open
            ? "max-h-[700px] opacity-100 border-b border-[color:var(--border)]/60"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-7 px-6 py-9 md:px-10">
          {items.map((i) => (
            <a
              key={i.k}
              href={i.href}
              onClick={() => setOpen(false)}
              className="font-display text-[1.45rem] leading-none text-[color:var(--charcoal)] transition-colors hover:text-[color:var(--gold)]"
            >
              {tr(i.k)}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setOpen(false)}
            className="mt-1 border-t border-[color:var(--border)]/70 pt-7 font-display text-[1.45rem] leading-none text-[color:var(--gold)]"
          >
            {tr("nav_book")}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const { tr } = useLang();
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-[color:var(--charcoal)]"
    >
      <div className="absolute inset-0">
        <img
          src={u(HERO)}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ objectPosition: "center 34%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/16 to-black/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1680px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="max-w-[920px] text-[color:var(--ivory)] animate-fade-up">
            <div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.28em] uppercase text-[color:var(--ivory)]/82">
              <span className="h-px w-12 bg-[color:var(--gold)]/80" />
              {tr("hero_eyebrow")}
            </div>
            <h1 className="mt-8 max-w-[880px] font-display font-light leading-[0.98] text-[clamp(3.1rem,7vw,6rem)] tracking-[-0.005em] [text-wrap:balance]">
              <span className="block">{tr("hero_l1")}</span>{" "}
              <span className="block italic text-[color:var(--ivory)]/90">{tr("hero_l2")}</span>
            </h1>
            <p className="mt-9 max-w-2xl text-[1.02rem] md:text-[1.13rem] font-light leading-[1.9] text-[color:var(--ivory)]/86 [text-wrap:pretty]">
              {tr("hero_sub")}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#consultation"
                className="group inline-flex min-h-[58px] items-center justify-between gap-6 bg-[color:var(--ivory)] px-8 py-5 text-[0.7rem] font-medium tracking-[0.26em] uppercase text-[color:var(--charcoal)] transition-all duration-500 hover:bg-[color:var(--gold)] hover:text-[color:var(--ivory)]"
              >
                {tr("hero_cta1")}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
              </a>
              <a
                href="#commission"
                className="group inline-flex min-h-[58px] items-center justify-between gap-6 border border-[color:var(--ivory)]/55 px-8 py-5 text-[0.7rem] font-medium tracking-[0.26em] uppercase text-[color:var(--ivory)] transition-all duration-500 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                {tr("hero_cta2")}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-8 md:pb-10 flex justify-center">
          <div className="flex flex-col items-center gap-3 text-[0.6rem] tracking-[0.5em] uppercase text-[color:var(--ivory)]/70">
            {tr("hero_scroll")}
            <span className="block h-12 w-px bg-gradient-to-b from-[color:var(--ivory)]/70 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.24em] uppercase ${light ? "text-[color:var(--ivory)]/72" : "text-[color:var(--taupe)]"}`}
    >
      <span
        className={`h-px w-12 ${light ? "bg-[color:var(--gold)]/70" : "bg-[color:var(--gold)]/65"}`}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Commission (interactive cards)                                  */
/* ------------------------------------------------------------------ */

function Commission({ onChoose }: { onChoose: (label: string) => void }) {
  const { tr } = useLang();
  const cards: { k: TKey; d: TKey; img: string; n: string }[] = [
    { k: "com_ring", d: "com_ring_d", img: j1, n: "01" },
    { k: "com_neck", d: "com_neck_d", img: j11, n: "02" },
    { k: "com_ear", d: "com_ear_d", img: j7, n: "03" },
    { k: "com_brace", d: "com_brace_d", img: j15, n: "04" },
    { k: "com_bridal", d: "com_bridal_d", img: j23, n: "05" },
    { k: "com_redo", d: "com_redo_d", img: j19, n: "06" },
    { k: "com_unique", d: "com_unique_d", img: j17, n: "07" },
  ];
  const cardLayout = [
    "lg:col-span-6 aspect-[5/4]",
    "lg:col-span-3 aspect-[4/5]",
    "lg:col-span-3 aspect-[4/5]",
    "lg:col-span-4 aspect-[4/5]",
    "lg:col-span-4 aspect-[4/5]",
    "lg:col-span-4 aspect-[4/5]",
    "sm:col-span-2 lg:col-span-12 aspect-[16/9] md:aspect-[21/8]",
  ];

  return (
    <section id="commission" className="bg-[color:var(--ivory)] py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end mb-20 md:mb-28">
          <Reveal className="md:col-span-7">
            <Eyebrow>{tr("com_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display font-light text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.0] text-[color:var(--charcoal)] tracking-[-0.01em]">
              <span className="block">{tr("com_title_a")}</span>{" "}
              <span className="block italic text-[color:var(--taupe)]">{tr("com_title_b")}</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={150}>
            <p className="text-[0.98rem] leading-[1.9] text-[color:var(--charcoal)]/75 font-light">
              {tr("com_sub")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-7">
          {cards.map((c, i) => (
            <Reveal key={c.k} delay={(i % 3) * 100} className={cardLayout[i]}>
              <button
                onClick={() => onChoose(tr(c.k))}
                className="group relative block h-full w-full overflow-hidden bg-[color:var(--pearl)] text-left"
              >
                <div className="absolute inset-0">
                  <img
                    src={u(c.img)}
                    alt=""
                    className="h-full w-full object-cover transition-all duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] scale-105 group-hover:scale-110 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-700 group-hover:from-black/85" />
                </div>

                <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[0.6rem] tracking-[0.45em] uppercase text-[color:var(--ivory)]/85 font-display italic">
                  {c.n}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-[color:var(--ivory)]">
                  <h3 className="font-display font-light text-[1.85rem] md:text-[2.25rem] leading-tight">
                    {tr(c.k)}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.75] text-[color:var(--ivory)]/86 font-light max-w-md">
                    {tr(c.d)}
                  </p>
                  <div className="mt-7 inline-flex items-center gap-4 text-[0.66rem] font-medium tracking-[0.28em] uppercase opacity-90 transition-all duration-500 group-hover:opacity-100">
                    {tr("com_begin")}
                    <span className="block h-px w-6 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Design Your Piece (visual configurator)                        */
/* ------------------------------------------------------------------ */

type StepKey = "occasion" | "metal" | "style" | "stones";

function DesignYourPiece({ onContinue }: { onContinue: (whisper: string) => void }) {
  const { tr, lang } = useLang();
  const [tab, setTab] = useState<StepKey>("occasion");
  const [picks, setPicks] = useState<Record<StepKey, string>>({
    occasion: "",
    metal: "",
    style: "",
    stones: "",
  });

  const groups: Record<StepKey, { k: TKey; img: string }[]> = {
    occasion: [
      { k: "oc_eng", img: j1 },
      { k: "oc_wed", img: j23 },
      { k: "oc_ann", img: j11 },
      { k: "oc_gift", img: j22 },
      { k: "oc_mile", img: j8 },
    ],
    metal: [
      { k: "mt_yellow", img: j17 },
      { k: "mt_white", img: j15 },
      { k: "mt_rose", img: j4 },
      { k: "mt_plat", img: j10 },
    ],
    style: [
      { k: "st_classic", img: j12 },
      { k: "st_modern", img: j2 },
      { k: "st_statement", img: j11 },
      { k: "st_minimal", img: j7 },
    ],
    stones: [
      { k: "gs_dia", img: j15 },
      { k: "gs_em", img: j3 },
      { k: "gs_sap", img: j20 },
      { k: "gs_ruby", img: j6 },
      { k: "gs_custom", img: j25 },
    ],
  };

  const tabs: { k: StepKey; label: TKey }[] = [
    { k: "occasion", label: "tab_occasion" },
    { k: "metal", label: "tab_metal" },
    { k: "style", label: "tab_style" },
    { k: "stones", label: "tab_stones" },
  ];

  const buildWhisper = () => {
    const parts = [picks.occasion, picks.metal, picks.style, picks.stones].filter(Boolean);
    return parts.join(" · ");
  };

  const labelFor = (k: TKey) => TDICT[k][lang];

  return (
    <section id="design" className="bg-[color:var(--pearl)] py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end mb-18 md:mb-24">
          <Reveal className="md:col-span-7">
            <Eyebrow>{tr("dyp_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display font-light text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.0] text-[color:var(--charcoal)]">
              <span className="block">{tr("dyp_title_a")}</span>{" "}
              <span className="block italic text-[color:var(--taupe)]">{tr("dyp_title_b")}</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={150}>
            <p className="text-[0.98rem] leading-[1.9] text-[color:var(--charcoal)]/75 font-light">
              {tr("dyp_sub")}
            </p>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-x-8 gap-y-5 border-b border-[color:var(--border)] pb-5 md:gap-x-12">
            {tabs.map((t) => {
              const active = tab === t.k;
              const chosen = picks[t.k];
              return (
                <button key={t.k} onClick={() => setTab(t.k)} className="group relative text-left">
                  <div
                    className={`text-[0.66rem] font-medium tracking-[0.24em] uppercase transition-colors ${active ? "text-[color:var(--gold)]" : "text-[color:var(--taupe)]/70"}`}
                  >
                    {tabs.indexOf(t) + 1 < 10 ? `0${tabs.indexOf(t) + 1}` : tabs.indexOf(t) + 1}
                  </div>
                  <div
                    className={`mt-2 text-[1.12rem] md:text-[1.32rem] font-display transition-colors ${active ? "text-[color:var(--charcoal)]" : "text-[color:var(--charcoal)]/55 hover:text-[color:var(--charcoal)]"}`}
                  >
                    {tr(t.label)}
                    {chosen && (
                      <span className="ml-2 text-[0.75rem] italic text-[color:var(--taupe)]">
                        {`: ${chosen}`}
                      </span>
                    )}
                  </div>
                  {active && (
                    <span className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-[color:var(--charcoal)]" />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Options */}
        <div
          key={tab}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-7 animate-fade-in"
        >
          {groups[tab].map((opt, i) => {
            const label = labelFor(opt.k);
            const selected = picks[tab] === label;
            return (
              <button
                key={opt.k}
                onClick={() => setPicks((p) => ({ ...p, [tab]: label }))}
                className="group block text-left"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className={`relative aspect-[3/4] overflow-hidden bg-[color:var(--ivory)] transition-all duration-500 ${selected ? "ring-1 ring-[color:var(--gold)] ring-offset-4 ring-offset-[color:var(--pearl)]" : ""}`}
                >
                  <img
                    src={u(opt.img)}
                    alt=""
                    className={`h-full w-full object-cover transition-all duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
                      selected
                        ? "scale-110 brightness-100"
                        : "scale-100 brightness-90 group-hover:scale-105 group-hover:brightness-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${selected ? "bg-[color:var(--charcoal)]/10" : "bg-[color:var(--charcoal)]/20 group-hover:bg-transparent"}`}
                  />
                  {selected && (
                    <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-[color:var(--gold)] flex items-center justify-center text-[color:var(--ivory)] text-xs">
                      ✓
                    </div>
                  )}
                </div>
                <div className="mt-4 text-[1.05rem] font-display text-[color:var(--charcoal)]">
                  {label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Summary */}
        <Reveal delay={150}>
          <div className="mt-20 md:mt-28 border-t border-[color:var(--border)] pt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="text-[0.68rem] font-medium tracking-[0.24em] uppercase text-[color:var(--taupe)]">
                {tr("dyp_chosen")}
              </div>
              <div className="mt-3 min-h-[2.8rem] font-display italic text-[1.45rem] md:text-[1.9rem] text-[color:var(--charcoal)]">
                {buildWhisper() || tr("dyp_empty")}
              </div>
            </div>
            <div className="md:col-span-5 md:text-right">
              <button
                onClick={() => onContinue(buildWhisper())}
                className="group inline-flex min-h-[58px] items-center justify-between gap-6 border border-[color:var(--charcoal)] px-8 py-5 text-[0.7rem] font-medium tracking-[0.26em] uppercase text-[color:var(--charcoal)] transition-all duration-500 hover:bg-[color:var(--charcoal)] hover:text-[color:var(--ivory)]"
              >
                {tr("dyp_cta")}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Process                                                        */
/* ------------------------------------------------------------------ */

function Process() {
  const { tr } = useLang();
  const steps: { t: TKey; d: TKey }[] = [
    { t: "pr_1_t", d: "pr_1_d" },
    { t: "pr_2_t", d: "pr_2_d" },
    { t: "pr_3_t", d: "pr_3_d" },
    { t: "pr_4_t", d: "pr_4_d" },
    { t: "pr_5_t", d: "pr_5_d" },
  ];
  return (
    <section
      id="atelier"
      className="bg-[color:var(--charcoal)] text-[color:var(--ivory)] py-32 md:py-52"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <Eyebrow light>{tr("pr_eyebrow")}</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-10 max-w-4xl font-display font-light text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.08] [text-wrap:balance]">
            {tr("pr_title")}
          </h2>
        </Reveal>

        <div className="mt-24 md:mt-36 space-y-14 md:space-y-20">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-baseline border-t border-[color:var(--ivory)]/14 pt-8 md:pt-10">
                <div className="col-span-12 md:col-span-2 font-display italic text-[3.2rem] md:text-[5rem] leading-none text-[color:var(--gold)]/78">
                  0{i + 1}
                </div>
                <h3 className="col-span-12 md:col-span-4 font-display font-light text-[1.9rem] md:text-[2.45rem] leading-tight">
                  {tr(s.t)}
                </h3>
                <p className="col-span-12 md:col-span-5 md:col-start-8 text-[1rem] leading-[1.95] text-[color:var(--ivory)]/78 font-light max-w-lg [text-wrap:pretty]">
                  {tr(s.d)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — Signature                                                      */
/* ------------------------------------------------------------------ */

function Signature() {
  const { tr } = useLang();
  return (
    <section id="creations" className="bg-[color:var(--ivory)] py-32 md:py-52">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-20 md:mb-32">
          <Reveal className="md:col-span-6">
            <Eyebrow>{tr("sig_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display font-light text-[clamp(2.6rem,5.3vw,5rem)] leading-[1.02] text-[color:var(--charcoal)] [text-wrap:balance]">
              {tr("sig_title")}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8" delay={150}>
            <p className="text-[1rem] leading-[1.95] text-[color:var(--charcoal)]/76 font-light [text-wrap:pretty]">
              {tr("sig_sub")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-7">
          {GALLERY.map((img, i) => {
            const pattern = [
              "col-span-12 md:col-span-6 aspect-[5/4]",
              "col-span-6 md:col-span-3 md:col-start-8 aspect-[3/4] md:mt-20",
              "col-span-6 md:col-span-3 aspect-[4/5] md:mt-44",
              "col-span-12 md:col-span-7 md:col-start-3 aspect-[16/10]",
              "col-span-7 md:col-span-4 aspect-[3/4]",
              "col-span-5 md:col-span-5 md:col-start-7 aspect-[4/5] md:mt-24",
              "col-span-12 md:col-span-6 md:col-start-4 aspect-[5/4]",
              "col-span-6 md:col-span-3 aspect-[3/4]",
            ];
            return (
              <Reveal key={i} className={pattern[i % pattern.length]} delay={(i % 4) * 80}>
                <div className="group h-full w-full overflow-hidden bg-[color:var(--pearl)]">
                  <img
                    src={u(img)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.055]"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — Redesign                                                       */
/* ------------------------------------------------------------------ */

function Redesign({ onBegin }: { onBegin: () => void }) {
  const { tr } = useLang();
  return (
    <section id="redesign" className="bg-[color:var(--pearl)] py-32 md:py-52 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <Eyebrow>{tr("rd_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display font-light text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[1.04] text-[color:var(--charcoal)] [text-wrap:balance]">
              <span className="block">{tr("rd_t1")}</span>{" "}
              <span className="block italic text-[color:var(--taupe)]">{tr("rd_t2")}</span>
            </h2>
            <p className="mt-10 max-w-xl text-[1.05rem] leading-[2] text-[color:var(--charcoal)]/80 font-light [text-wrap:pretty]">
              {tr("rd_body")}
            </p>
            <button
              onClick={onBegin}
              className="group mt-12 inline-flex min-h-[58px] items-center gap-6 border border-[color:var(--charcoal)] px-9 py-5 text-[0.7rem] font-medium tracking-[0.26em] uppercase text-[color:var(--charcoal)] transition-all duration-500 hover:bg-[color:var(--charcoal)] hover:text-[color:var(--ivory)]"
            >
              {tr("rd_cta")}
              <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
            </button>
          </Reveal>
          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={150}>
            <div className="aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <Parallax amount={60} className="h-full w-full">
                <img src={u(REDESIGN_IMG)} alt="" className="h-full w-full object-cover" />
              </Parallax>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — Stories                                                        */
/* ------------------------------------------------------------------ */

function Stories() {
  const { tr } = useLang();
  const stories: { tag: TKey; q: TKey; b: TKey }[] = [
    { tag: "story1_tag", q: "story1_q", b: "story1_b" },
    { tag: "story2_tag", q: "story2_q", b: "story2_b" },
    { tag: "story3_tag", q: "story3_q", b: "story3_b" },
    { tag: "story4_tag", q: "story4_q", b: "story4_b" },
  ];

  return (
    <section className="bg-[color:var(--ivory)] py-32 md:py-52">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <Eyebrow>{tr("st_eyebrow")}</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-10 max-w-4xl font-display font-light text-[clamp(2.6rem,5.3vw,5rem)] leading-[1.02] text-[color:var(--charcoal)] [text-wrap:balance]">
            {tr("st_title")}
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-32 space-y-28 md:space-y-44">
          {stories.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.tag}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                    <Parallax amount={50} className="h-full w-full">
                      <img
                        src={u(STORY_IMAGES[i % STORY_IMAGES.length])}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </Parallax>
                  </div>
                </Reveal>
                <Reveal
                  className={`lg:col-span-5 ${reverse ? "lg:col-start-2 lg:order-1" : "lg:col-start-8"}`}
                  delay={150}
                >
                  <div className="text-[0.72rem] font-medium tracking-[0.24em] uppercase text-[color:var(--gold)]">
                    {tr(s.tag)}
                  </div>
                  <h3 className="mt-6 font-display font-light text-[1.95rem] md:text-[2.65rem] leading-[1.18] text-[color:var(--charcoal)] [text-wrap:balance]">
                    "{tr(s.q)}"
                  </h3>
                  <p className="mt-8 max-w-lg text-[1rem] leading-[2] text-[color:var(--charcoal)]/76 font-light [text-wrap:pretty]">
                    {tr(s.b)}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — Founder                                                        */
/* ------------------------------------------------------------------ */

function Founder() {
  const { tr } = useLang();
  return (
    <section className="bg-[color:var(--pearl)] py-32 md:py-52">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <Parallax amount={40} className="h-full w-full">
                  <img src={u(FOUNDER_IMG)} alt="" className="h-full w-full object-cover" />
                </Parallax>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={150}>
            <Eyebrow>{tr("fd_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display font-light text-[clamp(2.35rem,4.6vw,4.2rem)] leading-[1.12] text-[color:var(--charcoal)] italic [text-wrap:balance]">
              {tr("fd_title")}
            </h2>
            <p className="mt-10 max-w-xl text-[1.05rem] leading-[2.05] text-[color:var(--charcoal)]/80 font-light [text-wrap:pretty]">
              {tr("fd_body")}
            </p>
            <div className="mt-12 max-w-xl border-t border-[color:var(--border)] pt-8 font-display italic text-[1.55rem] leading-[1.35] text-[color:var(--taupe)]">
              {tr("fd_quote")}
            </div>
            <div className="mt-5 text-[0.7rem] font-medium tracking-[0.24em] uppercase text-[color:var(--taupe)]">
              Hanan Bugshan
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 09 — Consultation                                                   */
/* ------------------------------------------------------------------ */

function Consultation({ prefill }: { prefill: { create?: string; whisper?: string } }) {
  const { tr, lang } = useLang();
  const [form, setForm] = useState({
    name: "",
    wa: "",
    create: "",
    idea: "",
    budget: "",
    when: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (prefill.create) setForm((f) => ({ ...f, create: prefill.create as string }));
    if (prefill.whisper)
      setForm((f) => ({ ...f, idea: f.idea ? f.idea : (prefill.whisper as string) }));
  }, [prefill]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `${tr("cs_l1")} ${tr("cs_l2")}`,
      "",
      `${tr("f_name")}: ${form.name}`,
      `${tr("f_wa")}: ${form.wa}`,
      `${tr("f_create")}: ${form.create}`,
      `${tr("f_idea")}: ${form.idea}`,
      `${tr("f_budget")}: ${form.budget}`,
      `${tr("f_when")}: ${form.when}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  };

  const createOptions: TKey[] = [
    "com_ring",
    "com_neck",
    "com_brace",
    "com_ear",
    "com_bridal",
    "com_redo",
    "f_other",
  ];

  return (
    <section
      id="consultation"
      className="relative bg-[color:var(--charcoal)] text-[color:var(--ivory)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25">
        <img src={u(CONS_BG)} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/85 via-[color:var(--charcoal)]/90 to-[color:var(--charcoal)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow light>{tr("cs_eyebrow")}</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-10 font-display font-light text-[clamp(2.4rem,5.2vw,5rem)] leading-[1.0]">
                <span className="block">{tr("cs_l1")}</span>{" "}
                <span className="block italic text-[color:var(--gold)]">{tr("cs_l2")}</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 max-w-md text-[1.02rem] leading-[1.9] text-[color:var(--ivory)]/80 font-light">
                {tr("cs_sub")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-14 flex flex-col gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-[58px] items-center justify-between gap-6 border border-[color:var(--ivory)]/30 px-7 py-5 transition-colors hover:border-[color:var(--gold)]"
                >
                  <span className="text-[0.7rem] font-medium tracking-[0.26em] uppercase">
                    {tr("cc_wa")}
                  </span>
                  <span className="font-display italic text-[1.1rem] text-[color:var(--gold)] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-[58px] items-center justify-between gap-6 border border-[color:var(--ivory)]/30 px-7 py-5 transition-colors hover:border-[color:var(--gold)]"
                >
                  <span className="text-[0.7rem] font-medium tracking-[0.26em] uppercase">
                    {tr("cc_ig")}
                  </span>
                  <span className="font-display italic text-[1.1rem] text-[color:var(--gold)] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={200}>
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-x-8 gap-y-8 border border-[color:var(--ivory)]/14 bg-[color:var(--ivory)]/[0.045] p-6 md:grid-cols-2 md:p-10"
            >
              <Field label={tr("f_name")}>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label={tr("f_wa")}>
                <input
                  required
                  value={form.wa}
                  onChange={(e) => setForm({ ...form, wa: e.target.value })}
                  className={inputCls}
                />
              </Field>

              <div className="md:col-span-2">
                <div className="mb-4 text-[0.66rem] font-medium tracking-[0.24em] uppercase text-[color:var(--ivory)]/70">
                  {tr("f_create")}
                </div>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {createOptions.map((k) => {
                    const label = TDICT[k][lang];
                    const active = form.create === label;
                    return (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setForm({ ...form, create: label })}
                        className={`px-5 py-3 text-[0.68rem] font-medium uppercase border transition-all duration-500 ${
                          lang === "ar" ? "tracking-normal" : "tracking-[0.2em]"
                        } ${
                          active
                            ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--gold)]"
                            : "border-[color:var(--ivory)]/25 text-[color:var(--ivory)]/80 hover:border-[color:var(--ivory)]/60"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-2">
                <Field label={tr("f_idea")}>
                  <textarea
                    rows={4}
                    value={form.idea}
                    onChange={(e) => setForm({ ...form, idea: e.target.value })}
                    className={inputCls + " resize-none"}
                  />
                </Field>
              </div>

              <Field label={tr("f_budget")}>
                <input
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  placeholder={tr("f_budget_ph")}
                  className={inputCls + " placeholder:text-[color:var(--ivory)]/45"}
                />
              </Field>
              <Field label={tr("f_when")}>
                <input
                  value={form.when}
                  onChange={(e) => setForm({ ...form, when: e.target.value })}
                  placeholder={tr("f_when_ph")}
                  className={inputCls + " placeholder:text-[color:var(--ivory)]/45"}
                />
              </Field>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="group inline-flex min-h-[60px] items-center justify-between gap-6 bg-[color:var(--ivory)] text-[color:var(--charcoal)] px-10 py-5 text-[0.7rem] font-medium tracking-[0.26em] uppercase transition-all duration-500 hover:bg-[color:var(--gold)] hover:text-[color:var(--ivory)]"
                >
                  {sent ? "✓" : tr("f_send")}
                  <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-transparent border-0 border-b border-[color:var(--ivory)]/34 py-4 text-[1rem] leading-relaxed text-[color:var(--ivory)] focus:border-[color:var(--gold)] focus:outline-none transition-colors";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1 text-[0.66rem] font-medium tracking-[0.24em] uppercase text-[color:var(--ivory)]/70">
        {label}
      </div>
      {children}
    </label>
  );
}

/* ------------------------------------------------------------------ */
/* Floating Concierge                                                  */
/* ------------------------------------------------------------------ */

function Concierge({
  open,
  setOpen,
  onInquiry,
}: {
  open: boolean;
  setOpen: (b: boolean) => void;
  onInquiry: () => void;
}) {
  const { tr } = useLang();
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Jewellery Concierge"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
      >
        <div className="relative flex items-center gap-4 bg-[color:var(--charcoal)] text-[color:var(--ivory)] pl-5 pr-7 py-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 hover:bg-[color:var(--gold)]">
          <div className="h-9 w-9 rounded-full bg-[color:var(--gold)] group-hover:bg-[color:var(--charcoal)] flex items-center justify-center transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[color:var(--ivory)]"
            >
              <path
                d="M12 2 L4 8 L12 22 L20 8 Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M4 8 L20 8 M9 8 L12 22 L15 8 M12 2 L9 8 M12 2 L15 8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-left leading-tight">
            <div className="text-[0.66rem] font-medium tracking-[0.24em] uppercase text-[color:var(--gold)] group-hover:text-[color:var(--ivory)] transition-colors">
              {tr("cc_title")}
            </div>
            <div className="text-[0.72rem] tracking-[0.02em] text-[color:var(--ivory)]/80 group-hover:text-[color:var(--ivory)] mt-0.5 hidden sm:block">
              {tr("cc_sub")}
            </div>
          </div>
        </div>
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-[color:var(--charcoal)]/40 backdrop-blur-sm" />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[420px] bg-[color:var(--ivory)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-[color:var(--charcoal)] text-[color:var(--ivory)] px-7 py-7 flex items-start justify-between">
            <div>
              <div className="text-[0.66rem] font-medium tracking-[0.24em] uppercase text-[color:var(--gold)]">
                {tr("cc_title")}
              </div>
              <div className="mt-2 font-display text-[1.45rem] font-light leading-tight">
                {tr("cc_sub")}
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[color:var(--ivory)]/70 hover:text-[color:var(--ivory)] text-xl"
            >
              ×
            </button>
          </div>

          <div className="p-7 flex flex-col gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[58px] items-center justify-between gap-4 border border-[color:var(--border)] px-5 py-4 transition-colors hover:border-[color:var(--gold)]"
            >
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[color:var(--charcoal)]">
                {tr("cc_wa")}
              </span>
              <span className="font-display italic text-[color:var(--gold)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[58px] items-center justify-between gap-4 border border-[color:var(--border)] px-5 py-4 transition-colors hover:border-[color:var(--gold)]"
            >
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[color:var(--charcoal)]">
                {tr("cc_ig")}
              </span>
              <span className="font-display italic text-[color:var(--gold)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <button
              onClick={onInquiry}
              className="group flex min-h-[58px] items-center justify-between gap-4 bg-[color:var(--charcoal)] text-[color:var(--ivory)] px-5 py-4 transition-colors hover:bg-[color:var(--gold)]"
            >
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase">
                {tr("cc_form")}
              </span>
              <span className="font-display italic transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  const { tr } = useLang();
  return (
    <footer className="bg-[color:var(--ivory)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6">
            <OfficialLogo
              sizes="(max-width: 767px) 170px, 220px"
              className="w-[170px] md:w-[220px]"
            />
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-[color:var(--charcoal)]/70 font-light italic font-display">
              {tr("foot_tag")}
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3 text-[0.72rem] tracking-[0.3em] uppercase text-[color:var(--charcoal)]/75">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              Instagram
            </a>
            <a href="#consultation" className="hover:text-[color:var(--gold)] transition-colors">
              {tr("nav_book")}
            </a>
          </div>
          <div className="md:col-span-3 text-[0.65rem] tracking-[0.32em] uppercase text-[color:var(--taupe)] md:text-right">
            © {new Date().getFullYear()} Opal Stones
            <br />
            {tr("foot_rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
