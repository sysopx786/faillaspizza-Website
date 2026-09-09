import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as site, n as formatClock, o as upcomingHolidays, t as Button } from "./button-L1ISk6eR.mjs";
import { c as Phone, f as Clock, n as Wine, u as MapPin } from "../_libs/lucide-react.mjs";
import { t as GoogleListingCard } from "./google-listing-CmxrQypU.mjs";
import { n as useOpenStatus } from "./router-CMcnzOV_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CjVMnG4Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-line bg-cream px-3.5 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-ink/40 focus:ring-2 focus:ring-gold/40", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg border border-line bg-cream px-3.5 py-3 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-ink/40 focus:ring-2 focus:ring-gold/40", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const status = useOpenStatus();
	const nextHolidays = upcomingHolidays();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
				children: "Find us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Fastest: call. Walk-ins welcome — we don't take reservations."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-5 text-tomato" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							className: "text-lg font-medium hover:underline",
							children: site.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Dine-in, takeout, catering"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 text-tomato" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.mapsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "font-medium hover:underline",
							children: [
								site.addressLine,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								site.cityLine
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Corner of Charlestown & Coldstream"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: "hours",
						className: "flex scroll-mt-28 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-5 text-tomato" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [status.headline, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-normal text-muted",
									children: [" · ", status.detail]
								})]
							}),
							status.holidayName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-tomato",
								children: [status.holidayName, status.holidayNote ? ` · ${status.holidayNote}` : ""]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2",
								children: site.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: [row.days, ":"]
									}),
									" ",
									row.time
								] }, row.days))
							}),
							nextHolidays.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 text-muted",
								children: nextHolidays.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium text-ink",
										children: [row.name, ":"]
									}),
									" ",
									row.open && row.close ? `${formatClock(row.open)} – ${formatClock(row.close)}` : "Closed",
									row.note ? ` · ${row.note}` : ""
								] }, row.date))
							}) : null
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wine, { className: "mt-0.5 size-5 text-tomato" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "BYOB · kids' menu & high chairs · wheelchair accessible · free parking · dogs on the patio · cash discount 2.88%" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map to Failla's Pizzeria & Ristorante",
				src: site.mapsEmbed,
				className: "mt-8 h-64 w-full rounded-xl border border-line",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleListingCard, { className: "mt-6" })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl bg-cream p-6 ring-1 ring-line sm:p-8",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Got it"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted",
					children: [
						"The fastest way to lock this in is a phone call. We're at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							className: "font-medium text-tomato",
							children: site.phone
						}),
						"."
					]
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-md bg-paper p-4 text-sm text-ink-2",
					children: [name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: name
					}) : null, message]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.phoneHref,
					className: "mt-6 inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Call now" })
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Send a note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Catering, a question, a Friday Grandma pie for 20 — drop it here, then call so we don't miss it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							autoComplete: "name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							type: "tel",
							required: true,
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							autoComplete: "tel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							autoComplete: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							required: true,
							value: message,
							onChange: (e) => setMessage(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full sm:w-auto",
						children: "Submit"
					})
				]
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
