interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
  updatedAt: Date;
  category: string;
}

type SectionTitle =
  | "ВЪДИЦИ"
  | "МАКАРИ"
  | "ЗАХРАНКИ"
  | "ТАКЪМИ"
  | "АКСЕСОАРИ"
  | "КЪМПИНГ";

enum SECTIONS_TO_PATHS {
  "ВЪДИЦИ" = "rods",
  "МАКАРИ" = "reels",
  "ЗАХРАНКИ" = "feed",
  "ТАКЪМИ" = "takymi",
  "АКСЕСОАРИ" = "accessories",
  "КЪМПИНГ" = "camping",
}

export type { Product, SectionTitle };
export { SECTIONS_TO_PATHS };
