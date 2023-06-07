import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Admin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "150px",
        gap: "15px",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "600", mb: "30px", fontFamily: "ubuntu" }}
      >
        Add product
      </Typography>
      <TextField label="Title" />
      <TextField label="Price" />
      <TextField label="Image" />
      <Button variant="contained" sx={{ width: "230px" }}>
        Add
      </Button>
    </Box>
  );
};

export default Admin;
