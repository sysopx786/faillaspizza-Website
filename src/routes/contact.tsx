import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleListingCard } from "@/components/google-listing";
import { Input, Label, Textarea } from "@/components/ui/input";
import { PLAN_STORAGE_KEY } from "@/components/catering-planner";
import { site } from "@/lib/site";
import { formatClock, upcomingHolidays } from "@/lib/hours";
import { useOpenStatus, translateOpenStatus } from "@/components/hours-status";
import { useI18n } from "@/lib/i18n-provider";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: `Contact · ${site.name}` }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const status = useOpenStatus();
  const { t } = useI18n();
  const openCopy = translateOpenStatus(status, t);
  const nextHolidays = upcomingHolidays();

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(PLAN_STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as {
        name?: string;
        phone?: string;
        email?: string;
        message?: string;
      };
      if (saved.name) setName(saved.name);
      if (saved.phone) setPhone(saved.phone);
      if (saved.email) setEmail(saved.email);
      if (saved.message) setMessage(saved.message);
    } catch {
      /* ignore bad session data */
    }
  }, []);

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
          {t.findUs}
        </p>
        <h1 className="mt-2 font-display text-5xl">{t.contactTitle}</h1>
        <p className="mt-3 text-muted">{t.contactLead}</p>

        <ul className="mt-8 space-y-5 text-sm">
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-5 text-tomato" />
            <div>
              <a href={site.phoneHref} className="text-lg font-medium hover:underline">
                {site.phone}
              </a>
              <p className="text-muted">{t.dineTakeCater}</p>
            </div>
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 text-tomato" />
            <div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline"
              >
                {site.addressLine}
                <br />
                {site.cityLine}
              </a>
              <p className="text-muted">{t.cornerOf}</p>
            </div>
          </li>
          <li id="hours" className="flex scroll-mt-28 gap-3">
            <Clock className="mt-0.5 size-5 text-tomato" />
            <div>
              <p className="font-medium">
                {openCopy.headline}
                <span className="font-normal text-muted"> · {openCopy.detail}</span>
              </p>
              {status.holidayName ? (
                <p className="text-tomato">
                  {status.holidayName}
                  {status.holidayNote ? ` · ${status.holidayNote}` : ""}
                </p>
              ) : null}
              <ul className="mt-2">
                {site.hours.map((row) => (
                  <li key={row.days}>
                    <span className="font-medium">{row.days}:</span> {row.time}
                  </li>
                ))}
              </ul>
              {nextHolidays.length > 0 ? (
                <ul className="mt-2 text-muted">
                  {nextHolidays.map((row) => (
                    <li key={row.date}>
                      <span className="font-medium text-ink">{row.name}:</span>{" "}
                      {row.open && row.close
                        ? `${formatClock(row.open)} – ${formatClock(row.close)}`
                        : "Closed"}
                      {row.note ? ` · ${row.note}` : ""}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
          <li className="flex gap-3">
            <Wine className="mt-0.5 size-5 text-tomato" />
            <p>
              BYOB · kids' menu & high chairs · wheelchair accessible · free
              parking · dogs on the patio · cash discount 3.99%
            </p>
          </li>
        </ul>

        <iframe
          title="Map to Failla's Pizzeria & Ristorante"
          src={site.mapsEmbed}
          className="mt-8 h-64 w-full rounded-xl border border-line"
          loading="lazy"
        />

        <GoogleListingCard className="mt-6" />
      </div>

      <div className="rounded-xl bg-cream p-6 ring-1 ring-line sm:p-8">
        {sent ? (
          <div>
            <h2 className="font-display text-3xl">Got it</h2>
            <p className="mt-3 text-muted">
              Your mail app should have opened with the note filled in. If it
              didn't, call{" "}
              <a href={site.phoneHref} className="font-medium text-tomato">
                {site.phone}
              </a>
              .
            </p>
            {message ? (
              <p className="mt-4 rounded-md bg-paper p-4 text-sm text-ink-2">
                {name ? <span className="block font-medium">{name}</span> : null}
                {message}
              </p>
            ) : null}
            <a href={site.phoneHref} className="mt-6 inline-flex">
              <Button>Call now</Button>
            </a>
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const subject = encodeURIComponent(
                `Note from ${name} — faillaspizza.com`,
              );
              const body = encodeURIComponent(
                `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "(none)"}\n\n${message}`,
              );
              window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
              setSent(true);
            }}
          >
            <h2 className="font-display text-3xl">{t.sendNote}</h2>
            <p className="text-sm text-muted">
              {t.sendNoteLead}
              Catering, a question, a Friday Grandma pie for 20 — drop it here.
              Call if you need us the same hour.
            </p>
            <div className="space-y-1.5">
              <Label htmlFor="name">{t.labelName}</Label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">{t.labelPhone}</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">{t.labelEmail}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">{t.labelMessage}</Label>
              <Textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              {t.submit}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
