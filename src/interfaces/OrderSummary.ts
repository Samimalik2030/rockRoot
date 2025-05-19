export interface OrderSummary {
    subtotal: string;
    shipping: string;
    tax: string;
    total: string;
  }

  interface ShippingAddress {
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
}

export interface Order {
  products: string[]; // Array of product IDs (ObjectId as string)
  user: string; // User ID (ObjectId as string)
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled' | string; // Adjust enum as needed
  subtotal: number;
  shipping: number;
  shippingAddress: ShippingAddress;
  tax: number;
  total: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  code:string
}
