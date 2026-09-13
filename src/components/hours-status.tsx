import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";
import { hoursLabelsFromCopy, loc, useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function useOpenStatus() {
  const { lang, t } = useI18n();
  const [status, setStatus] = useState<OpenStatus>(() => getOpenStatus());

  useEffect(() => {
    const labels = hoursLabelsFromCopy(t);
    const tick = () => setStatus(getOpenStatus(new Date(), undefined, undefined, labels));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [lang, t]);

  return status;
}

export function HoursStatusBar() {
  const { t } = useI18n();
  const status = useOpenStatus();
  const holidayName =
    status.holidayName === "Labor Day" ? t.holidayLaborDay : status.holidayName;

  return (
    <div className="border-b border-white/10 bg-ink-2 text-cream">
      <a
        href="#hours"
        className="mx-auto flex min-h-11 max-w-6xl items-center gap-2.5 px-4 text-sm sm:px-6"
      >
        <span
          className={cn(
            "size-2 shrink-0 rounded-full",
            status.isOpen ? "bg-gold" : "bg-cream/35",
          )}
          aria-hidden
        />
        <span className="font-medium">{status.headline}</span>
        <span className="truncate text-cream/70">· {status.detail}</span>
        {holidayName ? (
          <span className="ml-auto hidden shrink-0 text-gold-soft sm:inline">
            {holidayName}
          </span>
        ) : null}
      </a>
    </div>
  );
}

export function holidayLabel(name: string | undefined, t: { holidayLaborDay: string }) {
  if (!name) return name;
  return name === "Labor Day" ? t.holidayLaborDay : name;
}

export function holidayNoteLabel(note: string | undefined, lang: Lang) {
  if (!note) return note;
  if (note.includes("differ") || note.includes("call to confirm")) {
    return loc(
      lang,
      note,
      "El horario puede variar — llame para confirmar",
      "O horário pode mudar — ligue para confirmar",
    );
  }
  return note;
}
