export const getCountProductsInCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
};

export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};

export const calcTotalPrice = (products) => {
  return products.reducer((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
