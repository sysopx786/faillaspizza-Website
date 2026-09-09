export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  featured?: boolean;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
};

export const pizzaSizes =
  "Personal 10″  ·  Large 16″  ·  Sicilian 16″ square";

export const gourmetPizzaSizes =
  "Personal 10″  ·  Large 16″  ·  Sicilian 16″  ·  GF cauliflower 10″";

export const categories: MenuCategory[] = [
  {
    id: "grandma",
    name: "Grandma Pizza",
    note: "Thin-crust Sicilian, 16″. Fresh mozzarella, homemade marinara, EVOO, oregano, parmesan & basil.",
    items: [
      {
        name: "Grandma Pie",
        description:
          "Thin-crust Sicilian. Fresh mozzarella, homemade marinara, EVOO, oregano, parmesan, and basil.",
        price: "25.00",
        featured: true,
        tags: ["Signature"],
      },
    ],
  },
  {
    id: "slices",
    name: "Slices",
    items: [
      { name: "Regular", price: "3.00" },
      { name: "Sicilian", price: "3.50" },
      { name: "Gourmet Slice", price: "4.00" },
      { name: "Toppings", price: "1.00 ea" },
      { name: "Gourmet Toppings", price: "1.25 ea" },
    ],
  },
  {
    id: "traditional",
    name: "Traditional Pizzas",
    note:
      pizzaSizes +
      ". Additional toppings 2.00 / 3.50 / 4.00. Gourmet toppings 3.00 / 6.00 / 7.00. Add burrata 6.00. Add Mike’s Hot Honey 2.00.",
    items: [
      { name: "Plain Cheese", price: "12.00  /  17.00  /  20.00" },
      {
        name: "White",
        description: "Garlic & oil",
        price: "12.00  /  17.00  /  20.00",
      },
      {
        name: "Tomato Pie",
        description: "Marinara, no cheese",
        price: "11.50  /  16.50  /  19.50",
      },
      {
        name: "Gluten-Free Cauliflower Crust",
        description: "10″ only.",
        price: "14.50",
        tags: ["GF"],
      },
    ],
  },
  {
    id: "gourmet",
    name: "Gourmet Pizzas",
    note: gourmetPizzaSizes,
    items: [
      {
        name: "Margherita",
        description: "Sauce, fresh mozzarella, fresh basil & olive oil",
        price: "14.00  /  19.50  /  22.50  /  16.00",
      },
      {
        name: "Upside Down",
        description:
          "Provolone on bottom, marinara on top, with Italian herbs & parmesan",
        price: "14.00  /  19.50  /  22.50  /  16.00",
      },
      {
        name: "Meat Lovers",
        description: "Pepperoni, sausage, bacon, meatballs & extra cheese",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Diavolo",
        description:
          "Pepperoni, capicola, jalapeños, crushed red peppers & Mike’s Hot Honey",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Supreme",
        description:
          "Pepperoni, sausage, mushrooms, onions, green peppers, bacon & extra cheese",
        price: "15.50  /  24.00  /  26.50  /  18.50",
      },
      {
        name: "Chic-Faill-A",
        description: "Breaded chicken, french fries & special sauce",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "BBQ Chicken",
        description: "Mozzarella & American cheese",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Buffalo Chicken",
        description: "Mozzarella & American cheese",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Veggie",
        description:
          "Red or white. Onions, broccoli, green peppers, spinach & mushrooms",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Mediterranean",
        description:
          "Kalamata olives, spinach, artichokes, roasted red peppers & red onions, topped with feta",
        price: "15.50  /  24.00  /  26.50  /  18.50",
      },
      {
        name: "Hawaiian",
        description: "Red or white. Pineapple & ham",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Cheese Steak Pizza",
        description: "Mozzarella & American cheese",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Arugula",
        description:
          "Tomatoes, arugula, prosciutto, topped with balsamic glaze & shaved parmesan",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Tri-Color",
        description:
          "White. Spinach, broccoli, cherry tomatoes, garlic & ricotta cheese",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Tuscan",
        description:
          "Grilled chicken, prosciutto, arugula, sun-dried tomatoes, topped with balsamic glaze",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Pistachio",
        description: "White. Pistachio, ham, pesto & fresh mozzarella",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Grilled Chicken Pesto",
        description: "White. Grilled chicken, tomatoes, pesto & fresh mozzarella",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
      {
        name: "Chicken Bacon Ranch",
        description:
          "Mozzarella & American cheese, grilled chicken, bacon & ranch",
        price: "15.00  /  23.50  /  26.00  /  18.00",
      },
    ],
  },
  {
    id: "apps",
    name: "Appetizers",
    items: [
      {
        name: "Bruschetta",
        description: "(5) Diced tomato & pesto drizzled with balsamic glaze",
        price: "8.50",
      },
      { name: "Garlic Knots", price: "(3) 4.00  ·  (6) 6.00" },
      {
        name: "Tour of Italy",
        description:
          "Bed of arugula, roasted red peppers, Kalamata olives, burrata, Italian meats & cheeses & artichoke, drizzled with balsamic glaze",
        price: "18.50",
        featured: true,
      },
      {
        name: "Mussels",
        description: "Red or white sauce, includes garlic bread",
        price: "14.50",
      },
      { name: "Fried Calamari", price: "13.50" },
      {
        name: "Seafood Bowl",
        description:
          "Red or white. Mussels, clams, shrimp & calamari, served with garlic bread",
        price: "16.50",
      },
      {
        name: "Chicken Fingers",
        description:
          "(5) BBQ, Whiz, honey mustard, ranch or buffalo sauce on the side",
        price: "10.00  ·  with fries 12.50",
      },
      {
        name: "Fried Shrimp",
        description: "(6) Includes tartar & cocktail sauce",
        price: "12.00  ·  with fries 14.50",
      },
      {
        name: "Buffalo Shrimp",
        description: "(6) Tossed in buffalo sauce",
        price: "12.00  ·  with fries 14.50",
      },
      { name: "Mozzarella Sticks", description: "(6)", price: "9.00" },
      {
        name: "Onion Petals",
        description: "With Texas sauce",
        price: "8.50",
      },
      { name: "Mac & Cheese Bites", price: "9.00" },
      { name: "Arancini", description: "Rice balls", price: "6.00" },
      {
        name: "Arancini Sampler",
        description:
          "(1) Ham & bechamel, (1) original ground beef, (1) cheese steak",
        price: "15.50",
      },
    ],
  },
  {
    id: "wings",
    name: "Wings & Fries",
    note: "Wings served with celery and bleu cheese or ranch. Sauces: mild, hot, BBQ, garlic parm, mango habanero.",
    items: [
      {
        name: "Traditional Wings",
        price: "(6) 9.00  ·  (12) 16.00  ·  (24) 30.00  ·  (50) 57.50",
      },
      {
        name: "Boneless Wings",
        price: "(6) 9.00  ·  (12) 16.00  ·  (24) 30.00  ·  (50) 57.50",
      },
      { name: "French Fries", price: "6.50" },
      { name: "Cheese Fries", price: "7.50" },
      { name: "Mozzarella Fries", price: "7.50" },
      {
        name: "Pizza Fries",
        description: "Mozzarella & sauce",
        price: "8.00",
      },
      {
        name: "Loaded Fries",
        description: "Bacon, ranch & mozzarella",
        price: "9.50",
      },
      { name: "Gravy Fries", price: "7.50" },
      {
        name: "Nacho Fries",
        description: "Whiz, steak, jalapeño, tomato & onion",
        price: "10.50",
      },
    ],
  },
  {
    id: "salads",
    name: "Salads & Soup",
    note: "Romaine lettuce base unless specified. Add tuna, grilled or crispy chicken 5.50 · burrata 6.00 · salmon 10.00 · shrimp (6) 8.00. Extra dressing .75 ea.",
    items: [
      {
        name: "Tossed Salad",
        description:
          "Lettuce, cherry tomatoes, red onions, cucumbers, carrots, Kalamata olives & red cabbage",
        price: "10.50",
      },
      { name: "Caesar Salad", price: "10.00" },
      {
        name: "Chicken Caesar Salad",
        description: "Grilled or crispy chicken",
        price: "15.50",
      },
      {
        name: "Chef Salad",
        description: "Turkey, ham & American cheese",
        price: "16.00",
      },
      {
        name: "Tuna Salad",
        description: "Tuna & provolone",
        price: "16.00",
      },
      {
        name: "Mediterranean Salad",
        description:
          "Kalamata olives, green peppers, tomatoes, cucumbers, red onions, feta & Greek dressing",
        price: "16.00",
      },
      {
        name: "Buffalo Chicken Salad",
        description: "Grilled or crispy",
        price: "16.00",
      },
      { name: "Buffalo Fried Shrimp Salad", price: "17.00" },
      {
        name: "Caprese Salad",
        description:
          "Sliced tomatoes, fresh mozzarella, fresh basil, olive oil & balsamic glaze",
        price: "14.50",
      },
      {
        name: "Antipasto Salad",
        description: "Tossed salad, ham, salami, capicola & provolone",
        price: "16.00",
      },
      {
        name: "Super Salad",
        description:
          "Spinach, arugula, carrots, cucumbers, cherry tomatoes, mandarin oranges, cranberries, walnuts & feta",
        price: "16.00",
      },
      {
        name: "Failla’s Salad",
        description:
          "Arugula, spinach, red onions, roasted red peppers, cherry tomatoes, burrata, pistachios, pesto & balsamic glaze",
        price: "17.00",
        featured: true,
      },
      {
        name: "Prosciutto Salad",
        description: "Arugula, fresh mozzarella, balsamic glaze & oil",
        price: "16.00",
      },
      {
        name: "Burrata Caprese Salad",
        description:
          "Sliced tomatoes, burrata, fresh basil, olive oil & balsamic glaze",
        price: "16.50",
      },
      { name: "Soup of the Day", price: "6.50" },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      { name: "Side Tossed Salad", price: "5.50" },
      { name: "Side Caesar Salad", price: "5.00" },
      { name: "Side of Spaghetti", price: "6.00" },
      { name: "Side Meatballs (2)", price: "3.50" },
      { name: "Side Sausage (2)", price: "4.00" },
      {
        name: "Garlic Bread",
        description: "Add cheese 1.00",
        price: "3.00",
      },
      { name: "Plain Roll", price: "2.50" },
      { name: "Broccoli or Spinach", price: "3.50" },
    ],
  },
  {
    id: "steaks",
    name: "Steaks & Cheesesteaks",
    note: "Additional toppings .75 ea. Extra cheese 1.50 ea. Add Cooper Sharp 2.00.",
    items: [
      { name: "Plain Steak", price: "12.50" },
      { name: "Cheese Steak", price: "13.00" },
      {
        name: "Pizza Steak",
        description: "Mozzarella & sauce",
        price: "13.50",
      },
      {
        name: "Deluxe Cheese Steak",
        description:
          "Lettuce, tomato, onion, pickle, mayo & American cheese",
        price: "13.50",
      },
      {
        name: "Failladelphia Cheese Steak",
        description:
          "Ribeye steak, Cooper cheese, smoked cheese & fried onion on a seeded roll",
        price: "16.00",
        featured: true,
        tags: ["Signature"],
      },
      {
        name: "Failla’s Cheese Steak",
        description:
          "Green pepper, mushroom, fried onion, Whiz & American cheese",
        price: "14.00",
      },
      { name: "Chicken Steak", price: "12.50" },
      { name: "Chicken Cheese Steak", price: "13.00" },
      {
        name: "Deluxe Chicken Cheese Steak",
        description:
          "Lettuce, tomato, onion, pickle, mayo & American cheese",
        price: "13.50",
      },
      {
        name: "Buffalo Chicken Cheese Steak",
        description: "Buffalo sauce & American cheese",
        price: "13.00",
      },
      {
        name: "Failla’s Chicken Cheese Steak",
        description:
          "Mushroom, fried onion, green pepper, Whiz & American cheese",
        price: "14.00",
      },
      {
        name: "Pizza Chicken Cheese Steak",
        description: "Chicken, mozzarella & sauce",
        price: "13.50",
      },
    ],
  },
  {
    id: "hoagies",
    name: "Hoagies & Sandwiches",
    note: "12″ cold hoagies include lettuce, tomato, onion, oregano, and olive oil or mayo — also available as grinders. Cold sandwiches include lettuce & tomato, choice of white or wheat, served with fries. Extra toppings .75 ea.",
    items: [
      {
        name: "Italian Hoagie",
        description: "Salami, capicola, ham & provolone",
        price: "12.50",
      },
      {
        name: "Prosciutto Hoagie",
        description: "Arugula, fresh mozzarella, balsamic glaze & olive oil",
        price: "13.00",
      },
      {
        name: "Mixed Cheeses Hoagie",
        description: "American, Swiss & provolone",
        price: "12.50",
      },
      {
        name: "Caprese Hoagie",
        description:
          "Sliced tomatoes, fresh mozzarella, fresh basil, olive oil & balsamic glaze",
        price: "12.50",
      },
      { name: "Turkey & American Cheese Hoagie", price: "12.50" },
      { name: "Ham & American Cheese Hoagie", price: "12.50" },
      { name: "Tuna & American Cheese Hoagie", price: "12.50" },
      {
        name: "American Hoagie",
        description: "Salami, ham & American cheese",
        price: "12.50",
      },
      { name: "B.L.T.", description: "On toasted bread, with fries", price: "11.50" },
      {
        name: "Ham & American Cheese Sandwich",
        description: "With fries",
        price: "12.00",
      },
      {
        name: "Turkey & American Cheese Sandwich",
        description: "With fries",
        price: "12.00",
      },
      {
        name: "Tuna & American Cheese Sandwich",
        description: "With fries",
        price: "12.00",
      },
      { name: "Ham & American Cheese Club", price: "13.00" },
      { name: "Turkey & American Cheese Club", price: "13.00" },
      {
        name: "Meatball Parmigiana",
        description: "Mozzarella & sauce",
        price: "13.00",
      },
      {
        name: "Chicken Parmigiana Hoagie",
        description: "Grilled or crispy chicken with mozzarella & sauce",
        price: "13.00",
      },
      {
        name: "Sausage Parmigiana",
        description: "Mozzarella & sauce",
        price: "13.00",
      },
      {
        name: "Sausage, Pepper & Onion Parmigiana",
        description: "Mozzarella, sauce, green pepper & fried onion",
        price: "13.50",
      },
      {
        name: "Veal Parmigiana Hoagie",
        description: "Mozzarella & sauce",
        price: "14.00",
      },
      {
        name: "Shrimp Parmigiana",
        description: "Crispy shrimp, mozzarella & sauce",
        price: "14.00",
      },
      {
        name: "Eggplant Parmigiana Hoagie",
        description: "Crispy eggplant, mozzarella & sauce",
        price: "12.50",
      },
      {
        name: "Deluxe Chicken Hoagie",
        description:
          "Grilled or crispy chicken, lettuce, tomato, onion, pickle & mayo",
        price: "13.50",
      },
      {
        name: "Veggie Grinder",
        description:
          "Broccoli, spinach, onion, mushroom, garlic, roasted peppers & provolone",
        price: "12.50",
      },
      {
        name: "Buffalo Chicken Hoagie",
        description:
          "Grilled or crispy chicken, lettuce, tomato & American cheese",
        price: "13.50",
      },
      {
        name: "Flounder Sandwich",
        description:
          "Brioche bun, lettuce, tomato, tartar sauce & Swiss, served with fries",
        price: "12.50",
      },
      {
        name: "Failla’s Grilled Chicken",
        description:
          "Prosciutto, roasted peppers, arugula, provolone, olive oil & balsamic glaze",
        price: "14.50",
      },
    ],
  },
  {
    id: "wraps-quesadillas-burgers",
    name: "Wraps, Quesadillas & Burgers",
    note: "Wraps: wheat or white tortilla. Add bacon 3.00. Extra toppings .75 ea. Quesadillas served with salsa, sour cream, lettuce & tomato on the side. Burgers: add bacon 3.00, extra toppings .75 ea.",
    items: [
      {
        name: "Tuna Wrap",
        description: "Lettuce, tomato, onion & American cheese",
        price: "12.50",
      },
      {
        name: "Italian Wrap",
        description: "Lettuce, tomato, onion, ham, capicola, salami & provolone",
        price: "12.50",
      },
      {
        name: "Verde Wrap",
        description:
          "Grilled chicken, broccoli, spinach, garlic & American cheese",
        price: "12.50",
      },
      {
        name: "Turkey Wrap",
        description: "Lettuce, tomato, onion & American cheese",
        price: "12.50",
      },
      {
        name: "Chicken Caesar Wrap",
        description:
          "Grilled or crispy chicken, Caesar dressing, lettuce & shaved parmesan",
        price: "12.50",
      },
      {
        name: "Chicken Cheese Steak Wrap",
        description: "Lettuce, tomato & American cheese",
        price: "12.50",
      },
      {
        name: "Cooked Veggie Wrap",
        description:
          "Garlic, spinach, broccoli, roasted red pepper, mushroom, onion & provolone",
        price: "12.50",
      },
      {
        name: "Buffalo Chicken Wrap",
        description:
          "Grilled or crispy chicken, buffalo sauce, lettuce, tomato & American cheese",
        price: "12.50",
      },
      {
        name: "Cheese Steak Wrap",
        description: "Lettuce, tomato & American cheese",
        price: "13.00",
      },
      {
        name: "Deluxe Chicken Wrap",
        description:
          "Grilled or crispy chicken, lettuce, tomato, onion, pickle & mayo",
        price: "12.50",
      },
      {
        name: "Cheese Quesadilla",
        description: "Mozzarella",
        price: "12.50",
      },
      {
        name: "Grilled Chicken Quesadilla",
        description: "Grilled chicken & mozzarella",
        price: "14.50",
      },
      { name: "Steak Quesadilla", description: "Mozzarella", price: "15.00" },
      {
        name: "Chicken Steak Quesadilla",
        description: "Mozzarella",
        price: "14.50",
      },
      {
        name: "Tuscan Quesadilla",
        description: "Grilled chicken, roasted peppers, spinach & mozzarella",
        price: "15.00",
      },
      {
        name: "Buffalo Shrimp Quesadilla",
        description: "Fried shrimp in buffalo sauce & mozzarella",
        price: "15.50",
      },
      {
        name: "Veggie Quesadilla",
        description:
          "Broccoli, spinach, onion, mushroom, roasted red peppers & mozzarella",
        price: "14.00",
      },
      {
        name: "Buffalo Chicken Quesadilla",
        description: "Grilled chicken & mozzarella",
        price: "15.00",
      },
      {
        name: "BBQ Chicken Quesadilla",
        description: "Grilled chicken & mozzarella",
        price: "15.00",
      },
      { name: "Plain Burger", price: "10.00" },
      {
        name: "Cheese Burger",
        description: "American cheese",
        price: "10.50",
      },
      {
        name: "Supreme Burger",
        description:
          "Lettuce, tomato, mayo, green peppers, fried onions, mushrooms & American cheese",
        price: "12.50",
      },
      {
        name: "Sweet & Spicy Burger",
        description:
          "Mike’s Hot Honey, jalapeños, fried onions, bacon & provolone",
        price: "12.50",
      },
      {
        name: "Texas Burger",
        description: "Fried onion petals, BBQ, bacon, pickles & provolone",
        price: "12.50",
      },
      {
        name: "Deluxe Burger",
        description:
          "Lettuce, tomato, onion, pickle, mayo & American cheese",
        price: "12.50",
      },
      {
        name: "Pizza Burger",
        description: "Mozzarella & sauce",
        price: "12.50",
      },
    ],
  },
  {
    id: "stromboli",
    name: "Stromboli",
    note: "Mozzarella with sauce on the side. Prices: personal / large.",
    items: [
      { name: "Plain Stromboli", price: "10.50  /  17.50" },
      { name: "Pepperoni", price: "12.50  /  21.00" },
      { name: "Steak", price: "14.00  /  22.50" },
      { name: "Chicken Steak Stromboli", price: "13.50  /  22.00", featured: true },
      { name: "Buffalo Chicken", price: "13.50  /  22.00" },
      {
        name: "Italian",
        description: "Ham, salami & capicola",
        price: "14.00  /  22.50",
      },
      {
        name: "Failladelphia Stromboli",
        description:
          "Ribeye steak, Cooper cheese, smoked cheese, mozzarella & fried vidalia onions in a seeded pizza crust",
        price: "17.00  /  26.00",
        featured: true,
        tags: ["Signature"],
      },
      {
        name: "Meatlover",
        description: "Pepperoni, sausage, bacon & meatballs",
        price: "14.00  /  22.50",
      },
      {
        name: "Supreme Stromboli",
        description:
          "Pepperoni, sausage, black olives, mushrooms, onions, green peppers, bacon & extra cheese",
        price: "15.50  /  25.00",
      },
      {
        name: "Veggie Stromboli",
        description:
          "Onions, broccoli, green peppers, spinach & mushrooms",
        price: "13.00  /  21.50",
      },
      {
        name: "Calzone",
        description: "Ham, ricotta & mozzarella",
        price: "13.00  /  21.50",
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta & Entrees",
    note: "Pastas served with garlic bread and a side tossed or Caesar salad. Entrées served with garlic bread and choice of tossed salad, Caesar salad, or spaghetti. Pasta: spaghetti, linguini, fettuccine, penne, gluten-free penne. Specialty pasta (tortellini, gnocchi, sacchetti, ravioli, cavatelli) +2.50.",
    items: [
      {
        name: "Pasta with Traditional Sauce",
        price: "17.50",
      },
      { name: "Pasta with Meat Sauce", price: "21.00" },
      { name: "Pasta with Alfredo Sauce", price: "17.50" },
      { name: "Pasta with Pesto Sauce", price: "18.00" },
      { name: "Pasta with Rosa Sauce", price: "18.00" },
      { name: "Pasta with Garlic & Oil", price: "17.00" },
      {
        name: "Pasta with Marinara",
        description: "A thicker, more spicy sauce with more hints of garlic",
        price: "17.50",
      },
      {
        name: "Seafood Linguini",
        description: "Red or white. Shrimp, mussels, clams & calamari",
        price: "24.00",
      },
      { name: "Linguini with Clam", description: "Red or white", price: "22.00" },
      {
        name: "Failla’s Special Penne",
        description: "Ham, peas, salami, mushrooms, onions & Rosa meat sauce",
        price: "22.00",
      },
      {
        name: "Tortellini Primavera",
        description:
          "Mushrooms, spinach, broccoli, sun-dried tomatoes & light cream",
        price: "22.00",
      },
      {
        name: "Sacchetti Caprese",
        description: "Pesto sauce with cherry tomatoes, garlic & fresh mozzarella",
        price: "22.00",
      },
      {
        name: "Linguini Fra Diavolo",
        description:
          "Spicy marinara, Kalamata olives, diced jalapeños, crushed red pepper & shrimp",
        price: "22.00",
      },
      {
        name: "Meat Lovers Spaghetti",
        description: "Ground beef, sausage, ham & bacon in a Rosa sauce",
        price: "22.00",
      },
      {
        name: "Penne Alla Giulia",
        description: "Rosa sauce with salmon, shrimp & peas",
        price: "24.00",
        featured: true,
      },
      {
        name: "Cavatelli Bolognese",
        description: "Ground beef, peas, carrots & celery",
        price: "22.00",
      },
      {
        name: "Angela’s Sacchetti",
        description: "Maple cream sauce, walnuts & bacon",
        price: "22.00",
      },
      {
        name: "Gnocchi Saporiti",
        description: "Light cream sauce with artichokes, mushrooms & spinach",
        price: "22.00",
      },
      {
        name: "Shrimp Scampi",
        description: "Over linguini with white wine & lemon garlic sauce",
        price: "23.00",
      },
      {
        name: "Meat Lasagna",
        description:
          "Lasagna noodles, meat sauce, ricotta, Failla’s traditional sauce & melted mozzarella",
        price: "21.00",
      },
      {
        name: "Baked Ravioli",
        description:
          "Cheese ravioli with Failla’s traditional sauce & melted mozzarella",
        price: "19.50",
      },
      {
        name: "Manicotti",
        description: "Failla’s traditional sauce with melted mozzarella",
        price: "19.50",
      },
      {
        name: "Baked Ziti",
        description:
          "Failla’s traditional sauce, ricotta, parmesan & melted mozzarella",
        price: "20.00",
      },
      { name: "Veal Parmigiana", price: "23.00" },
      { name: "Chicken Parmigiana", price: "22.00" },
      { name: "Eggplant Parmigiana", price: "20.00" },
      {
        name: "Chicken Marsala",
        description: "Marsala wine sauce & mushrooms",
        price: "23.00",
      },
      {
        name: "Veal Marsala",
        description: "Marsala wine sauce & mushroom",
        price: "24.00",
      },
      {
        name: "Tuscan Chicken",
        description:
          "Bed of arugula, prosciutto, roasted peppers, provolone, balsamic glaze & pesto",
        price: "23.00",
      },
      {
        name: "Chicken Saltimbocca",
        description:
          "Lemon white wine sauce & garlic with prosciutto, spinach & provolone",
        price: "23.00",
      },
      {
        name: "Veal Saltimbocca",
        description:
          "Lemon white wine sauce & garlic with prosciutto, spinach & provolone",
        price: "24.00",
      },
      {
        name: "Salmon Entrée",
        description:
          "Bed of arugula, cherry tomatoes, honey, balsamic glaze & topped with feta",
        price: "25.00",
      },
      {
        name: "Teriyaki Salmon",
        description:
          "Sautéed onions, mushrooms & carrots, topped with teriyaki sauce",
        price: "25.00",
      },
      {
        name: "Eggplant Rollatini",
        description:
          "Grilled eggplant stuffed with ricotta & spinach, baked in mozzarella & sauce",
        price: "22.00",
      },
      {
        name: "Flounder Platter",
        description:
          "Deep fried, hand-breaded flounder served with fries, tartar & cocktail sauce",
        price: "23.00",
      },
      {
        name: "Flounder Parmesan",
        description: "Mozzarella & sauce",
        price: "23.00",
      },
    ],
  },
  {
    id: "kids",
    name: "Kids",
    items: [
      {
        name: "Chicken Fingers",
        description: "(3) with fries",
        price: "8.00",
      },
      {
        name: "Spaghetti",
        description: "With (1) meatball",
        price: "7.50",
      },
      {
        name: "Grilled Cheese",
        description: "With fries",
        price: "7.50",
      },
      { name: "Penne Alfredo", price: "7.50" },
      {
        name: "Cheese Ravioli",
        description: "(3) with sauce",
        price: "8.00",
      },
      {
        name: "Grilled Chicken Breast",
        description: "With broccoli",
        price: "8.00",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Tiramisu", price: "8.00" },
      { name: "Cannoli", price: "5.00" },
      { name: "Homemade Gelato", price: "8.00" },
      { name: "Chocolate Mousse Cake", price: "8.00" },
      { name: "Limoncello Cake", price: "8.00", featured: true },
      { name: "Cheesecake", price: "8.00" },
      { name: "Lava Cake", price: "8.00" },
      { name: "Peanut Butter Explosion", price: "8.00" },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Fountain Soda", price: "3.25" },
      { name: "20oz Soda", price: "3.00" },
      { name: "2 Liter", price: "4.00" },
      { name: "Water Bottle", price: "2.00" },
      { name: "Tea/Gatorade", price: "3.25" },
      { name: "Milk/Chocolate Milk", price: "3.00" },
      { name: "Coffee", price: "2.50" },
      { name: "Espresso", price: "3.00" },
      { name: "Double Espresso", price: "5.00" },
    ],
  },
];

export const disclaimer =
  "Prices from our July 2025 dine-in menu and may change. Download the PDF or order online for the latest. All cash purchases receive a 3.99% discount. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Tax not included.";
