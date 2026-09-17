import { useMemo, useState, type FormEvent } from "react";
import { Minus, Phone, Plus, Truck, Utensils, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { planCatering } from "@/lib/plan-catering";
import {
  describeEdits,
  estimateFromItems,
  formatPlanMessage,
  formatQty,
  toEditableItems,
  type Budget,
  type CateringInput,
  type CateringPlan,
  type EditableItem,
  type EventType,
  type PlanItem,
  type Service,
} from "@/lib/catering-plan";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n-provider";

export const PLAN_STORAGE_KEY = "faillas-catering-plan";

const fieldClass =
  "flex h-11 w-full rounded-md border border-line bg-cream px-3.5 text-sm text-ink outline-none transition-colors focus:border-ink/40 focus:ring-2 focus:ring-gold/40";

function planWithItems(plan: CateringPlan, items: EditableItem[]): CateringPlan {
  const range = estimateFromItems(items);
  return {
    ...plan,
    items: items.map(({ name, qty, note }) => ({ name, qty, note })),
    estimateLow: range.low,
    estimateHigh: range.high,
  };
}

export function CateringPlanner() {
  const { t, lang } = useI18n();
  const [people, setPeople] = useState("24");
  const [kids, setKids] = useState("0");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState<EventType>("office");
  const [budget, setBudget] = useState<Budget>("mid");
  const [service, setService] = useState<Service>("unsure");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [source, setSource] = useState<"ai" | "menu" | null>(null);
  const [plan, setPlan] = useState<CateringPlan | null>(null);
  const [originalItems, setOriginalItems] = useState<PlanItem[]>([]);
  const [items, setItems] = useState<EditableItem[]>([]);
  const [extraNotes, setExtraNotes] = useState("");

  const input = (): CateringInput => ({
    people: Number(people),
    kids: Number(kids),
    date,
    event,
    budget,
    service,
    notes,
    lang,
  });

  const livePlan = useMemo(
    () => (plan ? planWithItems(plan, items) : null),
    [plan, items],
  );

  async function onPlan(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const result = await planCatering({ data: input() });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setPlan(result.plan);
      setSource(result.source);
      setOriginalItems(result.plan.items);
      setItems(toEditableItems(result.plan.items));
      setExtraNotes("");
    } catch {
      setError(t.plannerError);
    } finally {
      setBusy(false);
    }
  }

  function setCount(id: string, next: number) {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== id) return item;
        const count = Math.max(1, next);
        return { ...item, count, qty: formatQty(count, item.unit) };
      }),
    );
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function sendPlan() {
    if (!livePlan) return;
    const changes = describeEdits(originalItems, items);
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "(none)"}`,
      "",
      formatPlanMessage(input(), livePlan, {
        extraNotes,
        changes,
        source: source ?? undefined,
      }),
    ].join("\n");
    const subject = `Catering plan — ${people} people${date ? ` ${date}` : ""}`;
    sessionStorage.setItem(
      PLAN_STORAGE_KEY,
      JSON.stringify({ name, phone, email, message: body }),
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="planner" className="scroll-mt-36 border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            {t.plannerKicker}
          </p>
          <h2 className="mt-2 font-display text-4xl">{t.plannerTitle}</h2>
          <p className="mt-3 max-w-md text-muted">{t.plannerLead}</p>

          <form className="mt-8 space-y-4" onSubmit={onPlan}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="people">{t.peopleLabel}</Label>
                <Input
                  id="people"
                  type="number"
                  min={4}
                  max={300}
                  required
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="kids">{t.kidsLabel}</Label>
                <Input
                  id="kids"
                  type="number"
                  min={0}
                  max={300}
                  value={kids}
                  onChange={(e) => setKids(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="date">{t.dateLabel}</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="event">{t.eventLabel}</Label>
                <select
                  id="event"
                  className={fieldClass}
                  value={event}
                  onChange={(e) => setEvent(e.target.value as EventType)}
                >
                  <option value="office">{t.eventOffice}</option>
                  <option value="school">{t.eventSchool}</option>
                  <option value="birthday">{t.eventBirthday}</option>
                  <option value="family">{t.eventFamily}</option>
                  <option value="sports">{t.eventSports}</option>
                  <option value="wedding">{t.eventWedding}</option>
                  <option value="other">{t.eventOther}</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="budget">{t.budgetLabel}</Label>
                <select
                  id="budget"
                  className={fieldClass}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value as Budget)}
                >
                  <option value="value">{t.budgetValue}</option>
                  <option value="mid">{t.budgetMid}</option>
                  <option value="high">{t.budgetHigh}</option>
                  <option value="open">{t.budgetOpen}</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="service">{t.serviceLabel}</Label>
                <select
                  id="service"
                  className={fieldClass}
                  value={service}
                  onChange={(e) => setService(e.target.value as Service)}
                >
                  <option value="unsure">{t.serviceUnsure}</option>
                  <option value="pickup">{t.servicePickup}</option>
                  <option value="van">{t.serviceVan}</option>
                  <option value="tent">{t.serviceTent}</option>
                  <option value="trailer">{t.serviceTrailer}</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="notes">{t.notesLabel}</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                maxLength={400}
                className="min-h-24"
              />
            </div>
            {error ? <p className="text-sm text-tomato">{error}</p> : null}
            <Button type="submit" size="lg" disabled={busy} className="h-auto min-h-12 whitespace-normal py-3">
              <Utensils />
              {busy ? t.planning : t.planCta}
            </Button>
          </form>
        </div>

        <div
          className={
            livePlan
              ? "rounded-xl bg-ink p-6 text-cream ring-2 ring-gold sm:p-8"
              : "rounded-xl bg-cream p-6 ring-1 ring-line sm:p-8"
          }
        >
          {livePlan ? (
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                  {t.suggestedOrder}
                </p>
                <span className="inline-flex items-center rounded-full bg-gold px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink">
                  {source === "ai" ? t.aiBadge : t.plannerMenuMath}
                </span>
              </div>
              <h3 className="mt-3 font-display text-3xl text-cream">{livePlan.headline}</h3>
              <p className="mt-3 rounded-lg bg-gold/15 px-4 py-3 text-sm leading-relaxed text-gold-soft">
                {source === "ai" ? t.aiDisclosure : t.editHint}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">{livePlan.voice}</p>
              {items.length ? (
                <ul className="mt-4 divide-y divide-white/15">
                  {items.map((item) => (
                    <li key={item.id} className="py-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-medium text-cream">{item.name}</p>
                          {item.note ? (
                            <p className="mt-1 text-sm text-cream/65">{item.note}</p>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-cream/70 hover:bg-white/10 hover:text-gold-soft"
                          aria-label={`${t.removeItem}: ${item.name}`}
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setCount(item.id, item.count - 1)}
                          disabled={item.count <= 1}
                          className="inline-flex size-11 items-center justify-center rounded-md border border-white/25 bg-white/10 hover:bg-white/15 disabled:opacity-40"
                          aria-label={t.qtyDown}
                        >
                          <Minus className="size-4" />
                        </button>
                        <p className="min-w-20 text-center text-sm font-medium text-gold-soft">
                          {item.qty}
                        </p>
                        <button
                          type="button"
                          onClick={() => setCount(item.id, item.count + 1)}
                          className="inline-flex size-11 items-center justify-center rounded-md border border-white/25 bg-white/10 hover:bg-white/15"
                          aria-label={t.qtyUp}
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-sm text-cream/70">{t.plannerCleared}</p>
              )}
              <div className="mt-6 rounded-lg bg-ink-2 p-4 ring-1 ring-white/10">
                <p className="text-sm font-medium text-cream">
                  {t.estimateLabel} ${livePlan.estimateLow}–${livePlan.estimateHigh}
                </p>
                <p className="mt-1 text-sm text-cream/65">{livePlan.estimateNote}</p>
                <p className="mt-3 flex items-start gap-2 text-sm text-cream/85">
                  <Truck className="mt-0.5 size-4 shrink-0 text-gold-soft" />
                  {livePlan.serviceWhy}
                </p>
              </div>

              <div className="mt-6 space-y-1.5">
                <Label htmlFor="extra-notes" className="text-cream">
                  {t.extraNotesLabel}
                </Label>
                <Textarea
                  id="extra-notes"
                  value={extraNotes}
                  onChange={(e) => setExtraNotes(e.target.value)}
                  maxLength={400}
                  className="min-h-24"
                  placeholder={t.extraNotesHint}
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="plan-name" className="text-cream">
                    {t.labelName}
                  </Label>
                  <Input
                    id="plan-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="plan-phone" className="text-cream">
                    {t.labelPhone}
                  </Label>
                  <Input
                    id="plan-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <Label htmlFor="plan-email" className="text-cream">
                  {t.labelEmail}
                </Label>
                <Input
                  id="plan-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="gold"
                  onClick={sendPlan}
                  disabled={!name.trim() || !phone.trim()}
                >
                  {t.sendPlan}
                </Button>
                <a href={site.phoneHref}>
                  <Button type="button" variant="invert">
                    <Phone /> {t.call} {site.phone}
                  </Button>
                </a>
              </div>
              <p className="mt-3 text-xs text-cream/60">{t.notAQuote}</p>
            </div>
          ) : (
            <div className="flex h-full min-h-72 flex-col justify-center text-muted">
              <p className="font-display text-3xl text-ink">{t.plannerEmptyTitle}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed">{t.plannerEmptyLead}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}