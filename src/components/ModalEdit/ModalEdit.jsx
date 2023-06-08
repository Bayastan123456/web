import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  height: "500px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalEdit = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ width: "100%" }}>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              sx={{ fontWeight: "600", fontFamily: "ubuntu", mb: "30px" }}
            >
              Add your changes
            </Typography>
            <TextField label="New Title" sx={{ width: "95%" }} />
            <TextField label="New Price" sx={{ width: "95%" }} />
            <TextField label="New Image" sx={{ width: "95%" }} />
            <TextField label="New Description" sx={{ width: "95%" }} />
            <Button sx={{ width: "95%", height: "50px" }} variant="contained">
              Save changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalEdit;
