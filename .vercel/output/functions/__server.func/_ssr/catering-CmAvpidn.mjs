import { R as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as site, t as Button } from "./button-L1ISk6eR.mjs";
import { c as Phone, i as Truck, o as Tent, r as Utensils } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catering-CmAvpidn.js
var import_jsx_runtime = require_jsx_runtime();
function CateringPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft",
						children: "Parties · Schools · Offices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl",
						children: "Catering, tent & trailer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-cream/75",
						children: "Grandma pies by the box, trays of pasta, and a crew that already does school dinners and weekend events. Call the shop — we'll size it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
									" ",
									site.phone
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "invert",
								children: "Send a note"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/delivery-van.webp",
					alt: "Failla's catering and delivery van",
					className: "w-full rounded-xl object-cover"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-3 sm:px-6",
			children: [
				{
					icon: Truck,
					title: "Delivery van",
					text: "Hot food to the house, office, or field. Same kitchen, same Grandma pie."
				},
				{
					icon: Tent,
					title: "Vendor tent",
					text: "We set up at town events and private parties. Portable ovens and a generator if you need us on-site."
				},
				{
					icon: Utensils,
					title: "Food trailer",
					text: "Full kitchen and pizza ovens on wheels — for bigger parties and festivals."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-cream p-6 ring-1 ring-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-6 text-tomato" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.text
					})
				]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: "/videos/catering-trays.mp4",
					poster: "/images/catering-trays.jpg",
					controls: true,
					playsInline: true,
					muted: true,
					loop: true,
					autoPlay: true,
					preload: "metadata",
					className: "max-h-[32rem] w-full rounded-xl bg-ink object-contain",
					children: "Catering trays of pasta and salad from Failla's"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "What we send out"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-ink-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Grandma pies — the move for any crowd" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tray pasta, parm, salads, and Stromboli" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "School and office dinners (we already do teacher nights)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "On-site service with the tent or trailer" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "Tell us the headcount, date, and whether you need drop-off or someone working the oven. We'll quote it on the phone."
					})
				] })]
			})
		})
	] });
}
//#endregion
export { CateringPage as component };
