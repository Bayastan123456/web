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
import CloseIcon from "@mui/icons-material/LocalGroceryStore";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import Cart from "../Cart/Cart";

export default function Navbar() {
  // ====================================
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
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

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: !scrolled
            ? "rgba(255,255,255,0)"
            : "rgba(255,255,255,1)",
          boxShadow: 0,
          m: 0,
          // opacity: !scrolled ? 0 : 1,
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
              alignItems: "center",
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
            justifyContent: "space-between",
          }}
        >
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
          {/* start way to login and register, need imports:
           */}
          <Box sx={{ width: "20%", display: "flex", gap: "5px" }}>
            {/* {user ? (
              <>
                <Typography color="black">Log out</Typography>
                <LogoutIcon
                  color="primary"
                  onClick={() => {
                    dispatch(handleLogout(navigate));
                    dispatch(clearInputs());
                  }}
                />
              </>
            ) : (
              <>
                <Typography color="black">Sign up</Typography>
                <LoginIcon
                  color="primary"
                  onClick={() => {
                    navigate("/register");
                    dispatch(clearInputs());
                  }}
                />
              </>
            )} */}
          </Box>
          <Box sx={{ width: "20%" }}>
            {/* <ShoppingCartIcon color="primary" /> */}
            {user ? (
              <LogoutIcon
                color="primary"
                onClick={() => {
                  dispatch(handleLogout(navigate));
                  dispatch(clearInputs());
                }}
              />
            ) : (
              <LoginIcon
                color="primary"
                onClick={() => {
                  navigate("/login");
                  dispatch(clearInputs());
                }}
              />
            )}
          </Box>

          <Box>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} variant="text">
                  <LocalGroceryStoreIcon />
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
          {/* end way */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
