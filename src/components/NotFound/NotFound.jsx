import { Box, Typography } from "@mui/material";
import React from "react";
import SimpleLGQuery from "./MediaNotFound";

const NotFound = () => {
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
          fontFamily: "ubuntu",
        }}
      >
        404
      </Typography>

      {SimpleLGQuery()}
    </Box>
  );
};

export default NotFound;
