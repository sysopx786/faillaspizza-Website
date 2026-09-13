import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { hiringOpen, site } from "@/lib/site";
import { formatClock, hoursDisplayRows, upcomingHolidays } from "@/lib/hours";
import { hoursLabelsFromCopy, useI18n } from "@/lib/i18n";
import { holidayLabel, holidayNoteLabel } from "@/components/hours-status";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const { lang, t } = useI18n();
  const labels = hoursLabelsFromCopy(t);
  const links = [
    { to: "/", label: t.navHome },
    { to: "/menu", label: t.navMenu },
    { to: "/about", label: t.navAbout },
    { to: "/catering", label: t.navCatering },
    { to: "/gallery", label: t.navGallery },
    { to: "/contact", label: t.navContact },
    ...(hiringOpen ? [{ to: "/jobs", label: t.navJobs }] : []),
  ];
  const nextHolidays = upcomingHolidays();
  const hourRows = hoursDisplayRows(undefined, labels);

  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="h-1.5 w-full bg-gold" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-gold-soft">Failla's</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-cream/60">
            Pizzeria & Ristorante
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">{t.footerBlurb}</p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div id="hours" className="scroll-mt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">{t.visit}</p>
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
            <a href={site.phoneHref} className="mt-3 flex items-center gap-2 hover:text-cream">
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
            {t.hoursGoogle}
          </a>
          <a
            href={site.tripAdvisorUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 block text-sm text-gold-soft hover:text-gold"
          >
            {t.reviewsTripAdvisor}
          </a>
          <ul className="mt-4 space-y-1 text-sm text-cream/70">
            {hourRows.map((row) => (
              <li key={row.days}>
                <span className="text-cream/90">{row.days}</span>
                <span className="block">{row.time}</span>
              </li>
            ))}
          </ul>
          {nextHolidays.length > 0 ? (
            <ul className="mt-3 space-y-1 border-t border-white/10 pt-3 text-sm text-cream/70">
              {nextHolidays.map((row) => (
                <li key={row.date}>
                  <span className="text-gold-soft">{holidayLabel(row.name, t)}</span>
                  <span className="block">
                    {row.open && row.close
                      ? `${formatClock(row.open)} – ${formatClock(row.close)}`
                      : t.closed}
                    {row.note ? ` · ${holidayNoteLabel(row.note, lang)}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">{t.explore}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.orderUrl} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream">
                {t.orderOnline}
              </a>
            </li>
            <li>
              <a href={site.doorDashUrl} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream">
                {t.doorDash}
              </a>
            </li>
            <li>
              <a href={site.uberEatsUrl} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream">
                {t.uberEats}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Failla's Pizzeria & Ristorante · Phoenixville, PA · {t.footerByob}
      </div>
    </footer>
  );
}
