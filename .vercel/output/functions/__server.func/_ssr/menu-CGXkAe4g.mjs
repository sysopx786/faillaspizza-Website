import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as site, t as Button } from "./button-L1ISk6eR.mjs";
import { d as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-CGXkAe4g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pizzaSizes = "Personal 10″  ·  Large 16″  ·  Sicilian 16″ square";
var categories = [
	{
		id: "grandma",
		name: "Grandma Pizza",
		note: "Our signature. Thick pan-baked crust, crisp bottom, airy inside. House plum tomatoes crushed by hand, fresh mozzarella, basil, cracked pepper. 12″ personal or 16″ full.",
		items: [{
			name: "Grandma Pie",
			description: "Pan-baked square pie. Marinara, fresh mozzarella, house-crushed plum tomato sauce, basil ribbons.",
			price: "Personal 12″  ·  Full 16″",
			featured: true,
			tags: ["Signature"]
		}]
	},
	{
		id: "traditional",
		name: "Traditional Pizzas",
		note: pizzaSizes + ". Extra toppings, extra cheese, extra meat available. Gluten-free cauliflower crust offered.",
		items: [
			{
				name: "Plain Cheese",
				price: "12  /  17  /  20"
			},
			{
				name: "Pepperoni",
				price: "13  /  18  /  21"
			},
			{
				name: "White",
				description: "Ricotta, mozzarella, garlic & herbs",
				price: "12  /  17  /  20"
			},
			{
				name: "Tomato Basil",
				price: "12  /  16  /  19"
			},
			{
				name: "Gluten-Free Cauliflower Crust",
				description: "Available as a swap. Ask when you order.",
				tags: ["GF"]
			},
			{
				name: "Build Your Own",
				description: "Pepperoni, sausage, meatball, ham, bacon, chicken, anchovy, eggplant, broccoli, spinach, onion, peppers, banana peppers, jalapeño, mushroom, black or kalamata olives, tomato, pineapple, garlic, ricotta, fresh mozzarella, roasted peppers, artichoke, arugula, feta.",
				price: "Toppings 2  /  3  /  4"
			}
		]
	},
	{
		id: "gourmet",
		name: "Gourmet Pizzas",
		note: pizzaSizes,
		items: [
			{
				name: "Margherita",
				description: "Marinara, fresh mozzarella, basil",
				price: "16  /  23  /  26"
			},
			{
				name: "Upside Down",
				description: "Provolone on the bottom, sauce on top, Italian herbs",
				price: "16  /  23  /  26"
			},
			{
				name: "Meat Lovers",
				description: "Pepperoni, sausage, bacon, meatball",
				price: "18  /  25  /  28"
			},
			{
				name: "Diavolo",
				description: "Pepperoni, capicola, jalapeño, crushed red pepper, Mike’s Hot Honey",
				price: "18  /  25  /  28"
			},
			{
				name: "Veggie",
				description: "Onion, broccoli, green peppers, spinach, mushrooms",
				price: "18  /  25  /  28"
			},
			{
				name: "Mediterranean",
				description: "Kalamata olives, spinach, artichokes, roasted peppers, red onion, feta",
				price: "18  /  25  /  28"
			},
			{
				name: "Supreme",
				description: "Pepperoni, sausage, black olives, mushrooms, onions, peppers, bacon, extra cheese",
				price: "18  /  25  /  28"
			},
			{
				name: "Chic-Faill-A",
				description: "Breaded chicken, french fries, special sauce",
				price: "18  /  25  /  28"
			},
			{
				name: "Four Cheese",
				description: "Mozzarella, provolone, shaved parmesan, feta",
				price: "18  /  25  /  28"
			},
			{
				name: "Arugula",
				description: "White pie, arugula, cherry tomato, prosciutto, balsamic, shaved parmesan",
				price: "18  /  25  /  28"
			},
			{
				name: "Tri-Colore",
				description: "White pie, spinach, broccoli, cherry tomato, ricotta",
				price: "18  /  25  /  28"
			},
			{
				name: "BBQ Chicken",
				price: "18  /  25  /  28"
			},
			{
				name: "Buffalo Chicken",
				price: "18  /  25  /  28"
			},
			{
				name: "Pizza al Tonno",
				description: "Tuna, red onion, kalamata olives, American cheese, Italian dressing",
				price: "18  /  25  /  28"
			}
		]
	},
	{
		id: "apps",
		name: "Appetizers",
		items: [
			{
				name: "Bruschetta",
				price: "10"
			},
			{
				name: "Garlic Knots",
				price: "8"
			},
			{
				name: "Tour of Italy",
				description: "Roasted peppers, kalamata olives, burrata, Italian meats & cheeses, eggplant caponata on arugula with balsamic fig glaze",
				price: "18",
				featured: true
			},
			{
				name: "Fried Calamari",
				price: "16"
			},
			{
				name: "Mussels",
				description: "Red or white sauce",
				price: "16"
			},
			{
				name: "Arancini",
				description: "Three rice balls, arugula, shaved parmesan",
				price: "12"
			},
			{
				name: "Mozzarella Sticks",
				price: "10"
			},
			{
				name: "Onion Petals",
				price: "10"
			},
			{
				name: "Mac & Cheese Bites",
				price: "10"
			},
			{
				name: "Jalapeño Poppers",
				price: "10"
			},
			{
				name: "Chicken Fingers",
				price: "12"
			}
		]
	},
	{
		id: "wings",
		name: "Wings & Fries",
		note: "Wings served with celery and blue cheese or ranch. Sauces: hot, mild, BBQ, jerk, red chili, mango habanero, spicy BBQ.",
		items: [
			{
				name: "Traditional Wings",
				price: "6 / 8   ·   12 / 15   ·   24 / 29   ·   50 / 56"
			},
			{
				name: "Boneless Wings",
				price: "6 / 9   ·   12 / 17   ·   24 / 31   ·   50 / 58"
			},
			{
				name: "French Fries",
				price: "5"
			},
			{
				name: "Cheese Fries",
				price: "8"
			},
			{
				name: "Pizza Fries",
				price: "9"
			},
			{
				name: "Loaded Fries",
				price: "11"
			}
		]
	},
	{
		id: "salads",
		name: "Salads & Soup",
		note: "Add tuna or grilled chicken +4 · salmon or shrimp +6. Soup of the day — ask your server.",
		items: [
			{
				name: "House Salad",
				description: "Lettuce, cherry tomato, onion, cucumber, carrots",
				price: "10"
			},
			{
				name: "Caesar",
				price: "11"
			},
			{
				name: "Failla’s Salad",
				description: "Our house Italian — the one regulars reorder",
				price: "13",
				featured: true
			},
			{
				name: "Caprese",
				description: "Tomatoes, fresh mozzarella or burrata, basil, balsamic",
				price: "14"
			},
			{
				name: "Burrata Salad",
				description: "Arugula, roasted peppers, pistachios, balsamic",
				price: "16"
			},
			{
				name: "Salmon Salad",
				description: "Grilled salmon over greens with balsamic",
				price: "19"
			},
			{
				name: "Soup of the Day",
				price: "6.50"
			}
		]
	},
	{
		id: "steaks",
		name: "Steaks & Cheesesteaks",
		items: [
			{
				name: "Plain Steak",
				price: "13"
			},
			{
				name: "Cheese Steak",
				description: "American, provolone, or mozzarella",
				price: "14"
			},
			{
				name: "Pizza Cheese Steak",
				description: "Marinara, mozzarella",
				price: "15"
			},
			{
				name: "Failladelphia",
				description: "Fresh ribeye, Cooper Sharp, smoked mozzarella, mozzarella, fried onions, sesame roll",
				price: "17",
				featured: true,
				tags: ["Signature"]
			},
			{
				name: "Chicken Steak",
				price: "14"
			},
			{
				name: "Buffalo Chicken Cheesesteak",
				price: "15"
			}
		]
	},
	{
		id: "hoagies",
		name: "Hoagies & Sandwiches",
		note: "12″ hoagies. Hot and cold.",
		items: [
			{
				name: "Italian Hoagie",
				price: "13"
			},
			{
				name: "Turkey / Ham / Tuna / Roast Beef",
				price: "13"
			},
			{
				name: "Deluxe Chicken Hoagie",
				description: "Grilled or crispy, L.T.O., mayo, pickles",
				price: "14"
			},
			{
				name: "Failla’s Grilled Chicken",
				description: "Prosciutto, roasted peppers, provolone, arugula, oil & balsamic fig glaze",
				price: "15"
			},
			{
				name: "Buffalo Chicken Hoagie",
				price: "14"
			},
			{
				name: "BBQ Chicken Hoagie",
				price: "14"
			},
			{
				name: "Veggie Hoagie",
				description: "Broccoli, spinach, onion, mushrooms, garlic, roasted peppers, sun-dried tomato",
				price: "13"
			},
			{
				name: "Chicken Parm Hoagie",
				price: "15"
			},
			{
				name: "Meatball Parm Hoagie",
				price: "15"
			}
		]
	},
	{
		id: "wraps-quesadillas-burgers",
		name: "Wraps, Quesadillas & Burgers",
		items: [
			{
				name: "Chicken Caesar Wrap",
				price: "13"
			},
			{
				name: "Buffalo Chicken Wrap",
				price: "13"
			},
			{
				name: "Chicken Verde Wrap",
				price: "13"
			},
			{
				name: "Cheese Quesadilla",
				price: "12"
			},
			{
				name: "Chicken Quesadilla",
				price: "14"
			},
			{
				name: "Steak Quesadilla",
				price: "15"
			},
			{
				name: "Plain Cheeseburger",
				price: "14"
			},
			{
				name: "Pizza Burger",
				description: "Red sauce, mozzarella",
				price: "15"
			},
			{
				name: "Monster Burger",
				description: "Jalapeño popper and cheese-whiz fries",
				price: "16"
			},
			{
				name: "Sweet & Spicy Burger",
				description: "Hot honey, jalapeño, fried onion, bacon",
				price: "16"
			},
			{
				name: "Veggie Burger",
				price: "15"
			}
		]
	},
	{
		id: "stromboli",
		name: "Stromboli",
		note: "Mozzarella with sauce on the side. Personal or large.",
		items: [
			{
				name: "Cheese",
				price: "12  /  18"
			},
			{
				name: "Pepperoni",
				price: "13  /  19"
			},
			{
				name: "Sausage",
				price: "13  /  19"
			},
			{
				name: "Combo",
				price: "14  /  21"
			},
			{
				name: "Chicken Steak Stromboli",
				description: "Packed with chicken and cheese — a regular favorite",
				price: "15  /  22",
				featured: true
			},
			{
				name: "Failladelphia Stromboli",
				description: "Ribeye, Cooper Sharp, smoked mozzarella, fried onions, sesame seed crust",
				price: "16  /  24",
				featured: true,
				tags: ["Signature"]
			}
		]
	},
	{
		id: "pasta",
		name: "Pasta & Entrees",
		note: "Pastas served with garlic bread. Entrees with two sides. Choice of pasta: spaghetti, penne, linguine, fettuccine, angel hair, cheese ravioli, gnocchi.",
		items: [
			{
				name: "Spaghetti & Meatballs",
				price: "18"
			},
			{
				name: "Penne ala Vodka",
				price: "19"
			},
			{
				name: "Shrimp Penne Rosa",
				description: "Shrimp, peas, creamy rosa sauce",
				price: "24",
				featured: true
			},
			{
				name: "Seafood Linguine",
				price: "26"
			},
			{
				name: "Chicken Parmigiana",
				price: "22"
			},
			{
				name: "Eggplant Parmigiana",
				price: "20"
			},
			{
				name: "Eggplant Rollatini",
				price: "20"
			},
			{
				name: "Chicken Marsala",
				price: "22"
			},
			{
				name: "Chicken Saltimbocca",
				price: "23"
			},
			{
				name: "Veal Parmigiana",
				price: "26"
			},
			{
				name: "Shrimp Scampi",
				price: "24"
			},
			{
				name: "Salmon",
				description: "Lightly seasoned, wood-grilled, two sides",
				price: "26"
			},
			{
				name: "Lasagna",
				price: "20"
			},
			{
				name: "Baked Ziti",
				price: "18"
			},
			{
				name: "Manicotti",
				price: "18"
			},
			{
				name: "Build Your Own Pasta",
				description: "Pick pasta, sauce (marinara, vodka, alfredo, pesto, garlic & oil, meat sauce), and add-ins",
				price: "from 16"
			}
		]
	},
	{
		id: "kids",
		name: "Kids",
		items: [
			{
				name: "Chicken Fingers",
				price: "8"
			},
			{
				name: "Pasta & Butter or Marinara",
				price: "7.50"
			},
			{
				name: "Ravioli",
				price: "8"
			},
			{
				name: "Personal Cheese Pizza",
				price: "9"
			},
			{
				name: "Grilled Cheese",
				price: "7.50"
			}
		]
	},
	{
		id: "desserts",
		name: "Desserts & Drinks",
		items: [
			{
				name: "Cannoli",
				price: "6"
			},
			{
				name: "Tiramisu",
				price: "8"
			},
			{
				name: "Limoncello Cake",
				price: "8",
				featured: true
			},
			{
				name: "Cheesecake",
				price: "8"
			},
			{
				name: "Chocolate Mousse Cake",
				price: "8"
			},
			{
				name: "Lava Cake",
				price: "8"
			},
			{
				name: "Gelato",
				description: "Ask for today’s flavors — made by the Failla family",
				price: "5.50"
			},
			{
				name: "Bottled Soda / 2-Liter",
				price: "2.25  /  3.50"
			},
			{
				name: "Espresso / Cappuccino",
				price: "3  /  3.50"
			},
			{
				name: "Wine",
				description: "House pours by the glass. BYOB always welcome."
			}
		]
	}
];
var disclaimer = "Prices from our July 2025 dine-in menu and may change. Download the PDF or order online for the latest. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.";
function MenuPage() {
	const [active, setActive] = (0, import_react.useState)("all");
	const visible = (0, import_react.useMemo)(() => active === "all" ? categories : categories.filter((c) => c.id === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-tomato",
						children: "Dine-in · Takeout · Catering"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl",
						children: "Menu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: "Grandma pie first. Then everything else a neighborhood Italian kitchen should do. Prices from our July 2025 menu."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.orderUrl,
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Order Online" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.menuPdf,
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " PDF menu"]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-52 z-20 -mx-4 mt-8 border-y border-line bg-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:px-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: active === "all",
						onClick: () => setActive("all"),
						children: "All"
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: active === c.id,
						onClick: () => setActive(c.id),
						children: c.name
					}, c.id))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-14",
				children: visible.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: cat.id,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: cat.name
						}),
						cat.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm text-muted",
							children: cat.note
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 divide-y divide-line border-t border-line",
							children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-medium",
											children: item.name
										}),
										item.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-tomato/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-tomato",
											children: "Favorite"
										}) : null,
										item.tags?.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-paper-2 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted",
											children: tag
										}, tag))
									]
								}), item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.description
								}) : null] }), item.price ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-right text-sm font-medium tabular-nums text-ink-2",
									children: item.price
								}) : null]
							}, item.name))
						})
					]
				}, cat.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 max-w-3xl text-xs leading-relaxed text-muted",
				children: disclaimer
			})
		]
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 shrink-0 rounded-full px-4 text-sm font-medium transition-colors", active ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-line"),
		children
	});
}
//#endregion
export { MenuPage as component };
