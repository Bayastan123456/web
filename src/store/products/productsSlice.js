import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {},
  // extraReducers:
});

export const productsReducer = productsSlice.reducer;
