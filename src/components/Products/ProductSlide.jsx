import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const data = [
  {
    name: "Our New Releases ",
    description:
      "Shop the collection of latest releases from Lonely Planet. Travel guides, planning maps, experience guides.",
    image:
      "https://cdn.shopify.com/s/files/1/0650/8521/0875/files/Screenshot_2_500x.png?v=1671624485",
  },
  {
    name: "Trending Destinations",
    description:
      "Shop travel guides from the Lonely Planet Best in Travel 2023 Places to inspire you, curated by local experts.",
    image:
      "https://cdn.shopify.com/s/files/1/0650/8521/0875/files/9781788684460_1-min_500x.jpg?v=1679414837",
  },
];

const ImageAnimation = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { name, description, image } = data[index];

  return (
    <Box
      marginTop={"1%"}
      marginBottom={"1%"}
      marginLeft={"1%"}
      marginRight={"1%"}
      maxHeight={"100%"}
      maxWidth={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box margin={"1%"} maxHeight={"100%"} maxWidth={"100%"}>
        <Typography
          margin={"1%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          SHOP
        </Typography>
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          <Typography
            marginTop={"3%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            variant="h4"
          >
            {name}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          <Typography
            margin={"1%"}
            marginTop={"3%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
        </motion.div>
        <Typography
          marginTop={"5%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            margin={"1%"}
            variant="contained"
            sx={{
              borderRadius: "18vw",
              width: "10vw",
            }}
            onClick={() => navigate("/products")}
          >
            Shop now
          </Button>
        </Typography>

        <Box
          marginTop={"6%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            disabled={isLoading}
            onClick={handleLoadClick}
            sx={{ mr: 2 }}
          >
            {isLoading ? "New..." : "New"}
          </Button>
          <Button variant="tetx" disabled={isLoading} onClick={handleLoadClick}>
            {isLoading ? "TRENDING DESTINATIONS..." : "TRENDING DESTINATIONS"}
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box
          zIndex={"-1"}
          position="absolute"
          backgroundColor="blue"
          width={"30vw"}
          height={"100vh"}
          display="flex"
          alignContent={"flex-end"}
        ></Box>

        <Box
          marginTop={"10%"}
          marginRight={"5%"}
          sx={{ position: "relative", right: "50px", zIndex: "1" }}
        >
          <motion.img
            initial={{
              x: -250,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            width={"70%"}
            height={"70%"}
            src={image}
            alt="error"
          />
          -
        </Box>
      </Box>
    </Box>
  );
};

export default ImageAnimation;
