import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { setProducts } from "./productsSlice";

export const getProducts = createAsyncThunk(
  "@products/getProducts",
  async (_, { dispatch }) => {
    const { data } = await axios(API);
    dispatch(setProducts(data));
  }
);

export const addProduct = createAsyncThunk(
  "@products/addProduct",
  async (newProduct, { dispatch }) => {
    await axios.post(API, newProduct);
    dispatch(getProducts());
  }
);
