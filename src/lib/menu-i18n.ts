import type { Lang } from "@/lib/i18n";
import { categories, type MenuCategory } from "@/data/menu";
import type { Pack } from "./menu-i18n-types";
import { itItems } from "./menu-i18n-it";
import { ptItems } from "./menu-i18n-pt";

const PRICE: Record<Exclude<Lang, "en">, { ea: string; fries: string }> = {
  es: { ea: "c/u", fries: "con papas" },
  pt: { ea: "cada", fries: "com batatas" },
  it: { ea: "cad.", fries: "con patatine" },
};

function localizePrice(price: string, lang: Lang) {
  if (lang === "en") return price;
  const bits = PRICE[lang];
  return price.replace(/with fries/gi, bits.fries).replace(/\bea\b/g, bits.ea);
}

const es: Pack = {
  cats: {
    grandma: {
      name: "Pizza Grandma",
      note: "Siciliana de masa fina, 16″. Mozzarella fresca, marinara casera, AOVE, orégano, parmesano y albahaca.",
    },
    slices: { name: "Porciones" },
    traditional: {
      name: "Pizzas tradicionales",
      note: "Personal 10″  ·  Grande 16″  ·  Siciliana 16″ cuadrada. Ingredientes extra 2.00 / 3.50 / 4.00. Gourmet 3.00 / 6.00 / 7.00. Burrata 6.00. Mike’s Hot Honey 2.00.",
    },
    gourmet: {
      name: "Pizzas gourmet",
      note: "Personal 10″  ·  Grande 16″  ·  Siciliana 16″  ·  Coliflor sin gluten 10″",
    },
    apps: { name: "Entrantes" },
    wings: {
      name: "Alitas y papas",
      note: "Alitas con apio y queso azul o ranch. Salsas: suave, picante, BBQ, garlic parm, mango habanero.",
    },
    salads: {
      name: "Ensaladas y sopa",
      note: "Base de lechuga romana salvo que se indique. Añadir atún, pollo a la parrilla o crujiente 5.50 · burrata 6.00 · salmón 10.00 · camarones (6) 8.00. Aderezo extra .75 c/u.",
    },
    sides: { name: "Acompañamientos" },
    steaks: {
      name: "Steaks y cheesesteaks",
      note: "Ingredientes extra .75 c/u. Queso extra 1.50 c/u. Cooper Sharp 2.00.",
    },
    hoagies: {
      name: "Hoagies y sándwiches",
      note: "Hoagies fríos de 12″ con lechuga, tomate, cebolla, orégano y aceite o mayo — también en grinder. Sándwiches fríos con lechuga y tomate, pan blanco o integral, con papas. Extra .75 c/u.",
    },
    "wraps-quesadillas-burgers": {
      name: "Wraps, quesadillas y hamburguesas",
      note: "Wraps: tortilla de trigo o blanca. Tocino 3.00. Extra .75 c/u. Quesadillas con salsa, crema, lechuga y tomate. Hamburguesas: tocino 3.00, extra .75 c/u.",
    },
    stromboli: {
      name: "Stromboli",
      note: "Mozzarella con salsa al lado. Precios: personal / grande.",
    },
    pasta: {
      name: "Pastas y platos",
      note: "Pastas con pan de ajo y ensalada tossed o César. Platos con pan de ajo y ensalada tossed, César o spaghetti. Pasta: spaghetti, linguini, fettuccine, penne, penne sin gluten. Pasta especial (tortellini, ñoquis, sacchetti, ravioli, cavatelli) +2.50.",
    },
    kids: { name: "Niños" },
    desserts: { name: "Postres" },
    beverages: { name: "Bebidas" },
  },
  items: {
    "grandma::Grandma Pie": {
      name: "Pizza Grandma",
      description:
        "Siciliana de masa fina. Mozzarella fresca, marinara casera, AOVE, orégano, parmesano y albahaca.",
    },
    "slices::Regular": { name: "Normal" },
    "slices::Sicilian": { name: "Siciliana" },
    "slices::Gourmet Slice": { name: "Porción gourmet" },
    "slices::Toppings": { name: "Ingredientes" },
    "slices::Gourmet Toppings": { name: "Ingredientes gourmet" },
    "traditional::Plain Cheese": { name: "Queso" },
    "traditional::White": { name: "Blanca", description: "Ajo y aceite" },
    "traditional::Tomato Pie": { name: "Tomato pie", description: "Marinara, sin queso" },
    "traditional::Gluten-Free Cauliflower Crust": {
      name: "Masa de coliflor sin gluten",
      description: "Solo 10″.",
    },
    "gourmet::Margherita": {
      name: "Margherita",
      description: "Salsa, mozzarella fresca, albahaca fresca y aceite de oliva",
    },
    "gourmet::Upside Down": {
      name: "Upside Down",
      description: "Provolone abajo, marinara arriba, hierbas italianas y parmesano",
    },
    "gourmet::Meat Lovers": {
      name: "Meat Lovers",
      description: "Pepperoni, salchicha, tocino, albóndigas y queso extra",
    },
    "gourmet::Diavolo": {
      name: "Diavolo",
      description: "Pepperoni, capicola, jalapeños, chile rojo y Mike’s Hot Honey",
    },
    "gourmet::Supreme": {
      name: "Supreme",
      description:
        "Pepperoni, salchicha, champiñones, cebolla, pimiento verde, tocino y queso extra",
    },
    "gourmet::Chic-Faill-A": {
      name: "Chic-Faill-A",
      description: "Pollo empanizado, papas fritas y salsa especial",
    },
    "gourmet::BBQ Chicken": {
      name: "Pollo BBQ",
      description: "Mozzarella y queso americano",
    },
    "gourmet::Buffalo Chicken": {
      name: "Pollo buffalo",
      description: "Mozzarella y queso americano",
    },
    "gourmet::Veggie": {
      name: "Vegetariana",
      description: "Roja o blanca. Cebolla, brócoli, pimiento verde, espinaca y champiñones",
    },
    "gourmet::Mediterranean": {
      name: "Mediterránea",
      description:
        "Aceitunas kalamata, espinaca, alcachofas, pimientos asados y cebolla morada, con feta",
    },
    "gourmet::Hawaiian": {
      name: "Hawaiana",
      description: "Roja o blanca. Piña y jamón",
    },
    "gourmet::Cheese Steak Pizza": {
      name: "Pizza cheesesteak",
      description: "Mozzarella y queso americano",
    },
    "gourmet::Arugula": {
      name: "Rúcula",
      description: "Tomate, rúcula, prosciutto, glaseado balsámico y parmesano",
    },
    "gourmet::Tri-Color": {
      name: "Tri-Color",
      description: "Blanca. Espinaca, brócoli, tomates cherry, ajo y ricotta",
    },
    "gourmet::Tuscan": {
      name: "Toscana",
      description:
        "Pollo a la parrilla, prosciutto, rúcula, tomates secos y glaseado balsámico",
    },
    "gourmet::Pistachio": {
      name: "Pistacho",
      description: "Blanca. Pistacho, jamón, pesto y mozzarella fresca",
    },
    "gourmet::Grilled Chicken Pesto": {
      name: "Pollo al pesto",
      description: "Blanca. Pollo a la parrilla, tomate, pesto y mozzarella fresca",
    },
    "gourmet::Chicken Bacon Ranch": {
      name: "Pollo, tocino y ranch",
      description: "Mozzarella y americano, pollo a la parrilla, tocino y ranch",
    },
    "apps::Bruschetta": {
      name: "Bruschetta",
      description: "(5) Tomate picado y pesto con glaseado balsámico",
    },
    "apps::Garlic Knots": { name: "Nudos de ajo" },
    "apps::Tour of Italy": {
      name: "Tour de Italia",
      description:
        "Rúcula, pimientos asados, aceitunas kalamata, burrata, fiambres y quesos italianos y alcachofa, con balsámico",
    },
    "apps::Mussels": {
      name: "Mejillones",
      description: "Salsa roja o blanca, con pan de ajo",
    },
    "apps::Fried Calamari": { name: "Calamares fritos" },
    "apps::Seafood Bowl": {
      name: "Bowl de mariscos",
      description: "Roja o blanca. Mejillones, almejas, camarones y calamar, con pan de ajo",
    },
    "apps::Chicken Fingers": {
      name: "Fingers de pollo",
      description: "(5) BBQ, Whiz, mostaza y miel, ranch o buffalo al lado",
    },
    "apps::Fried Shrimp": {
      name: "Camarones fritos",
      description: "(6) Con tártara y cóctel",
    },
    "apps::Buffalo Shrimp": {
      name: "Camarones buffalo",
      description: "(6) En salsa buffalo",
    },
    "apps::Mozzarella Sticks": { name: "Palitos de mozzarella", description: "(6)" },
    "apps::Onion Petals": { name: "Pétalos de cebolla", description: "Con salsa Texas" },
    "apps::Mac & Cheese Bites": { name: "Bocados de mac & cheese" },
    "apps::Arancini": { name: "Arancini", description: "Croquetas de arroz" },
    "apps::Arancini Sampler": {
      name: "Tabla de arancini",
      description: "(1) Jamón y bechamel, (1) carne original, (1) cheesesteak",
    },
    "wings::Traditional Wings": { name: "Alitas tradicionales" },
    "wings::Boneless Wings": { name: "Alitas sin hueso" },
    "wings::French Fries": { name: "Papas fritas" },
    "wings::Cheese Fries": { name: "Papas con queso" },
    "wings::Mozzarella Fries": { name: "Papas con mozzarella" },
    "wings::Pizza Fries": { name: "Papas pizza", description: "Mozzarella y salsa" },
    "wings::Loaded Fries": {
      name: "Papas loaded",
      description: "Tocino, ranch y mozzarella",
    },
    "wings::Gravy Fries": { name: "Papas con gravy" },
    "wings::Nacho Fries": {
      name: "Papas nacho",
      description: "Whiz, steak, jalapeño, tomate y cebolla",
    },
    "salads::Tossed Salad": {
      name: "Ensalada tossed",
      description:
        "Lechuga, tomates cherry, cebolla morada, pepino, zanahoria, aceitunas kalamata y col morada",
    },
    "salads::Caesar Salad": { name: "Ensalada César" },
    "salads::Chicken Caesar Salad": {
      name: "César con pollo",
      description: "Pollo a la parrilla o crujiente",
    },
    "salads::Chef Salad": {
      name: "Ensalada del chef",
      description: "Pavo, jamón y queso americano",
    },
    "salads::Tuna Salad": { name: "Ensalada de atún", description: "Atún y provolone" },
    "salads::Mediterranean Salad": {
      name: "Ensalada mediterránea",
      description:
        "Aceitunas kalamata, pimiento verde, tomate, pepino, cebolla morada, feta y aderezo griego",
    },
    "salads::Buffalo Chicken Salad": {
      name: "Ensalada de pollo buffalo",
      description: "A la parrilla o crujiente",
    },
    "salads::Buffalo Fried Shrimp Salad": { name: "Ensalada de camarones buffalo" },
    "salads::Caprese Salad": {
      name: "Ensalada caprese",
      description: "Tomate, mozzarella fresca, albahaca, aceite de oliva y balsámico",
    },
    "salads::Antipasto Salad": {
      name: "Ensalada antipasto",
      description: "Tossed, jamón, salami, capicola y provolone",
    },
    "salads::Super Salad": {
      name: "Super Salad",
      description:
        "Espinaca, rúcula, zanahoria, pepino, tomates cherry, mandarina, arándanos, nueces y feta",
    },
    "salads::Failla’s Salad": {
      name: "Ensalada Failla’s",
      description:
        "Rúcula, espinaca, cebolla morada, pimientos asados, tomates cherry, burrata, pistachos, pesto y balsámico",
    },
    "salads::Prosciutto Salad": {
      name: "Ensalada de prosciutto",
      description: "Rúcula, mozzarella fresca, balsámico y aceite",
    },
    "salads::Burrata Caprese Salad": {
      name: "Caprese con burrata",
      description: "Tomate, burrata, albahaca, aceite de oliva y balsámico",
    },
    "salads::Soup of the Day": { name: "Sopa del día" },
    "sides::Side Tossed Salad": { name: "Ensalada tossed (lado)" },
    "sides::Side Caesar Salad": { name: "César (lado)" },
    "sides::Side of Spaghetti": { name: "Spaghetti (lado)" },
    "sides::Side Meatballs (2)": { name: "Albóndigas (2)" },
    "sides::Side Sausage (2)": { name: "Salchicha (2)" },
    "sides::Garlic Bread": { name: "Pan de ajo", description: "Con queso 1.00" },
    "sides::Plain Roll": { name: "Panecillo" },
    "sides::Broccoli or Spinach": { name: "Brócoli o espinaca" },
    "steaks::Plain Steak": { name: "Steak natural" },
    "steaks::Cheese Steak": { name: "Cheesesteak" },
    "steaks::Pizza Steak": { name: "Pizza steak", description: "Mozzarella y salsa" },
    "steaks::Deluxe Cheese Steak": {
      name: "Cheesesteak deluxe",
      description: "Lechuga, tomate, cebolla, pepinillo, mayo y queso americano",
    },
    "steaks::Failladelphia Cheese Steak": {
      name: "Cheesesteak Failladelphia",
      description:
        "Ribeye, Cooper, queso ahumado y cebolla frita en pan con semillas",
    },
    "steaks::Failla’s Cheese Steak": {
      name: "Cheesesteak Failla’s",
      description: "Pimiento verde, champiñón, cebolla frita, Whiz y americano",
    },
    "steaks::Chicken Steak": { name: "Chicken steak" },
    "steaks::Chicken Cheese Steak": { name: "Chicken cheesesteak" },
    "steaks::Deluxe Chicken Cheese Steak": {
      name: "Chicken cheesesteak deluxe",
      description: "Lechuga, tomate, cebolla, pepinillo, mayo y americano",
    },
    "steaks::Buffalo Chicken Cheese Steak": {
      name: "Chicken cheesesteak buffalo",
      description: "Salsa buffalo y queso americano",
    },
    "steaks::Failla’s Chicken Cheese Steak": {
      name: "Chicken cheesesteak Failla’s",
      description: "Champiñón, cebolla frita, pimiento verde, Whiz y americano",
    },
    "steaks::Pizza Chicken Cheese Steak": {
      name: "Pizza chicken cheesesteak",
      description: "Pollo, mozzarella y salsa",
    },
    "hoagies::Italian Hoagie": {
      name: "Hoagie italiano",
      description: "Salami, capicola, jamón y provolone",
    },
    "hoagies::Prosciutto Hoagie": {
      name: "Hoagie de prosciutto",
      description: "Rúcula, mozzarella fresca, balsámico y aceite de oliva",
    },
    "hoagies::Mixed Cheeses Hoagie": {
      name: "Hoagie de quesos",
      description: "Americano, suizo y provolone",
    },
    "hoagies::Caprese Hoagie": {
      name: "Hoagie caprese",
      description: "Tomate, mozzarella fresca, albahaca, aceite de oliva y balsámico",
    },
    "hoagies::Turkey & American Cheese Hoagie": { name: "Hoagie de pavo y americano" },
    "hoagies::Ham & American Cheese Hoagie": { name: "Hoagie de jamón y americano" },
    "hoagies::Tuna & American Cheese Hoagie": { name: "Hoagie de atún y americano" },
    "hoagies::American Hoagie": {
      name: "Hoagie americano",
      description: "Salami, jamón y queso americano",
    },
    "hoagies::B.L.T.": { name: "B.L.T.", description: "En pan tostado, con papas" },
    "hoagies::Ham & American Cheese Sandwich": {
      name: "Sándwich de jamón y americano",
      description: "Con papas",
    },
    "hoagies::Turkey & American Cheese Sandwich": {
      name: "Sándwich de pavo y americano",
      description: "Con papas",
    },
    "hoagies::Tuna & American Cheese Sandwich": {
      name: "Sándwich de atún y americano",
      description: "Con papas",
    },
    "hoagies::Ham & American Cheese Club": { name: "Club de jamón y americano" },
    "hoagies::Turkey & American Cheese Club": { name: "Club de pavo y americano" },
    "hoagies::Meatball Parmigiana": {
      name: "Albóndigas a la parmesana",
      description: "Mozzarella y salsa",
    },
    "hoagies::Chicken Parmigiana Hoagie": {
      name: "Hoagie de pollo a la parmesana",
      description: "Pollo a la parrilla o crujiente con mozzarella y salsa",
    },
    "hoagies::Sausage Parmigiana": {
      name: "Salchicha a la parmesana",
      description: "Mozzarella y salsa",
    },
    "hoagies::Sausage, Pepper & Onion Parmigiana": {
      name: "Salchicha, pimiento y cebolla a la parmesana",
      description: "Mozzarella, salsa, pimiento verde y cebolla frita",
    },
    "hoagies::Veal Parmigiana Hoagie": {
      name: "Hoagie de ternera a la parmesana",
      description: "Mozzarella y salsa",
    },
    "hoagies::Shrimp Parmigiana": {
      name: "Camarones a la parmesana",
      description: "Camarones crujientes, mozzarella y salsa",
    },
    "hoagies::Eggplant Parmigiana Hoagie": {
      name: "Hoagie de berenjena a la parmesana",
      description: "Berenjena crujiente, mozzarella y salsa",
    },
    "hoagies::Deluxe Chicken Hoagie": {
      name: "Hoagie de pollo deluxe",
      description: "Pollo a la parrilla o crujiente, lechuga, tomate, cebolla, pepinillo y mayo",
    },
    "hoagies::Veggie Grinder": {
      name: "Grinder vegetariano",
      description: "Brócoli, espinaca, cebolla, champiñón, ajo, pimientos asados y provolone",
    },
    "hoagies::Buffalo Chicken Hoagie": {
      name: "Hoagie de pollo buffalo",
      description: "Pollo a la parrilla o crujiente, lechuga, tomate y americano",
    },
    "hoagies::Flounder Sandwich": {
      name: "Sándwich de lenguado",
      description: "Brioche, lechuga, tomate, tártara y suizo, con papas",
    },
    "hoagies::Failla’s Grilled Chicken": {
      name: "Pollo a la parrilla Failla’s",
      description: "Prosciutto, pimientos asados, rúcula, provolone, aceite y balsámico",
    },
    "wraps-quesadillas-burgers::Tuna Wrap": {
      name: "Wrap de atún",
      description: "Lechuga, tomate, cebolla y americano",
    },
    "wraps-quesadillas-burgers::Italian Wrap": {
      name: "Wrap italiano",
      description: "Lechuga, tomate, cebolla, jamón, capicola, salami y provolone",
    },
    "wraps-quesadillas-burgers::Verde Wrap": {
      name: "Wrap verde",
      description: "Pollo a la parrilla, brócoli, espinaca, ajo y americano",
    },
    "wraps-quesadillas-burgers::Turkey Wrap": {
      name: "Wrap de pavo",
      description: "Lechuga, tomate, cebolla y americano",
    },
    "wraps-quesadillas-burgers::Chicken Caesar Wrap": {
      name: "Wrap César de pollo",
      description: "Pollo a la parrilla o crujiente, aderezo César, lechuga y parmesano",
    },
    "wraps-quesadillas-burgers::Chicken Cheese Steak Wrap": {
      name: "Wrap chicken cheesesteak",
      description: "Lechuga, tomate y americano",
    },
    "wraps-quesadillas-burgers::Cooked Veggie Wrap": {
      name: "Wrap de verduras salteadas",
      description: "Ajo, espinaca, brócoli, pimiento asado, champiñón, cebolla y provolone",
    },
    "wraps-quesadillas-burgers::Buffalo Chicken Wrap": {
      name: "Wrap de pollo buffalo",
      description: "Pollo a la parrilla o crujiente, buffalo, lechuga, tomate y americano",
    },
    "wraps-quesadillas-burgers::Cheese Steak Wrap": {
      name: "Wrap cheesesteak",
      description: "Lechuga, tomate y americano",
    },
    "wraps-quesadillas-burgers::Deluxe Chicken Wrap": {
      name: "Wrap de pollo deluxe",
      description: "Pollo a la parrilla o crujiente, lechuga, tomate, cebolla, pepinillo y mayo",
    },
    "wraps-quesadillas-burgers::Cheese Quesadilla": {
      name: "Quesadilla de queso",
      description: "Mozzarella",
    },
    "wraps-quesadillas-burgers::Grilled Chicken Quesadilla": {
      name: "Quesadilla de pollo",
      description: "Pollo a la parrilla y mozzarella",
    },
    "wraps-quesadillas-burgers::Steak Quesadilla": {
      name: "Quesadilla de steak",
      description: "Mozzarella",
    },
    "wraps-quesadillas-burgers::Chicken Steak Quesadilla": {
      name: "Quesadilla chicken steak",
      description: "Mozzarella",
    },
    "wraps-quesadillas-burgers::Tuscan Quesadilla": {
      name: "Quesadilla toscana",
      description: "Pollo a la parrilla, pimientos asados, espinaca y mozzarella",
    },
    "wraps-quesadillas-burgers::Buffalo Shrimp Quesadilla": {
      name: "Quesadilla de camarones buffalo",
      description: "Camarones fritos en buffalo y mozzarella",
    },
    "wraps-quesadillas-burgers::Veggie Quesadilla": {
      name: "Quesadilla vegetariana",
      description: "Brócoli, espinaca, cebolla, champiñón, pimientos asados y mozzarella",
    },
    "wraps-quesadillas-burgers::Buffalo Chicken Quesadilla": {
      name: "Quesadilla de pollo buffalo",
      description: "Pollo a la parrilla y mozzarella",
    },
    "wraps-quesadillas-burgers::BBQ Chicken Quesadilla": {
      name: "Quesadilla de pollo BBQ",
      description: "Pollo a la parrilla y mozzarella",
    },
    "wraps-quesadillas-burgers::Plain Burger": { name: "Hamburguesa" },
    "wraps-quesadillas-burgers::Cheese Burger": {
      name: "Hamburguesa con queso",
      description: "Queso americano",
    },
    "wraps-quesadillas-burgers::Supreme Burger": {
      name: "Hamburguesa supreme",
      description:
        "Lechuga, tomate, mayo, pimiento verde, cebolla frita, champiñones y americano",
    },
    "wraps-quesadillas-burgers::Sweet & Spicy Burger": {
      name: "Hamburguesa dulce y picante",
      description: "Mike’s Hot Honey, jalapeños, cebolla frita, tocino y provolone",
    },
    "wraps-quesadillas-burgers::Texas Burger": {
      name: "Hamburguesa Texas",
      description: "Pétalos de cebolla, BBQ, tocino, pepinillos y provolone",
    },
    "wraps-quesadillas-burgers::Deluxe Burger": {
      name: "Hamburguesa deluxe",
      description: "Lechuga, tomate, cebolla, pepinillo, mayo y americano",
    },
    "wraps-quesadillas-burgers::Pizza Burger": {
      name: "Hamburguesa pizza",
      description: "Mozzarella y salsa",
    },
    "stromboli::Plain Stromboli": { name: "Stromboli de queso" },
    "stromboli::Pepperoni": { name: "Pepperoni" },
    "stromboli::Steak": { name: "Steak" },
    "stromboli::Chicken Steak Stromboli": { name: "Stromboli chicken steak" },
    "stromboli::Buffalo Chicken": { name: "Pollo buffalo" },
    "stromboli::Italian": { name: "Italiano", description: "Jamón, salami y capicola" },
    "stromboli::Failladelphia Stromboli": {
      name: "Stromboli Failladelphia",
      description:
        "Ribeye, Cooper, queso ahumado, mozzarella y cebolla vidalia frita en masa con semillas",
    },
    "stromboli::Meatlover": {
      name: "Meatlover",
      description: "Pepperoni, salchicha, tocino y albóndigas",
    },
    "stromboli::Supreme Stromboli": {
      name: "Stromboli supreme",
      description:
        "Pepperoni, salchicha, aceitunas negras, champiñones, cebolla, pimiento verde, tocino y queso extra",
    },
    "stromboli::Veggie Stromboli": {
      name: "Stromboli vegetariano",
      description: "Cebolla, brócoli, pimiento verde, espinaca y champiñones",
    },
    "stromboli::Calzone": { name: "Calzone", description: "Jamón, ricotta y mozzarella" },
    "pasta::Pasta with Traditional Sauce": { name: "Pasta con salsa tradicional" },
    "pasta::Pasta with Meat Sauce": { name: "Pasta con salsa de carne" },
    "pasta::Pasta with Alfredo Sauce": { name: "Pasta alfredo" },
    "pasta::Pasta with Pesto Sauce": { name: "Pasta al pesto" },
    "pasta::Pasta with Rosa Sauce": { name: "Pasta salsa rosa" },
    "pasta::Pasta with Garlic & Oil": { name: "Pasta aglio e olio" },
    "pasta::Pasta with Marinara": {
      name: "Pasta marinara",
      description: "Salsa más espesa y picante, con más ajo",
    },
    "pasta::Seafood Linguini": {
      name: "Linguini de mariscos",
      description: "Roja o blanca. Camarones, mejillones, almejas y calamar",
    },
    "pasta::Linguini with Clam": {
      name: "Linguini con almejas",
      description: "Roja o blanca",
    },
    "pasta::Failla’s Special Penne": {
      name: "Penne especial Failla’s",
      description: "Jamón, chícharos, salami, champiñones, cebolla y salsa rosa de carne",
    },
    "pasta::Tortellini Primavera": {
      name: "Tortellini primavera",
      description: "Champiñones, espinaca, brócoli, tomates secos y crema ligera",
    },
    "pasta::Sacchetti Caprese": {
      name: "Sacchetti caprese",
      description: "Pesto con tomates cherry, ajo y mozzarella fresca",
    },
    "pasta::Linguini Fra Diavolo": {
      name: "Linguini fra diavolo",
      description: "Marinara picante, kalamata, jalapeño, chile rojo y camarones",
    },
    "pasta::Meat Lovers Spaghetti": {
      name: "Spaghetti Meat Lovers",
      description: "Carne molida, salchicha, jamón y tocino en salsa rosa",
    },
    "pasta::Penne Alla Giulia": {
      name: "Penne alla Giulia",
      description: "Salsa rosa con salmón, camarones y chícharos",
    },
    "pasta::Cavatelli Bolognese": {
      name: "Cavatelli bolognese",
      description: "Carne molida, chícharos, zanahoria y apio",
    },
    "pasta::Angela’s Sacchetti": {
      name: "Sacchetti de Angela",
      description: "Crema de maple, nueces y tocino",
    },
    "pasta::Gnocchi Saporiti": {
      name: "Gnocchi saporiti",
      description: "Crema ligera con alcachofas, champiñones y espinaca",
    },
    "pasta::Shrimp Scampi": {
      name: "Shrimp scampi",
      description: "Sobre linguini con vino blanco y ajo-limón",
    },
    "pasta::Meat Lasagna": {
      name: "Lasaña de carne",
      description: "Pasta, salsa de carne, ricotta, salsa tradicional Failla’s y mozzarella",
    },
    "pasta::Baked Ravioli": {
      name: "Ravioli al horno",
      description: "Ravioli de queso con salsa tradicional Failla’s y mozzarella",
    },
    "pasta::Manicotti": {
      name: "Manicotti",
      description: "Salsa tradicional Failla’s y mozzarella",
    },
    "pasta::Baked Ziti": {
      name: "Ziti al horno",
      description: "Salsa tradicional Failla’s, ricotta, parmesano y mozzarella",
    },
    "pasta::Veal Parmigiana": { name: "Ternera a la parmesana" },
    "pasta::Chicken Parmigiana": { name: "Pollo a la parmesana" },
    "pasta::Eggplant Parmigiana": { name: "Berenjena a la parmesana" },
    "pasta::Chicken Marsala": {
      name: "Pollo marsala",
      description: "Salsa marsala y champiñones",
    },
    "pasta::Veal Marsala": {
      name: "Ternera marsala",
      description: "Salsa marsala y champiñón",
    },
    "pasta::Tuscan Chicken": {
      name: "Pollo toscano",
      description: "Rúcula, prosciutto, pimientos asados, provolone, balsámico y pesto",
    },
    "pasta::Chicken Saltimbocca": {
      name: "Pollo saltimbocca",
      description: "Salsa de limón y vino blanco con ajo, prosciutto, espinaca y provolone",
    },
    "pasta::Veal Saltimbocca": {
      name: "Ternera saltimbocca",
      description: "Salsa de limón y vino blanco con ajo, prosciutto, espinaca y provolone",
    },
    "pasta::Salmon Entrée": {
      name: "Salmón",
      description: "Rúcula, tomates cherry, miel, balsámico y feta",
    },
    "pasta::Teriyaki Salmon": {
      name: "Salmón teriyaki",
      description: "Cebolla, champiñones y zanahoria salteados, con teriyaki",
    },
    "pasta::Eggplant Rollatini": {
      name: "Rollatini de berenjena",
      description: "Berenjena a la parrilla rellena de ricotta y espinaca, al horno con mozzarella y salsa",
    },
    "pasta::Flounder Platter": {
      name: "Plato de lenguado",
      description: "Lenguado empanizado frito, papas, tártara y cóctel",
    },
    "pasta::Flounder Parmesan": {
      name: "Lenguado a la parmesana",
      description: "Mozzarella y salsa",
    },
    "kids::Chicken Fingers": {
      name: "Fingers de pollo",
      description: "(3) con papas",
    },
    "kids::Spaghetti": { name: "Spaghetti", description: "Con (1) albóndiga" },
    "kids::Grilled Cheese": { name: "Queso asado", description: "Con papas" },
    "kids::Penne Alfredo": { name: "Penne alfredo" },
    "kids::Cheese Ravioli": { name: "Ravioli de queso", description: "(3) con salsa" },
    "kids::Grilled Chicken Breast": {
      name: "Pechuga de pollo a la parrilla",
      description: "Con brócoli",
    },
    "desserts::Tiramisu": { name: "Tiramisú" },
    "desserts::Cannoli": { name: "Cannoli" },
    "desserts::Homemade Gelato": { name: "Gelato casero" },
    "desserts::Chocolate Mousse Cake": { name: "Pastel de mousse de chocolate" },
    "desserts::Limoncello Cake": { name: "Pastel de limoncello" },
    "desserts::Cheesecake": { name: "Cheesecake" },
    "desserts::Lava Cake": { name: "Lava cake" },
    "desserts::Peanut Butter Explosion": { name: "Peanut Butter Explosion" },
    "beverages::Fountain Soda": { name: "Refresco de máquina" },
    "beverages::20oz Soda": { name: "Refresco 20 oz" },
    "beverages::2 Liter": { name: "2 litros" },
    "beverages::Water Bottle": { name: "Agua embotellada" },
    "beverages::Tea/Gatorade": { name: "Té / Gatorade" },
    "beverages::Milk/Chocolate Milk": { name: "Leche / leche chocolate" },
    "beverages::Coffee": { name: "Café" },
    "beverages::Espresso": { name: "Espresso" },
    "beverages::Double Espresso": { name: "Espresso doble" },
  },
};

const pt: Pack = {
  cats: {
    grandma: {
      name: "Pizza Grandma",
      note: "Siciliana de massa fina, 16″. Mussarela fresca, marinara caseira, AOV, orégano, parmesão e manjericão.",
    },
    slices: { name: "Fatias" },
    traditional: {
      name: "Pizzas tradicionais",
      note: "Personal 10″  ·  Grande 16″  ·  Siciliana 16″ quadrada. Ingredientes extras 2.00 / 3.50 / 4.00. Gourmet 3.00 / 6.00 / 7.00. Burrata 6.00. Mike’s Hot Honey 2.00.",
    },
    gourmet: {
      name: "Pizzas gourmet",
      note: "Personal 10″  ·  Grande 16″  ·  Siciliana 16″  ·  Couve-flor sem glúten 10″",
    },
    apps: { name: "Entradas" },
    wings: {
      name: "Asinhas e batatas",
      note: "Asinhas com aipo e gorgonzola ou ranch. Molhos: suave, picante, BBQ, garlic parm, manga habanero.",
    },
    salads: {
      name: "Saladas e sopa",
      note: "Base de alface romana, salvo indicação. Adicionar atum, frango grelhado ou crocante 5.50 · burrata 6.00 · salmão 10.00 · camarão (6) 8.00. Molho extra .75 cada.",
    },
    sides: { name: "Acompanhamentos" },
    steaks: {
      name: "Steaks e cheesesteaks",
      note: "Ingredientes extras .75 cada. Queijo extra 1.50 cada. Cooper Sharp 2.00.",
    },
    hoagies: {
      name: "Hoagies e sanduíches",
      note: "Hoagies frios de 12″ com alface, tomate, cebola, orégano e azeite ou maionese — também em grinder. Sanduíches frios com alface e tomate, pão branco ou integral, com batatas. Extra .75 cada.",
    },
    "wraps-quesadillas-burgers": {
      name: "Wraps, quesadillas e hambúrgueres",
      note: "Wraps: tortilla de trigo ou branca. Bacon 3.00. Extra .75 cada. Quesadillas com salsa, sour cream, alface e tomate. Hambúrgueres: bacon 3.00, extra .75 cada.",
    },
    stromboli: {
      name: "Stromboli",
      note: "Mussarela com molho ao lado. Preços: personal / grande.",
    },
    pasta: {
      name: "Massas e pratos",
      note: "Massas com pão de alho e salada tossed ou Caesar. Pratos com pão de alho e salada tossed, Caesar ou espaguete. Massa: espaguete, linguini, fettuccine, penne, penne sem glúten. Massa especial (tortellini, nhoque, sacchetti, ravioli, cavatelli) +2.50.",
    },
    kids: { name: "Infantil" },
    desserts: { name: "Sobremesas" },
    beverages: { name: "Bebidas" },
  },
  items: ptItems,
};

const it: Pack = {
  cats: {
    grandma: {
      name: "Pizza Grandma",
      note: "Siciliana a pasta sottile, 16″. Mozzarella fresca, marinara fatta in casa, EVOO, origano, parmigiano e basilico.",
    },
    slices: { name: "Fette" },
    traditional: {
      name: "Pizze tradizionali",
      note: "Personal 10″  ·  Large 16″  ·  Siciliana 16″ quadrata. Extra 2.00 / 3.50 / 4.00. Gourmet 3.00 / 6.00 / 7.00. Burrata 6.00. Mike’s Hot Honey 2.00.",
    },
    gourmet: {
      name: "Pizze gourmet",
      note: "Personal 10″  ·  Large 16″  ·  Siciliana 16″  ·  Cavolfiore senza glutine 10″",
    },
    apps: { name: "Antipasti" },
    wings: {
      name: "Ali e patatine",
      note: "Ali con sedano e gorgonzola o ranch. Salse: mild, hot, BBQ, garlic parm, mango habanero.",
    },
    salads: {
      name: "Insalate e zuppa",
      note: "Base di lattuga romana salvo diversa indicazione. Aggiungi tonno, pollo grigliato o croccante 5.50 · burrata 6.00 · salmone 10.00 · gamberi (6) 8.00. Condimento extra .75 cad.",
    },
    sides: { name: "Contorni" },
    steaks: {
      name: "Steak e cheesesteak",
      note: "Extra .75 cad. Formaggio extra 1.50 cad. Cooper Sharp 2.00.",
    },
    hoagies: {
      name: "Hoagie e panini",
      note: "Hoagie freddi da 12″ con lattuga, pomodoro, cipolla, origano e olio o mayo — anche come grinder. Panini freddi con lattuga e pomodoro, bianco o integrale, con patatine. Extra .75 cad.",
    },
    "wraps-quesadillas-burgers": {
      name: "Wrap, quesadilla e hamburger",
      note: "Wrap: tortilla di grano o bianca. Bacon 3.00. Extra .75 cad. Quesadilla con salsa, panna acida, lattuga e pomodoro. Hamburger: bacon 3.00, extra .75 cad.",
    },
    stromboli: {
      name: "Stromboli",
      note: "Mozzarella con sugo a parte. Prezzi: personal / large.",
    },
    pasta: {
      name: "Pasta e secondi",
      note: "Paste con pane all'aglio e insalata tossed o Caesar. Secondi con pane all'aglio e insalata tossed, Caesar o spaghetti. Pasta: spaghetti, linguine, fettuccine, penne, penne senza glutine. Pasta speciale (tortellini, gnocchi, sacchetti, ravioli, cavatelli) +2.50.",
    },
    kids: { name: "Bambini" },
    desserts: { name: "Dolci" },
    beverages: { name: "Bevande" },
  },
  items: itItems,
};

const PACK: Record<Exclude<Lang, "en">, Pack> = { es, pt, it };

export function localizedMenu(lang: Lang): MenuCategory[] {
  if (lang === "en") return categories;
  const pack = PACK[lang];
  return categories.map((cat) => {
    const c = pack.cats[cat.id];
    return {
      ...cat,
      name: c?.name ?? cat.name,
      note: c?.note ?? cat.note,
      items: cat.items.map((item) => {
        const tr = pack.items[`${cat.id}::${item.name}`];
        return {
          ...item,
          name: tr?.name ?? item.name,
          description: tr?.description ?? item.description,
          price: item.price ? localizePrice(item.price, lang) : item.price,
        };
      }),
    };
  });
}

export function translateTag(lang: Lang, tag: string) {
  if (lang === "en") return tag;
  const map: Record<string, Record<string, string>> = {
    es: { Signature: "Firma", GF: "Sin gluten" },
    pt: { Signature: "Assinatura", GF: "Sem glúten" },
    it: { Signature: "Signature", GF: "Senza glutine" },
  };
  return map[lang]?.[tag] ?? tag;
}