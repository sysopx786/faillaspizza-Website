import { createFileRoute } from "@tanstack/react-router";
import { GoogleListingCard } from "@/components/google-listing";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: `About · ${site.name}` }],
  }),
});

function AboutPage() {
  return (
    <main>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Our story
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl">
            Sicily in the recipes. Phoenixville in the dining room.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-ink-2">
          <p>
            Failla's Pizzeria & Ristorante is a family-owned kitchen on
            Charlestown Road, in the old Stables Bar building. The cooking comes
            from Sicily — the largest island in the Mediterranean, and the place
            generations of the family learned to feed people.
          </p>
          <p>
            We opened this room to do two things well: a serious Grandma pie,
            and the rest of an Italian menu that doesn't phone it in. Sauce
            is made here. The plum tomatoes on the Grandma are still crushed by
            hand in the back. Gelato is made by the family. Portions are the
            size your grandmother would call correct.
          </p>
          <p>
            The dining room is small, bright, and busy with takeout. That's
            the point. Walk in. Bring wine — we're BYOB. Sit on the patio
            with the dog if the weather's decent. Friday nights the Grandma
            pies go out in stacks. If you want one, order a little early.
          </p>
          <p>
            We cook for this town: school dinners, weekend pies, the cheesesteak
            that is not a side note. If you grew up on this kind of food, you
            already know the taste. If you didn't, start with the Grandma.
          </p>
        </div>
        <div className="grid gap-4">
          <video
            src="/videos/grandma-making.mp4"
            poster="/images/grandma-making.jpg"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            className="max-h-[28rem] w-full rounded-xl bg-ink object-contain"
          >
            Making a Grandma pie in the Failla's kitchen
          </video>
          <img
            src="/images/grandma-pie-overhead.webp"
            alt="Grandma pie overhead, sauce on top, basil"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <GoogleListingCard className="max-w-xl" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <img
              src="/images/best-of-2026.webp"
              alt="BusinessRate Best of 2026 — Pizza Restaurant, Phoenixville"
              className="h-28 w-auto sm:h-32"
            />
            <img
              src="/images/best-of-2025.webp"
              alt="BusinessRate Best of 2025 — Pizza Restaurant, Phoenixville"
              className="h-28 w-auto sm:h-32"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
