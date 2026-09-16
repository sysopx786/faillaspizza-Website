import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";
import { DAY_KEYS, type Copy } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-provider";
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

export function translateOpenStatus(status: OpenStatus, t: Copy) {
  const headline = status.isOpen ? t.openNow : t.closed;
  let detail = t.callForHours;
  if (status.isOpen && status.untilClock) {
    detail = `${t.until} ${status.untilClock}`;
  } else if (status.opensWhen === "today" && status.opensClock) {
    detail = `${t.opens} ${status.opensClock}`;
  } else if (status.opensWhen === "tomorrow" && status.opensClock) {
    detail = `${t.opens} ${t.tomorrow} ${status.opensClock}`;
  } else if (
    status.opensWhen === "weekday" &&
    status.opensClock &&
    status.opensWeekday != null
  ) {
    detail = `${t.opens} ${t[DAY_KEYS[status.opensWeekday]]} ${status.opensClock}`;
  }
  return { headline, detail };
}

export function HoursStatusChip() {
  const status = useOpenStatus();
  const { t } = useI18n();
  const { headline, detail } = translateOpenStatus(status, t);

  return (
    <a
      href="#hours"
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 rounded-full px-2.5 py-1.5 text-left text-[0.7rem] font-semibold leading-tight sm:px-3 sm:text-sm",
        status.isOpen
          ? "flash-open bg-[#2ea44f] text-white"
          : "flash-closed bg-tomato text-cream",
      )}
    >
      <span
        className={cn(
          "size-2.5 shrink-0 rounded-full ring-2 ring-white/70",
          status.isOpen ? "bg-white" : "bg-cream",
        )}
        aria-hidden
      />
      <span className="min-w-0">
        {headline}
        <span className="font-medium"> · {detail}</span>
      </span>
    </a>
  );
}
