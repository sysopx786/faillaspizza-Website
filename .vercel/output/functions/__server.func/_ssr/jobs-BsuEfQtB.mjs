import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as site, t as Button } from "./button-L1ISk6eR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-BsuEfQtB.js
var import_jsx_runtime = require_jsx_runtime();
function JobsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
				children: "Careers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Work at Failla's"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "We're looking for people who like a busy kitchen, a full dining room on Friday, and food they'd eat themselves. Apply online — or walk in and ask for a manager."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-3 text-ink-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Front of house & takeout" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Kitchen" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Delivery" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.applyUrl,
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							children: "Apply now"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.phoneHref,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							variant: "outline",
							children: ["Call ", site.phone]
						})
					})]
				})
			] })
		]
	});
}
//#endregion
export { JobsPage as component };
