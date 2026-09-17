import { createServerFn } from "@tanstack/react-start";
import {
  baselinePlan,
  CATERING_CATALOG,
  normalizeInput,
  type CateringInput,
  type CateringPlan,
  type PlanItem,
  type Service,
} from "./catering-plan";

export type PlanResult =
  | { ok: true; source: "ai" | "menu"; plan: CateringPlan }
  | { ok: false; error: string };

const SERVICES: Service[] = ["unsure", "pickup", "van", "tent", "trailer"];

function asPlan(value: unknown, fallback: CateringPlan): CateringPlan {
  if (!value || typeof value !== "object") return fallback;
  const raw = value as Record<string, unknown>;
  const items = Array.isArray(raw.items)
    ? raw.items
        .map((row) => {
          if (!row || typeof row !== "object") return null;
          const item = row as Record<string, unknown>;
          const name = String(item.name || "").trim();
          if (!name) return null;
          return {
            name,
            qty: String(item.qty || "1").slice(0, 40),
            note: String(item.note || "").slice(0, 160),
          } satisfies PlanItem;
        })
        .filter((row): row is PlanItem => row !== null)
        .slice(0, 14)
    : [];
  const service = SERVICES.includes(raw.service as Service)
    ? (raw.service as Service)
    : fallback.service;
  const low = Number(raw.estimateLow);
  const high = Number(raw.estimateHigh);
  return {
    headline: String(raw.headline || fallback.headline).slice(0, 120),
    voice: String(raw.voice || fallback.voice).slice(0, 400),
    service,
    serviceWhy: String(raw.serviceWhy || fallback.serviceWhy).slice(0, 240),
    items: items.length ? items : fallback.items,
    estimateLow: Number.isFinite(low) ? Math.round(low) : fallback.estimateLow,
    estimateHigh: Number.isFinite(high)
      ? Math.round(Math.max(high, Number.isFinite(low) ? low : high))
      : fallback.estimateHigh,
    estimateNote: String(raw.estimateNote || fallback.estimateNote).slice(0, 240),
  };
}

async function askGrok(input: CateringInput, baseline: CateringPlan) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return null;

  const langName =
    input.lang === "es"
      ? "Spanish"
      : input.lang === "pt"
        ? "Portuguese"
        : input.lang === "it"
          ? "Italian"
          : "English";

  const payload = {
    model: "grok-4.5",
    temperature: 0.3,
    max_tokens: 700,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are the catering desk at Failla's Pizzeria & Ristorante in Phoenixville, PA. Write like the shop: warm, short, no hype. Only use items from the catalog. Never invent dishes or exact tray prices. Return JSON only.",
      },
      {
        role: "user",
        content: `Write a catering starting list in ${langName}.

Party:
- people: ${input.people}
- kids: ${input.kids}
- date: ${input.date || "not set"}
- event: ${input.event}
- budget band: ${input.budget} (value=pizza-heavy, mid=pies+pasta, high=add parm/dessert, open=best spread)
- preferred service: ${input.service}
- notes: ${input.notes || "none"}

Menu catalog:
${CATERING_CATALOG}

Our kitchen math (adjust, don't throw away):
${JSON.stringify(baseline)}

Return JSON:
{
  "headline": string,
  "voice": string (2-3 sentences),
  "service": "pickup" | "van" | "tent" | "trailer",
  "serviceWhy": string,
  "items": [{ "name": string, "qty": string, "note": string }],
  "estimateLow": number,
  "estimateHigh": number,
  "estimateNote": string
}

Rules: Grandma Pie for 8+ people unless they refuse pizza. Keep item names recognizable from the catalog. Estimate is a range, labeled as not a quote. If notes mention vegetarian, include Veggie pizza or Eggplant Parm. If notes mention kids only, skip spicy pies.`,
      },
    ],
  };

  const call = async () =>
    fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

  let res = await call();
  if (!res.ok) res = await call();
  if (!res.ok) return null;

  const body = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = body.choices?.[0]?.message?.content ?? "";
  try {
    return JSON.parse(text) as unknown;
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]) as unknown;
    } catch {
      return null;
    }
  }
}

export const planCatering = createServerFn({ method: "POST" })
  .validator((input: CateringInput) => normalizeInput(input))
  .handler(async ({ data }): Promise<PlanResult> => {
    const baseline = baselinePlan(data);
    try {
      const ai = await askGrok(data, baseline);
      if (!ai) return { ok: true, source: "menu", plan: baseline };
      return { ok: true, source: "ai", plan: asPlan(ai, baseline) };
    } catch {
      return { ok: true, source: "menu", plan: baseline };
    }
  });