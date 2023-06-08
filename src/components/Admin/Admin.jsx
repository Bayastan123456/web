import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { addProduct } from "../../store/products/productsActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate("/products");
  };

  return (
    <Box
      sx={{
        mt: "150px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "600", mb: "30px", fontFamily: "ubuntu" }}
        >
          Add product
        </Typography>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "35%" }}
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{ width: "35%" }}
        />
        <TextField
          label="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{ width: "35%" }}
        />
        <TextField
          label="Description"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          sx={{ width: "35%" }}
        />
        <Button
          variant="contained"
          sx={{ width: "35%", height: "50px" }}
          onClick={handleProduct}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default Admin;
