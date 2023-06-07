import React from "react";
import ProductsCard from "./ProductsCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ProductsList = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5vw" }}>
        <ProductsCard />
        <ProductsCard />
      </Box>
    </>
  );
};

export default ProductsList;
