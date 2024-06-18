import { CartItem, CartSliceState } from "@/store/redux/cart/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calcTotalPrice } from "@/utils/calcTotalPrice"


const initialState: CartSliceState = {
  totalPrices: 0,
  count: 0,
  size: '',
  items: [],
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
      if (findItem) {
        findItem.count++
        state.count++
        state.size = action.payload.size
      } else {
        state.items.push({ ...action.payload, count: 1 })
        state.count++
        state.size = action.payload.size
      }

      state.totalPrices = calcTotalPrice(state.items);
    },
  minusItem(state, action: PayloadAction<CartItem>) {
    const findItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size )

    if (findItem) {
      findItem.count--
      state.count--
    } else  {

    }

    state.totalPrices = calcTotalPrice(state.items);
  },
  removeItem(state, action: PayloadAction<CartItem>) {
    state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
    state.count = state.items.reduce((sum, item) => sum + item.count, 0);
    state.totalPrices = calcTotalPrice(state.items);
  },
  clearItem(state) {
    state.items = []
    state.count = 0
    state.totalPrices = 0
  }
  },

})

export const {addItem, minusItem, removeItem, clearItem} = cartSlice.actions

export default cartSlice.reducer