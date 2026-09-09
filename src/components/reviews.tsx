import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { googleRating, reviews } from "@/data/reviews";
import { site } from "@/lib/site";

function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${size} fill-gold`} />
      ))}
    </div>
  );
}

const featured = reviews.find((item) => item.name === "S. Marles") ?? reviews[0];

export function ReviewSummary() {
  return (
    <div className="overflow-hidden rounded-xl bg-ink text-cream">
      <div className="px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
          Google
        </p>

        <div className="mt-4 flex items-end gap-4">
          <p className="font-display text-7xl leading-none text-gold-soft">
            {googleRating.score}
          </p>
          <div className="mb-1">
            <Stars size="size-5" />
            <p className="mt-1 text-sm text-cream/70">
              {googleRating.count} reviews
            </p>
          </div>
        </div>

        <h2 className="mt-6 font-display text-3xl sm:text-4xl">
          People keep coming back
        </h2>
        <p className="mt-3 max-w-md text-cream/75">
          Phoenixville’s Grandma pie — and a dining room that treats you like
          family.
        </p>

        <blockquote className="mt-6 max-w-lg border-l-2 border-gold-soft/60 pl-4">
          <p className="font-display text-2xl italic leading-snug text-gold-soft">
            “{featured.quote}”
          </p>
          <footer className="mt-2 text-sm text-cream/60">
            {featured.name} · Google
          </footer>
        </blockquote>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <a
            href={site.googleListingUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="gold" className="w-full">
              Write a Google review
            </Button>
          </a>
          <a
            href={site.tripAdvisorReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="ghost" className="w-full border border-white/20">
              Write on TripAdvisor
            </Button>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 bg-cream px-5 py-5 sm:gap-6 sm:px-8">
        <img
          src="/images/best-of-2026.webp"
          alt="BusinessRate Best of 2026 — Pizza Restaurant, Phoenixville"
          className="h-28 w-auto sm:h-32"
        />
        <img
          src="/images/best-of-2025.webp"
          alt="BusinessRate Best of 2025 — Pizza Restaurant, Phoenixville"
          className="h-28 w-auto sm:h-32"
        />
      </div>
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
          <Stars />
          <p className="mt-3 text-sm leading-relaxed text-ink-2">“{item.quote}”</p>
          <footer className="mt-4 flex items-center justify-between gap-3 text-sm">
            <cite className="not-italic font-medium">{item.name}</cite>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-tomato hover:underline"
            >
              {item.source}
            </a>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
