import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { hiringOpen, site } from "@/lib/site";

export const Route = createFileRoute("/jobs")({
  component: JobsPage,
  head: () => ({
    meta: [{ title: `Jobs · ${site.name}` }],
  }),
});

function JobsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
        Careers
      </p>
      <h1 className="mt-2 font-display text-5xl">Work at Failla's</h1>

      {hiringOpen ? (
        <>
          <p className="mt-4 text-muted">
            We're looking for people who like a busy kitchen, a full dining
            room on Friday, and food they'd eat themselves. Apply online —
            or walk in and ask for a manager.
          </p>
          <ul className="mt-8 space-y-3 text-ink-2">
            <li>Front of house & takeout</li>
            <li>Kitchen</li>
            <li>Delivery</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.applyUrl} target="_blank" rel="noreferrer">
              <Button size="lg">Apply now</Button>
            </a>
            <a href={site.phoneHref}>
              <Button size="lg" variant="outline">
                Call {site.phone}
              </Button>
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="mt-4 text-muted">
            We're not listing openings right now. Check back, or leave your
            name with the shop.
          </p>
          <Link to="/contact" className="mt-8 inline-flex">
            <Button variant="outline">Contact us</Button>
          </Link>
        </>
      )}
    </main>
  );
}
