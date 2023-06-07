import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});
