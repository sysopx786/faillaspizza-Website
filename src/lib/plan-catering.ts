import { createServerFn } from "@tanstack/react-start";
import {
  baselinePlan,
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
    model: "grok-4.20-0309-non-reasoning",
    temperature: 0.2,
    max_tokens: 400,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Failla's Pizzeria catering desk, Phoenixville PA. Warm, short. JSON only. Do not invent dishes or tray prices.",
      },
      {
        role: "user",
        content: `Catering list in ${langName}.
Party: ${input.people} people, ${input.kids} kids, date ${input.date || "unset"}, event ${input.event}, budget ${input.budget}, service ${input.service}, notes: ${input.notes || "none"}.
Allowed: Grandma Pie $25, Large cheese $17, Meat Lovers/Veggie/Buffalo Chicken large $23.50, Margherita large $19.50, Failladelphia Stromboli $26, wings 24/$30 or 50/$57.50, chicken fingers, Baked Ziti/Lasagna/Chicken Parm/Eggplant Parm trays (shop quotes), Caesar/Tossed trays, garlic knots, 2-liter soda, cannoli. Van, tent, trailer, pickup. BYOB.
Kitchen math (adjust, keep): ${JSON.stringify(baseline)}
JSON keys: headline, voice (2 sentences), service (pickup|van|tent|trailer), serviceWhy, items[{name,qty,note}], estimateLow, estimateHigh, estimateNote (say not a quote).
Grandma Pie if 8+ people. Vegetarian notes → Veggie or Eggplant Parm.`,
      },
    ],
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
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
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
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