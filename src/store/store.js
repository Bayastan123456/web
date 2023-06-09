import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { cartReducer } from "./cart/cartSlice";
import { productsReducer } from "./products/productsSlice";
import { cartReducer } from "./cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
