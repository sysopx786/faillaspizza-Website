import { LANG_NAME, LANG_SHORT, otherLangs, useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 6" className={cn("shrink-0 rounded-[2px]", className)} aria-hidden>
      <rect width="9" height="6" fill="#c60b1e" />
      <rect y="1.5" width="9" height="3" fill="#ffc400" />
    </svg>
  );
}

function UsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 10" className={cn("shrink-0 rounded-[2px]", className)} aria-hidden>
      <rect width="19" height="10" fill="#bf0a30" />
      <rect y="1.1" width="19" height="1.1" fill="#fff" />
      <rect y="3.3" width="19" height="1.1" fill="#fff" />
      <rect y="5.5" width="19" height="1.1" fill="#fff" />
      <rect y="7.7" width="19" height="1.1" fill="#fff" />
      <rect width="7.6" height="5.4" fill="#002868" />
    </svg>
  );
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={cn("shrink-0 rounded-[2px]", className)} aria-hidden>
      <rect width="20" height="14" fill="#009b3a" />
      <polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="2.5" fill="#002776" />
    </svg>
  );
}

function LangFlag({ lang, className }: { lang: Lang; className?: string }) {
  if (lang === "es") return <SpainFlag className={className} />;
  if (lang === "pt") return <BrazilFlag className={className} />;
  return <UsFlag className={className} />;
}

export function LangCircles() {
  const { lang, setLang } = useI18n();
  const options = otherLangs(lang);
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-label={LANG_NAME[option]}
          className="inline-flex size-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-gold text-ink shadow-sm hover:bg-gold-soft sm:size-14"
        >
          <LangFlag lang={option} className="h-3.5 w-[1.05rem]" />
          <span className="text-[0.65rem] font-bold uppercase leading-none tracking-wide">
            {LANG_SHORT[option]}
          </span>
        </button>
      ))}
    </>
  );
}

export function LangChip({
  full = false,
  className,
}: {
  full?: boolean;
  className?: string;
}) {
  const { lang, setLang } = useI18n();
  const options = otherLangs(lang);
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex h-10 shrink-0 overflow-hidden rounded-lg bg-gold text-ink shadow-sm sm:h-11 sm:rounded-xl",
        className,
      )}
    >
      {options.map((option, i) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-label={LANG_NAME[option]}
          className={cn(
            "inline-flex h-full shrink-0 items-center justify-center gap-1 px-2.5 hover:bg-gold-soft sm:gap-2 sm:px-3",
            i === 0 && "border-r border-ink/25",
          )}
        >
          <LangFlag lang={option} className="h-3.5 w-[1.05rem] sm:h-4 sm:w-[1.2rem]" />
          <span className="whitespace-nowrap text-[0.65rem] font-bold uppercase tracking-wide sm:text-xs sm:tracking-[0.08em]">
            {full ? LANG_NAME[option] : LANG_SHORT[option]}
          </span>
        </button>
      ))}
    </div>
  );
}
