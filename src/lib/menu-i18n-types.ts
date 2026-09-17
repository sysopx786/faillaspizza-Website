export type ItemTr = { name: string; description?: string };
export type CatTr = { name: string; note?: string };
export type Pack = {
  cats: Record<string, CatTr>;
  items: Record<string, ItemTr>;
};