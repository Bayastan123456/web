import { Box, display } from "@mui/system";
import React from "react";
import ProductsAccardion from "../components/Products/ProductsAccardion";
import ProductsList from "../components/Products/ProductsList";
import { Link } from "react-router-dom";
import { Pagination, Typography } from "@mui/material";
import SelectSmall, { CustomizedMenus } from "../components/SortBy";

const ProductsPage = () => {
  return (
    <Box sx={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <Box sx={{ marginTop: "3vh", marginLeft: "3vw" }}>
        <Link to="/">Home</Link>
        <span>/All</span>
      </Box>
      <Box
        sx={{
          height: "40vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,
            fontSize: "80px",
          }}
        >
          All
        </h2>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Typography variant="h6" sx={{}}>
          Sort by
        </Typography>
        <SelectSmall />
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "25%" }}>
          <ProductsAccardion />
        </Box>

        <Box sx={{ width: "75%" }}>
          <ProductsList />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "10vh" }}>
        <Pagination />
      </Box>
    </Box>
  );
};

export default ProductsPage;
