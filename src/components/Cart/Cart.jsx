import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Navbar from "../Navbar/Navbar";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    paymentFormOpen: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [showPaymentForm, setShowPaymentForm] = React.useState(false);

  const openPaymentForm = () => {
    setShowPaymentForm(true);
  };

  const closePaymentForm = () => {
    setShowPaymentForm(false);
  };

  const list = (anchor) => (
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
              src="https://cdn.shopify.com/s/files/1/0650/8521/0875/products/9781838694746_240x.jpg?v=1666176450"
              alt=""
            />
          </Box>

          <Box sx={{ width: "40%", display: "flex", flexDirection: "column" }}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Experience Japan
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
            <Typography>$49.98</Typography>
          </Box>
        </Box>
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

  return (
    <Box sx={{ width: "50%", maxWidth: 500 }}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Cart</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={{ sx: { width: "100%", maxWidth: 500 } }}
          >
            {list(anchor)}
            <Navbar toggleDrawer={toggleDrawer} anchor={anchor} />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
