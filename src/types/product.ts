export interface Product {
  id: string;
  slug: string;
  name: string;
  description?: string;
  price?: string;
  salePrice?: string;
  stockStatus?: 'IN_STOCK' | 'OUT_OF_STOCK' | 'ON_BACKORDER';
  featuredImageUrl?: string;
}
