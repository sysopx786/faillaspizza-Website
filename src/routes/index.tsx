import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Truck, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoodToKnow } from "@/components/good-to-know";
import { ReviewQuotes, ReviewSummary } from "@/components/reviews";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useI18n();
  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-cream">
        <img
          src="/images/storefront-night.webp"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
        <div className="relative mx-auto flex min-h-[auto] max-w-6xl flex-col justify-start gap-8 px-4 py-12 sm:px-6 lg:min-h-[78vh] lg:flex-row lg:items-end lg:justify-between lg:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              {t.homeKicker}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] text-cream sm:text-6xl">
              {t.homeTitle1}
              <span className="block italic text-gold-soft">Grandma Pizza</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">
              {t.homeLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex"
              >
                <Button size="lg">{t.orderOnline}</Button>
              </a>
              <a href={site.phoneHref}>
                <Button size="lg" variant="invert">
                  <Phone /> {t.call} {site.phone}
                </Button>
              </a>
              <Link to="/menu">
                <Button size="lg" variant="ghost" className="border border-white/20">
                  {t.viewMenu}
                </Button>
              </Link>
            </div>
            <p className="mt-4 inline-flex items-center rounded-full border border-gold-soft/50 bg-ink/50 px-3.5 py-1.5 text-sm font-medium text-gold-soft">
              {t.pickupFastest}
            </p>
          </div>
          <div className="w-full max-w-sm overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:mb-2">
            <img
              src="/images/grandma-pie.webp"
              alt="Failla's Grandma pie"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink-2 text-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-5 sm:grid-cols-2 sm:px-6">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 size-4 text-gold-soft" />
            <p>
              <span className="block font-medium text-cream">{site.addressLine}</span>
              <span className="text-cream/70">{site.cityLine} · {t.byobPatio}</span>
            </p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Wine className="mt-0.5 size-4 text-gold-soft" />
            <p>
              <span className="block font-medium text-cream">{t.dineTakeDeliver}</span>
              <span className="text-cream/70">{t.cateringVanLine}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
              {t.regularsKicker}
            </p>
            <h2 className="mt-2 font-display text-4xl">{t.regularsTitle}</h2>
          </div>
          <Link
            to="/menu"
            className="hidden items-center gap-1 text-sm font-medium text-tomato sm:inline-flex"
          >
            {t.fullMenu} <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "/images/grandma-pie.webp",
              title: t.cardGrandma,
              text: t.cardGrandmaText,
            },
            {
              src: "/images/failladelphia-stromboli.webp",
              title: t.cardFailla,
              text: t.cardFaillaText,
            },
            {
              src: "/images/shrimp-pasta.webp",
              title: t.cardPasta,
              text: t.cardPastaText,
            },
            {
              src: "/images/burrata-salad.webp",
              title: t.cardSalads,
              text: t.cardSaladsText,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl bg-cream shadow-[0_1px_0_rgba(26,18,12,0.06)] ring-1 ring-line"
            >
              <img src={item.src} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t.ovenKicker}
            </p>
            <h2 className="mt-2 font-display text-4xl">{t.ovenTitle}</h2>
            <p className="mt-4 text-cream/75">{t.ovenLead}</p>
            <Link to="/gallery" className="mt-6 inline-flex">
              <Button variant="gold">{t.moreKitchen}</Button>
            </Link>
          </div>
          <video
            src="/videos/pies-on-the-pass.mp4"
            poster="/images/pies-on-the-pass.jpg"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            className="mx-auto max-h-[36rem] w-full max-w-md rounded-xl bg-ink object-contain"
          >
            Pies coming off the pass at Failla's
          </video>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
              {t.shopKicker}
            </p>
            <h2 className="mt-2 font-display text-4xl">{t.shopTitle}</h2>
            <p className="mt-4 text-muted">{t.shopLead}</p>
            <Link to="/gallery" className="mt-6 inline-flex">
              <Button variant="outline">{t.seeShop}</Button>
            </Link>
          </div>
          <div className="grid gap-3">
            <img
              src="/images/display-case.webp"
              alt="Pies in the display case at Failla's"
              className="w-full rounded-xl object-cover"
            />
            <img
              src="/images/pizza-counter.webp"
              alt="The pizza counter and kitchen behind the glass"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            {t.sicilyKicker}
          </p>
          <h2 className="mt-2 font-display text-4xl">{t.sicilyTitle}</h2>
          <p className="mt-4 text-muted">{t.sicilyLead}</p>
          <Link to="/about" className="mt-6 inline-flex">
            <Button>{t.ourStory}</Button>
          </Link>
        </div>
        <img
          src="/images/grandma-boxes.webp"
          alt="Boxed Grandma pies lined up for a Friday rush"
          className="w-full rounded-xl object-cover"
        />
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/delivery-van.webp"
            alt="Failla's delivery van, Home of the Grandma Pizza"
            className="order-2 w-full rounded-xl object-cover lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t.cateringHomeKicker}
            </p>
            <h2 className="mt-2 font-display text-4xl">{t.weCome}</h2>
            <p className="mt-4 text-cream/75">{t.weComeLead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/catering">
                <Button variant="gold">
                  <Truck /> {t.navCatering}
                </Button>
              </Link>
              <a href={site.phoneHref}>
                <Button variant="invert">{t.callToBook}</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            {t.dineinKicker}
          </p>
          <h2 className="mt-2 font-display text-4xl">{t.dineinTitle}</h2>
          <p className="mt-4 text-muted">{t.dineinLead}</p>
        </div>
        <div className="grid gap-4">
          <img
            src="/images/dining-room-inside.webp"
            alt="Inside the dining room from the host stand — stone half-wall, hanging greens, tables full"
            className="w-full rounded-xl object-cover"
          />
          <video
            src="/videos/dining-room-birthday.mp4"
            poster="/images/dining-room-birthday.jpg"
            controls
            playsInline
            preload="metadata"
            className="mx-auto max-h-[36rem] w-full max-w-md rounded-xl bg-ink object-contain"
          >
            A birthday in the dining room at Failla's
          </video>
          <img
            src="/images/table-charging.jpg"
            alt="Families dining at Failla's with table-side phone charging and QR menu"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section id="visit" className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            {t.gtkKicker}
          </p>
          <h2 className="mt-2 font-display text-4xl">{t.gtkTitle}</h2>
          <div className="mt-10">
            <GoodToKnow />
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <ReviewSummary />
          <div className="mt-8">
            <ReviewQuotes />
          </div>
          <a
            href={site.googleListingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex"
          >
            <Button variant="outline">{t.seeAllReviews}</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
