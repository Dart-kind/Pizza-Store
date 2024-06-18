import { Pizza, PizzaSliceState, Status } from "@/store/redux/pizza/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchPosts } from "@/store/redux/pizza/asyncActions"

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING
}


const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
  setItems(state, action: PayloadAction<Pizza[]>) {
    state.items = action.payload
  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

