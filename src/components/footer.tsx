import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { hiringOpen, nav, site } from "@/lib/site";
import { formatClock, upcomingHolidays } from "@/lib/hours";
import { SocialLinks } from "@/components/social-links";
import { useI18n } from "@/lib/i18n-provider";

export function Footer() {
  const { t } = useI18n();
  const links = hiringOpen ? [...nav, { to: "/jobs", label: "Jobs" }] : [...nav];
  const nextHolidays = upcomingHolidays();
  const daySwap = [
    ["Sunday", t.sunday],
    ["Monday", t.monday],
    ["Tuesday", t.tuesday],
    ["Wednesday", t.wednesday],
    ["Thursday", t.thursday],
    ["Friday", t.friday],
    ["Saturday", t.saturday],
    ["Closed", t.closed],
  ] as const;
  const trDays = (value: string) =>
    daySwap.reduce((acc, [en, local]) => acc.replaceAll(en, local), value);

  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="h-1.5 w-full bg-gold" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-gold-soft">Failla's</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-cream/60">
            Pizzeria & Ristorante
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            {t.footerBlurb}
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div id="hours" className="scroll-mt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            {t.visit}
          </p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-cream/80">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start gap-2 hover:text-cream"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {site.addressLine}
                <br />
                {site.cityLine}
              </span>
            </a>
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center gap-2 hover:text-cream"
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
          </address>
          <a
            href={site.googleListingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-gold-soft hover:text-gold"
          >
            {t.googleHoursReviews}
          </a>
          <a
            href={site.tripAdvisorUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 block text-sm text-gold-soft hover:text-gold"
          >
            {t.reviewsOnTA}
          </a>
          <a
            href={site.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 block text-sm text-gold-soft hover:text-gold"
          >
            Yelp
          </a>
          <ul className="mt-4 space-y-1 text-sm text-cream/70">
            {site.hours.map((row) => (
              <li key={row.days}>
                <span className="text-cream/90">{trDays(row.days)}</span>
                <span className="block">{trDays(row.time)}</span>
              </li>
            ))}
          </ul>
          {nextHolidays.length > 0 ? (
            <ul className="mt-3 space-y-1 border-t border-white/10 pt-3 text-sm text-cream/70">
              {nextHolidays.map((row) => (
                <li key={row.date}>
                  <span className="text-gold-soft">{row.name}</span>
                  <span className="block">
                    {row.open && row.close
                      ? `${formatClock(row.open)} – ${formatClock(row.close)}`
                      : "Closed"}
                    {row.note ? ` · ${row.note}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            {t.explore}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 hover:text-cream">
                  {
                    (
                      {
                        "/": t.navHome,
                        "/menu": t.navMenu,
                        "/about": t.navAbout,
                        "/catering": t.navCatering,
                        "/gallery": t.navGallery,
                        "/contact": t.navContact,
                        "/jobs": t.navJobs,
                      } as Record<string, string>
                    )[item.to]
                  }
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 hover:text-cream"
              >
                {t.orderOnline}
              </a>
            </li>
            <li>
              <a
                href={site.doorDashUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 hover:text-cream"
              >
                DoorDash
              </a>
            </li>
            <li>
              <a
                href={site.uberEatsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 hover:text-cream"
              >
                Uber Eats
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Failla's Pizzeria & Ristorante · Phoenixville, PA · BYOB
      </div>
    </footer>
  );
}
