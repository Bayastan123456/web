import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import {
  Box,
  Button,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import ProductsList from "../components/Products/ProductsList";

const HomePage = () => {
  const navigate = useNavigate();

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              backgroundImage:
                "url(https://cdn.shopify.com/s/files/1/0650/8521/0875/files/2022-03-11_LONELY_PLANET_PORTUGAL_019A1485.jpg?v=1678123838&width=1535)",
              backgroundRepeat: "no-repeat",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "60%" }}>
              <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>
                Plan The Trip Of A Lifetime With <br /> Destination Insights
                From Local
                <br /> Writers
              </Typography>
              <Typography sx={{ fontSize: "40px", marginTop: "50px" }}>
                Instant delivery on ebooks
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/products")}
                sx={{
                  marginTop: "50px",
                  borderRadius: "50px",
                  width: "20vw",
                  padding: "10px 0px",
                }}
              >
                Shop Digital Guides
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              backgroundImage:
                "url(https://cdn.shopify.com/s/files/1/0650/8521/0875/files/Japan_Bundle_Mobile_Promo_Banner_2160_x_1080_px_231d3982-9a30-4eac-a4a5-c52c0859d8f0.png?v=1682908123&width=1550)",
              backgroundSize: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: "0.9",
            }}
          >
            <Box sx={{ width: "60%", textAlign: "center" }}>
              <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>
                Save 35% with Our Exclusive Italy <br /> eBook Bundle From Local
              </Typography>
              <Typography sx={{ fontSize: "20px", marginTop: "50px" }}>
                Explore Italy, Rome, and Milan with Our Exclusive eBook Bundle
              </Typography>
              <Button
                onClick={() => navigate("/products")}
                sx={{
                  background: "#fff",
                  color: "black",
                  marginTop: "50px",
                  borderRadius: "50px",
                  width: "20vw",

                  ":hover": { backgroundColor: "#7483e0" },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              backgroundImage:
                "url(https://cdn.shopify.com/s/files/1/0650/8521/0875/files/Italy_Bundle_Promo_Banner_2160_x_1080_px_a4b5c5cb-c724-454b-ae5a-c9c81de6c17a.png?v=1682911732&width=800)",
              backgroundSize: "100%",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "60%", textAlign: "center" }}>
              <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>
                Your Ultimate Guide to Japan - Now <br /> 40% Off
              </Typography>
              <Typography sx={{ fontSize: "20px", marginTop: "50px" }}>
                Get the exclusive eBook Bundle and Save 40%!
              </Typography>
              <Button
                onClick={() => navigate("/products")}
                sx={{
                  background: "#fff",
                  color: "black",
                  marginTop: "50px",
                  borderRadius: "50px",
                  width: "20vw",
                  ":hover": { backgroundColor: "#7483e0" },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box sx={{ margin: "auto", width: "90%", mb: "15vh" }}>
        <Box
          sx={{
            mb: "14vh",
            mt: "14vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: "1rem", fontWeight: 600, opacity: "0.7" }}
          >
            PLAN YOUR TRIP
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Where to next?
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              sx={{ border: "none", borderBottom: "solid 5px" }}
              value="web"
            >
              EXPERIENCE
            </ToggleButton>
            <ToggleButton
              sx={{ border: "none", borderBottom: "solid 5px" }}
              value="android"
            >
              EBOOKS
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <ProductsList />
      </Box>
      <Box sx={{ mb: "16vh" }}>
        <Typography variant="h3" textAlign="center" fontWeight="bold">
          Browse Our Best Collections
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/1_a19e8308-bde9-41c5-97a5-5723b74e1118-min_400x.png?v=1679414939"
            alt="error"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/3_830b6701-de93-447e-b7d6-19c0d614ab09_400x.png?v=1673978179"
            alt="error"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/2_c8a73562-b0f2-4472-83f4-b0f381725131_400x.png?v=1673978207"
            alt="error"
          />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
