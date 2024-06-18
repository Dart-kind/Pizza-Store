import { CartItem } from "@/store/redux/cart/types";

export interface ProductCard {
  id: number;
  name: string;
  size: string[];
  toppings: string;
  price: number[];
  image: string;
}

export interface ProductCardSliceState {
  totalPrices: number;
  items: ProductCard[];
}
