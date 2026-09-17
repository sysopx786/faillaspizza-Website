export const EVENT_TYPES = [
  "office",
  "school",
  "birthday",
  "family",
  "sports",
  "wedding",
  "other",
] as const;

export const BUDGETS = ["value", "mid", "high", "open"] as const;
export const SERVICES = ["unsure", "pickup", "van", "tent", "trailer"] as const;

export type EventType = (typeof EVENT_TYPES)[number];
export type Budget = (typeof BUDGETS)[number];
export type Service = (typeof SERVICES)[number];

export type CateringInput = {
  people: number;
  kids: number;
  date: string;
  event: EventType;
  budget: Budget;
  service: Service;
  notes: string;
  lang: "en" | "es" | "pt" | "it";
};

export type PlanItem = {
  name: string;
  qty: string;
  note: string;
};

export type CateringPlan = {
  headline: string;
  voice: string;
  service: Service;
  serviceWhy: string;
  items: PlanItem[];
  estimateLow: number;
  estimateHigh: number;
  estimateNote: string;
};

export const CATERING_CATALOG = `
Signature
- Grandma Pie, 16" Sicilian square, $25 — always the move for a crowd
Traditional / gourmet pizza (large 16")
- Plain Cheese large $17
- Meat Lovers large $23.50 (pepperoni, sausage, bacon, meatballs)
- Veggie large $23.50
- Buffalo Chicken large $23.50
- Margherita large $19.50
Stromboli (large)
- Failladelphia Stromboli $26
- Meatlover Stromboli $22.50
Wings
- Traditional wings: 24 for $30, 50 for $57.50
Kids / easy
- Chicken fingers (5) $10, with fries $12.50
Pasta & parm — sold as catering trays (shop quotes tray price; dine-in plates are $19.50–$23)
- Baked Ziti
- Meat Lasagna
- Chicken Parmigiana
- Eggplant Parmigiana
Salads — trays (shop quotes)
- Caesar, Tossed, Antipasto, Failla's Salad
Sides
- Garlic Knots (6) $6
- 2 Liter soda $4
Dessert
- Cannoli $5, Limoncello Cake $8
Service Failla's actually has
- Pickup at 2669 Charlestown Rd, Phoenixville
- Delivery van
- Vendor tent with portable ovens
- Food trailer (bigger parties / festivals)
- BYOB, no alcohol sold
- Call (610) 255-2828 to confirm. This is not a quote.
Do not invent dishes, gluten-free catering crusts, or tray dollar amounts.
`.trim();

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function normalizeInput(raw: CateringInput): CateringInput {
  const people = clamp(Math.round(Number(raw.people) || 0), 4, 300);
  const kids = clamp(Math.round(Number(raw.kids) || 0), 0, people);
  const event = EVENT_TYPES.includes(raw.event) ? raw.event : "family";
  const budget = BUDGETS.includes(raw.budget) ? raw.budget : "mid";
  const service = SERVICES.includes(raw.service) ? raw.service : "unsure";
  return {
    people,
    kids,
    date: String(raw.date || "").slice(0, 40),
    event,
    budget,
    service,
    notes: String(raw.notes || "").slice(0, 400),
    lang: raw.lang === "es" || raw.lang === "pt" || raw.lang === "it" ? raw.lang : "en",
  };
}

export function pickService(input: CateringInput): { service: Service; why: string } {
  if (input.service !== "unsure") {
    const why =
      input.service === "pickup"
        ? "You asked for pickup — that's the fastest for most orders."
        : input.service === "van"
          ? "The van can drop hot food at the office, school, or house."
          : input.service === "tent"
            ? "The vendor tent is for on-site service — ovens and a generator if you need them."
            : "The food trailer is the full kitchen on wheels for bigger parties and festivals.";
    return { service: input.service, why };
  }
  if (input.people >= 80 || input.event === "wedding") {
    return {
      service: "trailer",
      why: "At this size, the trailer or tent is the right call so the food stays hot on site.",
    };
  }
  if (input.event === "office" || input.event === "school" || input.people >= 25) {
    return {
      service: "van",
      why: "Drop-off with the van keeps the shop from asking you to haul this many trays.",
    };
  }
  return {
    service: "pickup",
    why: "Pickup at the shop is fastest for this size. Call if you'd rather have the van.",
  };
}

export function baselinePlan(raw: CateringInput): CateringPlan {
  const input = normalizeInput(raw);
  const adults = Math.max(0, input.people - input.kids);
  const pizzaPeople = adults + input.kids * 0.55;
  const pizzaHeavy = input.budget === "value" || input.event === "sports";
  const perPizza = pizzaHeavy ? 3.4 : 4.6;
  const pies = Math.max(2, Math.round(pizzaPeople / perPizza));

  let grandma = Math.max(input.people >= 8 ? 1 : 0, Math.round(pies * 0.4));
  let cheese = Math.max(1, Math.round(pies * 0.3));
  let gourmet = Math.max(0, pies - grandma - cheese);
  if (gourmet === 0 && pies >= 4) {
    gourmet = 1;
    cheese = Math.max(1, cheese - 1);
  }
  if (input.event === "school" || input.kids >= 8) {
    // more cheese / chicken, less spicy
  }

  const items: PlanItem[] = [];
  if (grandma > 0) {
    items.push({
      name: "Grandma Pie",
      qty: `${grandma}`,
      note: "16″ Sicilian — the one people talk about.",
    });
  }
  items.push({
    name: "Large cheese pizza",
    qty: `${cheese}`,
    note: "Plain 16″. Crowd-safe.",
  });
  if (gourmet > 0) {
    const gourmetName =
      input.event === "school" || input.kids > adults
        ? "Large Buffalo Chicken pizza"
        : input.notes.toLowerCase().includes("veg")
          ? "Large Veggie pizza"
          : "Large Meat Lovers pizza";
    items.push({
      name: gourmetName,
      qty: `${gourmet}`,
      note: "One flavor so the order stays simple.",
    });
  }

  const pastaTrays = pizzaHeavy ? 0 : Math.max(1, Math.round(input.people / 16));
  if (pastaTrays > 0) {
    const pastaName =
      input.event === "birthday" || input.event === "family"
        ? "Baked Ziti (tray)"
        : "Meat Lasagna (tray)";
    items.push({
      name: pastaName,
      qty: pastaTrays === 1 ? "1 full tray" : `${pastaTrays} full trays`,
      note: "Tray size and price are quoted by the shop.",
    });
  }

  if (input.budget === "high" || input.event === "wedding" || input.event === "family") {
    if (input.people >= 16) {
      items.push({
        name: "Chicken Parmigiana (tray)",
        qty: input.people >= 40 ? "2 full trays" : "1 full tray",
        note: "Tray quoted by the shop.",
      });
    }
  }

  if (input.people >= 12) {
    items.push({
      name: "Caesar salad (tray)",
      qty: input.people >= 30 ? "2 trays" : "1 tray",
      note: "Romaine, house Caesar. Shop quotes the tray.",
    });
  }

  if (input.kids >= 6 || input.event === "sports") {
    items.push({
      name: "Traditional wings",
      qty: input.kids >= 15 || input.people >= 40 ? "50-count" : "24-count",
      note: "Mild or BBQ. Celery and ranch.",
    });
  }
  if (input.kids >= 4) {
    items.push({
      name: "Chicken fingers",
      qty: `${Math.max(2, Math.ceil(input.kids / 3))} orders`,
      note: "For the kids who will not touch a salad.",
    });
  }

  items.push({
    name: "Garlic knots",
    qty: `${Math.max(2, Math.ceil(input.people / 8))} orders of 6`,
    note: "",
  });

  const liters = Math.max(2, Math.ceil(input.people / 6));
  items.push({
    name: "2-liter soda",
    qty: `${liters}`,
    note: "Or skip if it's BYO drinks.",
  });

  if (input.event === "birthday" || input.budget === "high") {
    items.push({
      name: "Cannoli",
      qty: `${Math.max(6, Math.round(input.people * 0.6))}`,
      note: "Easy dessert that travels.",
    });
  }

  const pizzaCost = grandma * 25 + cheese * 17 + gourmet * 23.5;
  const extras =
    (input.kids >= 6 || input.event === "sports" ? (input.people >= 40 ? 57.5 : 30) : 0) +
    liters * 4 +
    Math.max(2, Math.ceil(input.people / 8)) * 6;
  const trayPad = pizzaHeavy ? 3 : input.budget === "high" ? 10 : 7;
  const { service, why } = pickService(input);
  const low = Math.round((pizzaCost + extras + input.people * (trayPad - 2)) / 5) * 5;
  const high = Math.round((pizzaCost + extras + input.people * (trayPad + 2)) / 5) * 5;

  const crowd =
    input.kids > 0
      ? `${adults} adults and ${input.kids} kids`
      : `${input.people} people`;

  return {
    headline: `A starting order for ${crowd}`,
    voice: pizzaHeavy
      ? "Pizza first, a couple of extras, and the shop will tell you if you need another pie."
      : "Grandma pies plus a pasta tray is how most of our parties run. The kitchen will trim or add when you call.",
    service,
    serviceWhy: why,
    items,
    estimateLow: Math.max(60, low),
    estimateHigh: Math.max(low + 40, high),
    estimateNote:
      "Not a quote. Pizza prices are from the July 2025 menu; trays are estimated. Failla's confirms the real number on the phone.",
  };
}

export function formatPlanMessage(
  input: CateringInput,
  plan: CateringPlan,
  extras?: { extraNotes?: string; changes?: string[]; source?: "ai" | "menu" },
) {
  const lines = [
    extras?.source === "ai"
      ? "Drafted by Failla's catering planner (AI). Customer may have edited this list. Not a quote."
      : extras?.source === "menu"
        ? "Starting list from Failla's menu math. Customer may have edited this list. Not a quote."
        : "Catering planner request",
    `Catering planner request`,
    input.date ? `Date: ${input.date}` : "Date: (not set)",
    `Event: ${input.event}`,
    `Headcount: ${input.people} (${input.kids} kids)`,
    `Budget: ${input.budget}`,
    `Service: ${plan.service}`,
    input.notes ? `Notes: ${input.notes}` : "",
    extras?.extraNotes ? `Customer notes on the list: ${extras.extraNotes}` : "",
    extras?.changes?.length ? `Edits:\n${extras.changes.map((c) => `- ${c}`).join("\n")}` : "",
    "",
    plan.headline,
    plan.voice,
    "",
    "Order they want:",
    ...plan.items.map((item) => `- ${item.qty} ${item.name}${item.note ? ` — ${item.note}` : ""}`),
    "",
    `Estimated range: $${plan.estimateLow}–$${plan.estimateHigh}`,
    plan.estimateNote,
    plan.serviceWhy,
  ];
  return lines.filter((line, i) => line !== "" || lines[i - 1] !== "").join("\n");
}

export type EditableItem = PlanItem & {
  id: string;
  count: number;
  unit: string;
};

export function parseQty(qty: string): { count: number; unit: string } {
  const trimmed = qty.trim();
  const countForm = trimmed.match(/^(\d+)\s*-?\s*count$/i);
  if (countForm) return { count: Number(countForm[1]), unit: "count" };
  const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    return { count: Number(match[1]), unit: match[2].trim() };
  }
  const anyNum = trimmed.match(/(\d+)/);
  if (anyNum) {
    return {
      count: Number(anyNum[1]),
      unit: trimmed.replace(anyNum[1], "").replace(/^-/, "").trim(),
    };
  }
  return { count: 1, unit: trimmed };
}

export function formatQty(count: number, unit: string): string {
  const n = Math.max(1, Math.round(count));
  if (!unit) return String(n);
  if (unit === "count") return `${n}-count`;
  if (unit === "full tray" || unit === "full trays") {
    return n === 1 ? "1 full tray" : `${n} full trays`;
  }
  if (unit === "tray" || unit === "trays") {
    return n === 1 ? "1 tray" : `${n} trays`;
  }
  if (/^orders?\b/i.test(unit)) {
    const rest = unit.replace(/^orders?\s*/i, "");
    const word = n === 1 ? "order" : "orders";
    return rest ? `${n} ${word} ${rest}` : `${n} ${word}`;
  }
  return `${n} ${unit}`;
}

export function toEditableItems(items: PlanItem[]): EditableItem[] {
  return items.map((item, index) => {
    const parsed = parseQty(item.qty);
    return {
      ...item,
      id: `${item.name}-${index}`,
      count: parsed.count,
      unit: parsed.unit,
      qty: formatQty(parsed.count, parsed.unit),
    };
  });
}

function unitPrice(name: string, unit: string): number {
  const n = name.toLowerCase();
  if (n.includes("grandma")) return 25;
  if (n.includes("margherita")) return 19.5;
  if (n.includes("plain cheese") || n.includes("cheese pizza") || n.includes("cheese large"))
    return 17;
  if (
    n.includes("veggie") ||
    n.includes("meat lovers") ||
    n.includes("buffalo") ||
    n.includes("pizza")
  ) {
    return 23.5;
  }
  if (n.includes("stromboli")) return 26;
  if (n.includes("wings")) return unit === "count" ? 1.15 : 30;
  if (n.includes("fingers")) return 12.5;
  if (n.includes("knots")) return 6;
  if (n.includes("liter") || n.includes("soda")) return 4;
  if (n.includes("cannoli")) return 5;
  if (n.includes("cake") || n.includes("tiramisu") || n.includes("gelato")) return 8;
  if (
    n.includes("lasagna") ||
    n.includes("ziti") ||
    n.includes("parm") ||
    n.includes("salad") ||
    n.includes("tray")
  ) {
    return 70;
  }
  return 20;
}

export function estimateFromItems(items: EditableItem[]): { low: number; high: number } {
  const sum = items.reduce((acc, item) => acc + item.count * unitPrice(item.name, item.unit), 0);
  const low = Math.max(0, Math.round((sum * 0.9) / 5) * 5);
  const high = Math.max(low + (items.length ? 20 : 0), Math.round((sum * 1.2) / 5) * 5);
  return { low, high };
}

export function describeEdits(original: PlanItem[], current: EditableItem[]): string[] {
  const changes: string[] = [];
  for (const item of original) {
    const now = current.find((row) => row.name === item.name);
    if (!now) {
      changes.push(`Removed ${item.name} (was ${item.qty})`);
      continue;
    }
    if (now.qty !== item.qty) {
      changes.push(`${item.name}: ${item.qty} → ${now.qty}`);
    }
  }
  return changes;
}