import { Box, display } from "@mui/system";
import React from "react";
import ProductsAccardion from "../components/Products/ProductsAccardion";
import ProductsList from "../components/Products/ProductsList";
import { Link } from "react-router-dom";
import { Pagination, Typography } from "@mui/material";
import SelectSmall from "../components/SortBy";
import ProductSearch from "../components/Products/ProductSearch";

const ProductsPage = () => {
  return (
    <Box sx={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <Box sx={{ marginTop: "15vh", marginLeft: "3vw" }}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
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
      <Box
        sx={{ display: "flex", justifyContent: "end", mr: "3vw", mb: "2vh" }}
      >
        <ProductSearch />
        <SelectSmall />
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "25%", position: "sticky", top: "0" }}>
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
