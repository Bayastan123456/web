import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/LocalGroceryStore";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";

const Cart = ({
  anchor,
  openPaymentForm,
  closePaymentForm,
  toggleDrawer,
  showPaymentForm,
}) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart.cart);
  console.log(products);

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

  return (
    <Box
      sx={{ width: 500 }}
      role="dialog"
      onClick={(event) => {
        event.stopPropagation();
      }}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Box sx={{ display: "flex", marginLeft: "40px", marginTop: "10px" }}>
        <Box>
          <Typography>
            <LocalGroceryStoreIcon />
          </Typography>
        </Box>
        <Box sx={{ fontSize: "large", marginLeft: "20px" }}>2 Items</Box>
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
        <h3>You are eligible for free shipping!</h3>

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
        <CloseIcon
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
          {products?.map((elem) => (
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
                <img
                  style={{
                    width: "100%",
                  }}
                  src={elem.item.image}
                  alt=""
                />
              </Box>

              <Box
                sx={{ width: "40%", display: "flex", flexDirection: "column" }}
              >
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  {elem.item.title}
                </Typography>
                <Typography component="span" sx={{}}>
                  Book
                </Typography>

                <Box
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
                  >
                    -
                  </Typography>
                  <Typography
                    component="input"
                    placeholder="1"
                    sx={{
                      width: "30px",
                      textAlign: "center",
                      border: "none",
                    }}
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
                  >
                    +
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography>${elem.item.price}</Typography>
              </Box>
            </Box>
          ))}
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
            sx={{ width: "90%", height: "40px", borderRadius: "20px" }}
            variant="contained"
            disableElevation
            onClick={openPaymentForm}
          >
            <h3>Checkout $24.99</h3>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
