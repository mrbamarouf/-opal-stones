import { useLang } from "@/lib/i18n";
import opalLogo384 from "@/assets/opal-logo-384.png";
import opalLogo768 from "@/assets/opal-logo-768.png";
import opalLogo from "@/assets/opal-logo.png";

const OFFICIAL_LOGO_ALT = "Opal Stones by Hanan Bugshan";

function CatalogueLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={opalLogo768}
      srcSet={`${opalLogo384} 384w, ${opalLogo768} 768w, ${opalLogo} 1536w`}
      sizes="(max-width: 767px) 124px, 154px"
      alt={OFFICIAL_LOGO_ALT}
      width={1536}
      height={1024}
      loading="eager"
      decoding="async"
      draggable={false}
      className={`block h-auto object-contain ${className}`}
    />
  );
}

function LanguageToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex min-h-11 items-center border px-2 text-[0.66rem] font-medium uppercase ${
        light
          ? "border-[color:var(--ivory)]/18 text-[color:var(--ivory)]"
          : "border-[color:var(--charcoal)]/14 text-[color:var(--charcoal)]"
      }`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`flex h-11 min-w-10 items-center justify-center tracking-[0.16em] transition-opacity ${
          lang === "en" ? "opacity-100" : "opacity-45 hover:opacity-80"
        }`}
      >
        EN
      </button>
      <span className="opacity-30">/</span>
      <button
        type="button"
        lang="ar"
        dir="rtl"
        onClick={() => setLang("ar")}
        className={`flex h-11 min-w-10 items-center justify-center font-arabic !tracking-[0px] transition-opacity ${
          lang === "ar" ? "opacity-100" : "opacity-45 hover:opacity-80"
        }`}
      >
        ع
      </button>
    </div>
  );
}

export function CatalogueHeader({ dark = false }: { dark?: boolean }) {
  const { lang } = useLang();
  const linkClass = dark
    ? "text-[color:var(--ivory)]/72 hover:text-[color:var(--ivory)]"
    : "text-[color:var(--charcoal)]/70 hover:text-[color:var(--charcoal)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${
        dark
          ? "border-[color:var(--ivory)]/10 bg-[color:var(--charcoal)]/82"
          : "border-[color:var(--border)]/72 bg-[color:var(--ivory)]/94"
      }`}
    >
      <div className="pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-[76px] max-w-[1680px] items-center justify-between px-5 md:h-[84px] md:px-10 xl:px-12">
          <a href="/" aria-label={OFFICIAL_LOGO_ALT} className="block shrink-0">
            <CatalogueLogo className="w-[124px] md:w-[154px]" />
          </a>

          <nav
            className={`hidden items-center gap-8 text-[0.64rem] font-medium uppercase ${
              lang === "ar" ? "!tracking-[0px]" : "tracking-[0.2em]"
            } md:flex`}
          >
            <a href="/" className={`transition-colors ${linkClass}`}>
              {lang === "ar" ? "الرئيسية" : "Home"}
            </a>
            <a href="/collections" className={`transition-colors ${linkClass}`}>
              {lang === "ar" ? "المجموعات" : "Collections"}
            </a>
            <a href="/#consultation" className={`transition-colors ${linkClass}`}>
              {lang === "ar" ? "استشارة خاصة" : "Private Appointment"}
            </a>
          </nav>

          <LanguageToggle light={dark} />
        </div>
      </div>
    </header>
  );
}

export function CatalogueFooter() {
  const { lang } = useLang();
  return (
    <footer className="bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-20">
        <div className="md:col-span-5">
          <CatalogueLogo className="w-[156px] md:w-[196px]" />
          <p className="mt-8 max-w-md font-display text-[2.25rem] font-light italic leading-[1.08] text-[color:var(--ivory)]/86 md:text-[3.2rem]">
            {lang === "ar"
              ? "كتالوغ خاص للمعاينة، بانتظار الصور النهائية للقطع."
              : "A private catalogue preview, ready for the final pieces."}
          </p>
        </div>

        <div className="flex flex-col gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--ivory)]/68 md:col-span-3 md:col-start-8">
          <a href="/collections" className="transition-colors hover:text-[color:var(--gold)]">
            {lang === "ar" ? "المجموعات" : "Collections"}
          </a>
          <a href="/#consultation" className="transition-colors hover:text-[color:var(--gold)]">
            {lang === "ar" ? "استشارة خاصة" : "Private Appointment"}
          </a>
          <a
            href="https://www.instagram.com/opal.stones?igsh=MWw0eWFsZG5xZWVybg=="
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[color:var(--gold)]"
          >
            Instagram
          </a>
        </div>

        <div className="text-[0.62rem] uppercase tracking-[0.2em] leading-[2] text-[color:var(--ivory)]/56 md:col-span-3 md:text-right">
          <div>{lang === "ar" ? "جدة / مواعيد خاصة" : "Jeddah / private appointments"}</div>
          <div className="mt-5 h-px w-16 bg-[color:var(--gold)]/45 md:ml-auto" />
          <div className="mt-5">
            © {new Date().getFullYear()} Opal Stones
            <br />
            {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </div>
        </div>
      </div>
    </footer>
  );
}
