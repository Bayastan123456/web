import { createSlice } from "@reduxjs/toolkit";
import { getOneProduct } from "./productsActions";

const initialState = {
  products: [],
  productDetails: {},
};

export const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  },
});

export const { setProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
