import { createFileRoute } from "@tanstack/react-router";
import { GoogleListingCard } from "@/components/google-listing";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: `About · ${site.name}` }],
  }),
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <main>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {t.aboutKicker}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl">
            {t.aboutTitle}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-ink-2">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <p>{t.aboutP3}</p>
          <p>{t.aboutP4}</p>
        </div>
        <div className="grid gap-4">
          <video
            src="/videos/grandma-making.mp4"
            poster="/images/grandma-making.jpg"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            className="max-h-[28rem] w-full rounded-xl bg-ink object-contain"
          >
            Making a Grandma pie in the Failla's kitchen
          </video>
          <img
            src="/images/grandma-pie-overhead.webp"
            alt="Grandma pie overhead, sauce on top, basil"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <GoogleListingCard className="max-w-xl" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
      </section>
    </main>
  );
}
