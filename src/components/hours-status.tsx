import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function useOpenStatus() {
  const [status, setStatus] = useState<OpenStatus>(() => getOpenStatus());

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}

export function HoursStatusBar() {
  const status = useOpenStatus();

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
        {status.holidayName ? (
          <span className="ml-auto hidden shrink-0 text-gold-soft sm:inline">
            {status.holidayName}
          </span>
        ) : null}
      </a>
    </div>
  );
}
