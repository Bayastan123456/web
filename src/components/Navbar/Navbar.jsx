import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ADMIN } from "../../helpers/consts";
import { useDispatch, useSelector } from "react-redux";
import { authListener } from "../../store/auth/authActions";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function Navbar() {
  // ====================================
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [showPaymentForm, setShowPaymentForm] = React.useState(false);

  const openPaymentForm = () => {
    setShowPaymentForm(true);
  };

  const closePaymentForm = () => {
    setShowPaymentForm(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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

  // =====================================

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [scrolled, setScrolled] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: scrolled ? "#ff0000" : "transparent",
    transition: "background-color 0.3s ease",
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    display: { xs: "none", sm: "block" },
  }));

  useEffect(() => {
    dispatch(authListener());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <NavbarContainer
        position="sticky"
        sx={{ backgroundColor: "white", m: 0 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ color: "black", cursor: "pointer" }}>
              Destination
            </Typography>
            <Typography
              onClick={() => navigate("/products")}
              style={{ color: "black", cursor: "pointer" }}
            >
              Products
            </Typography>

            {user === ADMIN && (
              <Typography
                onClick={() => navigate("/admin")}
                style={{ color: "black", cursor: "pointer" }}
              >
                Admin
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "40%",
                cursor: "pointer",
              }}
              src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/color_logo_390x.png?v=1663667137"
              alt=""
              onClick={() => navigate("/")}
            />
          </Box>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <LoginIcon color="primary" sx={{ paddingTop: "6px" }} />

            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <LocalGroceryStoreIcon />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </Box>
          {/* <Box sx={{ width: "20%" }}>
            <LoginIcon color="primary" />
          </Box> */}
        </Toolbar>
      </NavbarContainer>
    </Box>
  );
}
