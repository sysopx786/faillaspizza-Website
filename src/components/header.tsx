import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { hiringOpen, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { LangChip } from "@/components/lang-switch";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useI18n();
  const links = [
    { to: "/", label: t.navHome },
    { to: "/menu", label: t.navMenu },
    { to: "/about", label: t.navAbout },
    { to: "/catering", label: t.navCatering },
    { to: "/gallery", label: t.navGallery },
    { to: "/contact", label: t.navContact },
    ...(hiringOpen ? [{ to: "/jobs", label: t.navJobs }] : []),
  ];

  return (
    <header className="border-b border-white/10 bg-ink text-cream">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt="Failla's Pizzeria & Restaurant"
            className="h-12 w-12 shrink-0 rounded-md object-cover"
          />
          <span className="leading-tight">
            <span className="font-display text-xl tracking-tight text-gold-soft">
              Failla's
            </span>
            <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cream/70">
              Pizzeria & Ristorante
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.to
                  ? "text-gold-soft"
                  : "text-cream/80 hover:text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-4">
          <LangChip full className="hidden sm:inline-flex" />
          <a href={site.phoneHref} className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-cream">
              <Phone />
              {site.phone}
            </Button>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-cream lg:hidden"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink-2">
        <div className="mx-auto flex max-w-6xl items-center gap-1.5 px-4 py-2.5 sm:gap-2 sm:px-6">
          <a href={site.orderUrl} target="_blank" rel="noreferrer">
            <Button variant="tomato" size="sm">
              {t.orderOnline}
            </Button>
          </a>
          <a href={site.doorDashUrl} target="_blank" rel="noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="border border-white/25 px-3 text-cream"
            >
              {t.doorDash}
            </Button>
          </a>
          <a href={site.uberEatsUrl} target="_blank" rel="noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="border border-white/25 px-3 text-cream"
            >
              {t.uberEats}
            </Button>
          </a>
          <a
            href={site.phoneHref}
            aria-label={`${t.call} ${site.phone}`}
            title={t.callForPickup}
            className="ml-auto inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2ea44f] text-white hover:bg-[#249344]"
          >
            <Phone className="size-5" />
          </a>
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
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="rounded-md px-3 py-3 text-base text-cream">
              {t.call} {site.phone}
            </a>
            <LangChip full className="mt-3 h-12 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
