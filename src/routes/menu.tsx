import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, disclaimer } from "@/data/menu";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [{ title: `Menu · ${site.name}` }],
  }),
});

function MenuPage() {
  const [active, setActive] = useState("all");
  const visible = useMemo(
    () => (active === "all" ? categories : categories.filter((c) => c.id === active)),
    [active],
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            Dine-in · Takeout · Catering
          </p>
          <h1 className="mt-2 font-display text-5xl">Menu</h1>
          <p className="mt-2 max-w-xl text-muted">
            Grandma pie first. Then everything else a neighborhood Italian kitchen
            should do. Prices from our July 2025 menu.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={site.orderUrl} target="_blank" rel="noreferrer">
            <Button>Order Online</Button>
          </a>
          <a href={site.menuPdf} target="_blank" rel="noreferrer">
            <Button variant="outline">
              <Download /> PDF menu
            </Button>
          </a>
        </div>
      </div>

      <div className="sticky top-52 z-20 -mx-4 mt-8 border-y border-line bg-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:px-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <Chip active={active === "all"} onClick={() => setActive("all")}>
            All
          </Chip>
          {categories.map((c) => (
            <Chip
              key={c.id}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            >
              {c.name}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {visible.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="font-display text-3xl">{cat.name}</h2>
            {cat.note ? (
              <p className="mt-2 max-w-2xl text-sm text-muted">{cat.note}</p>
            ) : null}
            <ul className="mt-5 divide-y divide-line border-t border-line">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4"
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-medium">{item.name}</h3>
                      {item.featured ? (
                        <span className="rounded-full bg-tomato/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-tomato">
                          Favorite
                        </span>
                      ) : null}
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-paper-2 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {item.description ? (
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    ) : null}
                  </div>
                  {item.price ? (
                    <p className="text-right text-sm font-medium tabular-nums text-ink-2">
                      {item.price}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-3xl text-xs leading-relaxed text-muted">{disclaimer}</p>
    </main>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 shrink-0 rounded-full px-4 text-sm font-medium transition-colors",
        active ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-line",
      )}
    >
      {children}
    </button>
  );
}
