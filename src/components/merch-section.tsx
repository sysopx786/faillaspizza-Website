import { useMemo, useState } from "react";
import { merchItems } from "@/data/merch";
import { photoCaption } from "@/data/photo-captions";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n-provider";
import { FacebookMark, InstagramMark } from "@/components/brand-marks";
import { Lightbox, type LightboxItem } from "@/components/lightbox";

const extra: LightboxItem = {
  src: "/images/merch-counter.webp",
  alt: "Hats, shirts, and house seasoning at the counter",
};

export function MerchSection() {
  const { t, lang } = useI18n();
  const items = useMemo<LightboxItem[]>(
    () =>
      [...merchItems, extra].map((item) => ({
        src: item.src,
        alt: photoCaption(item.src, lang, item.alt),
      })),
    [lang],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {t.merchKicker}
          </p>
          <h2 className="mt-2 font-display text-4xl">{t.merchTitle}</h2>
          <p className="mt-4 text-cream/80">{t.merchBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg px-5 text-sm font-semibold text-white"
              style={{
                background:
                  "linear-gradient(45deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)",
              }}
            >
              <InstagramMark />
              {t.tagInstagram}
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg px-5 text-sm font-semibold text-white hover:brightness-110"
              style={{ background: "#1877F2" }}
            >
              <FacebookMark />
              {t.shareFacebook}
            </a>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="block w-full overflow-hidden rounded-xl bg-paper-2 ring-1 ring-white/10"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-contain"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {openIndex != null ? (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndex={setOpenIndex}
        />
      ) : null}
    </section>
  );
}