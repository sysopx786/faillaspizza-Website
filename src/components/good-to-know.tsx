import { useI18n } from "@/lib/i18n-provider";

export function GoodToKnow() {
  const { t } = useI18n();
  const groups = [
    {
      title: t.gtkHow,
      items: [t.gtkHow1, t.gtkHow2, t.gtkHow3, t.gtkHow4, t.gtkHow5],
    },
    {
      title: t.gtkFamily,
      items: [t.gtkFamily1, t.gtkFamily2, t.gtkFamily3, t.gtkFamily4],
    },
    {
      title: t.gtkRoom,
      items: [t.gtkRoom1, t.gtkRoom2, t.gtkRoom3, t.gtkRoom4],
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {groups.map((group) => (
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
