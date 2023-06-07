import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/products/productsActions";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");

  const dispatch = useDispatch();

  const handleProduct = () => {
    if (!title.trim() || !price.trim() || !image.trim() || !descr.trim()) {
      alert("Заполните поля!");
      return;
    }

    let newProduct = {
      title,
      price,
      image,
      descr,
    };
    dispatch(addProduct(newProduct));
    setTitle("");
    setPrice("");
    setImage("");
    setDescr("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "150px",
        gap: "15px",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "600", mb: "30px", fontFamily: "ubuntu" }}
      >
        Add product
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        label="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        label="Description"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ width: "230px" }}
        onClick={handleProduct}
      >
        Add
      </Button>
    </Box>
  );
};

export default Admin;
