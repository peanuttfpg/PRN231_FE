import { Product } from "./product";

export interface Cart {
    items: CartItem[];
    totalItem: number;
    total: number;
  };

export type CartItem = {
    product: Product;
    quantity: number;
    description: string;
};

export interface ProductItem {
  productCode: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  totalAmount: number;
  discountRate: number;
  finalAmount: number;
  note: string
  }

export interface OrderRequest {
  paymentType: number;
  deliveryPhone: string;
  totalAmount: string;
  discountRate: number;
  finalAmount: number;
  shippingFee: number;
  quantity: number;
  note: string;
  orderDetails: ProductItem[];
}

export interface OrderResponse {
  status: string;
  message: string;
  url: string;
  method: string;
}

export interface CustomerInfo{
  name: string;
  phone: string;
  email: string;
}