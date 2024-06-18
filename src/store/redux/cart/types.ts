export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  count: number;
}

export interface CartSliceState {
  totalPrices: number;
  count: number;
  size: string;
  items: CartItem[];
}