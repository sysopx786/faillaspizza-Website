import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/data/photos";
import { photoCaption } from "@/data/photo-captions";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-provider";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: `Gallery · ${site.name}` }],
  }),
});

function GalleryPage() {
  const { t, lang } = useI18n();
  const filters = [
    { id: "all", label: t.filterAll },
    { id: "video", label: t.filterVideos },
    { id: "pizza", label: t.filterPizza },
    { id: "pasta", label: t.filterPasta },
    { id: "salad", label: t.filterSalads },
    { id: "plates", label: t.filterPlates },
    { id: "shop", label: t.filterShop },
    { id: "merch", label: t.filterMerch },
  ] as const;
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(() => {
    if (filter === "all") return photos;
    if (filter === "video") return photos.filter((p) => p.kind === "video");
    return photos.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <main className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
        {t.galleryKicker}
      </p>
      <h1 className="mt-2 font-display text-5xl">{t.galleryTitle}</h1>
      <p className="mt-2 max-w-xl text-muted">{t.galleryLead}</p>

      <div className="mt-8 w-full min-w-0 overflow-x-auto">
        <div className="flex w-max gap-2 pb-2">
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
              <figcaption className="px-3 py-2.5 text-xs text-muted">
                {photoCaption(photo.src, lang, photo.alt)}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </main>
  );
}
