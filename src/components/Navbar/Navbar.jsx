import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/material/styles";
import { ADMIN } from "../../helpers/consts";
import { useDispatch, useSelector } from "react-redux";
import { authListener, handleLogout } from "../../store/auth/authActions";
import { clearInputs } from "../../store/auth/authSlice";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar() {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
