import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-provider";
import { GoogleG, TripAdvisorOwl } from "@/components/brand-marks";

export function GoogleListingCard({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 text-[#202124] shadow-[0_1px_3px_rgba(60,64,67,.3),0_4px_8px_3px_rgba(60,64,67,.15)]",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <GoogleG className="h-7 w-7" />
        <p className="text-sm font-medium text-[#5f6368]">Google</p>
      </div>
      <h2 className="mt-3 text-2xl font-normal tracking-tight text-[#202124] sm:text-3xl">
        {t.googleListingTitle}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#5f6368]">{t.googleListingLead}</p>
      <div className="mt-5 grid gap-3">
        <a
          href={site.googleListingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#1a73e8] px-5 py-3.5 text-base font-medium leading-snug text-white hover:bg-[#1765cc]"
        >
          <GoogleG className="h-6 w-6 shrink-0" />
          {t.openGoogleListing}
        </a>
        <a
          href={site.tripAdvisorUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#00aa6c] px-5 py-3.5 text-base font-medium leading-snug text-white hover:brightness-110"
        >
          <TripAdvisorOwl className="h-6 w-6 shrink-0" />
          {t.alsoTripAdvisor}
        </a>
      </div>
    </div>
  );
}