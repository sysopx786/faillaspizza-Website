import { createFileRoute } from "@tanstack/react-router";
import { AwardBadges } from "@/components/reviews";
import { GoogleListingCard } from "@/components/google-listing";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n-provider";

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
          <h1 className="mt-3 max-w-3xl font-display text-5xl">{t.aboutTitle}</h1>
          <a
            href={site.featuredBlogUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-medium text-gold-soft underline decoration-gold-soft/50 underline-offset-4 hover:text-cream"
          >
            {t.featuredItalian}
          </a>
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
          <div className="mt-8">
            <AwardBadges />
          </div>
        </div>
      </section>
    </main>
  );
}
