import assert from "node:assert/strict";
import { test } from "node:test";
import {
  baselinePlan,
  describeEdits,
  estimateFromItems,
  formatQty,
  normalizeInput,
  parseQty,
  pickService,
  toEditableItems,
} from "./catering-plan.ts";

test("clamps a tiny party up to 4 and kids to headcount", () => {
  const input = normalizeInput({
    people: 1,
    kids: 9,
    date: "",
    event: "family",
    budget: "mid",
    service: "unsure",
    notes: "",
    lang: "en",
  });
  assert.equal(input.people, 4);
  assert.equal(input.kids, 4);
});

test("office lunch of 30 suggests the van and a pasta tray", () => {
  const plan = baselinePlan({
    people: 30,
    kids: 0,
    date: "2026-10-03",
    event: "office",
    budget: "mid",
    service: "unsure",
    notes: "",
    lang: "en",
  });
  assert.equal(plan.service, "van");
  assert.ok(plan.items.some((item) => /Grandma/i.test(item.name)));
  assert.ok(plan.items.some((item) => /ziti|lasagna/i.test(item.name)));
  assert.ok(plan.estimateHigh > plan.estimateLow);
});

test("small pickup party stays pickup", () => {
  const { service } = pickService({
    people: 12,
    kids: 2,
    date: "",
    event: "birthday",
    budget: "value",
    service: "unsure",
    notes: "",
    lang: "en",
  });
  assert.equal(service, "pickup");
});

test("parses tray and count quantities", () => {
  assert.deepEqual(parseQty("2 full trays"), { count: 2, unit: "full trays" });
  assert.deepEqual(parseQty("50-count"), { count: 50, unit: "count" });
  assert.equal(formatQty(1, "full trays"), "1 full tray");
  assert.equal(formatQty(3, "full tray"), "3 full trays");
});

test("removing lasagna drops the estimate and records the edit", () => {
  const plan = baselinePlan({
    people: 30,
    kids: 0,
    date: "",
    event: "office",
    budget: "mid",
    service: "unsure",
    notes: "",
    lang: "en",
  });
  const items = toEditableItems(plan.items);
  const withoutPasta = items.filter((item) => !/ziti|lasagna/i.test(item.name));
  const before = estimateFromItems(items);
  const after = estimateFromItems(withoutPasta);
  assert.ok(after.high < before.high);
  const edits = describeEdits(plan.items, withoutPasta);
  assert.ok(edits.some((line) => /Removed/i.test(line)));
});