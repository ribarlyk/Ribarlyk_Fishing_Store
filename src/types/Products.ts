interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
  updatedAt: Date;
}

export type { Product };
