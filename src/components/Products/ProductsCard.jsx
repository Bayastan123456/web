import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        sx={{
          maxWidth: "17vw",
          textAlign: "center",
          boxShadow: "0",
        }}
      >
        <CardActionArea onClick={() => navigate("/details/" + item.id)}>
          <CardMedia
            sx={{ marginTop: "10px", maxHeight: "45vh" }}
            component="img"
            maxheight="100%"
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
