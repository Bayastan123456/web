import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductsCard = ({ item }) => {
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
            image={item.image}
            alt="Expiriance Italy"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" mt={6}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              From ${item.price} USD
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductsCard;
