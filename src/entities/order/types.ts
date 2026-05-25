// Domain types for Order entity

export type OrderStatus =
  | "pending"
  | "processing"
  | "on-hold"
  | "completed"
  | "cancelled"
  | "refunded"
  | "failed";

export type ShippingAddress = {
  firstName: string;
  lastName: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string; // province/city in VN
  postcode?: string;
  country: "VN";
};

export type OrderItem = {
  id: string;
  productId: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  dateCreated: string;
  total: number;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  paymentMethod: string;
  customerNote?: string;
};
