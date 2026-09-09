import { R as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as site, t as Button } from "./button-L1ISk6eR.mjs";
import { c as Phone, i as Truck, n as Wine, p as ArrowRight, s as Star, u as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CnIeIilQ.js
var import_jsx_runtime = require_jsx_runtime();
var goodToKnow = [
	{
		title: "How we serve",
		items: [
			"Dine-in, takeout, and delivery",
			"Counter service and table service",
			"Walk-in — no reservations",
			"Phone charging and QR menu at the table",
			"Catering, van, tent, and food trailer"
		]
	},
	{
		title: "Family & access",
		items: [
			"Kids' menu and high chairs",
			"Wheelchair-accessible entrance, parking, restroom, and seating",
			"Free parking lot and street parking",
			"Dogs welcome outside on the patio"
		]
	},
	{
		title: "The room",
		items: [
			"BYOB",
			"Casual and cozy — good for lunch, dinner, groups, and solo",
			"Outdoor seating",
			"Credit, debit, and tap to pay · 2.88% cash discount"
		]
	}
];
function GoodToKnow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-8 sm:grid-cols-3",
		children: goodToKnow.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl",
			children: group.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-sm leading-relaxed text-ink-2",
			children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 size-1.5 shrink-0 rounded-full bg-gold",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
			}, item))
		})] }, group.title))
	});
}
var googleRating = {
	score: "4.7",
	count: 286,
	bars: [
		{
			stars: 5,
			pct: 92
		},
		{
			stars: 4,
			pct: 16
		},
		{
			stars: 3,
			pct: 5
		},
		{
			stars: 2,
			pct: 2
		},
		{
			stars: 1,
			pct: 4
		}
	]
};
var reviews = [
	{
		name: "Carin S.",
		source: "Google",
		href: "https://share.google/oB3kJmI19frgtIxOX",
		quote: "The pizza was a standout to everyone who tried it, the signature house salad tasted like old Italy like my grandma used to make, and the minestrone was some of the best I've had. Continually impressed with the food and service."
	},
	{
		name: "S. Marles",
		source: "Google",
		href: "https://share.google/zNZv84PCv1vvWRXMF",
		quote: "Best pizza in town by far."
	},
	{
		name: "Kay B.",
		source: "Google",
		href: "https://share.google/bjLJ8XcchhGm9PP9W",
		quote: "This review is for their grandma pie. Cooked in a sheet pan with olive oil — the crust is excellent, the sauce is excellent, the right amount of cheese. I've used them for pizza lunch at work. Everyone asked where it was from."
	},
	{
		name: "John C.",
		source: "Google",
		href: "https://share.google/w4hNkBiQKchnC0XNZ",
		quote: "Food was perfect and cooked to perfection. Was really impressed as a native New Yorker. Not just good for the area, but great food in general."
	}
];
function Stars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-0.5 text-gold",
		"aria-hidden": true,
		children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold" }, i))
	});
}
function ReviewSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-cream ring-1 ring-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4 px-6 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Reviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Google review summary"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.googleListingUrl,
				target: "_blank",
				rel: "noreferrer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					children: "Write a review"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/google-review-summary.png",
			alt: `Google reviews: ${googleRating.score} from ${googleRating.count} reviews`,
			className: "mt-4 w-full bg-white object-contain object-left px-4 pb-4 sm:px-6 sm:pb-6"
		})]
	});
}
function ReviewQuotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: reviews.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "rounded-xl bg-cream p-5 ring-1 ring-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-ink-2",
					children: [
						"“",
						item.quote,
						"”"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-4 flex items-center justify-between gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
						className: "not-italic font-medium",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						target: "_blank",
						rel: "noreferrer",
						className: "text-xs font-medium text-tomato hover:underline",
						children: item.source
					})]
				})
			]
		}, item.name))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[78vh] overflow-hidden bg-ink text-cream",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/storefront-night.webp",
					alt: "",
					className: "absolute inset-0 size-full object-cover opacity-45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[auto] max-w-6xl flex-col justify-start gap-8 px-4 py-12 sm:px-6 lg:min-h-[78vh] lg:flex-row lg:items-end lg:justify-between lg:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft",
								children: "Phoenixville, Pennsylvania"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 font-display text-5xl leading-[0.95] text-cream sm:text-6xl",
								children: ["Home of the", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic text-gold-soft",
									children: "Grandma Pizza"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-base leading-relaxed text-cream/80",
								children: "Family-owned Sicilian cooking — pan-baked pies, red-sauce classics, steaks, and salads. Walk in, call ahead, or order online."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: site.orderUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "hidden lg:inline-flex",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "lg",
											children: "Order Online"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: site.phoneHref,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "lg",
											variant: "invert",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
												" Call ",
												site.phone
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "lg",
											variant: "ghost",
											className: "border border-white/20",
											children: "View menu"
										})
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-sm overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:mb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/grandma-pie.webp",
							alt: "Failla's Grandma pie",
							className: "aspect-square w-full object-cover"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-ink-2 text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 py-5 sm:grid-cols-2 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-gold-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-cream",
						children: site.addressLine
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-cream/70",
						children: [site.cityLine, " · BYOB · patio"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wine, { className: "mt-0.5 size-4 text-gold-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-cream",
						children: "Dine-in, takeout, delivery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-cream/70",
						children: "Catering van, tent & food trailer"
					})] })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
					children: "What people come back for"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "The regulars' order"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/menu",
					className: "hidden items-center gap-1 text-sm font-medium text-tomato sm:inline-flex",
					children: ["Full menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						src: "/images/grandma-pie.webp",
						title: "Grandma Pie",
						text: "Crisp pan, fresh mozzarella, sauce the owner still crushes by hand."
					},
					{
						src: "/images/failladelphia-stromboli.webp",
						title: "Failladelphia",
						text: "Ribeye, Cooper Sharp, smoked mozzarella, sesame crust. Steak or stromboli."
					},
					{
						src: "/images/shrimp-pasta.webp",
						title: "Pasta & Parm",
						text: "Rosa shrimp, eggplant rollatini, chicken parm — the ristorante half of the sign."
					},
					{
						src: "/images/burrata-salad.webp",
						title: "Salads",
						text: "Burrata, caprese, house Italian. Fresh, not an afterthought."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl bg-cream shadow-[0_1px_0_rgba(26,18,12,0.06)] ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: "",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted",
							children: item.text
						})]
					})]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft",
						children: "From the oven"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Pies coming off the pass"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-cream/75",
						children: "White and ranch, cheesesteak-fries, sausage and pepperoni, a straight cheese, BBQ lattice, then the Grandma. This is a Friday on the steel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "mt-6 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "gold",
							children: "More from the kitchen"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: "/videos/pies-on-the-pass.mp4",
					poster: "/images/pies-on-the-pass.jpg",
					controls: true,
					playsInline: true,
					muted: true,
					loop: true,
					autoPlay: true,
					preload: "metadata",
					className: "mx-auto max-h-[36rem] w-full max-w-md rounded-xl bg-ink object-contain",
					children: "Pies coming off the pass at Failla's"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
						children: "The shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Walk up to the counter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Pies in the case, the kitchen behind the glass, merch on the wall. Order at the counter, sit down, or take it home — this is the room."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "mt-6 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "Watch more"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: "/videos/pizza-counter-tour.mp4",
					poster: "/images/pizza-counter-tour.jpg",
					controls: true,
					playsInline: true,
					muted: true,
					loop: true,
					autoPlay: true,
					preload: "metadata",
					className: "mx-auto max-h-[36rem] w-full max-w-md rounded-xl bg-ink object-contain",
					children: "Walk up to the pizza counter at Failla's"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
					children: "Sicily · Phoenixville"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "A family kitchen with a Sicilian backbone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Failla's is family-owned, rooted in recipes from Sicily, and built for this town — weeknight takeout, Friday Grandma rushes, school catering, and a table if you walk in. No reservations. Generous portions. You're not a ticket number."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "mt-6 inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Our story" })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/grandma-boxes.webp",
				alt: "Boxed Grandma pies lined up for a Friday rush",
				className: "w-full rounded-xl object-cover"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/delivery-van.webp",
					alt: "Failla's delivery van, Home of the Grandma Pizza",
					className: "order-2 w-full rounded-xl object-cover lg:order-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft",
							children: "Catering & events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl",
							children: "We come to you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-cream/75",
							children: "Delivery van, vendor tent, and a food trailer with pizza ovens and a full kitchen. Parties, schools, offices — call and we'll build the order."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catering",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {}), " Catering"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "invert",
									children: "Call to book"
								})
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
					children: "Dine-in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "Sit down. Stay for the pie."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "The dining room is small, bright, and busy — weeknights, birthdays, pizza still on the tray. Walk in, no reservations. Bring wine. Phone charging at the seat, QR for the menu while you wait."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: "/videos/dining-room-birthday.mp4",
					poster: "/images/dining-room-birthday.jpg",
					controls: true,
					playsInline: true,
					preload: "metadata",
					className: "mx-auto max-h-[36rem] w-full max-w-md rounded-xl bg-ink object-contain",
					children: "A birthday in the dining room at Failla's"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/table-charging.jpg",
					alt: "Families dining at Failla's with table-side phone charging and QR menu",
					className: "w-full rounded-xl object-cover"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "visit",
			className: "border-t border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
						children: "Good to know"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Before you come in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoodToKnow, {})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "reviews",
			className: "border-t border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewSummary, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewQuotes, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.googleListingUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "See all reviews on Google"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
