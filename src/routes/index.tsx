import { createFileRoute } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
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
import introLandscapeMp4 from "@/assets/media/opal-intro-landscape.mp4";
import introLandscapeWebm from "@/assets/media/opal-intro-landscape.webm";
import introPortraitMp4 from "@/assets/media/opal-intro-portrait.mp4";
import introPortraitWebm from "@/assets/media/opal-intro-portrait.webm";
import introPosterLandscape from "@/assets/media/opal-intro-poster-landscape.jpg";
import introPosterPortrait from "@/assets/media/opal-intro-poster-portrait.jpg";
import filmAtelierHandsPoster from "@/assets/brand-films/opal-atelier-hands-poster.jpg";
import filmAtelierHands from "@/assets/brand-films/opal-atelier-hands.mp4";
import filmAtelierHandsWebm from "@/assets/brand-films/opal-atelier-hands.webm";
import filmBehindScenesPoster from "@/assets/brand-films/opal-behind-scenes-poster.jpg";
import filmBehindScenes from "@/assets/brand-films/opal-behind-scenes.mp4";
import filmBehindScenesWebm from "@/assets/brand-films/opal-behind-scenes.webm";
import filmClientStoryPoster from "@/assets/brand-films/opal-client-story-poster.jpg";
import filmClientStory from "@/assets/brand-films/opal-client-story.mp4";
import filmClientStoryWebm from "@/assets/brand-films/opal-client-story.webm";
import filmHeirloomPendantPoster from "@/assets/brand-films/opal-heirloom-pendant-poster.jpg";
import filmHeirloomPendant from "@/assets/brand-films/opal-heirloom-pendant.mp4";
import filmHeirloomPendantWebm from "@/assets/brand-films/opal-heirloom-pendant.webm";
import filmMaisonPendantPoster from "@/assets/brand-films/opal-maison-pendant-poster.jpg";
import filmMaisonPendant from "@/assets/brand-films/opal-maison-pendant.mp4";
import filmMaisonPendantWebm from "@/assets/brand-films/opal-maison-pendant.webm";
import filmNecklaceArchivePoster from "@/assets/brand-films/opal-necklace-archive-poster.jpg";
import filmNecklaceArchive from "@/assets/brand-films/opal-necklace-archive.mp4";
import filmNecklaceArchiveWebm from "@/assets/brand-films/opal-necklace-archive.webm";
import filmPortraitRingPoster from "@/assets/brand-films/opal-portrait-ring-poster.jpg";
import filmPortraitRing from "@/assets/brand-films/opal-portrait-ring.mp4";
import filmPortraitRingWebm from "@/assets/brand-films/opal-portrait-ring.webm";
import opalLogo384 from "@/assets/opal-logo-384.png";
import opalLogo768 from "@/assets/opal-logo-768.png";
import opalLogo from "@/assets/opal-logo.png";

const u = (a: string) => a;
const OFFICIAL_LOGO_ALT = "Opal Stones by Hanan Bugshan";

const HERO = j11;
const REDESIGN_IMG = j19;
const CONS_BG = j14;

const GALLERY = [j1, j3, j4, j6, j7, j9, j10, j12, j13, j15, j16, j18, j20, j21, j24, j25];

const STORY_IMAGES = [j2, j17, j23, j22];

const WHATSAPP_NUM = "966500000000";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUM}`;
const INSTAGRAM = "https://www.instagram.com/opal.stones?igsh=MWw0eWFsZG5xZWVybg==";

type TKey = keyof typeof TDICT;
type BrandFilm = { mp4: string; webm: string; poster: string };
type ViewportMode = "phone" | "tablet" | "desktop";

const ViewportContext = createContext<ViewportMode | null>(null);
const NON_PHONE: ViewportMode[] = ["tablet", "desktop"];

const FILMS = {
  portraitRing: {
    mp4: filmPortraitRing,
    webm: filmPortraitRingWebm,
    poster: filmPortraitRingPoster,
  },
  necklaceArchive: {
    mp4: filmNecklaceArchive,
    webm: filmNecklaceArchiveWebm,
    poster: filmNecklaceArchivePoster,
  },
  atelierHands: {
    mp4: filmAtelierHands,
    webm: filmAtelierHandsWebm,
    poster: filmAtelierHandsPoster,
  },
  clientStory: { mp4: filmClientStory, webm: filmClientStoryWebm, poster: filmClientStoryPoster },
  heirloomPendant: {
    mp4: filmHeirloomPendant,
    webm: filmHeirloomPendantWebm,
    poster: filmHeirloomPendantPoster,
  },
  maisonPendant: {
    mp4: filmMaisonPendant,
    webm: filmMaisonPendantWebm,
    poster: filmMaisonPendantPoster,
  },
  behindScenes: {
    mp4: filmBehindScenes,
    webm: filmBehindScenesWebm,
    poster: filmBehindScenesPoster,
  },
} satisfies Record<string, BrandFilm>;

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

function AmbientFilm({
  film,
  className = "",
  mediaClassName = "",
  overlay = "bg-black/18",
}: {
  film: BrandFilm;
  className?: string;
  mediaClassName?: string;
  overlay?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const start = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const playAttempt = video.play();
    if (playAttempt) playAttempt.catch(() => undefined);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          io.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "700px 0px 700px 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0,
      rootMargin: "12% 0px 12% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (loaded) videoRef.current?.load();
  }, [loaded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (active && loaded && !reduce) {
      start();
    } else {
      video.pause();
    }
  }, [active, loaded, start]);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden bg-[color:var(--charcoal)] ${className}`}
    >
      <img
        src={u(film.poster)}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover ${mediaClassName}`}
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${mediaClassName} ${active ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="metadata"
        poster={u(film.poster)}
        aria-hidden="true"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedMetadata={() => {
          if (active && loaded) start();
        }}
        onCanPlay={() => {
          if (active && loaded) start();
        }}
      >
        {loaded && (
          <>
            <source src={u(film.mp4)} type="video/mp4" />
            <source src={u(film.webm)} type="video/webm" />
          </>
        )}
      </video>
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}

function MotionFrame({
  film,
  label,
  className = "",
  mediaClassName = "",
  captionClassName = "",
}: {
  film: BrandFilm;
  label: string;
  className?: string;
  mediaClassName?: string;
  captionClassName?: string;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const start = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const playAttempt = video?.play();
    if (playAttempt) {
      playAttempt.then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      setPlaying(true);
    }
  }, []);

  const stop = useCallback(() => {
    const video = videoRef.current;
    setPlaying(false);
    if (video) video.pause();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          io.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "700px 0px 700px 0px",
      },
    );
    io.observe(frame);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0,
      rootMargin: "12% 0px 12% 0px",
    });
    io.observe(frame);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (loaded) videoRef.current?.load();
  }, [loaded]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (active && loaded && !reduce) start();
    else stop();
  }, [active, loaded, start, stop]);

  return (
    <div
      ref={frameRef}
      className={`group relative block overflow-hidden bg-[color:var(--charcoal)] text-left ${className}`}
      role="img"
      aria-label={label}
    >
      <img
        src={u(film.poster)}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] ${mediaClassName} ${playing ? "opacity-0 scale-[1.025]" : "opacity-100 scale-100 group-hover:scale-[1.035]"}`}
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="metadata"
        poster={u(film.poster)}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${mediaClassName} ${playing ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedMetadata={() => {
          if (active && loaded) start();
        }}
        onCanPlay={() => {
          if (active && loaded) start();
        }}
      >
        {loaded && (
          <>
            <source src={u(film.mp4)} type="video/mp4" />
            <source src={u(film.webm)} type="video/webm" />
          </>
        )}
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[color:var(--ivory)]/86 md:p-7 md:text-[0.62rem] ${captionClassName}`}
      >
        {label}
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
  const viewport = useViewportMode();

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
      <ViewportContext.Provider value={viewport}>
        <IntroScreen />
        <Nav onConcierge={() => setConcierge(true)} />
        {viewport === "phone" ? (
          <MobileMaisonJourney
            prefill={prefill}
            onChoose={(create) => openInquiry({ create })}
            onContinue={(whisper) => openInquiry({ whisper })}
            onBegin={() => openInquiry({ create: TDICT.com_redo[lang] })}
          />
        ) : viewport ? (
          <DesktopMaisonExperience
            prefill={prefill}
            onChoose={(create) => openInquiry({ create })}
            onContinue={(whisper) => openInquiry({ whisper })}
            onBegin={() => openInquiry({ create: TDICT.com_redo[lang] })}
          />
        ) : null}
        <Concierge
          open={concierge}
          setOpen={setConcierge}
          onInquiry={() => {
            setConcierge(false);
            openInquiry();
          }}
        />
      </ViewportContext.Provider>
    </div>
  );
}

function useViewportMode() {
  const [viewport, setViewport] = useState<ViewportMode | null>(null);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setViewport(width < 768 ? "phone" : width < 1024 ? "tablet" : "desktop");
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return viewport;
}

function ViewportOnly({
  match,
  className = "",
  children,
}: {
  match: ViewportMode | ViewportMode[];
  className?: string;
  children: ReactNode;
}) {
  const viewport = useContext(ViewportContext);
  if (!viewport) return null;
  const matches = Array.isArray(match) ? match.includes(viewport) : viewport === match;
  if (!matches) return null;
  return <div className={className}>{children}</div>;
}

function DesktopMaisonExperience({
  prefill,
  onChoose,
  onContinue,
  onBegin,
}: {
  prefill: { create?: string; whisper?: string };
  onChoose: (create: string) => void;
  onContinue: (whisper: string) => void;
  onBegin: () => void;
}) {
  return (
    <>
      <Hero />
      <MaisonPrelude />
      <Commission onChoose={onChoose} />
      <DesignYourPiece onContinue={onContinue} />
      <Process />
      <Signature />
      <Redesign onBegin={onBegin} />
      <Stories />
      <Founder />
      <Consultation prefill={prefill} />
      <Footer />
    </>
  );
}

const MOBILE_COPY = {
  en: {
    heroTitleA: "Jewellery, held close.",
    heroTitleB: "Made for one life.",
    heroBody: "Private pieces shaped around memory, proportion, and the woman who will wear them.",
    heroPrimary: "Request a Private Appointment",
    heroSecondary: "Begin with a Piece",
    preludeKicker: "The first pause",
    preludeTitle: "Before a sketch, there is a pause.",
    preludeBody:
      "We begin with the feeling of the piece: how it should sit, move, and stay in memory.",
    commissionKicker: "Private commission",
    commissionTitleA: "Choose the form.",
    commissionTitleB: "We will refine the language.",
    commissionBody:
      "Ring, necklace, suite, or heirloom: each path begins privately and becomes exact through the appointment.",
    commissionFilmTitle: "Proportion belongs to the hand.",
    commissionFilmBody:
      "The first fitting studies scale, gesture, skin, and the private rituals of wearing.",
    begin: "Begin this piece",
    directionKicker: "First direction",
    directionTitle: "Give the piece its atmosphere.",
    directionBody:
      "A milestone, a metal, a line, a stone. The choices stay simple; the result becomes personal.",
    selected: "Your first direction",
    awaiting: "Waiting for the first feeling",
    request: "Request the appointment",
    atelierKicker: "Atelier",
    atelierTitle: "The hand decides what the drawing cannot.",
    atelierBody:
      "Proportion is corrected slowly. A curve is softened. A setting is made quieter. The piece earns its final form at the bench.",
    archiveKicker: "Private archive",
    archiveTitle: "A private archive of gestures.",
    archiveBody:
      "Some pieces speak through scale. Others through restraint. The archive is read as moments, not products.",
    archiveQuote: "A jewel should feel discovered, then remembered.",
    redesignKicker: "Heirloom redesign",
    redesignTitleA: "Old meaning,",
    redesignTitleB: "new form.",
    redesignBody:
      "An inherited stone or forgotten setting can return with more ease, more relevance, and the same private gravity.",
    redesignCta: "Begin the redesign",
    worldKicker: "Private world",
    worldTitle: "The maison is intimate by design.",
    worldBody:
      "Appointments are quiet, decisions are considered, and every detail is edited until it belongs.",
    founderQuote: "The piece matters when it feels like it has always belonged to her.",
    consultKicker: "Private appointment",
    consultTitleA: "Begin",
    consultTitleB: "privately.",
    consultBody:
      "Share the occasion, the piece, or the heirloom. The first reply will shape the appointment.",
    footerLine: "Opal Stones by Hanan Bugshan. Bespoke jewellery, quietly held.",
  },
  ar: {
    heroTitleA: "مجوهرات تُحمل بالقرب.",
    heroTitleB: "وتُصاغ لحياة واحدة.",
    heroBody: "قطع خاصة تُبنى حول الذكرى والنِسبة والمرأة التي سترتديها.",
    heroPrimary: "اطلبي موعداً خاصاً",
    heroSecondary: "ابدئي بقطعة",
    preludeKicker: "الوقفة الأولى",
    preludeTitle: "قبل الرسم، هناك لحظة صمت.",
    preludeBody: "نبدأ بإحساس القطعة: كيف تستقر على الجسد، كيف تتحرك، وكيف تبقى في الذاكرة.",
    commissionKicker: "طلب خاص",
    commissionTitleA: "اختاري هيئة البداية.",
    commissionTitleB: "ونحن نُهذّب لغتها.",
    commissionBody:
      "خاتم، عقد، طقم، أو إرث عائلي. كل مسار يبدأ بخصوصية ثم يصبح أكثر دقة داخل الموعد.",
    commissionFilmTitle: "النِسبة تنتمي إلى اليد.",
    commissionFilmBody: "تدرس التجربة الأولى الحجم، والإيماءة، والبشرة، وطقوس الارتداء الخاصة.",
    begin: "ابدئي هذه القطعة",
    directionKicker: "الاتجاه الأول",
    directionTitle: "امنحي القطعة مزاجها.",
    directionBody: "المناسبة، المعدن، الخط، والحجر. اختيارات قليلة، لكن النتيجة شخصية تماماً.",
    selected: "اتجاهكِ الأول",
    awaiting: "بانتظار الإحساس الأول",
    request: "اطلبي الموعد",
    atelierKicker: "الأتيليه",
    atelierTitle: "اليد تحسم ما لا يقوله الرسم.",
    atelierBody:
      "تُصحّح النِسب ببطء، يهدأ المنحنى، ويصبح الترصيع أكثر رهافة حتى تصل القطعة إلى صورتها.",
    archiveKicker: "أرشيف خاص",
    archiveTitle: "أرشيف خاص من الإشارات.",
    archiveBody: "بعض القطع تتحدث بالحجم، وبعضها بالهدوء. نقرأ الإبداعات كلحظات لا كمنتجات.",
    archiveQuote: "يجب أن تبدو الجوهرة كأنها اكتُشفت، ثم بقيت.",
    redesignKicker: "إعادة صياغة الإرث",
    redesignTitleA: "معنى قديم،",
    redesignTitleB: "بصياغة جديدة.",
    redesignBody:
      "حجر موروث أو إعداد منسي يمكن أن يعود بخفة أكبر وحضور أهدأ، من دون أن يفقد ذاكرته.",
    redesignCta: "ابدئي الصياغة الجديدة",
    worldKicker: "عالم خاص",
    worldTitle: "المايسون حميمي بطبيعته.",
    worldBody: "المواعيد هادئة، والقرارات متأنية، وكل تفصيل يُحرّر حتى يصبح في مكانه.",
    founderQuote: "تكتمل القطعة حين تبدو كأنها كانت تنتمي إليها دائماً.",
    consultKicker: "موعد خاص",
    consultTitleA: "ابدئي",
    consultTitleB: "بخصوصية.",
    consultBody: "ارسلي المناسبة، القطعة، أو الإرث. الرد الأول سيحدد شكل الموعد.",
    footerLine: "أوبال ستونز من حنان بقشان. مجوهرات خاصة تُحمل بهدوء.",
  },
} satisfies Record<Lang, Record<string, string>>;

function MobileMaisonJourney({
  prefill,
  onChoose,
  onContinue,
  onBegin,
}: {
  prefill: { create?: string; whisper?: string };
  onChoose: (create: string) => void;
  onContinue: (whisper: string) => void;
  onBegin: () => void;
}) {
  const { lang, tr } = useLang();
  const copy = MOBILE_COPY[lang];
  const [direction, setDirection] = useState<Record<StepKey, string>>({
    occasion: "",
    metal: "",
    style: "",
    stones: "",
  });

  const directionSummary = Object.values(direction).filter(Boolean).join(" · ");

  return (
    <main data-mobile-maison="true" className="bg-[color:var(--ivory)]">
      <MobileHero copy={copy} />
      <MobilePrelude copy={copy} />
      <MobileCommission copy={copy} tr={tr} onChoose={onChoose} />
      <MobileDirection
        copy={copy}
        tr={tr}
        lang={lang}
        direction={direction}
        setDirection={setDirection}
        onContinue={() => onContinue(directionSummary)}
      />
      <MobileAtelier copy={copy} />
      <MobileArchive copy={copy} />
      <MobileRedesign copy={copy} onBegin={onBegin} />
      <MobilePrivateWorld copy={copy} />
      <MobileConsultation copy={copy} prefill={prefill} />
      <MobileFooter copy={copy} />
    </main>
  );
}

function MobileHero({ copy }: { copy: Record<string, string> }) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
    >
      <div className="absolute inset-0">
        <img
          src={u(HERO)}
          alt=""
          loading="eager"
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ objectPosition: "center 34%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.48),rgba(0,0,0,.16)_38%,rgba(0,0,0,.82))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.36),transparent_72%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-[calc(env(safe-area-inset-bottom)+42px)] pt-[calc(env(safe-area-inset-top)+104px)]">
        <Reveal>
          <h1
            data-mobile-hero-heading="true"
            className="max-w-[10ch] font-display text-[clamp(3.1rem,14vw,4.35rem)] font-light leading-[1.02] text-[color:var(--ivory)]"
          >
            <span className="block">{copy.heroTitleA}</span>
            <span className="mt-1 block italic text-[color:var(--ivory)]/88">
              {copy.heroTitleB}
            </span>
          </h1>
          <p className="mt-7 max-w-[29ch] text-[1.08rem] font-light leading-[1.9] text-[color:var(--ivory)]/86">
            {copy.heroBody}
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="#consultation"
              className="inline-flex min-h-[60px] w-full items-center justify-between bg-[color:var(--ivory)] px-6 py-4 text-[0.74rem] font-medium uppercase tracking-[0.13em] text-[color:var(--charcoal)]"
            >
              {copy.heroPrimary}
              <span className="h-px w-10 bg-current" />
            </a>
            <a
              href="#commission"
              className="inline-flex min-h-[60px] w-full items-center justify-between border border-[color:var(--ivory)]/42 px-6 py-4 text-[0.74rem] font-medium uppercase tracking-[0.13em] text-[color:var(--ivory)]"
            >
              {copy.heroSecondary}
              <span className="h-px w-10 bg-current" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MobilePrelude({ copy }: { copy: Record<string, string> }) {
  return (
    <section className="overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <div className="relative">
        <AmbientFilm
          film={FILMS.maisonPendant}
          className="h-[92svh] min-h-[680px]"
          mediaClassName="object-[center_34%]"
          overlay="bg-[linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.08)_36%,rgba(0,0,0,.76))]"
        />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12">
          <Reveal>
            <MobileLabel light>{copy.preludeKicker}</MobileLabel>
            <h2 className="mt-5 max-w-[11ch] font-display text-[3.35rem] font-light leading-[1.03]">
              {copy.preludeTitle}
            </h2>
          </Reveal>
        </div>
      </div>
      <Reveal>
        <div className="px-6 py-14">
          <p className="max-w-[31ch] text-[1.12rem] font-light leading-[2.05] text-[color:var(--ivory)]/82">
            {copy.preludeBody}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function MobileCommission({
  copy,
  tr,
  onChoose,
}: {
  copy: Record<string, string>;
  tr: (key: TKey) => string;
  onChoose: (create: string) => void;
}) {
  const cards: { title: TKey; body: TKey; img: string; n: string; pos: string }[] = [
    { title: "com_ring", body: "com_ring_d", img: j15, n: "01", pos: "object-[center_38%]" },
    { title: "com_neck", body: "com_neck_d", img: j11, n: "02", pos: "object-[center_34%]" },
    { title: "com_ear", body: "com_ear_d", img: j13, n: "03", pos: "object-[center_34%]" },
    { title: "com_brace", body: "com_brace_d", img: j22, n: "04", pos: "object-[center_46%]" },
    { title: "com_bridal", body: "com_bridal_d", img: j21, n: "05", pos: "object-[center_42%]" },
    { title: "com_redo", body: "com_redo_d", img: j6, n: "06", pos: "object-[center_48%]" },
    { title: "com_unique", body: "com_unique_d", img: j19, n: "07", pos: "object-[center_50%]" },
  ];

  return (
    <section id="commission" className="overflow-hidden bg-[color:var(--ivory)]">
      <div className="px-6 py-24">
        <Reveal>
          <MobileLabel>{copy.commissionKicker}</MobileLabel>
          <h2 className="mt-7 font-display text-[3.3rem] font-light leading-[1.03] text-[color:var(--charcoal)]">
            <span className="block">{copy.commissionTitleA}</span>
            <span className="block italic text-[color:var(--taupe)]">{copy.commissionTitleB}</span>
          </h2>
          <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/74">
            {copy.commissionBody}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="-mx-6 mt-14">
            <MotionFrame
              film={FILMS.portraitRing}
              label={copy.commissionFilmTitle}
              className="h-[72svh] min-h-[540px] w-full"
              mediaClassName="object-[center_40%]"
            />
          </div>
          <div className="mt-8 border-y border-[color:var(--border)] py-8">
            <h3 className="font-display text-[2.25rem] font-light leading-[1.25] text-[color:var(--charcoal)]">
              {copy.commissionFilmTitle}
            </h3>
            <p className="mt-5 text-[1.02rem] font-light leading-[1.95] text-[color:var(--charcoal)]/72">
              {copy.commissionFilmBody}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12">
          {cards.map((card, index) => {
            const frame = index % 2 === 0 ? "mr-auto" : "ml-auto";
            return (
              <Reveal key={card.title} delay={(index % 3) * 80}>
                <button
                  type="button"
                  onClick={() => onChoose(tr(card.title))}
                  className={`group block w-[calc(100vw-4rem)] max-w-[352px] text-left ${frame}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--charcoal)]">
                    <img
                      src={u(card.img)}
                      alt=""
                      loading={index < 2 ? "eager" : "lazy"}
                      className={`h-full w-full object-cover brightness-[0.9] transition-transform duration-[1400ms] group-active:scale-[1.025] ${card.pos}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.12)_42%,rgba(0,0,0,.76))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-[color:var(--ivory)]">
                      <div className="font-display text-[4.4rem] font-light italic leading-none text-[color:var(--ivory)]/42">
                        {card.n}
                      </div>
                      <h3 className="mt-5 font-display text-[2.6rem] font-light leading-[1.03]">
                        {tr(card.title)}
                      </h3>
                      <p className="mt-4 max-w-[27ch] text-[1rem] font-light leading-[1.85] text-[color:var(--ivory)]/82">
                        {tr(card.body)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex min-h-[56px] items-center justify-between border-b border-[color:var(--border)] pb-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--charcoal)]">
                    {copy.begin}
                    <span className="h-px w-12 bg-[color:var(--gold)]" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MobileDirection({
  copy,
  tr,
  lang,
  direction,
  setDirection,
  onContinue,
}: {
  copy: Record<string, string>;
  tr: (key: TKey) => string;
  lang: Lang;
  direction: Record<StepKey, string>;
  setDirection: (next: Record<StepKey, string>) => void;
  onContinue: () => void;
}) {
  const chapters: {
    key: StepKey;
    title: TKey;
    img: string;
    options: TKey[];
    pos: string;
  }[] = [
    {
      key: "occasion",
      title: "tab_occasion",
      img: j23,
      options: ["oc_eng", "oc_wed", "oc_ann", "oc_gift", "oc_mile"],
      pos: "object-[center_40%]",
    },
    {
      key: "metal",
      title: "tab_metal",
      img: j17,
      options: ["mt_yellow", "mt_white", "mt_rose", "mt_plat"],
      pos: "object-[center_44%]",
    },
    {
      key: "style",
      title: "tab_style",
      img: j12,
      options: ["st_classic", "st_modern", "st_statement", "st_minimal"],
      pos: "object-[center_42%]",
    },
    {
      key: "stones",
      title: "tab_stones",
      img: j3,
      options: ["gs_dia", "gs_em", "gs_sap", "gs_ruby", "gs_custom"],
      pos: "object-[center_38%]",
    },
  ];
  const summary = Object.values(direction).filter(Boolean).join(" · ") || copy.awaiting;

  return (
    <section id="design" className="overflow-hidden bg-[color:var(--pearl)]">
      <div className="px-6 py-24">
        <Reveal>
          <MobileLabel>{copy.directionKicker}</MobileLabel>
          <h2 className="mt-7 font-display text-[3.25rem] font-light leading-[1.05] text-[color:var(--charcoal)]">
            {copy.directionTitle}
          </h2>
          <p className="mt-8 max-w-[31ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/74">
            {copy.directionBody}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.key} delay={(index % 2) * 90}>
              <article className="overflow-hidden bg-[color:var(--ivory)] shadow-[0_22px_44px_-34px_rgba(0,0,0,0.24)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={u(chapter.img)}
                    alt=""
                    loading="lazy"
                    className={`h-full w-full object-cover brightness-[0.92] ${chapter.pos}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.58))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-[color:var(--ivory)]">
                    <div className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[color:var(--champagne)]">
                      0{index + 1}
                    </div>
                    <h3 className="mt-3 font-display text-[2.6rem] font-light leading-[1.04]">
                      {tr(chapter.title)}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 p-5">
                  {chapter.options.map((option) => {
                    const label = TDICT[option][lang];
                    const active = direction[chapter.key] === label;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setDirection({ ...direction, [chapter.key]: label })}
                        className={`min-h-[46px] border px-4 py-3 text-[0.78rem] font-medium uppercase tracking-[0.1em] transition-colors ${
                          active
                            ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                            : "border-[color:var(--border)] text-[color:var(--charcoal)]/74"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 border-y border-[color:var(--border)] py-8">
            <div className="text-[0.74rem] font-medium uppercase tracking-[0.14em] text-[color:var(--taupe)]">
              {copy.selected}
            </div>
            <div className="mt-4 min-h-[4rem] font-display text-[2rem] font-light italic leading-[1.22] text-[color:var(--charcoal)]">
              {summary}
            </div>
          </div>
          <div className="mt-8">
            <MobileAction onClick={onContinue}>{copy.request}</MobileAction>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MobileAtelier({ copy }: { copy: Record<string, string> }) {
  const steps = [
    {
      n: "01",
      title: "Private Appointment",
      body: "A quiet reading of the woman, the occasion, and the meaning that should remain private.",
    },
    {
      n: "02",
      title: "Proportion",
      body: "Stones, references, and scale are reduced until one clear direction is left.",
    },
    {
      n: "03",
      title: "Making",
      body: "Gold, setting, and finish are handled by hand, slowly enough for the line to become certain.",
    },
    {
      n: "04",
      title: "Presentation",
      body: "The final piece is revealed privately, ready to be worn and carried forward.",
    },
  ];
  const arSteps = [
    {
      n: "01",
      title: "موعد خاص",
      body: "قراءة هادئة للمرأة، وللمناسبة، وللمعنى الذي يجب أن يبقى خاصاً.",
    },
    { n: "02", title: "النِسبة", body: "تُختصر الأحجار والمراجع والحجم حتى يبقى اتجاه واحد واضح." },
    {
      n: "03",
      title: "الصياغة",
      body: "يُعامل الذهب والترصيع والتشطيب باليد، وببطء يكفي ليصبح الخط مؤكداً.",
    },
    {
      n: "04",
      title: "التقديم",
      body: "تُكشف القطعة الأخيرة بخصوصية، جاهزة لأن تُرتدى وتنتقل معكِ.",
    },
  ];
  const { lang } = useLang();
  const atelierSteps = lang === "ar" ? arSteps : steps;

  return (
    <section
      id="atelier"
      className="overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
    >
      <div className="px-6 py-24">
        <Reveal>
          <MobileLabel light>{copy.atelierKicker}</MobileLabel>
          <h2 className="mt-7 max-w-[11ch] font-display text-[3.3rem] font-light leading-[1.04]">
            {copy.atelierTitle}
          </h2>
          <p className="mt-8 max-w-[31ch] text-[1.08rem] font-light leading-[2.02] text-[color:var(--ivory)]/76">
            {copy.atelierBody}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="-mx-6 mt-14">
            <AmbientFilm
              film={FILMS.atelierHands}
              className="h-[82svh] min-h-[610px]"
              mediaClassName="object-[center_center]"
              overlay="bg-[linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.16)_46%,rgba(0,0,0,.72))]"
            />
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-9">
          {atelierSteps.map((step, index) => (
            <Reveal key={step.n} delay={(index % 3) * 80}>
              <article className="border-t border-[color:var(--ivory)]/15 pt-8">
                <div className="font-display text-[5.2rem] font-light italic leading-none text-[color:var(--gold)]/72">
                  {step.n}
                </div>
                <h3 className="mt-5 font-display text-[2.45rem] font-light leading-[1.05] text-[color:var(--ivory)]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-[31ch] text-[1.04rem] font-light leading-[1.95] text-[color:var(--ivory)]/72">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileArchive({ copy }: { copy: Record<string, string> }) {
  const curated = [
    { img: j3, frame: "-mx-6 aspect-[4/5]", pos: "object-[center_38%]" },
    { img: j21, frame: "ms-10 aspect-[3/4]", pos: "object-[center_42%]" },
    { img: j6, frame: "me-8 aspect-[16/11]", pos: "object-[center_44%]" },
    { img: j12, frame: "-mx-6 aspect-[5/4]", pos: "object-[center_40%]" },
    { img: j24, frame: "ms-12 aspect-[3/4]", pos: "object-[center_42%]" },
    { img: j25, frame: "me-8 aspect-[4/5]", pos: "object-[center_45%]" },
  ];

  return (
    <section id="creations" className="overflow-hidden bg-[color:var(--ivory)]">
      <div className="px-6 py-24">
        <Reveal>
          <MobileLabel>{copy.archiveKicker}</MobileLabel>
          <h2 className="mt-7 font-display text-[3.3rem] font-light leading-[1.04] text-[color:var(--charcoal)]">
            {copy.archiveTitle}
          </h2>
          <p className="mt-8 max-w-[31ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/74">
            {copy.archiveBody}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="-mx-6 mt-14">
            <MotionFrame
              film={FILMS.necklaceArchive}
              label={copy.archiveTitle}
              className="h-[82svh] min-h-[610px] w-full"
              mediaClassName="object-[center_33%]"
            />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="my-16 border-y border-[color:var(--border)] py-9">
            <p className="font-display text-[2.25rem] font-light italic leading-[1.28] text-[color:var(--taupe)]">
              {copy.archiveQuote}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          {curated.map((item, index) => (
            <Reveal key={item.img} delay={(index % 3) * 80}>
              <div className={`${item.frame} overflow-hidden bg-[color:var(--pearl)]`}>
                <img
                  src={u(item.img)}
                  alt=""
                  loading="lazy"
                  className={`h-full w-full object-cover brightness-[0.96] ${item.pos}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileRedesign({ copy, onBegin }: { copy: Record<string, string>; onBegin: () => void }) {
  const { lang } = useLang();
  const steps =
    lang === "ar"
      ? ["نقرأ الحجر كما هو.", "نرسم حجمه الجديد حولكِ.", "نحفظ الذاكرة ونغيّر طريقة حضورها."]
      : [
          "We read the stone as it is.",
          "We redraw its scale around you.",
          "We keep the memory and change how it appears.",
        ];

  return (
    <section
      id="redesign"
      className="overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
    >
      <div className="px-6 py-24">
        <Reveal>
          <MobileLabel light>{copy.redesignKicker}</MobileLabel>
          <h2 className="mt-7 font-display text-[3.35rem] font-light leading-[1.04]">
            <span className="block">{copy.redesignTitleA}</span>
            <span className="block italic text-[color:var(--gold)]">{copy.redesignTitleB}</span>
          </h2>
          <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2.05] text-[color:var(--ivory)]/78">
            {copy.redesignBody}
          </p>
          <div className="mt-10">
            <MobileAction onClick={onBegin} dark>
              {copy.redesignCta}
            </MobileAction>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="-mx-6 mt-16 aspect-[4/5] overflow-hidden">
            <img
              src={u(REDESIGN_IMG)}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-[center_46%]"
            />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10">
            <MotionFrame
              film={FILMS.heirloomPendant}
              label={copy.redesignKicker}
              className="aspect-[4/5] w-full"
              mediaClassName="object-[center_42%]"
            />
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-7 border-y border-[color:var(--ivory)]/14 py-8">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 80}>
              <div className="grid grid-cols-[3.4rem_1fr] gap-5">
                <div className="font-display text-[2.5rem] font-light italic leading-none text-[color:var(--gold)]/78">
                  0{index + 1}
                </div>
                <p className="text-[1.05rem] font-light leading-[1.9] text-[color:var(--ivory)]/74">
                  {step}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobilePrivateWorld({ copy }: { copy: Record<string, string> }) {
  return (
    <section className="overflow-hidden bg-[color:var(--pearl)]">
      <div className="px-6 py-24">
        <Reveal>
          <MobileLabel>{copy.worldKicker}</MobileLabel>
          <h2 className="mt-7 font-display text-[3.25rem] font-light leading-[1.06] text-[color:var(--charcoal)]">
            {copy.worldTitle}
          </h2>
          <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2.02] text-[color:var(--charcoal)]/76">
            {copy.worldBody}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="-mx-6 mt-14">
            <MotionFrame
              film={FILMS.clientStory}
              label={copy.worldKicker}
              className="h-[80svh] min-h-[590px] w-full"
              mediaClassName="object-[center_36%]"
            />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="my-16 aspect-[4/5] overflow-hidden bg-[color:var(--ivory)]">
            <img
              src={u(j22)}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-[center_42%]"
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <MotionFrame
            film={FILMS.behindScenes}
            label="Hanan Bugshan"
            className="aspect-[4/5] w-full"
            mediaClassName="object-[center_38%]"
          />
          <div className="mt-10 border-y border-[color:var(--border)] py-8">
            <p className="font-display text-[2.15rem] font-light italic leading-[1.3] text-[color:var(--taupe)]">
              {copy.founderQuote}
            </p>
            <div className="mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[color:var(--taupe)]">
              Hanan Bugshan
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MobileConsultation({
  copy,
  prefill,
}: {
  copy: Record<string, string>;
  prefill: { create?: string; whisper?: string };
}) {
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
      `${copy.consultTitleA} ${copy.consultTitleB}`,
      "",
      `${tr("f_name")}: ${form.name}`,
      `${tr("f_wa")}: ${form.wa}`,
      `${tr("f_create")}: ${form.create}`,
      `${tr("f_idea")}: ${form.idea}`,
      `${tr("f_budget")}: ${form.budget}`,
      `${tr("f_when")}: ${form.when}`,
    ];
    window.open(`${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
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
      className="relative overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
    >
      <div className="absolute inset-0 opacity-24">
        <img src={u(CONS_BG)} alt="" className="h-full w-full object-cover object-[center_44%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/82 via-[color:var(--charcoal)]/92 to-[color:var(--charcoal)]" />
      </div>

      <div className="relative px-6 py-24">
        <Reveal>
          <MobileLabel light>{copy.consultKicker}</MobileLabel>
          <h2 className="mt-7 font-display text-[3.35rem] font-light leading-[1.04]">
            <span className="block">{copy.consultTitleA}</span>
            <span className="block italic text-[color:var(--gold)]">{copy.consultTitleB}</span>
          </h2>
          <p className="mt-8 max-w-[31ch] text-[1.08rem] font-light leading-[2.02] text-[color:var(--ivory)]/78">
            {copy.consultBody}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[58px] items-center justify-between border border-[color:var(--ivory)]/28 px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]"
            >
              {tr("cc_wa")}
              <span className="font-display text-[1.35rem] italic text-[color:var(--gold)]">→</span>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[58px] items-center justify-between border border-[color:var(--ivory)]/28 px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]"
            >
              {tr("cc_ig")}
              <span className="font-display text-[1.35rem] italic text-[color:var(--gold)]">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <form onSubmit={onSubmit} className="mt-14 flex flex-col gap-8">
            <label className="block">
              <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                {tr("f_name")}
              </div>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={mobileInputCls}
              />
            </label>
            <label className="block">
              <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                {tr("f_wa")}
              </div>
              <input
                required
                value={form.wa}
                onChange={(e) => setForm({ ...form, wa: e.target.value })}
                className={mobileInputCls}
              />
            </label>

            <div>
              <div className="mb-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                {tr("f_create")}
              </div>
              <div className="flex flex-col gap-3">
                {createOptions.map((k) => {
                  const label = TDICT[k][lang];
                  const active = form.create === label;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setForm({ ...form, create: label })}
                      className={`min-h-[56px] border px-5 py-4 text-left font-display text-[1.55rem] leading-tight transition-colors ${
                        active
                          ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--gold)]"
                          : "border-[color:var(--ivory)]/20 text-[color:var(--ivory)]/82"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="block">
              <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                {tr("f_idea")}
              </div>
              <textarea
                rows={5}
                value={form.idea}
                onChange={(e) => setForm({ ...form, idea: e.target.value })}
                className={`${mobileInputCls} resize-none`}
              />
            </label>

            <label className="block">
              <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                {tr("f_budget")}
              </div>
              <input
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder={tr("f_budget_ph")}
                className={mobileInputCls}
              />
            </label>
            <label className="block">
              <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                {tr("f_when")}
              </div>
              <input
                value={form.when}
                onChange={(e) => setForm({ ...form, when: e.target.value })}
                placeholder={tr("f_when_ph")}
                className={mobileInputCls}
              />
            </label>

            <button
              type="submit"
              className="mt-4 inline-flex min-h-[62px] items-center justify-between bg-[color:var(--ivory)] px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--charcoal)]"
            >
              {sent ? "✓" : tr("f_send")}
              <span className="h-px w-12 bg-current" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function MobileFooter({ copy }: { copy: Record<string, string> }) {
  const { lang } = useLang();
  const links =
    lang === "ar"
      ? [
          ["#commission", "الطلب الخاص"],
          ["#atelier", "الأتيليه"],
          ["#creations", "الأرشيف"],
          ["#consultation", "موعد خاص"],
        ]
      : [
          ["#commission", "Commission"],
          ["#atelier", "Atelier"],
          ["#creations", "Archive"],
          ["#consultation", "Private appointment"],
        ];

  return (
    <footer className="bg-[color:var(--ivory)] px-6 pb-[calc(env(safe-area-inset-bottom)+3rem)] pt-16 text-[color:var(--charcoal)]">
      <Reveal>
        <OfficialLogo className="w-[152px]" sizes="152px" />
        <p className="mt-8 max-w-[26ch] text-[1.05rem] font-light leading-[1.9] text-[color:var(--charcoal)]/70">
          {copy.footerLine}
        </p>
        <div className="mt-10 flex flex-col gap-4 border-y border-[color:var(--border)] py-8 text-[0.76rem] font-medium uppercase tracking-[0.14em]">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </footer>
  );
}

function MaisonPrelude() {
  const { tr } = useLang();
  return (
    <section className="relative overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <ViewportOnly match="phone">
        <div className="relative overflow-hidden">
          <AmbientFilm
            film={FILMS.maisonPendant}
            className="h-[92svh] min-h-[680px]"
            mediaClassName="object-[center_34%]"
            overlay="bg-[linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.1)_34%,rgba(0,0,0,.76))]"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-12">
            <Reveal>
              <MobileLabel light>{tr("film_prelude_eyebrow")}</MobileLabel>
              <h2 className="mt-5 max-w-[10ch] font-display text-[3.35rem] font-light leading-[1.02]">
                {tr("film_prelude_title")}
              </h2>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="px-6 py-14">
            <p className="max-w-[31ch] text-[1.12rem] font-light leading-[2.05] text-[color:var(--ivory)]/82">
              {tr("film_prelude_body")}
            </p>
          </div>
        </Reveal>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE}>
        <AmbientFilm
          film={FILMS.maisonPendant}
          className="h-[78svh] min-h-[540px] md:h-[86vh]"
          mediaClassName="object-[center_38%]"
          overlay="bg-[linear-gradient(180deg,rgba(0,0,0,.38),rgba(0,0,0,.18)_38%,rgba(0,0,0,.72))]"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-8 px-6 pb-16 md:grid-cols-12 md:px-12 md:pb-24">
            <Reveal className="md:col-span-7">
              <div className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--champagne)]/88">
                {tr("film_prelude_eyebrow")}
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,4.8vw,4.8rem)] font-light leading-[1.02] [text-wrap:balance]">
                {tr("film_prelude_title")}
              </h2>
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9 md:self-end" delay={120}>
              <p className="max-w-md text-[0.98rem] font-light leading-[1.9] text-[color:var(--ivory)]/82 [text-wrap:pretty]">
                {tr("film_prelude_body")}
              </p>
            </Reveal>
          </div>
        </div>
      </ViewportOnly>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

function IntroScreen() {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const finishedRef = useRef(false);
  const retryRef = useRef(false);
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const [manualEntry, setManualEntry] = useState(false);
  const [portraitIntro, setPortraitIntro] = useState(false);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 760);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setCanSkip(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(orientation: portrait)");
    const update = () => setPortraitIntro(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!visible || leaving) return;

    const html = document.documentElement;
    const body = document.body;
    const previous = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyTouchAction: body.style.touchAction,
    };

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    body.style.touchAction = "none";

    return () => {
      html.style.overflow = previous.htmlOverflow;
      html.style.overscrollBehavior = previous.htmlOverscroll;
      body.style.overflow = previous.bodyOverflow;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      body.style.touchAction = previous.bodyTouchAction;
    };
  }, [visible, leaving]);

  const requestPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || finishedRef.current) return;
    video.muted = true;
    video.playsInline = true;
    const playAttempt = video.play();
    if (!playAttempt) return;
    playAttempt.catch(() => {
      if (!retryRef.current) {
        retryRef.current = true;
        window.setTimeout(() => requestPlayback(), 350);
        return;
      }
      setManualEntry(true);
      setCanSkip(true);
    });
  }, []);

  useEffect(() => {
    const firstAttempt = window.setTimeout(requestPlayback, 80);
    const playbackGuard = window.setTimeout(() => {
      const video = videoRef.current;
      if (!video) {
        setManualEntry(true);
        setCanSkip(true);
        return;
      }
      if ((video.paused || video.currentTime < 0.15) && video.readyState < 3) {
        setManualEntry(true);
        setCanSkip(true);
      }
    }, 4200);

    return () => {
      window.clearTimeout(firstAttempt);
      window.clearTimeout(playbackGuard);
    };
  }, [finishIntro, requestPlayback]);

  if (!visible) return null;

  return (
    <div
      data-intro-screen="true"
      className={`fixed inset-0 z-[80] h-[100svh] w-full overflow-hidden bg-[color:var(--charcoal)] transition-opacity duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={leaving}
    >
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(orientation: portrait)" srcSet={u(introPosterPortrait)} />
        <img
          src={u(introPosterLandscape)}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </picture>
      <video
        ref={videoRef}
        data-intro-video="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center center" }}
        autoPlay
        muted
        playsInline
        controls={false}
        preload="auto"
        poster={u(portraitIntro ? introPosterPortrait : introPosterLandscape)}
        aria-label="Opal Stones intro film"
        disablePictureInPicture
        disableRemotePlayback
        onPlay={() => setManualEntry(false)}
        onTimeUpdate={(event) => {
          if (event.currentTarget.currentTime > 0.2) setManualEntry(false);
        }}
        onEnded={finishIntro}
        onError={() => {
          setManualEntry(true);
          setCanSkip(true);
        }}
        onLoadedMetadata={requestPlayback}
        onLoadedData={(event) => {
          const playAttempt = event.currentTarget.play();
          if (playAttempt) playAttempt.catch(requestPlayback);
        }}
        onCanPlay={requestPlayback}
      >
        <source media="(orientation: portrait)" src={u(introPortraitMp4)} type="video/mp4" />
        <source media="(orientation: portrait)" src={u(introPortraitWebm)} type="video/webm" />
        <source src={u(introLandscapeMp4)} type="video/mp4" />
        <source src={u(introLandscapeWebm)} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
      {manualEntry && (
        <div className="absolute inset-x-6 bottom-[calc(4.8rem+env(safe-area-inset-bottom))] mx-auto max-w-[25rem] text-center text-[color:var(--ivory)]">
          <div
            className={`text-[0.72rem] font-medium ${
              lang === "ar"
                ? "font-arabic !tracking-[0px]"
                : "uppercase tracking-[0.16em] md:tracking-[0.22em]"
            }`}
          >
            {lang === "ar" ? "الفيلم جاهز للعرض" : "The maison is ready"}
          </div>
        </div>
      )}
      <button
        type="button"
        data-intro-skip="true"
        onClick={finishIntro}
        className={`absolute bottom-[calc(1rem+env(safe-area-inset-bottom))] end-4 flex min-h-11 items-center justify-center border border-[color:var(--ivory)]/38 bg-black/24 px-4 py-2 text-[0.58rem] font-medium text-[color:var(--ivory)] backdrop-blur-sm transition-all duration-500 hover:border-[color:var(--ivory)] hover:bg-[color:var(--ivory)] hover:text-[color:var(--charcoal)] md:bottom-8 md:end-8 md:px-5 md:py-3 md:text-[0.68rem] ${
          lang === "ar"
            ? "font-arabic !tracking-[0px]"
            : "uppercase tracking-[0.16em] md:tracking-[0.22em]"
        } ${canSkip ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
      >
        {manualEntry
          ? lang === "ar"
            ? "دخول"
            : "Enter"
          : lang === "ar"
            ? "تخطي المقدمة"
            : "Skip intro"}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav({ onConcierge }: { onConcierge: () => void }) {
  const { lang, setLang, tr } = useLang();
  const lastY = useRef(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hideMobileHeader, setHideMobileHeader] = useState(false);

  useEffect(() => {
    const f = () => {
      const y = window.scrollY;
      const isPhone = window.matchMedia("(max-width: 767px)").matches;
      setScrolled(y > 40);
      if (isPhone && !open) {
        const goingDown = y > lastY.current + 8;
        const goingUp = y < lastY.current - 8;
        if (goingDown && y > 140) setHideMobileHeader(true);
        if (goingUp || y < 80) setHideMobileHeader(false);
      } else {
        setHideMobileHeader(false);
      }
      lastY.current = y;
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !window.matchMedia("(max-width: 767px)").matches) return;
    const html = document.documentElement;
    const body = document.body;
    const previous = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyTouchAction: body.style.touchAction,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    return () => {
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
      body.style.touchAction = previous.bodyTouchAction;
    };
  }, [open]);

  const items: { k: TKey; href: string }[] = [
    { k: "nav_commission", href: "#commission" },
    { k: "nav_design", href: "#design" },
    { k: "nav_atelier", href: "#atelier" },
    { k: "nav_creations", href: "#creations" },
    { k: "nav_collections", href: "/collections" },
    { k: "nav_redesign", href: "#redesign" },
  ];
  const lightNav = scrolled || open;

  return (
    <>
      <ViewportOnly match="phone">
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
            lightNav
              ? "border-b border-[color:var(--border)]/70 bg-[color:var(--ivory)]/96 text-[color:var(--charcoal)] backdrop-blur-md"
              : "border-b border-[color:var(--ivory)]/10 bg-[color:var(--charcoal)]/62 text-[color:var(--ivory)] backdrop-blur-md"
          } ${hideMobileHeader ? "-translate-y-full" : "translate-y-0"}`}
        >
          <div className="pt-[env(safe-area-inset-top)]">
            <div className="flex h-[72px] items-center justify-between px-5">
              <a href="#top" aria-label={OFFICIAL_LOGO_ALT} className="block shrink-0">
                <OfficialLogo
                  loading="eager"
                  sizes="128px"
                  className={`w-[128px] transition-opacity duration-500 ${
                    lightNav ? "opacity-100" : "opacity-[0.97]"
                  }`}
                />
              </a>

              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-11 items-center border px-2 text-[0.66rem] font-medium uppercase ${
                    lightNav
                      ? "border-[color:var(--charcoal)]/16"
                      : "border-[color:var(--ivory)]/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`flex h-11 min-w-11 items-center justify-center px-0 tracking-[0.16em] transition-opacity ${lang === "en" ? "opacity-100" : "opacity-42"}`}
                  >
                    EN
                  </button>
                  <span className="px-0.5 opacity-28">/</span>
                  <button
                    type="button"
                    lang="ar"
                    dir="rtl"
                    onClick={() => setLang("ar")}
                    className={`flex h-11 min-w-11 items-center justify-center px-0 font-arabic !tracking-[0px] transition-opacity ${lang === "ar" ? "opacity-100" : "opacity-42"}`}
                  >
                    ع
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Menu"
                  className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] border transition-colors ${
                    lightNav
                      ? "border-[color:var(--charcoal)]/18"
                      : "border-[color:var(--ivory)]/24"
                  }`}
                >
                  <span
                    className={`block h-px w-5 transition-transform ${open ? "translate-y-[6px] rotate-45 bg-[color:var(--charcoal)]" : lightNav ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
                  />
                  <span
                    className={`block h-px w-5 transition-opacity ${open ? "opacity-0" : lightNav ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
                  />
                  <span
                    className={`block h-px w-5 transition-transform ${open ? "-translate-y-[6px] -rotate-45 bg-[color:var(--charcoal)]" : lightNav ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div
          className={`fixed inset-0 z-[70] bg-[color:var(--ivory)] text-[color:var(--charcoal)] transition-all duration-500 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
          aria-hidden={!open}
          aria-label="Mobile menu"
          aria-modal="true"
          role="dialog"
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-[calc(env(safe-area-inset-top)+1rem)]">
            <div className="flex min-h-[72px] items-center justify-between">
              <OfficialLogo loading="eager" sizes="126px" className="w-[126px]" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-[color:var(--charcoal)]/16 text-[1.4rem] leading-none"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <nav className="mt-10 flex flex-1 flex-col justify-center gap-7">
              {items.map((i) => (
                <a
                  key={i.k}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color:var(--border)]/65 pb-5 font-display text-[2.35rem] font-light leading-[1.02] text-[color:var(--charcoal)]"
                >
                  {tr(i.k)}
                </a>
              ))}
            </nav>
            <a
              href="#consultation"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex min-h-[60px] items-center justify-between bg-[color:var(--charcoal)] px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]"
            >
              {tr("nav_book")}
              <span className="h-px w-10 bg-current" />
            </a>
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE}>
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
            lightNav
              ? "bg-[color:var(--ivory)]/94 backdrop-blur-md border-b border-[color:var(--border)]/60 shadow-[0_8px_24px_-24px_rgba(0,0,0,0.28)]"
              : "border-b border-[color:var(--ivory)]/8 bg-[color:var(--charcoal)]/34 shadow-[0_10px_28px_-26px_rgba(0,0,0,0.72)] backdrop-blur-md xl:border-transparent xl:bg-transparent xl:shadow-none xl:backdrop-blur-none"
          }`}
        >
          <div className="mx-auto flex max-w-[1680px] items-center justify-between px-4 py-3 md:px-10 md:py-4 xl:px-12">
            <a href="#top" aria-label={OFFICIAL_LOGO_ALT} className="block shrink-0">
              <OfficialLogo
                loading="eager"
                sizes="(max-width: 767px) 132px, (max-width: 1279px) 144px, 158px"
                className={`w-[130px] sm:w-[138px] md:w-[144px] xl:w-[158px] transition-opacity duration-500 ${
                  lightNav ? "opacity-100" : "opacity-[0.96]"
                }`}
              />
            </a>

            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {items.map((i) => (
                <a
                  key={i.k}
                  href={i.href}
                  className={`group relative py-3 text-[0.64rem] font-medium tracking-[0.2em] uppercase transition-colors ${
                    lightNav
                      ? "text-[color:var(--charcoal)]/72 hover:text-[color:var(--charcoal)]"
                      : "text-[color:var(--ivory)]/78 hover:text-[color:var(--ivory)]"
                  }`}
                >
                  {tr(i.k)}
                  <span className="absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--gold)]/80 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-x-100" />
                </a>
              ))}
              <a
                href="#consultation"
                className={`text-[0.64rem] font-medium tracking-[0.2em] uppercase border px-5 py-3 transition-all duration-500 ${
                  lightNav
                    ? "border-[color:var(--charcoal)] text-[color:var(--charcoal)] hover:bg-[color:var(--charcoal)] hover:text-[color:var(--ivory)]"
                    : "border-[color:var(--ivory)] text-[color:var(--ivory)] hover:bg-[color:var(--ivory)] hover:text-[color:var(--charcoal)]"
                }`}
              >
                {tr("nav_book")}
              </a>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
              <div
                className={`flex items-center text-[0.64rem] font-medium !tracking-[0px] [word-spacing:normal] uppercase transition-colors sm:text-[0.68rem] ${lightNav ? "text-[color:var(--charcoal)]" : "text-[color:var(--ivory)]"}`}
              >
                <button
                  onClick={() => setLang("en")}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center px-1.5 tracking-[0.24em] transition-opacity xl:min-h-0 xl:min-w-0 ${lang === "en" ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                >
                  EN
                </button>
                <span className="opacity-35">/</span>
                <button
                  lang="ar"
                  dir="rtl"
                  onClick={() => setLang("ar")}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center px-1.5 font-arabic !tracking-[0px] transition-opacity xl:min-h-0 xl:min-w-0 ${lang === "ar" ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                >
                  ع
                </button>
              </div>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className={`xl:hidden flex h-10 w-10 flex-col items-center justify-center gap-[5px] border transition-colors sm:h-11 sm:w-11 ${
                  lightNav ? "border-[color:var(--charcoal)]/20" : "border-[color:var(--ivory)]/30"
                }`}
              >
                <span
                  className={`block h-px w-6 transition-transform ${open ? "translate-y-[6px] rotate-45 bg-[color:var(--charcoal)]" : lightNav ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
                />
                <span
                  className={`block h-px w-6 transition-opacity ${open ? "opacity-0" : lightNav ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
                />
                <span
                  className={`block h-px w-6 transition-transform ${open ? "-translate-y-[6px] -rotate-45 bg-[color:var(--charcoal)]" : lightNav ? "bg-[color:var(--charcoal)]" : "bg-[color:var(--ivory)]"}`}
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
                  className="flex min-h-[44px] items-center font-display text-[1.45rem] leading-none text-[color:var(--charcoal)] transition-colors hover:text-[color:var(--gold)]"
                >
                  {tr(i.k)}
                </a>
              ))}
              <a
                href="#consultation"
                onClick={() => setOpen(false)}
                className="mt-1 flex min-h-[44px] items-center border-t border-[color:var(--border)]/70 pt-7 font-display text-[1.45rem] leading-none text-[color:var(--gold)]"
              >
                {tr("nav_book")}
              </a>
            </div>
          </div>
        </header>
      </ViewportOnly>
    </>
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
      className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--charcoal)] lg:h-[100svh] lg:min-h-[720px]"
    >
      <div className="absolute inset-0">
        <img
          src={u(HERO)}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ objectPosition: "center 34%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/58 via-black/18 to-black/76" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/12 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/28 to-transparent" />
      </div>

      <ViewportOnly
        match="phone"
        className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-[calc(env(safe-area-inset-bottom)+34px)] pt-[calc(env(safe-area-inset-top)+120px)]"
      >
        <div className="max-w-[360px] pb-4 text-[color:var(--ivory)] animate-fade-up">
          <h1
            data-mobile-hero-heading="true"
            className="font-display text-[clamp(3rem,14.2vw,4.15rem)] font-light leading-[1.03] tracking-[-0.01em]"
          >
            <span className="block">{tr("hero_l1")}</span>
            <span className="block italic text-[color:var(--ivory)]/92">{tr("hero_l2")}</span>
          </h1>
          <p className="mt-7 max-w-[30ch] text-[1.05rem] font-light leading-[1.85] text-[color:var(--ivory)]/88 [text-wrap:pretty]">
            {tr("hero_sub")}
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="#consultation"
              className="inline-flex min-h-[58px] w-full items-center justify-center bg-[color:var(--ivory)] px-6 py-4 text-center text-[0.74rem] font-medium uppercase tracking-[0.13em] text-[color:var(--charcoal)] transition-colors duration-500 active:bg-[color:var(--gold)] active:text-[color:var(--ivory)]"
            >
              {tr("hero_cta1")}
            </a>
            <a
              href="#commission"
              className="inline-flex min-h-[58px] w-full items-center justify-center border border-[color:var(--ivory)]/48 px-6 py-4 text-center text-[0.74rem] font-medium uppercase tracking-[0.13em] text-[color:var(--ivory)] transition-colors duration-500 active:border-[color:var(--gold)] active:text-[color:var(--gold)]"
            >
              {tr("hero_cta2")}
            </a>
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly
        match="tablet"
        className="relative z-10 flex min-h-[100svh] flex-col justify-center px-6 pb-[calc(env(safe-area-inset-bottom)+44px)] pt-[calc(env(safe-area-inset-top)+104px)]"
      >
        <div className="mt-10 max-w-[342px] text-[color:var(--ivory)] animate-fade-up">
          <h1
            data-mobile-hero-heading="true"
            className="font-display text-[clamp(2.15rem,10vw,3.05rem)] font-light leading-[1.12] tracking-[-0.005em]"
          >
            <span className="block">{tr("hero_l1")}</span>
            <span className="block italic text-[color:var(--ivory)]/92">{tr("hero_l2")}</span>
          </h1>
          <p className="mt-5 max-w-[31ch] text-[0.9rem] font-light leading-[1.85] text-[color:var(--ivory)]/86 [text-wrap:pretty]">
            {tr("hero_sub")}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#consultation"
              className="inline-flex min-h-[50px] w-full items-center justify-center bg-[color:var(--ivory)] px-6 py-4 text-center text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[color:var(--charcoal)] transition-colors duration-500 hover:bg-[color:var(--gold)] hover:text-[color:var(--ivory)]"
            >
              {tr("hero_cta1")}
            </a>
            <a
              href="#commission"
              className="inline-flex min-h-[50px] w-full items-center justify-center border border-[color:var(--ivory)]/48 px-6 py-4 text-center text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[color:var(--ivory)] transition-colors duration-500 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              {tr("hero_cta2")}
            </a>
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly match="desktop" className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1680px] px-12 pb-[clamp(7rem,13vh,10rem)]">
          <div className="max-w-[860px] text-[color:var(--ivory)] animate-fade-up">
            <div className="flex items-center gap-4 text-[0.66rem] font-medium tracking-[0.22em] uppercase text-[color:var(--ivory)]/76">
              <span className="h-px w-12 bg-[color:var(--gold)]/80" />
              {tr("hero_eyebrow")}
            </div>
            <h1 className="mt-7 max-w-[850px] font-display text-[clamp(3rem,6.6vw,5.7rem)] font-light leading-[1.0] tracking-[-0.004em] [text-wrap:balance]">
              <span className="block">{tr("hero_l1")}</span>{" "}
              <span className="block italic text-[color:var(--ivory)]/90">{tr("hero_l2")}</span>
            </h1>
            <p className="mt-8 max-w-[58ch] text-[1.05rem] font-light leading-[1.92] text-[color:var(--ivory)]/84 [text-wrap:pretty]">
              {tr("hero_sub")}
            </p>
            <div className="mt-11 flex gap-4">
              <a
                href="#consultation"
                className="group inline-flex min-h-[56px] items-center justify-between gap-6 bg-[color:var(--ivory)] px-7 py-5 text-[0.66rem] font-medium tracking-[0.22em] uppercase text-[color:var(--charcoal)] transition-all duration-500 hover:bg-[color:var(--gold)] hover:text-[color:var(--ivory)]"
              >
                {tr("hero_cta1")}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
              </a>
              <a
                href="#commission"
                className="group inline-flex min-h-[56px] items-center justify-between gap-6 border border-[color:var(--ivory)]/48 px-7 py-5 text-[0.66rem] font-medium tracking-[0.22em] uppercase text-[color:var(--ivory)] transition-all duration-500 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                {tr("hero_cta2")}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-10">
          <div className="flex flex-col items-center gap-3 text-[0.6rem] tracking-[0.5em] uppercase text-[color:var(--ivory)]/70">
            {tr("hero_scroll")}
            <span className="block h-12 w-px bg-gradient-to-b from-[color:var(--ivory)]/70 to-transparent animate-pulse" />
          </div>
        </div>
      </ViewportOnly>
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

function MobileLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className={`text-[0.78rem] font-medium uppercase tracking-[0.16em] ${
        light ? "text-[color:var(--champagne)]/86" : "text-[color:var(--gold)]"
      }`}
    >
      {children}
    </div>
  );
}

function MobileAction({
  children,
  href,
  onClick,
  dark = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  dark?: boolean;
}) {
  const className = `inline-flex min-h-[58px] w-full items-center justify-between gap-5 px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] transition-colors ${
    dark
      ? "bg-[color:var(--ivory)] text-[color:var(--charcoal)] active:bg-[color:var(--gold)] active:text-[color:var(--ivory)]"
      : "bg-[color:var(--charcoal)] text-[color:var(--ivory)] active:bg-[color:var(--gold)]"
  }`;

  const content = (
    <>
      <span>{children}</span>
      <span className="h-px w-10 bg-current" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Commission (interactive cards)                                  */
/* ------------------------------------------------------------------ */

function Commission({ onChoose }: { onChoose: (label: string) => void }) {
  const { tr } = useLang();
  const cards: { k: TKey; d: TKey; img: string; n: string; pos: string }[] = [
    { k: "com_ring", d: "com_ring_d", img: j15, n: "01", pos: "object-[center_38%]" },
    { k: "com_neck", d: "com_neck_d", img: j11, n: "02", pos: "object-[center_35%]" },
    { k: "com_ear", d: "com_ear_d", img: j7, n: "03", pos: "object-[center_38%]" },
    { k: "com_brace", d: "com_brace_d", img: j18, n: "04", pos: "object-[center_48%]" },
    { k: "com_bridal", d: "com_bridal_d", img: j23, n: "05", pos: "object-[center_40%]" },
    { k: "com_redo", d: "com_redo_d", img: j19, n: "06", pos: "object-[center_52%]" },
    { k: "com_unique", d: "com_unique_d", img: j17, n: "07", pos: "object-[center_44%]" },
  ];
  const [active, setActive] = useState(0);
  const activeCard = cards[active];

  return (
    <section id="commission" className="overflow-hidden bg-[color:var(--ivory)] py-0 md:py-44">
      <ViewportOnly match="phone">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel>{tr("com_eyebrow")}</MobileLabel>
            <h2 className="mt-7 font-display text-[3.5rem] font-light leading-[0.98] text-[color:var(--charcoal)]">
              <span className="block">{tr("com_title_a")}</span>
              <span className="block italic text-[color:var(--taupe)]">{tr("com_title_b")}</span>
            </h2>
            <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/74">
              {tr("com_sub")}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="-mx-6 mt-14">
              <MotionFrame
                film={FILMS.portraitRing}
                label={tr("film_commission_label")}
                className="h-[76svh] min-h-[560px] w-full"
                mediaClassName="object-[center_40%]"
              />
            </div>
            <p className="mt-9 font-display text-[2rem] font-light leading-[1.35] text-[color:var(--charcoal)]">
              {tr("film_commission_body")}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="-mx-6 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-7 [scrollbar-width:none]">
              {cards.map((c, i) => (
                <button
                  key={c.k}
                  type="button"
                  onClick={() => onChoose(tr(c.k))}
                  className="group block min-w-[82vw] max-w-[342px] snap-center text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--charcoal)]">
                    <img
                      src={u(c.img)}
                      alt=""
                      loading={i < 2 ? "eager" : "lazy"}
                      className={`h-full w-full object-cover brightness-[0.88] transition-transform duration-[1600ms] group-active:scale-[1.025] ${c.pos}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.2)_44%,rgba(0,0,0,.76))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-[color:var(--ivory)]">
                      <div className="font-display text-[4.2rem] font-light italic leading-none text-[color:var(--ivory)]/46">
                        {c.n}
                      </div>
                      <h3 className="mt-5 font-display text-[2.55rem] font-light leading-[1.02]">
                        {tr(c.k)}
                      </h3>
                      <p className="mt-4 max-w-[27ch] text-[1rem] font-light leading-[1.82] text-[color:var(--ivory)]/82">
                        {tr(c.d)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex min-h-[56px] items-center justify-between border-b border-[color:var(--border)] pb-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--charcoal)]">
                    {tr("com_begin")}
                    <span className="h-px w-12 bg-[color:var(--gold)]" />
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE} className="mx-auto max-w-[1700px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-6">
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

        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <button
              onClick={() => onChoose(tr(activeCard.k))}
              className="group relative block h-[72svh] min-h-[520px] w-full overflow-hidden bg-[color:var(--charcoal)] text-left md:h-[76vh]"
            >
              {cards.map((c, i) => (
                <img
                  key={c.k}
                  src={u(c.img)}
                  alt=""
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1300ms] ease-[cubic-bezier(.2,.7,.2,1)] ${c.pos} ${
                    active === i
                      ? "scale-100 opacity-100 brightness-[0.92]"
                      : "scale-[1.04] opacity-0 brightness-75"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.18)_35%,rgba(0,0,0,.76))]" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-[color:var(--ivory)] md:p-9">
                <span className="font-display text-[4.2rem] font-light italic leading-none text-[color:var(--ivory)]/50 md:text-[6.4rem]">
                  {activeCard.n}
                </span>
                <span className="max-w-[12rem] text-right text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[color:var(--champagne)]/88">
                  {tr("com_eyebrow")}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[color:var(--ivory)] md:p-10 lg:p-12">
                <h3 className="max-w-xl font-display text-[clamp(2.35rem,4.8vw,5.1rem)] font-light leading-[0.98] [text-wrap:balance]">
                  {tr(activeCard.k)}
                </h3>
                <p className="mt-6 max-w-md text-[0.98rem] font-light leading-[1.9] text-[color:var(--ivory)]/82">
                  {tr(activeCard.d)}
                </p>
                <div className="mt-9 inline-flex items-center gap-5 text-[0.66rem] font-medium uppercase tracking-[0.24em]">
                  {tr("com_begin")}
                  <span className="block h-px w-10 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            </button>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="flex h-full flex-col justify-between border-y border-[color:var(--border)] py-2">
              {cards.map((c, i) => (
                <button
                  key={c.k}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => {
                    setActive(i);
                    onChoose(tr(c.k));
                  }}
                  className={`group grid grid-cols-[3.2rem_1fr] gap-5 border-b border-[color:var(--border)] py-5 text-left transition-colors last:border-b-0 md:grid-cols-[4.5rem_1fr] md:py-6 ${
                    active === i
                      ? "text-[color:var(--charcoal)]"
                      : "text-[color:var(--charcoal)]/58"
                  }`}
                >
                  <span className="font-display text-[1.9rem] font-light italic leading-none text-[color:var(--gold)]/80 md:text-[2.55rem]">
                    {c.n}
                  </span>
                  <span>
                    <span className="block font-display text-[1.55rem] font-light leading-tight md:text-[2rem]">
                      {tr(c.k)}
                    </span>
                    <span className="mt-2 block max-w-md text-[0.88rem] font-light leading-[1.72] text-[color:var(--charcoal)]/64 opacity-100 transition-opacity group-hover:opacity-100 md:text-[0.94rem]">
                      {tr(c.d)}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-20 grid grid-cols-1 items-center gap-10 md:mt-28 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:col-start-2">
              <div className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--gold)]">
                {tr("film_commission_eyebrow")}
              </div>
              <p className="mt-7 max-w-xl font-display text-[1.7rem] font-light leading-[1.35] text-[color:var(--charcoal)] md:text-[2.2rem]">
                {tr("film_commission_body")}
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <MotionFrame
                film={FILMS.portraitRing}
                label={tr("film_commission_label")}
                className="aspect-[16/11] md:aspect-[21/10]"
                mediaClassName="object-[center_42%]"
              />
            </div>
          </div>
        </Reveal>
      </ViewportOnly>
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
    <section id="design" className="bg-[color:var(--pearl)] py-0 md:py-44">
      <ViewportOnly match="phone">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel>{tr("dyp_eyebrow")}</MobileLabel>
            <h2 className="mt-7 font-display text-[3.35rem] font-light leading-[1.02] text-[color:var(--charcoal)]">
              <span className="block">{tr("dyp_title_a")}</span>
              <span className="block italic text-[color:var(--taupe)]">{tr("dyp_title_b")}</span>
            </h2>
            <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/74">
              {tr("dyp_sub")}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="-mx-6 mt-12 flex gap-3 overflow-x-auto px-6 pb-3 [scrollbar-width:none]">
              {tabs.map((t, i) => {
                const active = tab === t.k;
                return (
                  <button
                    key={t.k}
                    type="button"
                    onClick={() => setTab(t.k)}
                    className={`min-h-[58px] min-w-[148px] border px-5 text-left transition-colors ${
                      active
                        ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                        : "border-[color:var(--border)] bg-[color:var(--ivory)] text-[color:var(--charcoal)]"
                    }`}
                  >
                    <span className="block text-[0.7rem] font-medium uppercase tracking-[0.13em] opacity-62">
                      0{i + 1}
                    </span>
                    <span className="mt-1 block font-display text-[1.45rem] leading-none">
                      {tr(t.label)}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            key={tab}
            className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 animate-fade-in [scrollbar-width:none]"
          >
            {groups[tab].map((opt, i) => {
              const label = labelFor(opt.k);
              const selected = picks[tab] === label;
              return (
                <button
                  key={opt.k}
                  type="button"
                  onClick={() => setPicks((p) => ({ ...p, [tab]: label }))}
                  className={`group relative block min-w-[78vw] max-w-[330px] snap-center overflow-hidden text-left transition-all ${
                    selected
                      ? "bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                      : "bg-[color:var(--ivory)] text-[color:var(--charcoal)]"
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={u(opt.img)}
                      alt=""
                      loading={i < 2 ? "eager" : "lazy"}
                      className={`h-full w-full object-cover transition-transform duration-[1400ms] group-active:scale-[1.03] ${
                        selected ? "brightness-[0.86]" : "brightness-[0.94]"
                      }`}
                    />
                  </div>
                  <div className="flex min-h-[68px] items-center justify-between px-5 py-4">
                    <span className="font-display text-[1.85rem] font-light leading-tight">
                      {label}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center border text-[0.8rem] ${
                        selected
                          ? "border-[color:var(--gold)] text-[color:var(--gold)]"
                          : "border-[color:var(--border)] text-[color:var(--taupe)]"
                      }`}
                    >
                      {selected ? "✓" : ""}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <Reveal delay={140}>
            <div className="mt-14 border-y border-[color:var(--border)] py-7">
              <div className="text-[0.74rem] font-medium uppercase tracking-[0.14em] text-[color:var(--taupe)]">
                {tr("dyp_chosen")}
              </div>
              <div className="mt-4 min-h-[4rem] font-display text-[2rem] font-light italic leading-[1.2] text-[color:var(--charcoal)]">
                {buildWhisper() || tr("dyp_empty")}
              </div>
            </div>
            <div className="mt-8">
              <MobileAction onClick={() => onContinue(buildWhisper())}>
                {tr("dyp_cta")}
              </MobileAction>
            </div>
          </Reveal>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE} className="mx-auto max-w-[1600px] px-6 md:px-12">
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
                <button
                  key={t.k}
                  onClick={() => setTab(t.k)}
                  className="group relative min-w-11 text-left"
                >
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
      </ViewportOnly>
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
      className="relative overflow-hidden bg-[color:var(--charcoal)] py-0 text-[color:var(--ivory)] md:py-56"
    >
      <ViewportOnly match="phone">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel light>{tr("pr_eyebrow")}</MobileLabel>
            <h2 className="mt-7 max-w-[11ch] font-display text-[3.35rem] font-light leading-[1.04]">
              {tr("pr_title")}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="-mx-6 mt-14">
              <AmbientFilm
                film={FILMS.atelierHands}
                className="h-[82svh] min-h-[610px]"
                mediaClassName="object-[center_center]"
                overlay="bg-[linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.16)_46%,rgba(0,0,0,.7))]"
              />
            </div>
            <div className="mt-9 border-t border-[color:var(--ivory)]/16 pt-7">
              <MobileLabel light>{tr("film_process_eyebrow")}</MobileLabel>
              <p className="mt-5 font-display text-[2rem] font-light leading-[1.38] text-[color:var(--ivory)]/86">
                {tr("film_process_body")}
              </p>
            </div>
          </Reveal>

          <div className="mt-18 flex flex-col gap-9">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 90}>
                <article className="border-t border-[color:var(--ivory)]/15 pt-8">
                  <div className="font-display text-[5.4rem] font-light italic leading-none text-[color:var(--gold)]/72">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-[2.55rem] font-light leading-[1.04] text-[color:var(--ivory)]">
                    {tr(s.t)}
                  </h3>
                  <p className="mt-5 max-w-[31ch] text-[1.06rem] font-light leading-[2] text-[color:var(--ivory)]/74">
                    {tr(s.d)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE}>
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(206,174,109,.13),transparent_58%)] lg:block" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow light>{tr("pr_eyebrow")}</Eyebrow>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5vw,4.8rem)] font-light leading-[1.08] [text-wrap:balance]">
                {tr("pr_title")}
              </h2>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-14 md:mt-28 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <AmbientFilm
                  film={FILMS.atelierHands}
                  className="h-[66svh] min-h-[500px]"
                  mediaClassName="object-[center_center]"
                  overlay="bg-[linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.22)_48%,rgba(0,0,0,.62))]"
                />
                <div className="mt-8 max-w-md border-t border-[color:var(--ivory)]/16 pt-7">
                  <div className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--gold)]">
                    {tr("film_process_eyebrow")}
                  </div>
                  <p className="mt-5 font-display text-[1.55rem] font-light leading-[1.42] text-[color:var(--ivory)]/84 md:text-[1.95rem]">
                    {tr("film_process_body")}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 80}>
                  <article className="group grid grid-cols-1 gap-6 border-t border-[color:var(--ivory)]/14 py-10 transition-colors md:grid-cols-12 md:gap-8 md:py-14">
                    <div className="md:col-span-2">
                      <span className="font-display text-[3.4rem] font-light italic leading-none text-[color:var(--gold)]/70 transition-colors group-hover:text-[color:var(--gold)] md:text-[5.8rem]">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-[2rem] font-light leading-tight text-[color:var(--ivory)] md:col-span-4 md:text-[2.8rem]">
                      {tr(s.t)}
                    </h3>
                    <p className="max-w-xl text-[1rem] font-light leading-[1.95] text-[color:var(--ivory)]/72 md:col-span-5 md:col-start-8">
                      {tr(s.d)}
                    </p>
                  </article>
                </Reveal>
              ))}
              <div className="h-px bg-[color:var(--ivory)]/14" />
            </div>
          </div>
        </div>
      </ViewportOnly>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — Signature                                                      */
/* ------------------------------------------------------------------ */

function Signature() {
  const { tr } = useLang();
  const galleryPositions = [
    "object-[center_42%]",
    "object-[center_36%]",
    "object-[center_48%]",
    "object-[center_40%]",
    "object-[center_52%]",
    "object-[center_35%]",
    "object-[center_44%]",
    "object-[center_46%]",
  ];
  return (
    <section id="creations" className="overflow-hidden bg-[color:var(--ivory)] py-0 md:py-56">
      <ViewportOnly match="phone">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel>{tr("sig_eyebrow")}</MobileLabel>
            <h2 className="mt-7 font-display text-[3.35rem] font-light leading-[1.04] text-[color:var(--charcoal)]">
              {tr("sig_title")}
            </h2>
            <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/74">
              {tr("sig_sub")}
            </p>
          </Reveal>

          <Reveal delay={110}>
            <div className="-mx-6 mt-14">
              <MotionFrame
                film={FILMS.necklaceArchive}
                label={tr("film_signature_label")}
                className="h-[84svh] min-h-[620px] w-full"
                mediaClassName="object-[center_33%]"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-14 border-y border-[color:var(--border)] py-8">
              <p className="font-display text-[2.25rem] font-light italic leading-[1.28] text-[color:var(--taupe)]">
                {tr("sig_sub")}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 flex flex-col gap-9">
            {GALLERY.slice(0, 10).map((img, i) => {
              const frame =
                i % 3 === 0
                  ? "-mx-6 aspect-[4/5]"
                  : i % 3 === 1
                    ? "ms-10 aspect-[3/4]"
                    : "me-8 aspect-[16/11]";
              return (
                <Reveal key={i} delay={(i % 4) * 70}>
                  <div className={`${frame} overflow-hidden bg-[color:var(--pearl)]`}>
                    <img
                      src={u(img)}
                      alt=""
                      loading="lazy"
                      className={`h-full w-full object-cover brightness-[0.96] ${galleryPositions[i % galleryPositions.length]}`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE} className="mx-auto max-w-[1700px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-12">
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

        <div className="mt-20 grid grid-cols-12 gap-3 md:mt-32 md:gap-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <MotionFrame
              film={FILMS.necklaceArchive}
              label={tr("film_signature_label")}
              className="h-[72svh] min-h-[540px] w-full md:h-[80vh]"
              mediaClassName="object-[center_34%]"
            />
          </Reveal>

          <Reveal
            className="col-span-6 aspect-[3/4] lg:col-span-2 lg:col-start-9 lg:mt-28"
            delay={100}
          >
            <div className="h-full overflow-hidden bg-[color:var(--pearl)]">
              <Parallax amount={30} className="h-full w-full">
                <img
                  src={u(j3)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_38%]"
                />
              </Parallax>
            </div>
          </Reveal>
          <Reveal className="col-span-6 aspect-[4/5] lg:col-span-3 lg:mt-6" delay={180}>
            <div className="h-full overflow-hidden bg-[color:var(--pearl)]">
              <Parallax amount={46} className="h-full w-full">
                <img
                  src={u(j21)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_42%]"
                />
              </Parallax>
            </div>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={220}>
            <div className="border-y border-[color:var(--border)] py-8 md:py-10">
              <p className="font-display text-[1.75rem] font-light italic leading-[1.35] text-[color:var(--taupe)] md:text-[2.25rem]">
                {tr("sig_sub")}
              </p>
            </div>
          </Reveal>

          {GALLERY.slice(0, 12).map((img, i) => {
            const pattern = [
              "col-span-5 md:col-span-2 aspect-[3/4]",
              "col-span-7 md:col-span-3 aspect-[5/4] md:mt-14",
              "col-span-6 md:col-span-2 aspect-[4/5]",
              "col-span-6 md:col-span-3 aspect-[16/11] md:mt-24",
              "col-span-7 md:col-span-4 aspect-[5/4]",
              "col-span-5 md:col-span-2 aspect-[3/4] md:mt-10",
            ];
            return (
              <Reveal key={i} className={pattern[i % pattern.length]} delay={(i % 5) * 60}>
                <div className="group h-full w-full overflow-hidden bg-[color:var(--pearl)]">
                  <img
                    src={u(img)}
                    alt=""
                    loading="lazy"
                    className={`h-full w-full object-cover brightness-[0.96] transition-transform duration-[1800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.055] group-hover:brightness-100 ${galleryPositions[i % galleryPositions.length]}`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </ViewportOnly>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — Redesign                                                       */
/* ------------------------------------------------------------------ */

function Redesign({ onBegin }: { onBegin: () => void }) {
  const { tr } = useLang();
  return (
    <section
      id="redesign"
      className="relative overflow-hidden bg-[color:var(--charcoal)] py-0 text-[color:var(--ivory)] md:py-52"
    >
      <div className="absolute inset-0 opacity-[0.22]">
        <img
          src={u(REDESIGN_IMG)}
          alt=""
          className="h-full w-full object-cover object-[center_46%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.62)_42%,rgba(0,0,0,.28))]" />
      </div>

      <ViewportOnly match="phone" className="relative">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel light>{tr("rd_eyebrow")}</MobileLabel>
            <h2 className="mt-7 font-display text-[3.45rem] font-light leading-[1.02]">
              <span className="block">{tr("rd_t1")}</span>
              <span className="block italic text-[color:var(--gold)]">{tr("rd_t2")}</span>
            </h2>
            <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2.05] text-[color:var(--ivory)]/78">
              {tr("rd_body")}
            </p>
            <div className="mt-10">
              <MobileAction onClick={onBegin} dark>
                {tr("rd_cta")}
              </MobileAction>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="-mx-6 mt-16 aspect-[4/5] overflow-hidden">
              <img
                src={u(REDESIGN_IMG)}
                alt=""
                className="h-full w-full object-cover object-[center_46%]"
              />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10">
              <MotionFrame
                film={FILMS.heirloomPendant}
                label={tr("film_redesign_label")}
                className="aspect-[4/5] w-full"
                mediaClassName="object-[center_42%]"
              />
            </div>
          </Reveal>

          <div className="mt-14 flex flex-col gap-7 border-y border-[color:var(--ivory)]/14 py-8">
            {[
              ["pr_2_t", "pr_2_d"],
              ["pr_3_t", "pr_3_d"],
              ["pr_4_t", "pr_4_d"],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 80}>
                <div>
                  <h3 className="font-display text-[2rem] font-light text-[color:var(--ivory)]">
                    {tr(title as TKey)}
                  </h3>
                  <p className="mt-3 max-w-[31ch] text-[1rem] font-light leading-[1.9] text-[color:var(--ivory)]/68">
                    {tr(body as TKey)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE} className="relative mx-auto max-w-[1650px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow light>{tr("rd_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2.7rem,5.8vw,5.5rem)] font-light leading-[1.02] [text-wrap:balance]">
              <span className="block">{tr("rd_t1")}</span>{" "}
              <span className="block italic text-[color:var(--gold)]">{tr("rd_t2")}</span>
            </h2>
            <p className="mt-10 max-w-xl text-[1.05rem] font-light leading-[2] text-[color:var(--ivory)]/78 [text-wrap:pretty]">
              {tr("rd_body")}
            </p>
            <button
              onClick={onBegin}
              className="group mt-12 inline-flex min-h-[58px] items-center gap-6 border border-[color:var(--ivory)]/42 px-9 py-5 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-[color:var(--ivory)] transition-all duration-500 hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--charcoal)]"
            >
              {tr("rd_cta")}
              <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
            </button>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={150}>
            <div className="grid grid-cols-12 items-end gap-3 md:gap-5">
              <div className="col-span-8 overflow-hidden md:col-span-7">
                <div className="aspect-[3/4]">
                  <Parallax amount={54} className="h-full w-full">
                    <img
                      src={u(REDESIGN_IMG)}
                      alt=""
                      className="h-full w-full object-cover object-[center_46%]"
                    />
                  </Parallax>
                </div>
              </div>
              <div className="col-span-4 border-t border-[color:var(--ivory)]/20 pt-4 font-display text-[3.6rem] font-light italic leading-none text-[color:var(--gold)]/80 md:text-[6.5rem]">
                01
              </div>
              <div className="col-span-12 -mt-8 ml-auto w-[78%] md:-mt-20 md:w-[68%]">
                <MotionFrame
                  film={FILMS.heirloomPendant}
                  label={tr("film_redesign_label")}
                  className="aspect-[16/10]"
                  mediaClassName="object-[center_42%]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="mt-20 grid grid-cols-1 gap-6 border-y border-[color:var(--ivory)]/14 py-8 md:mt-28 md:grid-cols-3 md:gap-10 md:py-10">
            {[
              ["pr_2_t", "pr_2_d"],
              ["pr_3_t", "pr_3_d"],
              ["pr_4_t", "pr_4_d"],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="font-display text-[1.55rem] font-light text-[color:var(--ivory)]">
                  {tr(title as TKey)}
                </h3>
                <p className="mt-3 max-w-sm text-[0.94rem] font-light leading-[1.85] text-[color:var(--ivory)]/66">
                  {tr(body as TKey)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </ViewportOnly>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — Stories                                                        */
/* ------------------------------------------------------------------ */

function Stories() {
  const { tr } = useLang();
  const storyPositions = [
    "object-[center_42%]",
    "object-[center_36%]",
    "object-[center_48%]",
    "object-[center_40%]",
  ];
  const stories: { tag: TKey; q: TKey; b: TKey }[] = [
    { tag: "story1_tag", q: "story1_q", b: "story1_b" },
    { tag: "story2_tag", q: "story2_q", b: "story2_b" },
    { tag: "story3_tag", q: "story3_q", b: "story3_b" },
    { tag: "story4_tag", q: "story4_q", b: "story4_b" },
  ];
  const supportingLayout = ["lg:col-span-5", "lg:col-span-4 lg:mt-28", "lg:col-span-3 lg:mt-10"];

  return (
    <section className="overflow-hidden bg-[color:var(--ivory)] py-0 md:py-56">
      <ViewportOnly match="phone">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel>{tr("st_eyebrow")}</MobileLabel>
            <h2 className="mt-7 font-display text-[3.35rem] font-light leading-[1.04] text-[color:var(--charcoal)]">
              {tr("st_title")}
            </h2>
            <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2] text-[color:var(--charcoal)]/72">
              {tr("story1_b")}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="-mx-6 mt-14">
              <MotionFrame
                film={FILMS.clientStory}
                label={tr("film_story_label")}
                className="h-[82svh] min-h-[610px] w-full"
                mediaClassName="object-[center_36%]"
              />
            </div>
          </Reveal>

          <div className="mt-14 flex flex-col gap-12">
            {stories.map((s, i) => (
              <Reveal key={s.tag} delay={(i % 3) * 90}>
                <article>
                  {i > 0 && (
                    <div className="aspect-[4/5] overflow-hidden bg-[color:var(--pearl)]">
                      <img
                        src={u(STORY_IMAGES[i % STORY_IMAGES.length])}
                        alt=""
                        loading="lazy"
                        className={`h-full w-full object-cover ${storyPositions[i % storyPositions.length]}`}
                      />
                    </div>
                  )}
                  <div className="border-t border-[color:var(--border)] pt-7">
                    <MobileLabel>{tr(s.tag)}</MobileLabel>
                    <h3 className="mt-5 font-display text-[2.55rem] font-light leading-[1.08] text-[color:var(--charcoal)]">
                      "{tr(s.q)}"
                    </h3>
                    <p className="mt-6 max-w-[32ch] text-[1.05rem] font-light leading-[1.95] text-[color:var(--charcoal)]/74">
                      {tr(s.b)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE} className="mx-auto max-w-[1700px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <Eyebrow>{tr("st_eyebrow")}</Eyebrow>
            <h2 className="mt-10 max-w-4xl font-display text-[clamp(2.6rem,5.3vw,5rem)] font-light leading-[1.02] text-[color:var(--charcoal)] [text-wrap:balance]">
              {tr("st_title")}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={140}>
            <p className="text-[1rem] font-light leading-[1.95] text-[color:var(--charcoal)]/72">
              {tr("story1_b")}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <MotionFrame
              film={FILMS.clientStory}
              label={tr("film_story_label")}
              className="h-[70svh] min-h-[520px] w-full"
              mediaClassName="object-[center_36%]"
            />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:self-end" delay={160}>
            <div className="border-y border-[color:var(--border)] py-10 md:py-12">
              <div className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[color:var(--gold)]">
                {tr(stories[0].tag)}
              </div>
              <h3 className="mt-7 font-display text-[clamp(2rem,4.2vw,4.2rem)] font-light leading-[1.04] text-[color:var(--charcoal)] [text-wrap:balance]">
                "{tr(stories[0].q)}"
              </h3>
              <p className="mt-8 max-w-lg text-[1rem] font-light leading-[2] text-[color:var(--charcoal)]/76">
                {tr(stories[0].b)}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
          {stories.slice(1).map((s, i) => (
            <Reveal key={s.tag} className={supportingLayout[i]} delay={i * 120}>
              <article>
                <div className="aspect-[4/5] overflow-hidden bg-[color:var(--pearl)]">
                  <Parallax amount={34 + i * 8} className="h-full w-full">
                    <img
                      src={u(STORY_IMAGES[(i + 1) % STORY_IMAGES.length])}
                      alt=""
                      className={`h-full w-full object-cover ${storyPositions[(i + 1) % storyPositions.length]}`}
                    />
                  </Parallax>
                </div>
                <div className="mt-7 border-t border-[color:var(--border)] pt-7">
                  <div className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold)]">
                    {tr(s.tag)}
                  </div>
                  <h3 className="mt-4 font-display text-[1.7rem] font-light leading-[1.18] text-[color:var(--charcoal)] md:text-[2.25rem]">
                    "{tr(s.q)}"
                  </h3>
                  <p className="mt-5 text-[0.95rem] font-light leading-[1.9] text-[color:var(--charcoal)]/72">
                    {tr(s.b)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </ViewportOnly>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — Founder                                                        */
/* ------------------------------------------------------------------ */

function Founder() {
  const { tr } = useLang();
  return (
    <section className="overflow-hidden bg-[color:var(--pearl)] py-0 md:py-52">
      <ViewportOnly match="phone">
        <div className="px-6 py-24">
          <Reveal>
            <div className="-mx-6">
              <MotionFrame
                film={FILMS.behindScenes}
                label={tr("film_founder_label")}
                className="h-[82svh] min-h-[610px] w-full"
                mediaClassName="object-[center_38%]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <MobileLabel>{tr("fd_eyebrow")}</MobileLabel>
              <h2 className="mt-7 font-display text-[3.25rem] font-light italic leading-[1.08] text-[color:var(--charcoal)]">
                {tr("fd_title")}
              </h2>
              <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2.05] text-[color:var(--charcoal)]/78">
                {tr("fd_body")}
              </p>
              <div className="mt-10 border-y border-[color:var(--border)] py-8 font-display text-[2.15rem] font-light italic leading-[1.28] text-[color:var(--taupe)]">
                {tr("fd_quote")}
              </div>
              <div className="mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[color:var(--taupe)]">
                Hanan Bugshan
              </div>
            </div>
          </Reveal>
        </div>
      </ViewportOnly>

      <ViewportOnly match={NON_PHONE} className="mx-auto max-w-[1650px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <MotionFrame
                film={FILMS.behindScenes}
                label={tr("film_founder_label")}
                className="h-[72svh] min-h-[560px] w-full"
                mediaClassName="object-[center_38%]"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={150}>
            <Eyebrow>{tr("fd_eyebrow")}</Eyebrow>
            <h2 className="mt-8 font-display font-light text-[clamp(2.35rem,4.6vw,4.2rem)] leading-[1.12] text-[color:var(--charcoal)] italic [text-wrap:balance]">
              {tr("fd_title")}
            </h2>
            <p className="mt-10 max-w-xl text-[1.05rem] leading-[2.05] text-[color:var(--charcoal)]/80 font-light [text-wrap:pretty]">
              {tr("fd_body")}
            </p>
            <div className="mt-12 max-w-xl border-y border-[color:var(--border)] py-8 font-display italic text-[1.8rem] leading-[1.32] text-[color:var(--taupe)] md:text-[2.35rem]">
              {tr("fd_quote")}
            </div>
            <div className="mt-5 text-[0.7rem] font-medium tracking-[0.24em] uppercase text-[color:var(--taupe)]">
              Hanan Bugshan
            </div>
          </Reveal>
        </div>
      </ViewportOnly>
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
        <img src={u(CONS_BG)} alt="" className="h-full w-full object-cover object-[center_44%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/85 via-[color:var(--charcoal)]/90 to-[color:var(--charcoal)]" />
      </div>

      <ViewportOnly match="phone" className="relative">
        <div className="px-6 py-24">
          <Reveal>
            <MobileLabel light>{tr("cs_eyebrow")}</MobileLabel>
            <h2 className="mt-7 font-display text-[3.35rem] font-light leading-[1.02]">
              <span className="block">{tr("cs_l1")}</span>
              <span className="block italic text-[color:var(--gold)]">{tr("cs_l2")}</span>
            </h2>
            <p className="mt-8 max-w-[32ch] text-[1.08rem] font-light leading-[2.05] text-[color:var(--ivory)]/80">
              {tr("cs_sub")}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[58px] items-center justify-between border border-[color:var(--ivory)]/28 px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]"
              >
                {tr("cc_wa")}
                <span className="font-display text-[1.35rem] italic text-[color:var(--gold)]">
                  →
                </span>
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[58px] items-center justify-between border border-[color:var(--ivory)]/28 px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]"
              >
                {tr("cc_ig")}
                <span className="font-display text-[1.35rem] italic text-[color:var(--gold)]">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <form onSubmit={onSubmit} className="mt-14 flex flex-col gap-8">
              <label className="block">
                <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                  {tr("f_name")}
                </div>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={mobileInputCls}
                />
              </label>
              <label className="block">
                <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                  {tr("f_wa")}
                </div>
                <input
                  required
                  value={form.wa}
                  onChange={(e) => setForm({ ...form, wa: e.target.value })}
                  className={mobileInputCls}
                />
              </label>

              <div>
                <div className="mb-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                  {tr("f_create")}
                </div>
                <div className="flex flex-col gap-3">
                  {createOptions.map((k) => {
                    const label = TDICT[k][lang];
                    const active = form.create === label;
                    return (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setForm({ ...form, create: label })}
                        className={`min-h-[56px] border px-5 py-4 text-left font-display text-[1.55rem] leading-tight transition-colors ${
                          active
                            ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--gold)]"
                            : "border-[color:var(--ivory)]/20 text-[color:var(--ivory)]/82"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="block">
                <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                  {tr("f_idea")}
                </div>
                <textarea
                  rows={5}
                  value={form.idea}
                  onChange={(e) => setForm({ ...form, idea: e.target.value })}
                  className={`${mobileInputCls} resize-none`}
                />
              </label>

              <label className="block">
                <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                  {tr("f_budget")}
                </div>
                <input
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  placeholder={tr("f_budget_ph")}
                  className={mobileInputCls}
                />
              </label>
              <label className="block">
                <div className="text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--ivory)]/68">
                  {tr("f_when")}
                </div>
                <input
                  value={form.when}
                  onChange={(e) => setForm({ ...form, when: e.target.value })}
                  placeholder={tr("f_when_ph")}
                  className={mobileInputCls}
                />
              </label>

              <button
                type="submit"
                className="mt-4 inline-flex min-h-[62px] items-center justify-between bg-[color:var(--ivory)] px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-[color:var(--charcoal)]"
              >
                {sent ? "✓" : tr("f_send")}
                <span className="h-px w-12 bg-current" />
              </button>
            </form>
          </Reveal>
        </div>
      </ViewportOnly>

      <ViewportOnly
        match={NON_PHONE}
        className="relative mx-auto max-w-[1500px] px-6 py-32 md:px-12 md:py-48"
      >
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
                        className={`min-h-11 px-5 py-3 text-[0.68rem] font-medium uppercase border transition-all duration-500 ${
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
      </ViewportOnly>
    </section>
  );
}

const inputCls =
  "w-full bg-transparent border-0 border-b border-[color:var(--ivory)]/34 py-4 text-[1rem] leading-relaxed text-[color:var(--ivory)] focus:border-[color:var(--gold)] focus:outline-none transition-colors";
const mobileInputCls =
  "w-full bg-transparent border-0 border-b border-[color:var(--ivory)]/34 py-5 text-[1.08rem] leading-relaxed text-[color:var(--ivory)] focus:border-[color:var(--gold)] focus:outline-none transition-colors placeholder:text-[color:var(--ivory)]/46";

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
  const [showMobileDesk, setShowMobileDesk] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("top");
      const consultation = document.getElementById("consultation");
      const isPhone = window.matchMedia("(max-width: 767px)").matches;
      const threshold = isPhone
        ? (hero?.offsetHeight ?? window.innerHeight) + Math.round(window.innerHeight * 0.55)
        : (hero?.offsetHeight ?? window.innerHeight) - 80;
      const consultationRect = consultation?.getBoundingClientRect();
      const insideAppointment =
        isPhone && !!consultationRect && consultationRect.top < window.innerHeight * 0.82;
      const deskButton = document.querySelector('[data-private-desk-button="true"]');
      const deskCheckPoints = [
        [window.innerWidth - 30, window.innerHeight - 34],
        [window.innerWidth - 52, window.innerHeight - 34],
        [window.innerWidth - 30, window.innerHeight - 58],
        [window.innerWidth - 52, window.innerHeight - 58],
      ].map(([x, y]) => [Math.max(0, x), Math.max(0, y)] as const);
      const blockedByContent =
        isPhone &&
        deskCheckPoints.some(([x, y]) =>
          document.elementsFromPoint(x, y).some((element) => {
            if (deskButton?.contains(element)) return false;
            return !!element.closest(
              'a, button, input, textarea, select, form, [role="img"], video, img',
            );
          }),
        );
      setShowMobileDesk(window.scrollY > threshold && !insideAppointment && !blockedByContent);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  return (
    <>
      <button
        data-private-desk-button="true"
        onClick={() => setOpen(!open)}
        aria-label="Jewellery Concierge"
        className={`fixed bottom-[calc(1.15rem+env(safe-area-inset-bottom))] right-3 z-50 group transition-all duration-500 md:bottom-6 md:right-6 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100 ${
          showMobileDesk || open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div
          className={`relative flex h-10 items-center justify-center rounded-full border border-[color:var(--gold)]/36 bg-[color:var(--charcoal)] text-[color:var(--ivory)] shadow-[0_14px_34px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:bg-[color:var(--gold)] md:h-12 md:w-12 md:border-0 ${
            open ? "w-[154px] gap-2.5 px-3.5 md:w-[164px] md:gap-3 md:px-4" : "w-10 px-0 md:w-12"
          }`}
        >
          <span
            className={`text-[0.68rem] font-medium uppercase tracking-[0.13em] transition-opacity md:hidden ${
              open ? "max-w-[9rem] opacity-100" : "sr-only max-w-0 opacity-0"
            }`}
          >
            {tr("cc_title")}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--charcoal)] md:h-8 md:w-8">
            <svg
              width="13"
              height="13"
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
          className={`absolute bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[390px] bg-[color:var(--ivory)] shadow-[0_22px_58px_-28px_rgba(0,0,0,0.5)] transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-[color:var(--charcoal)] text-[color:var(--ivory)] px-7 py-6 flex items-start justify-between">
            <div>
              <div className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[color:var(--gold)]">
                {tr("cc_title")}
              </div>
              <div className="mt-2 font-display text-[1.32rem] font-light leading-tight">
                {tr("cc_sub")}
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-[color:var(--ivory)]/70 hover:text-[color:var(--ivory)] text-xl"
            >
              ×
            </button>
          </div>

          <div className="p-6 flex flex-col gap-3.5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[54px] items-center justify-between gap-4 border border-[color:var(--border)] px-5 py-4 transition-colors hover:border-[color:var(--gold)]"
            >
              <span className="text-[0.64rem] font-medium tracking-[0.18em] uppercase text-[color:var(--charcoal)]">
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
              className="group flex min-h-[54px] items-center justify-between gap-4 border border-[color:var(--border)] px-5 py-4 transition-colors hover:border-[color:var(--gold)]"
            >
              <span className="text-[0.64rem] font-medium tracking-[0.18em] uppercase text-[color:var(--charcoal)]">
                {tr("cc_ig")}
              </span>
              <span className="font-display italic text-[color:var(--gold)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <button
              onClick={onInquiry}
              className="group flex min-h-[54px] items-center justify-between gap-4 bg-[color:var(--charcoal)] text-[color:var(--ivory)] px-5 py-4 transition-colors hover:bg-[color:var(--gold)]"
            >
              <span className="text-[0.64rem] font-medium tracking-[0.18em] uppercase">
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
    <footer className="relative overflow-hidden bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <div className="absolute inset-0 opacity-[0.16]">
        <img src={u(CONS_BG)} alt="" className="h-full w-full object-cover object-[center_44%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.94))]" />
      </div>

      <ViewportOnly match="phone" className="relative">
        <div className="px-6 py-20 pb-[calc(env(safe-area-inset-bottom)+7rem)]">
          <OfficialLogo sizes="156px" className="w-[156px]" />
          <p className="mt-10 font-display text-[2.55rem] font-light italic leading-[1.08] text-[color:var(--ivory)]/88">
            {tr("foot_tag")}
          </p>
          <div className="mt-12 flex flex-col gap-5 border-y border-[color:var(--ivory)]/14 py-8 text-[0.78rem] uppercase tracking-[0.14em] text-[color:var(--ivory)]/76">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center"
            >
              Instagram
            </a>
            <a href="/collections" className="flex min-h-[44px] items-center">
              {tr("nav_collections")}
            </a>
            <a href="#consultation" className="flex min-h-[44px] items-center">
              {tr("nav_book")}
            </a>
          </div>
          <div className="mt-9 text-[0.72rem] uppercase tracking-[0.13em] leading-[2] text-[color:var(--ivory)]/58">
            <div>{tr("foot_place")}</div>
            <div className="mt-5 h-px w-16 bg-[color:var(--gold)]/45" />
            <div className="mt-5">
              © {new Date().getFullYear()} Opal Stones
              <br />
              {tr("foot_rights")}
            </div>
          </div>
        </div>
      </ViewportOnly>

      <ViewportOnly
        match={NON_PHONE}
        className="relative mx-auto max-w-[1650px] px-6 py-20 md:px-12 md:py-32"
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <OfficialLogo
              sizes="(max-width: 767px) 160px, 210px"
              className="w-[160px] md:w-[210px]"
            />
            <p className="mt-10 max-w-3xl font-display text-[clamp(2rem,4.5vw,4.8rem)] font-light italic leading-[1.08] text-[color:var(--ivory)]/88 [text-wrap:balance]">
              {tr("foot_tag")}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--ivory)]/70 lg:col-span-2 lg:col-start-8">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center transition-colors hover:text-[color:var(--gold)] lg:min-h-0"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center transition-colors hover:text-[color:var(--gold)] lg:min-h-0"
            >
              Instagram
            </a>
            <a
              href="/collections"
              className="flex min-h-[44px] items-center transition-colors hover:text-[color:var(--gold)] lg:min-h-0"
            >
              {tr("nav_collections")}
            </a>
            <a
              href="#consultation"
              className="flex min-h-[44px] items-center transition-colors hover:text-[color:var(--gold)] lg:min-h-0"
            >
              {tr("nav_book")}
            </a>
          </div>

          <div className="text-[0.62rem] uppercase tracking-[0.22em] leading-[2] text-[color:var(--ivory)]/58 lg:col-span-3 lg:text-right">
            <div>{tr("foot_place")}</div>
            <div className="mt-5 h-px w-16 bg-[color:var(--gold)]/45 lg:ml-auto" />
            <div className="mt-5">
              © {new Date().getFullYear()} Opal Stones
              <br />
              {tr("foot_rights")}
            </div>
          </div>
        </div>

        <a
          href="#consultation"
          className="group mt-20 flex min-h-[76px] items-center justify-between border-y border-[color:var(--ivory)]/16 py-7 text-[color:var(--ivory)] transition-colors hover:text-[color:var(--gold)] md:mt-28"
        >
          <span className="font-display text-[1.7rem] font-light italic md:text-[2.6rem]">
            {tr("nav_book")}
          </span>
          <span className="h-px w-12 bg-current transition-all duration-500 group-hover:w-28" />
        </a>
      </ViewportOnly>
    </footer>
  );
}
