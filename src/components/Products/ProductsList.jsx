import React, { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5vw" }}>
        {products.map((item) => (
          <ProductsCard item={item} key={item.id} />
        ))}
      </Box>
    </>
  );
};

export default ProductsList;
