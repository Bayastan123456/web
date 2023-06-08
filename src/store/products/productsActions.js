import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setProducts } from "./productsSlice";
import { API } from "../../helpers/consts";

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

export const getOneProduct = createAsyncThunk(
  "@products/getOneProduct",
  async (id) => {
    const { data } = await axios(`${API}/${id}`);
    return data;
  }
);
