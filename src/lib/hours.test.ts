import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  formatClock,
  getOpenStatus,
  hoursDisplayRows,
  upcomingHolidays,
  type HolidayHours,
} from "./hours.ts";

function et(isoUtc: string) {
  return new Date(isoUtc);
}

const closedSaturday: HolidayHours[] = [
  {
    date: "2026-09-05",
    name: "Private event",
    open: null,
    close: null,
  },
];

describe("formatClock", () => {
  it("formats restaurant hours the way the site already writes them", () => {
    assert.equal(formatClock("10:30"), "10:30 am");
    assert.equal(formatClock("21:00"), "9:00 pm");
    assert.equal(formatClock("22:00"), "10:00 pm");
  });
});

describe("hoursDisplayRows", () => {
  it("groups the weekly schedule Mon–Thu / Fri–Sat / Sunday", () => {
    assert.deepEqual(hoursDisplayRows(), [
      { days: "Monday – Thursday", time: "10:30 am – 9:00 pm" },
      { days: "Friday & Saturday", time: "10:30 am – 10:00 pm" },
      { days: "Sunday", time: "Closed" },
    ]);
  });
});

describe("getOpenStatus", () => {
  it("is open Saturday afternoon until 10:00 pm", () => {
    const status = getOpenStatus(et("2026-09-05T19:25:00.000Z"));
    assert.equal(status.isOpen, true);
    assert.equal(status.headline, "Open now");
    assert.equal(status.detail, "until 10:00 pm");
    assert.equal(status.holidayName, undefined);
  });

  it("is closed Sunday and points at Labor Day Monday", () => {
    const status = getOpenStatus(et("2026-09-06T16:00:00.000Z"));
    assert.equal(status.isOpen, false);
    assert.equal(status.headline, "Closed");
    assert.equal(status.detail, "opens tomorrow 10:30 am");
    assert.equal(status.todayLabel, "Closed");
  });

  it("uses the Labor Day override on Monday", () => {
    const before = getOpenStatus(et("2026-09-07T14:00:00.000Z"));
    assert.equal(before.isOpen, false);
    assert.equal(before.detail, "opens 10:30 am");
    assert.equal(before.holidayName, "Labor Day");
    assert.match(before.holidayNote ?? "", /differ/);

    const open = getOpenStatus(et("2026-09-07T15:00:00.000Z"));
    assert.equal(open.isOpen, true);
    assert.equal(open.detail, "until 9:00 pm");
    assert.equal(open.holidayName, "Labor Day");

    const after = getOpenStatus(et("2026-09-08T01:30:00.000Z"));
    assert.equal(after.isOpen, false);
    assert.equal(after.holidayName, "Labor Day");
    assert.equal(after.detail, "opens tomorrow 10:30 am");
  });

  it("lets a holiday close a day that is normally open", () => {
    const status = getOpenStatus(
      et("2026-09-05T19:25:00.000Z"),
      closedSaturday,
    );
    assert.equal(status.isOpen, false);
    assert.equal(status.holidayName, "Private event");
    assert.equal(status.todayLabel, "Closed");
    assert.equal(status.detail, "opens Monday 10:30 am");
  });

  it("ignores past holidays", () => {
    const past: HolidayHours[] = [
      {
        date: "2026-09-01",
        name: "Old holiday",
        open: null,
        close: null,
      },
    ];
    const status = getOpenStatus(et("2026-09-05T19:25:00.000Z"), past);
    assert.equal(status.isOpen, true);
    assert.equal(status.holidayName, undefined);
    assert.deepEqual(upcomingHolidays(et("2026-09-05T19:25:00.000Z"), past), []);
  });
});

describe("upcomingHolidays", () => {
  it("surfaces Labor Day from the Saturday before", () => {
    const next = upcomingHolidays(et("2026-09-05T19:25:00.000Z"));
    assert.equal(next.length, 1);
    assert.equal(next[0]?.name, "Labor Day");
  });
});
