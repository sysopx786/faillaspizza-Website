import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Tent, Truck, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/catering")({
  component: CateringPage,
  head: () => ({
    meta: [{ title: `Catering · ${site.name}` }],
  }),
});

function CateringPage() {
  return (
    <main>
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Parties · Schools · Offices
            </p>
            <h1 className="mt-3 font-display text-5xl">Catering, tent & trailer</h1>
            <p className="mt-4 max-w-lg text-cream/75">
              Grandma pies by the box, trays of pasta, and a crew that already
              does school dinners and weekend events. Call the shop — we'll
              size it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref}>
                <Button size="lg">
                  <Phone /> {site.phone}
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="invert">
                  Send a note
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="/images/delivery-van.webp"
            alt="Failla's catering and delivery van"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-3 sm:px-6">
        {[
          {
            icon: Truck,
            title: "Delivery van",
            text: "Hot food to the house, office, or field. Same kitchen, same Grandma pie.",
          },
          {
            icon: Tent,
            title: "Vendor tent",
            text: "We set up at town events and private parties. Portable ovens and a generator if you need us on-site.",
            image: {
              src: "/images/vendor-tent.webp",
              alt: "Failla's vendor tent — Home of the Grandma Pizza, set up for an event",
            },
          },
          {
            icon: Utensils,
            title: "Food trailer",
            text: "Full kitchen and pizza ovens on wheels — for bigger parties and festivals.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-xl bg-cream ring-1 ring-line"
          >
            {"image" in item && item.image ? (
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="aspect-[4/5] w-full object-cover"
              />
            ) : null}
            <div className="p-6">
              <item.icon className="size-6 text-tomato" />
              <h2 className="mt-4 font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <video
            src="/videos/delivery-van.mp4"
            poster="/images/delivery-van-video.jpg"
            controls
            playsInline
            preload="metadata"
            className="mx-auto max-h-[36rem] w-full max-w-md rounded-xl bg-ink object-contain"
          >
            Failla's delivery van
          </video>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
              On the road
            </p>
            <h2 className="mt-2 font-display text-4xl">The van</h2>
            <p className="mt-4 text-muted">
              Wrapped and running — catering, takeout, dine-in, delivery. Call
              the shop and we'll send it out.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <video
            src="/videos/catering-trays.mp4"
            poster="/images/catering-trays.jpg"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            className="max-h-[32rem] w-full rounded-xl bg-ink object-contain"
          >
            Catering trays of pasta and salad from Failla's
          </video>
          <div>
            <h2 className="font-display text-4xl">What we send out</h2>
            <ul className="mt-4 space-y-2 text-ink-2">
              <li>Grandma pies — the move for any crowd</li>
              <li>Tray pasta, parm, salads, and Stromboli</li>
              <li>School and office dinners (we already do teacher nights)</li>
              <li>On-site service with the tent or trailer</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Tell us the headcount, date, and whether you need drop-off or
              someone working the oven. We'll quote it on the phone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
