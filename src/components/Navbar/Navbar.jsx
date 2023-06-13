import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { ADMIN } from "../../helpers/consts";
import { useDispatch, useSelector } from "react-redux";
import { authListener, handleLogout } from "../../store/auth/authActions";
import { clearInputs } from "../../store/auth/authSlice";
import Drawer from "@mui/material/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge, Button } from "@mui/material";
import Cart from "../Cart/Cart";
import { getCountProductsInCart } from "../../helpers/functions";

export default function Navbar() {
  // ====================================
  const [state, setState] = useState({
    right: false,
  });

  const [showPaymentForm, setShowPaymentForm] = useState(false);

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

  // const NavbarContainer = styled(AppBar)(({ theme }) => ({
  //   backgroundColor: scrolled ? "#ff0000" : "transparent",
  //   transition: "background-color 0.3s ease",
  // }));

  useEffect(() => {
    dispatch(authListener());
  }, []);

  const { cart } = useSelector((state) => state.cart);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCountProductsInCart);
  }, [cart]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 0,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: !scrolled
            ? "rgba(255,255,255,0)"
            : "rgba(255,255,255,1)",
          boxShadow: 0,
          m: 0,
          // opacity: !scrolled ? 0 : 1,
          display: "flex",
          justifyContent: "space-beetwen",
        }}
      >
        {!scrolled && (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "black",
              color: "white",
              height: "40px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              FREE SHIPPING ON ALL ORDERS!
            </Typography>
          </Box>
        )}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "space-around",
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
            <Typography
              onClick={() => navigate("/aboutus")}
              style={{ color: "black", cursor: "pointer" }}
            >
              About us
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
                width: "50%",
                cursor: "pointer",
              }}
              src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/color_logo_390x.png?v=1663667137"
              alt=""
              onClick={() => navigate("/")}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <Box sx={{}}>
              {user ? (
                <LogoutIcon
                  sx={{ marginTop: "6px" }}
                  color="primary"
                  onClick={() => {
                    dispatch(handleLogout(navigate));
                    dispatch(clearInputs());
                  }}
                />
              ) : (
                <LoginIcon
                  sx={{ marginTop: "6px" }}
                  color="primary"
                  onClick={() => {
                    navigate("/login");
                    dispatch(clearInputs());
                  }}
                />
              )}
            </Box>
            <Box>
              {" "}
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)} variant="text">
                    <Badge badgeContent={count} color="primary">
                      <LocalGroceryStoreIcon />
                    </Badge>
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <Cart
                      anchor={anchor}
                      openPaymentForm={openPaymentForm}
                      closePaymentForm={closePaymentForm}
                      toggleDrawer={toggleDrawer}
                      showPaymentForm={showPaymentForm}
                    />
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </Box>
          {/* end way */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
