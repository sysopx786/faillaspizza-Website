import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Truck, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoodToKnow } from "@/components/good-to-know";
import { ReviewQuotes, ReviewSummary } from "@/components/reviews";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
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
              Phoenixville, Pennsylvania
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] text-cream sm:text-6xl">
              Home of the
              <span className="block italic text-gold-soft">Grandma Pizza</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">
              Family-owned Sicilian cooking — pan-baked pies, red-sauce classics,
              steaks, and salads. Walk in, call ahead, or order online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex"
              >
                <Button size="lg">Order Online</Button>
              </a>
              <a href={site.phoneHref}>
                <Button size="lg" variant="invert">
                  <Phone /> Call {site.phone}
                </Button>
              </a>
              <Link to="/menu">
                <Button size="lg" variant="ghost" className="border border-white/20">
                  View menu
                </Button>
              </Link>
            </div>
            <p className="mt-4 inline-flex items-center rounded-full border border-gold-soft/50 bg-ink/50 px-3.5 py-1.5 text-sm font-medium text-gold-soft">
              Pickup orders are fastest by phone.
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
              <span className="text-cream/70">{site.cityLine} · BYOB · patio</span>
            </p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Wine className="mt-0.5 size-4 text-gold-soft" />
            <p>
              <span className="block font-medium text-cream">Dine-in, takeout, delivery</span>
              <span className="text-cream/70">Catering van, tent & food trailer</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
              What people come back for
            </p>
            <h2 className="mt-2 font-display text-4xl">The regulars' order</h2>
          </div>
          <Link
            to="/menu"
            className="hidden items-center gap-1 text-sm font-medium text-tomato sm:inline-flex"
          >
            Full menu <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "/images/grandma-pie.webp",
              title: "Grandma Pie",
              text: "Crisp pan, fresh mozzarella, sauce the owner still crushes by hand.",
            },
            {
              src: "/images/failladelphia-stromboli.webp",
              title: "Failladelphia",
              text: "Ribeye, Cooper Sharp, smoked mozzarella, sesame crust. Steak or stromboli.",
            },
            {
              src: "/images/shrimp-pasta.webp",
              title: "Pasta & Parm",
              text: "Rosa shrimp, eggplant rollatini, chicken parm — the ristorante half of the sign.",
            },
            {
              src: "/images/burrata-salad.webp",
              title: "Salads",
              text: "Burrata, caprese, house Italian. Fresh, not an afterthought.",
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
              From the oven
            </p>
            <h2 className="mt-2 font-display text-4xl">Pies coming off the pass</h2>
            <p className="mt-4 text-cream/75">
              White and ranch, cheesesteak-fries, sausage and pepperoni, a
              straight cheese, BBQ lattice, then the Grandma. This is a Friday
              on the steel.
            </p>
            <Link to="/gallery" className="mt-6 inline-flex">
              <Button variant="gold">More from the kitchen</Button>
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
              The shop
            </p>
            <h2 className="mt-2 font-display text-4xl">Walk up to the counter</h2>
            <p className="mt-4 text-muted">
              Pies in the case, the kitchen behind the glass, merch on the wall.
              Order at the counter, sit down, or take it home — this is the room.
            </p>
            <Link to="/gallery" className="mt-6 inline-flex">
              <Button variant="outline">See the shop</Button>
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
            Sicily · Phoenixville
          </p>
          <h2 className="mt-2 font-display text-4xl">
            A family kitchen with a Sicilian backbone
          </h2>
          <p className="mt-4 text-muted">
            Failla's is family-owned, rooted in recipes from Sicily, and built
            for this town — weeknight takeout, Friday Grandma rushes, school
            catering, and a table if you walk in. No reservations. Generous
            portions. You're not a ticket number.
          </p>
          <Link to="/about" className="mt-6 inline-flex">
            <Button>Our story</Button>
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
              Catering & events
            </p>
            <h2 className="mt-2 font-display text-4xl">We come to you</h2>
            <p className="mt-4 text-cream/75">
              Delivery van, vendor tent, and a food trailer with pizza ovens and a
              full kitchen. Parties, schools, offices — call and we'll build the
              order.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/catering">
                <Button variant="gold">
                  <Truck /> Catering
                </Button>
              </Link>
              <a href={site.phoneHref}>
                <Button variant="invert">Call to book</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            Dine-in
          </p>
          <h2 className="mt-2 font-display text-4xl">Sit down. Stay for the pie.</h2>
          <p className="mt-4 text-muted">
            The dining room is small, bright, and busy — weeknights, birthdays,
            pizza still on the tray. Walk in, no reservations. Bring wine.
            Phone charging at the seat, QR for the menu while you wait.
          </p>
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
            Good to know
          </p>
          <h2 className="mt-2 font-display text-4xl">Before you come in</h2>
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
            <Button variant="outline">See all reviews on Google</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
