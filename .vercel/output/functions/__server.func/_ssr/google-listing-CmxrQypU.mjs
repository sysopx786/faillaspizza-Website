import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as site, t as Button } from "./button-L1ISk6eR.mjs";
import { s as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/google-listing-CmxrQypU.js
var import_jsx_runtime = require_jsx_runtime();
function GoogleListingCard({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-xl bg-cream p-6 ring-1 ring-line", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.16em] text-tomato",
				children: "Google"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 flex items-center gap-2 font-display text-2xl sm:text-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: "size-5 shrink-0 fill-gold text-gold",
					"aria-hidden": true
				}), "Hours, popular times & reviews"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "Live hours, popular times, and reviews — the same listing that shows up in Google Search."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.googleListingUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-5 inline-flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Open Google listing" })
			})
		]
	});
}
//#endregion
export { GoogleListingCard as t };
