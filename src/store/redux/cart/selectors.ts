import { RootState } from "@/store/store"

export const selectCart = (state: RootState) => state.cart

export const selectCartItemsById = (id: number) => (state: RootState) =>
  state.cart.items.filter(item => item.id === id);



