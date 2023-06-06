import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const style = grey[900];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "200px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          opacity: ".05",
          fontSize: "200px",
          fontWeight: "700",
          position: "absolute",
        }}
      >
        404
      </Typography>
      <Typography variant="h3" sx={{ mt: "165px" }}>
        Page not found
      </Typography>
      <Typography sx={{ mt: "20px" }}>
        Sorry, this page does not exist.
      </Typography>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          backgroundColor: style,
          borderRadius: "50px",
          mt: "30px",
          width: "9vw",
        }}
      >
        Back to home
      </Button>
    </Box>
  );
};

export default NotFound;
