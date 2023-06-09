import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  getOneProduct,
} from "../../store/products/productsActions";
const style = {
  position: "absolute",
  height: "500px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalEdit = ({ productDetails }) => {
  console.log(productDetails);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { productDetails } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  const [title, setTitle] = useState(productDetails.title);
  const [price, setPrice] = useState(productDetails.price);
  const [image, setImage] = useState(productDetails.image);
  const [descr, setDescr] = useState(productDetails.descr);

  const handleEdit = () => {
    if (!title.trim() || !price.trim() || !image.trim() || !descr.trim()) {
      alert("Заполните поля!");
      return;
    }
    let editedProduct = {
      title,
      price,
      image,
      descr,
      id,
    };
    dispatch(editProduct(editedProduct));
    setTitle("");
    setPrice("");
    setImage("");
    setDescr("");
    navigate("/products");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
          }}
          onClick={handleOpen}
        >
          Edit card
        </Typography>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              sx={{ fontWeight: "600", fontFamily: "ubuntu", mb: "30px" }}
            >
              Add your changes
            </Typography>
            <TextField
              label="New Title"
              sx={{ width: "95%" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="New Price"
              sx={{ width: "95%" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="New Image"
              sx={{ width: "95%" }}
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              label="New Description"
              sx={{ width: "95%" }}
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
            <Button
              sx={{ width: "95%", height: "50px" }}
              variant="contained"
              onClick={handleEdit}
            >
              Save changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalEdit;
