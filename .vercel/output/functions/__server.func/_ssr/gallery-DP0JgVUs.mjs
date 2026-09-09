import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DP0JgVUs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var photos = [
	{
		src: "/videos/pies-on-the-pass.mp4",
		alt: "Pies coming off the pass — white, cheesesteak-fries, sausage, cheese, BBQ, and Grandma",
		category: "pizza",
		kind: "video",
		poster: "/images/pies-on-the-pass.jpg"
	},
	{
		src: "/videos/grandma-making.mp4",
		alt: "Making a Grandma pie — dough, sauce, mozzarella squares, oven, basil, and oil",
		category: "pizza",
		kind: "video",
		poster: "/images/grandma-making.jpg"
	},
	{
		src: "/videos/pizza-counter-tour.mp4",
		alt: "Walk up to the counter — pies in the case, the kitchen, and the line",
		category: "shop",
		kind: "video",
		poster: "/images/pizza-counter-tour.jpg"
	},
	{
		src: "/images/grandma-pie.webp",
		alt: "Failla's Grandma pie, square-cut with plum tomato sauce and basil",
		category: "pizza"
	},
	{
		src: "/images/grandma-pie-overhead.webp",
		alt: "Grandma pie overhead, nine squares, sauce on top, grated cheese, and basil",
		category: "pizza"
	},
	{
		src: "/images/grandma-boxes.webp",
		alt: "A line of boxed Grandma pies ready for pickup and catering",
		category: "pizza"
	},
	{
		src: "/images/grandma-boxed.webp",
		alt: "Grandma pie in the box, sauce, mozzarella, and basil",
		category: "pizza"
	},
	{
		src: "/images/heart-pizza.webp",
		alt: "Heart-shaped pepperoni pizza",
		category: "pizza"
	},
	{
		src: "/images/cheese-pie-case.webp",
		alt: "Round cheese pie coming out of the display case",
		category: "pizza"
	},
	{
		src: "/images/cheese-pie-box.webp",
		alt: "Round cheese pizza boxed for takeout",
		category: "pizza"
	},
	{
		src: "/images/half-and-half-pie.webp",
		alt: "Half red, half white cheese pizza, sliced",
		category: "pizza"
	},
	{
		src: "/images/slices-in-case.webp",
		alt: "Slices in the case — pepperoni, mushroom, chicken, buffalo",
		category: "pizza"
	},
	{
		src: "/images/chic-faill-a.webp",
		alt: "Chic-Faill-A pizza with breaded chicken and fries",
		category: "pizza"
	},
	{
		src: "/images/display-case.webp",
		alt: "Fresh pies in the case, including a white pizza with broccoli and ricotta",
		category: "pizza"
	},
	{
		src: "/videos/catering-trays.mp4",
		alt: "Catering trays — baked ziti, tortellini, and antipasto salad",
		category: "pasta",
		kind: "video",
		poster: "/images/catering-trays.jpg"
	},
	{
		src: "/images/shrimp-pasta.webp",
		alt: "Penne with shrimp in a creamy rosa sauce",
		category: "pasta"
	},
	{
		src: "/images/pasta-chicken-broccoli.webp",
		alt: "Tortellini with chicken, broccoli, and cream sauce",
		category: "pasta"
	},
	{
		src: "/images/tortellini-chicken.webp",
		alt: "Tortellini with chicken, roasted peppers, spinach, and olive oil",
		category: "pasta"
	},
	{
		src: "/images/gnocchi-broccoli.webp",
		alt: "Gnocchi with broccoli and olive oil",
		category: "pasta"
	},
	{
		src: "/images/penne-takeout.webp",
		alt: "Penne in a takeout tray with garlic bread",
		category: "pasta"
	},
	{
		src: "/images/eggplant-rollatini.webp",
		alt: "Eggplant rollatini with marinara and melted mozzarella",
		category: "plates"
	},
	{
		src: "/images/chicken-parm.webp",
		alt: "Chicken parmigiana, takeout tray",
		category: "plates"
	},
	{
		src: "/images/chicken-parm-foil.webp",
		alt: "Chicken parmigiana in a foil tray, extra cheese",
		category: "plates"
	},
	{
		src: "/images/chicken-parm-dine-in.webp",
		alt: "Chicken parmigiana, dine-in, with pasta and garlic bread",
		category: "plates"
	},
	{
		src: "/images/chicken-parm-hoagie.webp",
		alt: "Chicken parm hoagie, split, with marinara and mozzarella",
		category: "plates"
	},
	{
		src: "/images/chicken-marsala.webp",
		alt: "Chicken Marsala with mushrooms and parsley",
		category: "plates"
	},
	{
		src: "/images/chicken-saltimbocca.webp",
		alt: "Chicken saltimbocca with spinach, prosciutto, and mozzarella",
		category: "plates"
	},
	{
		src: "/images/saltimbocca-lemon.webp",
		alt: "Chicken saltimbocca with lemon, spinach, and white wine sauce",
		category: "plates"
	},
	{
		src: "/images/arancini.webp",
		alt: "Three arancini with arugula, shaved parmesan, and sauce",
		category: "plates"
	},
	{
		src: "/images/garlic-knots.webp",
		alt: "Garlic knots with marinara",
		category: "plates"
	},
	{
		src: "/images/fried-calamari.webp",
		alt: "Fried calamari with dipping sauce",
		category: "plates"
	},
	{
		src: "/images/failladelphia-stromboli.webp",
		alt: "Failladelphia stromboli with sesame crust, steak and melted cheese",
		category: "plates"
	},
	{
		src: "/images/stromboli-whole.webp",
		alt: "Whole sesame stromboli on a pizza tray",
		category: "plates"
	},
	{
		src: "/images/cheesesteak.webp",
		alt: "Cheesesteak hoagie with marinara and mozzarella",
		category: "plates"
	},
	{
		src: "/images/italian-hoagie.webp",
		alt: "Italian hoagie with ham, tomato, onion, and oil",
		category: "plates"
	},
	{
		src: "/images/grilled-chicken-hoagie.webp",
		alt: "Grilled chicken hoagie with prosciutto, roasted peppers, and arugula",
		category: "plates"
	},
	{
		src: "/images/burger.webp",
		alt: "Angus burger stacked with fries and cheese sauce",
		category: "plates"
	},
	{
		src: "/images/chicken-quesadilla.webp",
		alt: "Chicken quesadilla, takeout, with salsa and sour cream",
		category: "plates"
	},
	{
		src: "/images/bread-basket.webp",
		alt: "Basket of garlic bread for the table",
		category: "plates"
	},
	{
		src: "/images/cannoli.webp",
		alt: "Cannoli with chocolate drizzle and powdered sugar",
		category: "plates"
	},
	{
		src: "/images/birthday-cannoli.webp",
		alt: "Cannoli with a birthday candle and chocolate lattice",
		category: "plates"
	},
	{
		src: "/images/tiramisu.webp",
		alt: "Tiramisu with cocoa and chocolate drizzle",
		category: "plates"
	},
	{
		src: "/images/prosciutto-salad.webp",
		alt: "Prosciutto rose over mozzarella, arugula, and cherry tomatoes",
		category: "salad"
	},
	{
		src: "/images/caprese.webp",
		alt: "Caprese with tomatoes, burrata, arugula, and balsamic",
		category: "salad"
	},
	{
		src: "/images/caprese-overhead.webp",
		alt: "Caprese overhead with sliced tomatoes and balsamic",
		category: "salad"
	},
	{
		src: "/images/caprese-burrata.webp",
		alt: "Caprese with a whole burrata, tomatoes, and balsamic",
		category: "salad"
	},
	{
		src: "/images/burrata-salad.webp",
		alt: "Burrata salad with roasted peppers, pistachios, and balsamic",
		category: "salad"
	},
	{
		src: "/images/salmon-salad.webp",
		alt: "Grilled salmon over arugula, tomatoes, and cheese with balsamic",
		category: "salad"
	},
	{
		src: "/images/salmon-plated.webp",
		alt: "Grilled salmon on arugula with lemon, feta, and cherry tomatoes",
		category: "salad"
	},
	{
		src: "/images/house-salad.webp",
		alt: "House salad packed for takeout",
		category: "salad"
	},
	{
		src: "/images/catering-salad-tray.webp",
		alt: "Catering salad tray with mozzarella, cucumber, and tomatoes",
		category: "salad"
	},
	{
		src: "/videos/dining-room-birthday.mp4",
		alt: "A birthday in the dining room — pizza on the table, a cannoli with a candle, the room singing",
		category: "shop",
		kind: "video",
		poster: "/images/dining-room-birthday.jpg"
	},
	{
		src: "/videos/logo-anim.mp4",
		alt: "Failla's chef mark — the logo in motion",
		category: "shop",
		kind: "video",
		poster: "/images/logo-anim.jpg"
	},
	{
		src: "/images/pizza-counter.webp",
		alt: "The pizza counter, display case, and kitchen",
		category: "shop"
	},
	{
		src: "/images/dining-room.webp",
		alt: "The dining room, tables full",
		category: "shop"
	},
	{
		src: "/images/takeout-counter.webp",
		alt: "The takeout counter on a busy night",
		category: "shop"
	},
	{
		src: "/images/merch-counter.webp",
		alt: "Hats, shirts, and house seasoning at the counter",
		category: "shop"
	},
	{
		src: "/images/storefront-night.webp",
		alt: "Failla's storefront at night with the red script sign lit",
		category: "shop"
	},
	{
		src: "/images/storefront-night-wide.webp",
		alt: "Failla's Pizzeria & Ristorante, evening exterior",
		category: "shop"
	},
	{
		src: "/images/storefront-day.webp",
		alt: "Failla's storefront in daylight, empty lot",
		category: "shop"
	},
	{
		src: "/images/storefront-day-guest.webp",
		alt: "Failla's storefront on a clear day",
		category: "shop"
	},
	{
		src: "/images/storefront-winter.webp",
		alt: "Failla's storefront in winter",
		category: "shop"
	},
	{
		src: "/images/delivery-van.webp",
		alt: "Failla's delivery van wrapped Home of the Grandma Pizza",
		category: "shop"
	}
];
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "video",
		label: "Videos"
	},
	{
		id: "pizza",
		label: "Pizza"
	},
	{
		id: "pasta",
		label: "Pasta"
	},
	{
		id: "salad",
		label: "Salads"
	},
	{
		id: "plates",
		label: "Plates"
	},
	{
		id: "shop",
		label: "The shop"
	}
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => {
		if (filter === "all") return photos;
		if (filter === "video") return photos.filter((p) => p.kind === "video");
		return photos.filter((p) => p.category === filter);
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
				children: "From the kitchen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-muted",
				children: "Real plates from Failla's — kitchen videos, Grandma pies, salads, pasta, the dining room, the van, the night sign."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex gap-2 overflow-x-auto pb-2",
				children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f.id),
					className: cn("h-10 shrink-0 rounded-full px-4 text-sm font-medium", filter === f.id ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-line"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3",
				children: list.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "mb-4 break-inside-avoid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-paper-2 ring-1 ring-line",
						children: [photo.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: photo.src,
							poster: photo.poster,
							controls: true,
							playsInline: true,
							preload: "metadata",
							className: "mx-auto max-h-[32rem] w-full bg-ink object-contain",
							children: photo.alt
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo.src,
							alt: photo.alt,
							className: "w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-3 py-2.5 text-xs text-muted",
							children: photo.alt
						})]
					})
				}, photo.src))
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
