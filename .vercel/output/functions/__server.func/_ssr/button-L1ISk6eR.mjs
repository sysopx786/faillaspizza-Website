import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-L1ISk6eR.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Hours source of truth — Eastern Time.
*
* Edit `weeklyHours` for the regular week.
* Add a row to `holidays` for a special day. Past dates are ignored.
* Holiday rows beat the weekly schedule. `open`/`close` null = closed that day.
*
* Times are 24-hour "HH:MM" strings.
*/
var TIMEZONE = "America/New_York";
var weeklyHours = [
	{
		weekday: 0,
		open: null,
		close: null
	},
	{
		weekday: 1,
		open: "10:30",
		close: "21:00"
	},
	{
		weekday: 2,
		open: "10:30",
		close: "21:00"
	},
	{
		weekday: 3,
		open: "10:30",
		close: "21:00"
	},
	{
		weekday: 4,
		open: "10:30",
		close: "21:00"
	},
	{
		weekday: 5,
		open: "10:30",
		close: "22:00"
	},
	{
		weekday: 6,
		open: "10:30",
		close: "22:00"
	}
];
var holidays = [{
	date: "2026-09-07",
	name: "Labor Day",
	open: "10:30",
	close: "21:00",
	note: "Hours may differ — call to confirm"
}];
var DAY_NAMES = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
var WEEKDAY_INDEX = {
	Sun: 0,
	Mon: 1,
	Tue: 2,
	Wed: 3,
	Thu: 4,
	Fri: 5,
	Sat: 6
};
function easternParts(at = /* @__PURE__ */ new Date()) {
	const map = {};
	for (const part of new Intl.DateTimeFormat("en-US", {
		timeZone: TIMEZONE,
		weekday: "short",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(at)) if (part.type !== "literal") map[part.type] = part.value;
	let hour = Number(map.hour);
	if (hour === 24) hour = 0;
	return {
		year: Number(map.year),
		month: Number(map.month),
		day: Number(map.day),
		weekday: WEEKDAY_INDEX[map.weekday.slice(0, 3)] ?? 0,
		hour,
		minute: Number(map.minute)
	};
}
function dateKey(parts) {
	return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}
function formatClock(hm) {
	const [hRaw, mRaw] = hm.split(":");
	const h = Number(hRaw);
	const m = Number(mRaw);
	const suffix = h >= 12 ? "pm" : "am";
	return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${suffix}`;
}
function parseMinutes(hm) {
	const [h, m] = hm.split(":").map(Number);
	return h * 60 + m;
}
function lookupHours(key, weekday, weekly, holidayList) {
	const holiday = holidayList.find((row) => row.date === key);
	if (holiday) return {
		open: holiday.open,
		close: holiday.close,
		holiday
	};
	const weeklyRow = weekly.find((row) => row.weekday === weekday);
	return {
		open: weeklyRow?.open ?? null,
		close: weeklyRow?.close ?? null
	};
}
function addEasternDays(parts, days) {
	const utc = Date.UTC(parts.year, parts.month - 1, parts.day + days, 12, 0, 0);
	return easternParts(new Date(utc));
}
function rangeLabel(open, close) {
	if (!open || !close) return "Closed";
	return `${formatClock(open)} – ${formatClock(close)}`;
}
function getOpenStatus(at = /* @__PURE__ */ new Date(), holidayList = holidays, weekly = weeklyHours) {
	const now = easternParts(at);
	const today = lookupHours(dateKey(now), now.weekday, weekly, holidayList);
	const nowMin = now.hour * 60 + now.minute;
	const withHoliday = (status) => ({
		...status,
		holidayName: today.holiday?.name,
		holidayNote: today.holiday?.note
	});
	if (today.open && today.close) {
		const openMin = parseMinutes(today.open);
		const closeMin = parseMinutes(today.close);
		if (nowMin >= openMin && nowMin < closeMin) return withHoliday({
			isOpen: true,
			headline: "Open now",
			detail: `until ${formatClock(today.close)}`,
			todayLabel: rangeLabel(today.open, today.close)
		});
		if (nowMin < openMin) return withHoliday({
			isOpen: false,
			headline: "Closed",
			detail: `opens ${formatClock(today.open)}`,
			todayLabel: rangeLabel(today.open, today.close)
		});
	}
	for (let i = 1; i <= 8; i += 1) {
		const next = addEasternDays(now, i);
		const nextHours = lookupHours(dateKey(next), next.weekday, weekly, holidayList);
		if (nextHours.open && nextHours.close) return withHoliday({
			isOpen: false,
			headline: "Closed",
			detail: `opens ${i === 1 ? `tomorrow ${formatClock(nextHours.open)}` : `${DAY_NAMES[next.weekday]} ${formatClock(nextHours.open)}`}`,
			todayLabel: rangeLabel(today.open, today.close)
		});
	}
	return withHoliday({
		isOpen: false,
		headline: "Closed",
		detail: "call for hours",
		todayLabel: rangeLabel(today.open, today.close)
	});
}
function hoursDisplayRows(weekly = weeklyHours) {
	const order = [
		1,
		2,
		3,
		4,
		5,
		6,
		0
	];
	const rows = [];
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
		const days = span === 0 ? startName : span === 1 ? `${startName} & ${endName}` : `${startName} – ${endName}`;
		rows.push({
			days,
			time: rangeLabel(hours?.open ?? null, hours?.close ?? null)
		});
		i = j + 1;
	}
	return rows;
}
function upcomingHolidays(at = /* @__PURE__ */ new Date(), holidayList = holidays, withinDays = 21) {
	const now = easternParts(at);
	const today = dateKey(now);
	const horizon = dateKey(addEasternDays(now, withinDays));
	return holidayList.filter((row) => row.date >= today && row.date <= horizon);
}
/**
* Flip `hiringOpen` to hide/show the hiring banner and jobs CTA.
* One-line change — no other files need to move.
*
* Hours: edit weeklyHours / holidays in src/lib/hours.ts.
*/
var site = {
	name: "Failla's Pizzeria & Ristorante",
	shortName: "Failla's",
	tagline: "Home of the Grandma Pizza",
	description: "Family-owned Sicilian restaurant in Phoenixville. Grandma pie, pasta, steaks, salads, catering, and delivery.",
	phone: "610-255-2828",
	phoneHref: "tel:+16102552828",
	addressLine: "2669 Charlestown Rd",
	cityLine: "Phoenixville, PA 19460",
	googleListingUrl: "https://maps.app.goo.gl/NchGPaKP2GC58EqC8",
	mapsUrl: "https://maps.app.goo.gl/NchGPaKP2GC58EqC8",
	mapsEmbed: "https://maps.google.com/maps?q=2669%20Charlestown%20Rd%20Phoenixville%20PA%2019460&output=embed",
	orderUrl: "https://onlineordering.cmpmobile.com/menu/faillas_pizzeria",
	applyUrl: "https://cmpmobile.formstack.com/forms/faillas_pizzeria_employment",
	doorDashUrl: "https://www.doordash.com/store/failla%E2%80%99s-pizzeria-&-ristorante-phoenixville-27685451",
	uberEatsUrl: "https://www.ubereats.com/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjI2NjklMjBDaGFybGVzdG93biUyMFJkJTIyJTdD&q=Failla%27s%20Pizzeria",
	facebookUrl: "https://www.facebook.com/FaillasPizzeria/",
	instagramUrl: "https://www.instagram.com/faillaspizza/",
	tiktokUrl: "https://www.tiktok.com/@faillaspizza",
	menuPdf: "https://onlineorderingmadeeasy.com/wp-content/uploads/2025/08/Faillas-Menu-2025.07.pdf",
	hours: hoursDisplayRows(),
	notes: [
		"Dine-in, takeout, and delivery",
		"BYOB",
		"Cash purchases receive a 2.88% discount",
		"Outdoor seating · leashed pets welcome on the patio",
		"No reservations — walk-in anytime"
	]
};
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/catering",
		label: "Catering"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			tomato: "bg-tomato text-cream hover:bg-tomato-dark shadow-[0_1px_0_rgba(0,0,0,0.15)]",
			gold: "bg-gold text-ink hover:bg-gold-soft",
			outline: "border border-line bg-transparent text-ink hover:bg-paper-2",
			ghost: "text-cream hover:bg-white/10",
			dark: "bg-ink text-cream hover:bg-ink-2",
			invert: "bg-cream text-ink hover:bg-paper"
		},
		size: {
			sm: "h-10 rounded-md px-3.5 text-sm",
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-[0.9375rem]"
		}
	},
	defaultVariants: {
		variant: "tomato",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { site as a, nav as i, formatClock as n, upcomingHolidays as o, getOpenStatus as r, Button as t };
