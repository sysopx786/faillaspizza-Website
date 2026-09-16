import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { hiringOpen, nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { HoursStatusChip } from "@/components/hours-status";
import { useI18n } from "@/lib/i18n-provider";
import { cn } from "@/lib/utils";

const NAV_COPY = {
  "/": "navHome",
  "/menu": "navMenu",
  "/about": "navAbout",
  "/catering": "navCatering",
  "/gallery": "navGallery",
  "/contact": "navContact",
  "/jobs": "navJobs",
} as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useI18n();
  const links = hiringOpen ? [...nav, { to: "/jobs", label: "Jobs" }] : [...nav];

  return (
    <header className="border-b border-white/10 bg-ink text-cream">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-2 px-3 py-2 sm:min-h-[4.5rem] sm:gap-3 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt="Failla's Pizzeria & Restaurant"
            className="h-11 w-11 shrink-0 rounded-md object-cover sm:h-12 sm:w-12"
          />
          <span className="hidden leading-tight min-[360px]:block">
            <span className="font-display text-lg tracking-tight text-gold-soft sm:text-xl">
              Failla's
            </span>
            <span className="block text-[0.6rem] font-medium uppercase tracking-[0.16em] text-cream/70 sm:text-[0.65rem]">
              Pizzeria & Ristorante
            </span>
          </span>
        </Link>

        <div className="min-w-0 flex-1">
          <HoursStatusChip />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.to ? "text-gold-soft" : "text-cream/80 hover:text-cream",
              )}
            >
              {t[NAV_COPY[item.to as keyof typeof NAV_COPY]]}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-cream lg:hidden"
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div className="border-t border-white/10 bg-ink-2">
        <div className="mx-auto max-w-6xl px-3 py-2 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="grid min-w-0 flex-1 grid-cols-3 gap-2">
              <a href={site.orderUrl} target="_blank" rel="noreferrer" className="min-w-0">
                <Button variant="tomato" size="sm" className="h-11 w-full px-1.5 text-xs sm:text-sm">
                  {t.orderOnline}
                </Button>
              </a>
              <a href={site.doorDashUrl} target="_blank" rel="noreferrer" className="min-w-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-11 w-full border border-white/25 px-1.5 text-xs text-cream sm:text-sm"
                >
                  DoorDash
                </Button>
              </a>
              <a href={site.uberEatsUrl} target="_blank" rel="noreferrer" className="min-w-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-11 w-full border border-white/25 px-1.5 text-xs text-cream sm:text-sm"
                >
                  Uber Eats
                </Button>
              </a>
            </div>
            <a
              href={site.phoneHref}
              aria-label={`${t.call} ${site.phone} for pickup`}
              title={t.pickupFastest}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#2ea44f] text-white shadow-[0_0_12px_rgb(46_164_79_/_0.55)] hover:brightness-110"
            >
              <Phone className="size-5" />
            </a>
          </div>
          <p className="flash-pickup mt-2 text-center text-base font-extrabold tracking-wide text-[#ffe9a8] sm:text-lg">
            {t.pickupFastest}
          </p>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink-2 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base",
                  pathname === item.to ? "bg-white/10 text-gold-soft" : "text-cream",
                )}
              >
                {t[NAV_COPY[item.to as keyof typeof NAV_COPY]]}
              </Link>
            ))}
            <a href={site.phoneHref} className="rounded-md px-3 py-3 text-base text-cream">
              {t.call} {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
