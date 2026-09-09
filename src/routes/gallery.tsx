import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/data/photos";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: `Gallery · ${site.name}` }],
  }),
});

const filters = [
  { id: "all", label: "All" },
  { id: "video", label: "Videos" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "salad", label: "Salads" },
  { id: "plates", label: "Plates" },
  { id: "shop", label: "The shop" },
] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(() => {
    if (filter === "all") return photos;
    if (filter === "video") return photos.filter((p) => p.kind === "video");
    return photos.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
        From the kitchen
      </p>
      <h1 className="mt-2 font-display text-5xl">Gallery</h1>
      <p className="mt-2 max-w-xl text-muted">
        Real plates from Failla's — kitchen videos, Grandma pies, salads, pasta,
        the dining room, the van, the night sign.
      </p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 shrink-0 rounded-full px-4 text-sm font-medium",
              filter === f.id ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-line",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {list.map((photo) => (
          <li key={photo.src} className="mb-4 break-inside-avoid">
            <figure className="overflow-hidden rounded-xl bg-paper-2 ring-1 ring-line">
              {photo.kind === "video" ? (
                <video
                  src={photo.src}
                  poster={photo.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="mx-auto max-h-[32rem] w-full bg-ink object-contain"
                >
                  {photo.alt}
                </video>
              ) : (
                <img src={photo.src} alt={photo.alt} className="w-full object-cover" />
              )}
              <figcaption className="px-3 py-2.5 text-xs text-muted">{photo.alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </main>
  );
}
