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
          width: "10%",
          "@media (max-width: 2560px)": {
            width: "100%",
            height: "70vh",
          },
          "@media (max-width: 1000px)": {
            width: "95%",
            height: "70vh",
          },
          "@media (max-width: 600px)": {
            width: "90%",
            height: "70vh",
          },
          "@media h2 (max-width: 500px)": {
            width: "70%",
            height: "70vh",
            fontSize: "14px",
          },
          "@media (max-width: 400px)": {
            width: "65%",
            height: "70vh",
            ml: "18%",
          },
          "@media (max-width: 320px)": {
            width: "60%",
            height: "70vh",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            mb: "30px",
            fontFamily: "ubuntu",
            "@media (max-width: 425px)": {
              fontSize: "2.50rem",
            },
            "@media (max-width: 375px)": {
              fontSize: "1.75rem",
            },
          }}
        >
          Add product
        </Typography>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            mb: 2,
            width: "35%",
            "@media (max-width:768px)": {
              width: "50%",
              mb: 1,
            },
            "@media (max-width:400px)": {
              width: "80%",
              mb: 1,
            },
            "@media (max-width:375px)": {
              width: "80%",
              mb: 1,
            },
          }}
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{
            width: "35%",
            "@media (max-width:768px)": {
              width: "50%",
              mb: 1,
              "@media (max-width:400px)": {
                width: "80%",
                mb: 1,
              },
              "@media (max-width:375px)": {
                width: "80%",
                mb: 1,
              },
            },
          }}
        />
        <TextField
          label="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{
            width: "35%",
            "@media (max-width:768px)": {
              width: "50%",
              mb: 1,
              "@media (max-width:400px)": {
                width: "80%",
                mb: 1,
              },
              "@media (max-width:375px)": {
                width: "80%",
                mb: 1,
              },
            },
          }}
        />
        <TextField
          label="Description"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          sx={{
            width: "35%",
            "@media (max-width:768px)": {
              width: "50%",
              mb: 1,
              "@media (max-width:400px)": {
                width: "80%",
                mb: 1,
              },
              "@media (max-width:375px)": {
                width: "80%",
                mb: 1,
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: "35%",
            "@media (max-width:768px)": {
              width: "50%",
              mb: 1,
              "@media (max-width:400px)": {
                width: "80%",
                mb: 1,
              },
              "@media (max-width:375px)": {
                width: "80%",
                mb: 1,
              },
            },
          }}
          onClick={handleProduct}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default Admin;
