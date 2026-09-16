export type Photo = {
  src: string;
  alt: string;
  category: "pizza" | "pasta" | "salad" | "plates" | "shop" | "merch";
  kind?: "image" | "video";
  poster?: string;
};

export const photos: Photo[] = [
  {
    src: "/videos/pies-on-the-pass.mp4",
    alt: "Pies coming off the pass — white, cheesesteak-fries, sausage, cheese, BBQ, and Grandma",
    category: "pizza",
    kind: "video",
    poster: "/images/pies-on-the-pass.jpg",
  },
  {
    src: "/videos/grandma-making.mp4",
    alt: "Making a Grandma pie — dough, sauce, mozzarella squares, oven, basil, and oil",
    category: "pizza",
    kind: "video",
    poster: "/images/grandma-making.jpg",
  },
  {
    src: "/videos/pizza-counter-tour.mp4",
    alt: "Walk up to the counter — pies in the case, the kitchen, and the line",
    category: "shop",
    kind: "video",
    poster: "/images/pizza-counter-tour.jpg",
  },
  {
    src: "/images/grandma-pie.webp",
    alt: "Failla's Grandma pie, square-cut with plum tomato sauce and basil",
    category: "pizza",
  },
  {
    src: "/images/grandma-pie-overhead.webp",
    alt: "Grandma pie overhead, nine squares, sauce on top, grated cheese, and basil",
    category: "pizza",
  },
  {
    src: "/images/grandma-boxes.webp",
    alt: "A line of boxed Grandma pies ready for pickup and catering",
    category: "pizza",
  },
  {
    src: "/images/grandma-boxed.webp",
    alt: "Grandma pie in the box, sauce, mozzarella, and basil",
    category: "pizza",
  },
  {
    src: "/images/grandma-bread-sculpture.webp",
    alt: "Grandma pie with a standing bread sculpture — a special from the kitchen",
    category: "pizza",
  },
  {
    src: "/images/heart-pizza.webp",
    alt: "Heart-shaped pepperoni pizza",
    category: "pizza",
  },
  {
    src: "/images/cheese-pie-case.webp",
    alt: "Round cheese pie coming out of the display case",
    category: "pizza",
  },
  {
    src: "/images/cheese-pie-box.webp",
    alt: "Round cheese pizza boxed for takeout",
    category: "pizza",
  },
  {
    src: "/images/half-and-half-pie.webp",
    alt: "Half red, half white cheese pizza, sliced",
    category: "pizza",
  },
  {
    src: "/images/slices-in-case.webp",
    alt: "Slices in the case — pepperoni, mushroom, chicken, buffalo",
    category: "pizza",
  },
  {
    src: "/images/chic-faill-a.webp",
    alt: "Chic-Faill-A pizza with breaded chicken and fries",
    category: "pizza",
  },
  {
    src: "/images/display-case.webp",
    alt: "Fresh pies in the case, including a white pizza with broccoli and ricotta",
    category: "pizza",
  },
  {
    src: "/videos/catering-trays.mp4",
    alt: "Catering trays — baked ziti, tortellini, and antipasto salad",
    category: "pasta",
    kind: "video",
    poster: "/images/catering-trays.jpg",
  },
  {
    src: "/images/shrimp-pasta.webp",
    alt: "Penne with shrimp in a creamy rosa sauce",
    category: "pasta",
  },
  {
    src: "/images/pasta-chicken-broccoli.webp",
    alt: "Tortellini with chicken, broccoli, and cream sauce",
    category: "pasta",
  },
  {
    src: "/images/tortellini-chicken.webp",
    alt: "Tortellini with chicken, roasted peppers, spinach, and olive oil",
    category: "pasta",
  },
  {
    src: "/images/gnocchi-broccoli.webp",
    alt: "Gnocchi with broccoli and olive oil",
    category: "pasta",
  },
  {
    src: "/images/penne-takeout.webp",
    alt: "Penne in a takeout tray with garlic bread",
    category: "pasta",
  },
  {
    src: "/images/eggplant-rollatini.webp",
    alt: "Eggplant rollatini with marinara and melted mozzarella",
    category: "plates",
  },
  {
    src: "/images/chicken-parm.webp",
    alt: "Chicken parmigiana, takeout tray",
    category: "plates",
  },
  {
    src: "/images/chicken-parm-foil.webp",
    alt: "Chicken parmigiana in a foil tray, extra cheese",
    category: "plates",
  },
  {
    src: "/images/chicken-parm-dine-in.webp",
    alt: "Chicken parmigiana, dine-in, with pasta and garlic bread",
    category: "plates",
  },
  {
    src: "/images/chicken-parm-hoagie.webp",
    alt: "Chicken parm hoagie, split, with marinara and mozzarella",
    category: "plates",
  },
  {
    src: "/images/chicken-marsala.webp",
    alt: "Chicken Marsala with mushrooms and parsley",
    category: "plates",
  },
  {
    src: "/images/chicken-saltimbocca.webp",
    alt: "Chicken saltimbocca with spinach, prosciutto, and mozzarella",
    category: "plates",
  },
  {
    src: "/images/saltimbocca-lemon.webp",
    alt: "Chicken saltimbocca with lemon, spinach, and white wine sauce",
    category: "plates",
  },
  {
    src: "/images/arancini.webp",
    alt: "Three arancini with arugula, shaved parmesan, and sauce",
    category: "plates",
  },
  {
    src: "/images/garlic-knots.webp",
    alt: "Garlic knots with marinara",
    category: "plates",
  },
  {
    src: "/images/fried-calamari.webp",
    alt: "Fried calamari with dipping sauce",
    category: "plates",
  },
  {
    src: "/images/failladelphia-stromboli.webp",
    alt: "Failladelphia stromboli with sesame crust, steak and melted cheese",
    category: "plates",
  },
  {
    src: "/images/stromboli-whole.webp",
    alt: "Whole sesame stromboli on a pizza tray",
    category: "plates",
  },
  {
    src: "/images/cheesesteak.webp",
    alt: "Cheesesteak hoagie with marinara and mozzarella",
    category: "plates",
  },
  {
    src: "/images/italian-hoagie.webp",
    alt: "Italian hoagie with ham, tomato, onion, and oil",
    category: "plates",
  },
  {
    src: "/images/grilled-chicken-hoagie.webp",
    alt: "Grilled chicken hoagie with prosciutto, roasted peppers, and arugula",
    category: "plates",
  },
  {
    src: "/images/burger.webp",
    alt: "Angus burger stacked with fries and cheese sauce",
    category: "plates",
  },
  {
    src: "/images/chicken-quesadilla.webp",
    alt: "Chicken quesadilla, takeout, with salsa and sour cream",
    category: "plates",
  },
  {
    src: "/images/bread-basket.webp",
    alt: "Basket of garlic bread for the table",
    category: "plates",
  },
  {
    src: "/images/cannoli.webp",
    alt: "Cannoli with chocolate drizzle and powdered sugar",
    category: "plates",
  },
  {
    src: "/images/birthday-cannoli.webp",
    alt: "Cannoli with a birthday candle and chocolate lattice",
    category: "plates",
  },
  {
    src: "/images/tiramisu.webp",
    alt: "Tiramisu with cocoa and chocolate drizzle",
    category: "plates",
  },
  {
    src: "/images/limoncello-cake.webp",
    alt: "Slice of Limoncello cake with chocolate drizzle",
    category: "plates",
  },
  {
    src: "/images/prosciutto-salad.webp",
    alt: "Prosciutto rose over mozzarella, arugula, and cherry tomatoes",
    category: "salad",
  },
  {
    src: "/images/caprese.webp",
    alt: "Caprese with tomatoes, burrata, arugula, and balsamic",
    category: "salad",
  },
  {
    src: "/images/caprese-overhead.webp",
    alt: "Caprese overhead with sliced tomatoes and balsamic",
    category: "salad",
  },
  {
    src: "/images/caprese-burrata.webp",
    alt: "Caprese with a whole burrata, tomatoes, and balsamic",
    category: "salad",
  },
  {
    src: "/images/burrata-salad.webp",
    alt: "Burrata salad with roasted peppers, pistachios, and balsamic",
    category: "salad",
  },
  {
    src: "/images/salmon-salad.webp",
    alt: "Grilled salmon over arugula, tomatoes, and cheese with balsamic",
    category: "salad",
  },
  {
    src: "/images/salmon-plated.webp",
    alt: "Grilled salmon on arugula with lemon, feta, and cherry tomatoes",
    category: "salad",
  },
  {
    src: "/images/house-salad.webp",
    alt: "House salad packed for takeout",
    category: "salad",
  },
  {
    src: "/images/catering-salad-tray.webp",
    alt: "Catering salad tray with mozzarella, cucumber, and tomatoes",
    category: "salad",
  },
  {
    src: "/videos/dining-room-birthday.mp4",
    alt: "A birthday in the dining room — pizza on the table, a cannoli with a candle, the room singing",
    category: "shop",
    kind: "video",
    poster: "/images/dining-room-birthday.jpg",
  },
  {
    src: "/videos/logo-anim.mp4",
    alt: "Failla's chef mark — the logo in motion",
    category: "shop",
    kind: "video",
    poster: "/images/logo-anim.jpg",
  },
  {
    src: "/videos/grandma-flip.mp4",
    alt: "Out front at night — a flip in the lot, then “come get a Grandma pizza”",
    category: "shop",
    kind: "video",
    poster: "/images/grandma-flip.jpg",
  },
  {
    src: "/videos/delivery-van.mp4",
    alt: "The delivery van — wrap, phone, website, and window tint",
    category: "shop",
    kind: "video",
    poster: "/images/delivery-van-video.jpg",
  },
  {
    src: "/images/pizza-counter.webp",
    alt: "The pizza counter, display case, and kitchen",
    category: "shop",
  },
  {
    src: "/images/dining-room.webp",
    alt: "The dining room, tables full",
    category: "shop",
  },
  {
    src: "/images/dining-room-inside.webp",
    alt: "Inside the dining room from the host stand — stone half-wall, hanging greens, tables full",
    category: "shop",
  },
  {
    src: "/images/takeout-counter.webp",
    alt: "The takeout counter on a busy night",
    category: "shop",
  },
  {
    src: "/images/merch-counter.webp",
    alt: "Hats, shirts, and house seasoning at the counter",
    category: "shop",
  },
  {
    src: "/images/merch-hoodie-black-front.jpg",
    alt: "Black Failla's hoodie — script logo on the chest",
    category: "merch",
  },
  {
    src: "/images/merch-hoodie-white-front.jpg",
    alt: "White Failla's hoodie — script logo on the chest",
    category: "merch",
  },
  {
    src: "/images/merch-tee-black-front.jpg",
    alt: "Black Failla's tee — Italian and American flags on the sleeves",
    category: "merch",
  },
  {
    src: "/images/merch-hat-black.jpg",
    alt: "Black Failla's cap with the embroidered chef logo",
    category: "merch",
  },
  {
    src: "/images/merch-hoodie-black-back.jpg",
    alt: "Black Failla's hoodie — chef logo on the back",
    category: "merch",
  },
  {
    src: "/images/merch-hoodie-white-back.jpg",
    alt: "White Failla's hoodie — chef logo on the back",
    category: "merch",
  },
  {
    src: "/images/merch-tee-black-back.jpg",
    alt: "Black Failla's tee — chef logo on the back",
    category: "merch",
  },
  {
    src: "/images/storefront-night.webp",
    alt: "Failla's storefront at night with the red script sign lit",
    category: "shop",
  },
  {
    src: "/images/storefront-dusk.webp",
    alt: "Failla's storefront at dusk, neon script on, sky going pink",
    category: "shop",
  },
  {
    src: "/images/storefront-night-wide.webp",
    alt: "Failla's Pizzeria & Ristorante, evening exterior",
    category: "shop",
  },
  {
    src: "/images/storefront-day.webp",
    alt: "Failla's storefront in daylight, empty lot",
    category: "shop",
  },
  {
    src: "/images/storefront-day-guest.webp",
    alt: "Failla's storefront on a clear day",
    category: "shop",
  },
  {
    src: "/images/storefront-winter.webp",
    alt: "Failla's storefront in winter",
    category: "shop",
  },
  {
    src: "/images/delivery-van.webp",
    alt: "Failla's delivery van wrapped Home of the Grandma Pizza",
    category: "shop",
  },
  {
    src: "/images/vendor-tent.webp",
    alt: "Failla's vendor tent — Home of the Grandma Pizza, set up for an event",
    category: "shop",
  },
];
