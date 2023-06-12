import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/LocalGroceryStore";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import { motion } from "framer-motion";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { calcSubPrice, calcTotalPrice } from "../../helpers/functions";

const Cart = ({
  anchor,
  openPaymentForm,
  closePaymentForm,
  toggleDrawer,
  showPaymentForm,
}) => {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.cart.cart);
  console.log(products, totalPrice);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }
    dispatch(getCart(cart));
  }, []);

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };

  const firstSm = {
    sx: { backgroundColor: "red" },
  };

  return (
    <Box
      sx={{
        width: {
          xs: 300,
          sm: 400,
          md: 450,
          lg: 490,
          xl: 600,
        },
        // https://img.freepik.com/free-vector/blue-white-low-poly-triangle-shapes-background_1035-19007.jpg?w=1380&t=st=1686394278~exp=1686394878~hmac=007717e1d31afbe9c903cde923a36d3c311e2336e5927c423497cf4f4c2f23c9
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/clouds-with-blue-sky_149088-1447.jpg)",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="dialog"
      onClick={(event) => {
        event.stopPropagation();
      }}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Box
        sx={{ display: "flex", marginLeft: "40px", marginTop: "10px" }}
        // md={{ width: "20%" }}
      >
        <Box>
          <Typography>
            <LocalGroceryStoreIcon />
          </Typography>
        </Box>
        <Box sx={{ fontSize: "large", marginLeft: "20px" }}>1 Items</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          marginLeft: "17%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <motion.h2
          initial={{
            x: -1000,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 2.5,
          }}
        >
          You are eligible for free shipping!
        </motion.h2>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "39%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "7px",
            background: "black",
            borderRadius: "5px",
          }}
        ></Box>
        <CloseTwoToneIcon
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
            zIndex: 1,
          }}
          onClick={toggleDrawer(anchor, false)}
        />
      </Box>
      {showPaymentForm ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          marginTop="5%"
        >
          <Typography variant="h6">Payment Form</Typography>

          <Button
            sx={{ marginTop: "2%" }}
            variant="contained"
            disableElevation
            onClick={closePaymentForm}
          >
            Close Payment Form
          </Button>
        </Box>
      ) : (
        <>
          {products?.map((elem) => {
            console.log(elem.count);
            return (
              <Box
                sx={{
                  justifyContent: "space-around",
                  display: "flex",
                  marginTop: "2%",
                  marginLeft: "4%",
                  marginRight: "10%",
                }}
              >
                <Box sx={{ width: "25%" }}>
                  {" "}
                  <motion.img
                    style={{
                      width: "100%",
                    }}
                    src={elem.item.image}
                    alt=""
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="span" sx={{ fontWeight: "bold" }}>
                    {elem.item.title}
                  </Typography>
                  <Typography component="span" sx={{}}>
                    Book
                  </Typography>

                  <Box
                    whileTap={{ scale: 0.8 }}
                    sx={{
                      border: "2px black solid",
                      width: "80px",
                      height: "30px",
                      display: "flex",
                      borderRadius: "50px",
                      marginLeft: "5%",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      component="button"
                      sx={{
                        height: "100%",
                        width: "30%",
                        background: "white",
                        border: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                      onClick={() => {
                        if (elem.count === 1) {
                          deleteCartProduct(elem.item.id);
                        } else {
                          changeProductCount(elem.count - 1, elem.item.id);
                        }
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      component="input"
                      sx={{
                        width: "30px",
                        textAlign: "center",
                        border: "none",
                      }}
                      value={elem.count}
                    ></Typography>
                    <Typography
                      component="button"
                      sx={{
                        height: "100%",
                        width: "30%",
                        background: "white",
                        border: "none",
                        fontSize: "20px",
                        color: "black ",
                      }}
                      onClick={() => {
                        changeProductCount(elem.count + 1, elem.item.id);
                      }}
                    >
                      +
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ${elem.item.price}
                  </Typography>
                  <Typography>${elem.subPrice}</Typography>
                  <Button onClick={() => deleteCartProduct(elem.item.id)}>
                    Delete product
                  </Button>
                </Box>
              </Box>
            );
          })}
        </>
      )}

      <Box sx={{ marginTop: "10%", marginLeft: "9%" }}>
        <Divider sx={{ marginBottom: "2%" }} />
        {showPaymentForm ? (
          <Button
            sx={{ width: "90%", height: "40px", borderRadius: "20px" }}
            variant="contained"
            disableElevation
            onClick={closePaymentForm}
          >
            Close Payment Form
          </Button>
        ) : (
          <Button
            sx={{
              width: {
                xs: "80%",
                sm: "83%",
                md: "86%",
                lg: "88%",
                xl: "90%",
              },
              height: "40px",
              borderRadius: "20px",
            }}
            variant="contained"
            disableElevation
            onClick={openPaymentForm}
          >
            <h3>Checkout ${Math.floor(totalPrice)}</h3>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
