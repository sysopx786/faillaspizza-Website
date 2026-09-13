import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function GoogleListingCard({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={cn("rounded-xl bg-cream p-6 ring-1 ring-line", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tomato">Google</p>
      <h2 className="mt-2 flex items-center gap-2 font-display text-2xl sm:text-3xl">
        <Star className="size-5 shrink-0 fill-gold text-gold" aria-hidden />
        {t.googleHoursTitle}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{t.googleHoursLead}</p>
      <a href={site.googleListingUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex">
        <Button>{t.openGoogleListing}</Button>
      </a>
      <a
        href={site.tripAdvisorUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block text-sm font-medium text-tomato hover:underline"
      >
        {t.alsoTripAdvisor}
      </a>
    </div>
  );
}
