import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductsCard = () => {
  return (
    <div>
      <Card
        sx={{
          minWidth: "15vw",
          maxWidth: "17vw",
          textAlign: "center",
          boxShadow: "0",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ marginTop: "10px" }}
            component="img"
            height="100%"
            image="https://cdn.shopify.com/s/files/1/0650/8521/0875/products/9781838694715_800x.jpg?v=1666176450"
            alt="Expiriance Italy"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" mt={6}>
              Experience Italy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              From $14.95 USD
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductsCard;
