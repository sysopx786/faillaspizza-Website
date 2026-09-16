import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-provider";

export type LightboxItem = { src: string; alt: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: readonly LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (next: number) => void;
}) {
  const { t } = useI18n();
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, items.length, onClose, onIndex]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 px-3 py-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
        aria-label={t.closeLightbox}
      >
        <X className="size-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIndex((index - 1 + items.length) % items.length);
        }}
        className="absolute left-2 inline-flex size-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:left-4"
        aria-label={t.prevPhoto}
      >
        <ChevronLeft className="size-8" />
      </button>
      <figure
        className="max-h-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[78vh] w-full rounded-lg object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-white/85">
          {item.alt}
          <span className="mt-1 block text-xs text-white/55">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIndex((index + 1) % items.length);
        }}
        className="absolute right-2 inline-flex size-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:right-4"
        aria-label={t.nextPhoto}
      >
        <ChevronRight className="size-8" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIndex((index + 1) % items.length);
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink hover:bg-cream"
      >
        {t.nextPhoto}
      </button>
    </div>
  );
}