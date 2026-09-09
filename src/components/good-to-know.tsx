import { goodToKnow } from "@/data/facts";

export function GoodToKnow() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {goodToKnow.map((group) => (
        <div key={group.title}>
          <h3 className="font-display text-2xl">{group.title}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-2">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
