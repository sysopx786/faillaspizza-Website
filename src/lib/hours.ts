/**
 * Hours source of truth — Eastern Time.
 *
 * Edit `weeklyHours` for the regular week.
 * Add a row to `holidays` for a special day. Past dates are ignored.
 * Holiday rows beat the weekly schedule. `open`/`close` null = closed that day.
 *
 * Times are 24-hour "HH:MM" strings.
 */

export const TIMEZONE = "America/New_York";

export type DayHours = {
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  open: string | null;
  close: string | null;
};

export type HolidayHours = {
  date: string;
  name: string;
  open: string | null;
  close: string | null;
  note?: string;
};

export const weeklyHours: DayHours[] = [
  { weekday: 0, open: null, close: null },
  { weekday: 1, open: "10:30", close: "21:00" },
  { weekday: 2, open: "10:30", close: "21:00" },
  { weekday: 3, open: "10:30", close: "21:00" },
  { weekday: 4, open: "10:30", close: "21:00" },
  { weekday: 5, open: "10:30", close: "22:00" },
  { weekday: 6, open: "10:30", close: "22:00" },
];

export const holidays: HolidayHours[] = [
  {
    date: "2026-09-07",
    name: "Labor Day",
    open: "10:30",
    close: "21:00",
    note: "Hours may differ — call to confirm",
  },
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export type EasternParts = {
  year: number;
  month: number;
  day: number;
  weekday: number;
  hour: number;
  minute: number;
};

export function easternParts(at: Date = new Date()): EasternParts {
  const map: Record<string, string> = {};
  for (const part of new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(at)) {
    if (part.type !== "literal") map[part.type] = part.value;
  }
  let hour = Number(map.hour);
  if (hour === 24) hour = 0;
  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    weekday: WEEKDAY_INDEX[map.weekday.slice(0, 3)] ?? 0,
    hour,
    minute: Number(map.minute),
  };
}

export function dateKey(parts: Pick<EasternParts, "year" | "month" | "day">) {
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

export function formatClock(hm: string) {
  const [hRaw, mRaw] = hm.split(":");
  const h = Number(hRaw);
  const m = Number(mRaw);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

function parseMinutes(hm: string) {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
}

type HoursLookup = {
  open: string | null;
  close: string | null;
  holiday?: HolidayHours;
};

function lookupHours(
  key: string,
  weekday: number,
  weekly: DayHours[],
  holidayList: HolidayHours[],
): HoursLookup {
  const holiday = holidayList.find((row) => row.date === key);
  if (holiday) {
    return { open: holiday.open, close: holiday.close, holiday };
  }
  const weeklyRow = weekly.find((row) => row.weekday === weekday);
  return {
    open: weeklyRow?.open ?? null,
    close: weeklyRow?.close ?? null,
  };
}

function addEasternDays(parts: EasternParts, days: number): EasternParts {
  const utc = Date.UTC(parts.year, parts.month - 1, parts.day + days, 12, 0, 0);
  return easternParts(new Date(utc));
}

function rangeLabel(open: string | null, close: string | null) {
  if (!open || !close) return "Closed";
  return `${formatClock(open)} – ${formatClock(close)}`;
}

export type OpenStatus = {
  isOpen: boolean;
  headline: string;
  detail: string;
  todayLabel: string;
  holidayName?: string;
  holidayNote?: string;
};

export function getOpenStatus(
  at: Date = new Date(),
  holidayList: HolidayHours[] = holidays,
  weekly: DayHours[] = weeklyHours,
): OpenStatus {
  const now = easternParts(at);
  const today = lookupHours(dateKey(now), now.weekday, weekly, holidayList);
  const nowMin = now.hour * 60 + now.minute;

  const withHoliday = (status: OpenStatus): OpenStatus => ({
    ...status,
    holidayName: today.holiday?.name,
    holidayNote: today.holiday?.note,
  });

  if (today.open && today.close) {
    const openMin = parseMinutes(today.open);
    const closeMin = parseMinutes(today.close);
    if (nowMin >= openMin && nowMin < closeMin) {
      return withHoliday({
        isOpen: true,
        headline: "Open now",
        detail: `until ${formatClock(today.close)}`,
        todayLabel: rangeLabel(today.open, today.close),
      });
    }
    if (nowMin < openMin) {
      return withHoliday({
        isOpen: false,
        headline: "Closed",
        detail: `opens ${formatClock(today.open)}`,
        todayLabel: rangeLabel(today.open, today.close),
      });
    }
  }

  for (let i = 1; i <= 8; i += 1) {
    const next = addEasternDays(now, i);
    const nextHours = lookupHours(
      dateKey(next),
      next.weekday,
      weekly,
      holidayList,
    );
    if (nextHours.open && nextHours.close) {
      const when =
        i === 1
          ? `tomorrow ${formatClock(nextHours.open)}`
          : `${DAY_NAMES[next.weekday]} ${formatClock(nextHours.open)}`;
      return withHoliday({
        isOpen: false,
        headline: "Closed",
        detail: `opens ${when}`,
        todayLabel: rangeLabel(today.open, today.close),
      });
    }
  }

  return withHoliday({
    isOpen: false,
    headline: "Closed",
    detail: "call for hours",
    todayLabel: rangeLabel(today.open, today.close),
  });
}

export function hoursDisplayRows(
  weekly: DayHours[] = weeklyHours,
): { days: string; time: string }[] {
  const order = [1, 2, 3, 4, 5, 6, 0];
  const rows: { days: string; time: string }[] = [];
  let i = 0;
  while (i < order.length) {
    const start = order[i];
    const hours = weekly.find((row) => row.weekday === start);
    let j = i;
    while (j + 1 < order.length) {
      const next = weekly.find((row) => row.weekday === order[j + 1]);
      if (!next || !hours) break;
      if (next.open !== hours.open || next.close !== hours.close) break;
      j += 1;
    }
    const startName = DAY_NAMES[start];
    const endName = DAY_NAMES[order[j]];
    const span = j - i;
    const days =
      span === 0
        ? startName
        : span === 1
          ? `${startName} & ${endName}`
          : `${startName} – ${endName}`;
    rows.push({
      days,
      time: rangeLabel(hours?.open ?? null, hours?.close ?? null),
    });
    i = j + 1;
  }
  return rows;
}

export function upcomingHolidays(
  at: Date = new Date(),
  holidayList: HolidayHours[] = holidays,
  withinDays = 21,
): HolidayHours[] {
  const now = easternParts(at);
  const today = dateKey(now);
  const horizon = dateKey(addEasternDays(now, withinDays));
  return holidayList.filter((row) => row.date >= today && row.date <= horizon);
}
