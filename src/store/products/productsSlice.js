import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";

const initialState = {
  products: [],
  productDetails: null,
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

export const getOneProduct = createAsyncThunk(
  "@products/getOneProduct",
  async (id) => {
    const { data } = await axios(`${API}/${id}`);
    return data;
  }
);
