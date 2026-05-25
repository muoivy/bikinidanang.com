// Domain types for Cart entity

export type CartItemVariant = {
  id: string;
  attributes: Array<{
    name: string;
    value: string;
  }>;
};

export type CartItem = {
  cartItemKey: string; // WooCommerce cart item key
  productId: number;
  variationId?: number;
  name: string;
  slug: string;
  image: string | null;
  price: number; // in VND (number, not formatted string)
  quantity: number;
  variant?: CartItemVariant;
  maxQuantity?: number; // from stockQuantity
};

export type Cart = {
  items: CartItem[];
  totalItems: number;
  subtotal: number; // in VND
  total: number;    // in VND (after discounts)
  couponCode?: string;
  discount?: number;
};
