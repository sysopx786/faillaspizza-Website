import { Star } from "lucide-react";
import { googleRating, reviews } from "@/data/reviews";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n-provider";
import { GoogleG, TripAdvisorOwl, YelpBurst } from "@/components/brand-marks";

function GoogleStars({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(1, Math.max(0, score - i));
        return (
          <span key={i} className="relative inline-block size-5">
            <Star className="absolute inset-0 size-5 text-[#e0e0e0]" fill="#e0e0e0" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="size-5 text-[#fbbc04]" fill="#fbbc04" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function ReviewHistogram() {
  const { t } = useI18n();
  return (
    <div className="font-sans text-[#202124]">
      <div className="flex items-center gap-3">
        <GoogleG className="h-7 w-7" />
        <p className="text-lg font-medium">{t.googleReviewSummary}</p>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-6">
        <div className="space-y-1.5">
          {googleRating.bars.map((bar) => (
            <div key={bar.stars} className="flex items-center gap-2">
              <span className="w-3 text-right text-sm text-[#5f6368]">{bar.stars}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#e8eaed]">
                <div
                  className="h-full rounded-full bg-[#fbbc04]"
                  style={{ width: `${bar.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-6xl font-normal leading-none tracking-tight">{googleRating.score}</p>
          <div className="mt-2 flex justify-center">
            <GoogleStars score={googleRating.fill} />
          </div>
          <p className="mt-1 text-sm text-[#5f6368]">({googleRating.count})</p>
        </div>
      </div>
    </div>
  );
}

const featured = reviews.find((item) => item.name === "S. Marles") ?? reviews[0];

export function ReviewSummary() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden rounded-2xl bg-white text-[#202124] shadow-[0_1px_3px_rgba(60,64,67,.3),0_4px_8px_3px_rgba(60,64,67,.15)]">
      <div className="px-5 py-7 sm:px-8 sm:py-9">
        <ReviewHistogram />

        <p className="mt-8 text-xl leading-snug text-[#3c4043]">
          “{featured.quote}”
        </p>
        <p className="mt-2 text-sm text-[#5f6368]">
          {featured.name} · Google
        </p>

        <div className="mt-8 grid gap-3">
          <a
            href={site.googleListingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#1a73e8] px-5 py-3.5 text-base font-medium leading-snug text-white hover:bg-[#1765cc]"
          >
            <GoogleG className="h-6 w-6 shrink-0" />
            {t.writeGoogleReview}
          </a>
          <a
            href={site.tripAdvisorReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#00aa6c] px-5 py-3.5 text-base font-medium leading-snug text-white hover:brightness-110"
          >
            <TripAdvisorOwl className="h-6 w-6 shrink-0" />
            {t.writeTripAdvisor}
          </a>
          <a
            href={site.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#d32323] px-5 py-3.5 text-base font-medium leading-snug text-white hover:brightness-110"
          >
            <YelpBurst className="h-6 w-6 shrink-0" />
            {t.checkYelp}
          </a>
        </div>
      </div>
    </div>
  );
}

export function AwardBadges() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <img
        src="/images/best-of-2026.jpg"
        alt="BusinessRate Best of 2026 — Pizza Restaurant, Phoenixville"
        className="w-full rounded-xl bg-ink object-contain"
      />
      <img
        src="/images/best-of-2025.jpg"
        alt="BusinessRate Best of 2025 — Pizza Restaurant, Phoenixville"
        className="w-full rounded-xl bg-ink object-contain"
      />
    </div>
  );
}

export function ReviewQuotes() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {reviews.map((item) => (
        <blockquote
          key={item.name}
          className="rounded-xl bg-cream p-5 ring-1 ring-line"
        >
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-4 fill-[#fbbc04] text-[#fbbc04]" />
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">“{item.quote}”</p>
          <footer className="mt-4 flex items-center justify-between gap-3 text-sm">
            <cite className="not-italic font-medium">{item.name}</cite>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-[#1a73e8] hover:underline"
            >
              {item.source}
            </a>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}