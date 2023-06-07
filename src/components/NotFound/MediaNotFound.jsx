import React from "react";
import { Button, useMediaQuery, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

export default function SimpleLGQuery() {
  const SXs = useMediaQuery("(max-width: 370px");
  const xs = useMediaQuery("(max-width: 600px)");
  const cm = useMediaQuery("(max-width: 900px)");
  const md = useMediaQuery("(max-width: 1200px)");

  const navigate = useNavigate();
  const style = grey[900];

  function getButton(widthVM) {
    return (
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          backgroundColor: style,
          borderRadius: "50px",
          mt: "30px",
          width: `${widthVM}vm`,
          fontFamily: "ubuntu",
          fontWeight: "400",
        }}
      >
        Back to home
      </Button>
    );
  }

  function getParagraph(widthRem) {
    return (
      <>
        <Typography
          variant="h3"
          sx={{
            mt: "165px",
            fontSize: `${widthRem}rem`,
            fontFamily: "ubuntu",
            fontWeight: "400",
          }}
        >
          Page not found
        </Typography>

        <Typography
          sx={{ mt: "20px", fontFamily: "ubuntu", fontWeight: "400" }}
        >
          Sorry, this page does not exist.
        </Typography>
      </>
    );
  }

  switch (true) {
    case SXs:
      return (
        <>
          {getParagraph(2)}
          {getButton(25)}
        </>
      );
    case xs:
      return (
        <>
          {getParagraph(3)}
          {getButton(25)}
        </>
      );
    case cm:
      return (
        <>
          {getParagraph(3)}
          {getButton(20)}
        </>
      );
    case md:
      return (
        <>
          {getParagraph(3)}
          {getButton(15)}
        </>
      );
    default:
      return (
        <>
          {getParagraph(3)}
          {getButton(10)}
        </>
      );
  }
}
