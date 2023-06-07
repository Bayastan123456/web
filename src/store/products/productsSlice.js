import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  // extraReducers:
});

export const { setProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
