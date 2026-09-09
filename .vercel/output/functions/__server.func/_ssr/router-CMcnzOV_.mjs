import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as site, i as nav, n as formatClock, o as upcomingHolidays, r as getOpenStatus, t as Button } from "./button-L1ISk6eR.mjs";
import { a as TriangleAlert, c as Phone, l as Menu, t as X, u as MapPin } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CMcnzOV_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function FacebookLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "6",
			fill: "#1877F2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M16.67 15.3 17.2 12h-3.16v-2.14c0-.9.44-1.78 1.86-1.78H17.4V5.08s-1.36-.23-2.66-.23c-2.72 0-4.5 1.65-4.5 4.63V12H7.4v3.3h2.84V22h3.8v-6.7h2.63Z"
		})]
	});
}
function InstagramLogo({ className }) {
	const id = `ig-${(0, import_react.useId)().replace(/:/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id,
				cx: "30%",
				cy: "107%",
				r: "150%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#fdf497"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "45%",
						stopColor: "#fd5949"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "60%",
						stopColor: "#d6249f"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "90%",
						stopColor: "#285AEB"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "24",
				height: "24",
				rx: "6",
				fill: `url(#${id})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5.2",
				y: "5.2",
				width: "13.6",
				height: "13.6",
				rx: "4",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "3.15",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16.35",
				cy: "7.65",
				r: "0.95",
				fill: "#fff"
			})
		]
	});
}
function TikTokLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "24",
				height: "24",
				rx: "6",
				fill: "#111"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#25F4EE",
				d: "M14.35 4.2c.18 1.42.9 2.62 2.05 3.32.62.38 1.32.58 2.05.62v2.12c-1.12-.04-2.18-.34-3.12-.88-.4-.23-.76-.5-1.1-.8v5.9a4.92 4.92 0 1 1-4.92-4.92c.28 0 .55.03.82.08v2.22a2.72 2.72 0 1 0 1.88 2.6V4.2h2.34Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M13.95 3.85c.18 1.42.9 2.62 2.05 3.32.62.38 1.32.58 2.05.62v2.12c-1.12-.04-2.18-.34-3.12-.88-.4-.23-.76-.5-1.1-.8v5.9a4.92 4.92 0 1 1-4.92-4.92c.28 0 .55.03.82.08v2.22a2.72 2.72 0 1 0 1.88 2.6V3.85h2.34Z"
			})
		]
	});
}
var profiles = [
	{
		href: site.facebookUrl,
		label: "Facebook",
		icon: FacebookLogo
	},
	{
		href: site.instagramUrl,
		label: "Instagram",
		icon: InstagramLogo
	},
	{
		href: site.tiktokUrl,
		label: "TikTok",
		icon: TikTokLogo
	}
];
function SocialLinks({ tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-3",
		children: profiles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: item.href,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": item.label,
			className: cn("inline-flex size-11 items-center justify-center overflow-hidden rounded-md", tone === "dark" ? "ring-1 ring-white/15 hover:ring-gold-soft" : "ring-1 ring-line hover:ring-tomato/40"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-11" })
		}, item.label))
	});
}
function Footer() {
	const links = [...nav, {
		to: "/jobs",
		label: "Jobs"
	}];
	const nextHolidays = upcomingHolidays();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full bg-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-gold-soft",
								children: "Failla's"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium uppercase tracking-[0.2em] text-cream/60",
								children: "Pizzeria & Ristorante"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm leading-relaxed text-cream/75",
								children: "Family-owned. Sicilian recipes. Phoenixville's Grandma pie — plus pasta, steaks, salads, and catering that shows up."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "hours",
						className: "scroll-mt-36",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft",
								children: "Visit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
								className: "mt-3 not-italic text-sm leading-relaxed text-cream/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.mapsUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-start gap-2 hover:text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										site.addressLine,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										site.cityLine
									] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.phoneHref,
									className: "mt-3 flex items-center gap-2 hover:text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), site.phone]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.googleListingUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-3 inline-block text-sm text-gold-soft hover:text-gold",
								children: "Hours, popular times & reviews on Google"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1 text-sm text-cream/70",
								children: site.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cream/90",
									children: row.days
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: row.time
								})] }, row.days))
							}),
							nextHolidays.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1 border-t border-white/10 pt-3 text-sm text-cream/70",
								children: nextHolidays.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold-soft",
									children: row.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block",
									children: [row.open && row.close ? `${formatClock(row.open)} – ${formatClock(row.close)}` : "Closed", row.note ? ` · ${row.note}` : ""]
								})] }, row.date))
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-cream/80 hover:text-cream",
								children: item.label
							}) }, item.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.orderUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/80 hover:text-cream",
								children: "Order Online"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.doorDashUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/80 hover:text-cream",
								children: "DoorDash"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.uberEatsUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/80 hover:text-cream",
								children: "Uber Eats"
							}) })
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 px-4 py-5 text-center text-xs text-cream/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Failla's Pizzeria & Ristorante · Phoenixville, PA · BYOB"
				]
			})
		]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const links = [...nav, {
		to: "/jobs",
		label: "Jobs"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-white/10 bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo.jpg",
							alt: "Failla's Pizzeria & Restaurant",
							className: "h-12 w-12 shrink-0 rounded-md object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-tight text-gold-soft",
								children: "Failla's"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cream/70",
								children: "Pizzeria & Ristorante"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto hidden items-center gap-1 lg:flex",
						children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-md px-3 py-2 text-sm transition-colors", pathname === item.to ? "text-gold-soft" : "text-cream/80 hover:text-cream"),
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex shrink-0 items-center gap-2 lg:ml-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							className: "hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: "text-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), site.phone]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md text-cream lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10 bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2.5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.orderUrl,
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "tomato",
								size: "sm",
								children: "Order Online"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.doorDashUrl,
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "border border-white/25 text-cream",
								children: "DoorDash"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.uberEatsUrl,
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "border border-white/25 text-cream",
								children: "Uber Eats"
							})
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10 bg-ink-2 px-4 py-4 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1",
					children: [links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: cn("rounded-md px-3 py-3 text-base", pathname === item.to ? "bg-white/10 text-gold-soft" : "text-cream"),
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "rounded-md px-3 py-3 text-base text-cream",
						children: ["Call ", site.phone]
					})]
				})
			}) : null
		]
	});
}
function HiringBanner() {
	const [hidden, setHidden] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem("faillas-hiring-dismissed") === "1") setHidden(true);
	}, []);
	if (hidden) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-tomato text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 text-sm sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex-1 text-pretty",
				children: [
					"We're hiring — join the Failla's team.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/jobs",
						className: "font-semibold underline underline-offset-2",
						children: "See open roles"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-10 shrink-0 items-center justify-center rounded-md hover:bg-black/10",
				"aria-label": "Dismiss hiring banner",
				onClick: () => {
					sessionStorage.setItem("faillas-hiring-dismissed", "1");
					setHidden(true);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		})
	});
}
function useOpenStatus() {
	const [status, setStatus] = (0, import_react.useState)(() => getOpenStatus());
	(0, import_react.useEffect)(() => {
		const tick = () => setStatus(getOpenStatus());
		tick();
		const id = window.setInterval(tick, 3e4);
		return () => window.clearInterval(id);
	}, []);
	return status;
}
function HoursStatusBar() {
	const status = useOpenStatus();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-white/10 bg-ink-2 text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "#hours",
			className: "mx-auto flex min-h-11 max-w-6xl items-center gap-2.5 px-4 text-sm sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("size-2 shrink-0 rounded-full", status.isOpen ? "bg-gold" : "bg-cream/35"),
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: status.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate text-cream/70",
					children: ["· ", status.detail]
				}),
				status.holidayName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden shrink-0 text-gold-soft sm:inline",
					children: status.holidayName
				}) : null
			]
		})
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiringBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursStatusBar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {})
				]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var styles_default = "/assets/styles-Cy8VCfHb.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: site.name },
			{
				name: "description",
				content: site.description
			},
			{
				name: "theme-color",
				content: "#1a120c"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$6 = () => import("./routes-CnIeIilQ.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./about-J8Mltk2p.mjs");
var Route$5 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: `About · ${site.name}` }] })
});
var $$splitComponentImporter$4 = () => import("./catering-CmAvpidn.mjs");
var Route$4 = createFileRoute("/catering")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: `Catering · ${site.name}` }] })
});
var $$splitComponentImporter$3 = () => import("./contact-CjVMnG4Y.mjs");
var Route$3 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: `Contact · ${site.name}` }] })
});
var $$splitComponentImporter$2 = () => import("./gallery-DP0JgVUs.mjs");
var Route$2 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: `Gallery · ${site.name}` }] })
});
var $$splitComponentImporter$1 = () => import("./jobs-BsuEfQtB.mjs");
var Route$1 = createFileRoute("/jobs")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: `Jobs · ${site.name}` }] })
});
var $$splitComponentImporter = () => import("./menu-CGXkAe4g.mjs");
var Route = createFileRoute("/menu")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: `Menu · ${site.name}` }] })
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	CateringRoute: Route$4.update({
		id: "/catering",
		path: "/catering",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$7
	}),
	JobsRoute: Route$1.update({
		id: "/jobs",
		path: "/jobs",
		getParentRoute: () => Route$7
	}),
	MenuRoute: Route.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useOpenStatus as n, router_exports as t };
