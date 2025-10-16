export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  sale_price?: number | null;
  currency: "VND";
  sizes: string[];
  colors: string[];
  images: string[];
  sku: string;
  stock: number;
  badges?: string[];
  collection: string;
  tags?: string[];
  summary?: string;
  seoTitle?: string;
  seoDescription?: string;
  updatedAt: string;
};

export type Collection = {
  slug: string;
  name: string;
  description?: string;
};
