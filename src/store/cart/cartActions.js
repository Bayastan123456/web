import { createAction } from "@reduxjs/toolkit";

export const createCart = createAction("@cart/createCart", () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    localStorage.setItem(
      "cart",
      JSON.stringify({ products: [], totalPrice: 0 })
    );
    cart = { products: [], totalPrice: 0 };
  }
<<<<<<< HEAD
=======
  return cart;
>>>>>>> 1e5913f81d578e6088a04f5d9f00a15e7ad39d1c
});
