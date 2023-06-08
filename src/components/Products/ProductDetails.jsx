import { Button, Divider, Stack, Typography } from "@mui/material";
import Star from "@mui/icons-material/Star";
import styled from "styled-components";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneProduct } from "../../store/products/productsActions";

const ColorButton = styled(Button)(() => ({
  color: "#000 !important",
  textTransform: "none !important",
  borderColor: "#000 !important",
  borderRadius: "50px !important",
  padding: "7px 18px !important",
  width: "216px !important",
  "&:hover": {
    borderColor: "#000 !important",
    color: "#000 !important",
    backgroundColor: "#fff !important",
  },
}));

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { pruductDetails } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  console.log(pruductDetails);

  return (
    <Stack
      direction="row"
      spacing={15}
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <img src={pruductDetails?.image} alt="img" />

      <div style={{ width: "520px" }}>
        <Typography
          variant="caption"
          sx={{ color: "#4d4444", fontSize: "14px" }}
        >
          Lonely Planet
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#0057D9",
            fontSize: "40px",
            fontWeight: "600",
            marginTop: "6px",
          }}
        >
          {pruductDetails?.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: "16px", marginTop: "26px", marginBottom: "10px" }}
        >
          Pay in 4 interest-free installments for orders over{" "}
          <strong>$50.00</strong> with
          <Typography variant="body2" sx={{ textDecoration: "underline" }}>
            Learn more
          </Typography>
        </Typography>

        <Divider />

        <Typography
          variant="body2"
          sx={{ fontSize: "16px", marginTop: "10px" }}
        >
          eBook
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: "24px", fontWeight: "600" }}
        >
          {pruductDetails.price}
        </Typography>

        <Stack direction="row">
          <Star color="primary" />
          <Star color="primary" />
          <Star color="primary" />
          <Star color="primary" />
          <Star color="primary" />

          <Typography variant="body2" sx={{ fontSize: "16px" }}>
            14 reviews
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          sx={{ color: "#4d4444", fontSize: "16px", marginTop: "20px" }}
        >
          <strong>
            Lonely Planet’s{" "}
            <span style={{ fontStyle: "italic" }}>{pruductDetails?.title}</span>
          </strong>{" "}
          {pruductDetails?.descr}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            marginTop: "15px",
            marginBottom: "35px",
            cursor: "pointer",
          }}
        >
          Read More
        </Typography>

        <Divider sx={{ marginBottom: "20px" }} />

        <Stack direction="row" sx={{ flexWrap: "wrap", gap: "10px" }}>
          <ColorButton variant="outlined">
            <Stack>
              <Typography
                variant="body2"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                eBook
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                $18.95 USD
              </Typography>
            </Stack>
          </ColorButton>

          <ColorButton variant="outlined">
            <Stack>
              <Typography
                variant="body2"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                Book
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                $29.99 USD
              </Typography>
            </Stack>
          </ColorButton>

          <ColorButton variant="outlined">
            <Stack>
              <Typography
                variant="body2"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                Print & eBook
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                $37.99 USD
              </Typography>
            </Stack>
          </ColorButton>
        </Stack>

        <Divider sx={{ marginBottom: "40px" }} />

        <Stack direction="row" sx={{ flexWrap: "wrap", gap: "10px" }}>
          <ColorButton
            variant="outlined"
            sx={{
              backgroundColor: "#0057D9",
              "&:hover": {
                backgroundColor: "#0057D9 !important",
              },
            }}
          >
            <Stack>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Add card
              </Typography>
            </Stack>
          </ColorButton>

          <ColorButton
            variant="outlined"
            sx={{
              backgroundColor: " rgba(98, 60, 150, 0.932)",

              "&:hover": {
                backgroundColor: "rgba(98, 60, 150, 0.932) !important",
              },
            }}
          >
            <Stack>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Delete card
              </Typography>
            </Stack>
          </ColorButton>
        </Stack>

        <Divider sx={{ margin: "20px 0" }} />
      </div>
    </Stack>
  );
}

export default ProductDetails;
