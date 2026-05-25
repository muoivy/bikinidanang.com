// Domain types for Product entity
// These match WooCommerce / WP GraphQL response shapes

export type ProductImage = {
  id: string;
  sourceUrl: string;
  altText: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
};

export type ProductTag = {
  id: string;
  name: string;
  slug: string;
};

export type ProductVariant = {
  id: string;
  sku: string;
  price: string;
  regularPrice: string;
  salePrice: string | null;
  stockStatus: "instock" | "outofstock" | "onbackorder";
  attributes: ProductVariantAttribute[];
};

export type ProductVariantAttribute = {
  name: string; // e.g. "Màu sắc", "Kích thước"
  value: string; // e.g. "Đỏ", "S"
};

export type Product = {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  sku: string;
  price: string;
  regularPrice: string;
  salePrice: string | null;
  onSale: boolean;
  stockStatus: "instock" | "outofstock" | "onbackorder";
  stockQuantity: number | null;
  image: ProductImage | null;
  galleryImages: ProductImage[];
  categories: ProductCategory[];
  tags: ProductTag[];
  type: "simple" | "variable";
  variants?: ProductVariant[];
};

// Lightweight version for listing pages (ProductCard)
export type ProductSummary = Pick<
  Product,
  | "id"
  | "databaseId"
  | "name"
  | "slug"
  | "price"
  | "regularPrice"
  | "salePrice"
  | "onSale"
  | "stockStatus"
  | "image"
  | "categories"
>;
