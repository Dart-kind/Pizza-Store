import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { postApi } from "../services/PostService"
import cartReducer from "./redux/cart/slice"
import pizza from "./redux/pizza/slice"
import filter from "./redux/filter/slice"

const rootReducer = combineReducers({
 [postApi.reducerPath]: postApi.reducer,
  cart: cartReducer,
  pizza,
  filter,
  totalPrices: 0,
})

export const setupStore = () => {
  return configureStore({
    reducer:
    rootReducer,
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(postApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
