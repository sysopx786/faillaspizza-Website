import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { hiringOpen, site } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/jobs")({
  component: JobsPage,
  head: () => ({
    meta: [{ title: `Jobs · ${site.name}` }],
  }),
});

function JobsPage() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
        {t.jobsKicker}
      </p>
      <h1 className="mt-2 font-display text-5xl">{t.jobsTitle}</h1>

      {hiringOpen ? (
        <>
          <p className="mt-4 text-muted">{t.jobsLead}</p>
          <ul className="mt-8 space-y-3 text-ink-2">
            <li>{t.jobFoh}</li>
            <li>{t.jobKitchen}</li>
            <li>{t.jobDelivery}</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.applyUrl} target="_blank" rel="noreferrer">
              <Button size="lg">{t.applyNow}</Button>
            </a>
            <a href={site.phoneHref}>
              <Button size="lg" variant="outline">
                {t.call} {site.phone}
              </Button>
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="mt-4 text-muted">{t.jobsClosed}</p>
          <Link to="/contact" className="mt-8 inline-flex">
            <Button variant="outline">{t.contactUs}</Button>
          </Link>
        </>
      )}
    </main>
  );
}
