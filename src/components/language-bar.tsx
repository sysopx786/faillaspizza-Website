import { LANG_LETTER, LANG_NAME, type Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-provider";

function Flag({ lang }: { lang: Lang }) {
  if (lang === "en") {
    return (
      <svg viewBox="0 0 19 10" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
        <rect width="19" height="10" fill="#bf0a30" />
        <rect y="1.1" width="19" height="1.1" fill="#fff" />
        <rect y="3.3" width="19" height="1.1" fill="#fff" />
        <rect y="5.5" width="19" height="1.1" fill="#fff" />
        <rect y="7.7" width="19" height="1.1" fill="#fff" />
        <rect width="7.6" height="5.4" fill="#002868" />
      </svg>
    );
  }
  if (lang === "es") {
    return (
      <svg viewBox="0 0 9 6" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
        <rect width="9" height="6" fill="#c60b1e" />
        <rect y="1.5" width="9" height="3" fill="#ffc400" />
      </svg>
    );
  }
  if (lang === "it") {
    return (
      <svg viewBox="0 0 9 6" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
        <rect width="3" height="6" fill="#009246" />
        <rect x="3" width="3" height="6" fill="#fff" />
        <rect x="6" width="3" height="6" fill="#ce2b37" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
      <rect width="20" height="14" fill="#009b3a" />
      <polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="2.5" fill="#002776" />
    </svg>
  );
}

export function LanguageBar() {
  const { others, setLang, t } = useI18n();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-ink pb-[env(safe-area-inset-bottom)] text-cream">
      <div
        className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-4 py-2"
        role="group"
        aria-label={t.language}
      >
        {others.map((code: Lang) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className="relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/85 hover:opacity-90"
            aria-label={LANG_NAME[code]}
          >
            <span className="absolute inset-0">
              <Flag lang={code} />
            </span>
            <span className="relative z-10 rounded-sm bg-black/45 px-1 text-[0.7rem] font-bold tracking-wide text-white">
              {LANG_LETTER[code]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}