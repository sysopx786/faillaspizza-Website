export const googleRating = {
  score: "4.7",
  count: 286,
  bars: [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 16 },
    { stars: 3, pct: 5 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 4 },
  ],
} as const;

export const reviews = [
  {
    name: "Carin S.",
    source: "Google",
    href: "https://share.google/oB3kJmI19frgtIxOX",
    quote:
      "The pizza was a standout to everyone who tried it, the signature house salad tasted like old Italy like my grandma used to make, and the minestrone was some of the best I've had. Continually impressed with the food and service.",
  },
  {
    name: "S. Marles",
    source: "Google",
    href: "https://share.google/zNZv84PCv1vvWRXMF",
    quote: "Best pizza in town by far.",
  },
  {
    name: "Kay B.",
    source: "Google",
    href: "https://share.google/bjLJ8XcchhGm9PP9W",
    quote:
      "This review is for their grandma pie. Cooked in a sheet pan with olive oil — the crust is excellent, the sauce is excellent, the right amount of cheese. I've used them for pizza lunch at work. Everyone asked where it was from.",
  },
  {
    name: "John C.",
    source: "Google",
    href: "https://share.google/w4hNkBiQKchnC0XNZ",
    quote:
      "Food was perfect and cooked to perfection. Was really impressed as a native New Yorker. Not just good for the area, but great food in general.",
  },
] as const;
