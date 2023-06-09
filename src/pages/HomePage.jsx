import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RunCircleIcon from "@mui/icons-material/RunCircle";
import CircleIcon from "@mui/icons-material/Circle";
import StarsIcon from "@mui/icons-material/Star";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import ProductsList from "../components/Products/ProductsList";
import { Container, Stack } from "@mui/system";
import ProductDetails from "../components/Products/ProductDetails";

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
        <Box sx={{ display: "flex", justifyContent: "center", mt: "7vh" }}>
          <Button
            onClick={() => navigate("/products")}
            sx={{ borderRadius: "18px", width: "10vw" }}
            variant="contained"
            disableElevation
          >
            View All
          </Button>
        </Box>
      </Box>

      <Box
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
            Our New Releases
          </Typography>
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
            Shop the collection of latest releases from Lonely Planet. Travel
            guides, planning maps, experience guides.
          </Typography>
          <Typography
            marginTop={"5%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => navigate("/products")}
              margin={"1%"}
              variant="contained"
              sx={{
                borderRadius: "18vw",
                width: "10vw",
              }}
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
            <Button>NEW</Button>
            <Button>TRENDING DESTINATIONS</Button>
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            zIndex={"-1"}
            position="absolute"
            backgroundColor="blue"
            width={"500px"}
            height={"600px"}
            display="flex"
            alignContent={"flex-end"}
          ></Box>
          <Box
            marginTop={"10%"}
            marginRight={"5%"}
            sx={{ position: "relative", right: "50px", zIndex: "1" }}
          >
            <img
              width={"70%"}
              height={"70%"}
              src="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/Screenshot_2_492x.png?v=1671624485"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <ProductDetails />
      <Box sx={{ mb: "16vh", mt: "15vh" }}>
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

      <Box>
        <Typography variant="h3" fontWeight={"600"} textAlign={"center"}>
          Which guidebook is right for me?
        </Typography>
        <Container sx={{ width: "150vw", marginY: "6rem" }}>
          <Box width={"100%"} display={"flex"}>
            <Card
              sx={{
                borderRadius: "20px",
                border: "solid black",
                margin: "1%",
                width: "35%",
                paddingY: "2%",
              }}
            >
              <Typography
                sx={{
                  color: "#0749a2",
                  textAlign: "start",
                  fontWeight: "550",
                  padding: "3%",
                  fontSize: "2rem",
                }}
              >
                COUNTRY, CITY & REGIONAL GUIDES
              </Typography>
              <Stack
                direction="row"
                justifyContent={"center"}
                marginY={"0.5%"}
                padding={"4%"}
              >
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/egypt_600x.png"
                  alt="Egypt"
                  sx={{ width: "35%" }}
                />
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/egypt_600x.png"
                  alt="Egypt"
                  sx={{ width: "35%" }}
                />
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/egypt_600x.png"
                  alt="Egypt"
                  sx={{ width: "35%" }}
                />
              </Stack>
              <CardContent justifyContent="center">
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    color: "#0749a2",
                  }}
                >
                  <SearchIcon
                    variant="contained"
                    sx={{
                      marginRight: "5px",
                      color: "#0749a2",
                      fontSize: "20pt",
                    }}
                  />
                  In-depth and Extensive
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      marginRight: "5px",
                      color: "#0749a2",
                      fontSize: "20pt",
                    }}
                  />
                  Trip duration: 2+ weeks
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                  marginY={1}
                >
                  For travelers seeking the most comprehensive information,
                  these guides will equip you to explore your destination at a
                  deeper level.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Top experience collections
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Regional itineraries recommended by experts (from a couple of
                  days to multi-week)
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  3D illustrations and guided tours of key sights
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Extensive coverage of history and culture
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Detailed maps throughout - includes walking maps and a
                  pull-out planning map
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: "20px",
                margin: "1%",
                width: "35%",
                paddingY: "2%",
                backgroundColor: "#cddff8",
                boxShadow: "none",
              }}
            >
              <Typography
                sx={{
                  color: "#0749a2",
                  textAlign: "start",
                  fontWeight: "550",
                  paddingX: "3%",
                  fontSize: "2rem",
                  marginY: "1.5%",
                }}
              >
                EXPERIENCE guides
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "start",
                  fontWeight: "550",
                  paddingX: "3%",
                  marginBottom: "",
                  fontSize: "1.2rem",
                }}
              >
                (COUNTRY, CITY & REGIONAL)
              </Typography>
              <Stack
                direction="row"
                justifyContent={"center"}
                marginTop={"10%"}
                marginBottom={"0.5%"}
                padding={"4%"}
              >
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/9f63c874aa29--experience-Italy-646601_240x_6_119x.png"
                  alt="Italy"
                  sx={{ width: "35%" }}
                />
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/9f63c874aa29--experience-Italy-646601_240x_6_119x.png"
                  alt="Italy"
                  sx={{ width: "35%" }}
                />
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/9f63c874aa29--experience-Italy-646601_240x_6_119x.png"
                  alt="Italy"
                  sx={{ width: "35%" }}
                />
              </Stack>
              <CardContent justifyContent="center">
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    color: "#0749a2",
                  }}
                >
                  <RunCircleIcon
                    variant="contained"
                    sx={{
                      marginRight: "5px",
                      color: "#0749a2",
                      fontSize: "20pt",
                    }}
                  />
                  Local & Authentic Experiences
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      marginRight: "5px",
                      color: "#0749a2",
                      fontSize: "20pt",
                    }}
                  />
                  Trip duration: 1 - 2 weeks
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                  marginY={1}
                >
                  For travelers that want to design a trip that feels unique,
                  these guides uncover exciting new ways to explore iconic
                  destinations.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Led by local experts that reveal their favorite experiences
                  and hidden gems
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Personal itinerary building tools
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Seasonal planning calendars
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  QR codes unlock additional online content
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Detailed maps throughout - includes walking maps and pull-out
                  planning map
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: "20px",
                border: "solid black",
                margin: "1%",
                width: "35%",
                paddingY: "2%",
              }}
            >
              <Typography
                sx={{
                  color: "#0749a2",
                  textAlign: "start",
                  fontWeight: "550",
                  padding: "3%",
                  fontSize: "2rem",
                }}
              >
                COUNTRY, CITY & REGIONAL GUIDES
              </Typography>
              <Stack
                direction="row"
                justifyContent={"center"}
                marginY={"0.5%"}
                padding={"4%"}
              >
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/lisbon_600x.png?"
                  alt="Egypt"
                  sx={{ width: "35%" }}
                />
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/lisbon_600x.png?"
                  alt="Egypt"
                  sx={{ width: "35%" }}
                />
                <CardMedia
                  component="img"
                  image="https://cdn.shopify.com/s/files/1/0650/8521/0875/files/lisbon_600x.png?"
                  alt="Egypt"
                  sx={{ width: "35%" }}
                />
              </Stack>
              <CardContent justifyContent="center">
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    color: "#0749a2",
                  }}
                >
                  <StarsIcon
                    variant="contained"
                    sx={{
                      marginRight: "5px",
                      color: "#0749a2",
                      fontSize: "20pt",
                    }}
                  />
                  Highlights and Top Experiences
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      marginRight: "5px",
                      color: "#0749a2",
                      fontSize: "20pt",
                    }}
                  />
                  Trip duration: 1 - 7 days
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                  marginY={1}
                >
                  For travelers on a short trip that want to make the most of
                  their time, these handy-sized guides cover a city's best local
                  experiences.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Special features cover most popular sights
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Content organized by neighborhhod
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Recommended 1, 2, 3 and 4-day itineraries
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Guided walking tours
                </Typography>
                <Typography fontSize={"small"}>
                  <CircleIcon sx={{ fontSize: "5px", marginRight: "1rem" }} />
                  Detailed maps throughout -includes walking maps and pull-out
                  planning map
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
        <Container
          sx={{ backgroundColor: "#cddff8", width: "150vw", padding: "5%" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box textAlign={"center"} width={"40%"}>
              <LocalShippingIcon sx={{ color: "#0057d9" }} />
              <Typography sx={{ color: "#0057d9", fontWeight: "bold" }}>
                SHIPPING DEALS
              </Typography>
              <Typography color={"#0057d9"}>
                Not much is free these days. Hugs are. So is a pleasant stroll.
                Oh – and your shipping if your total is $50 or more! Enter the
                promo code FREESHIP at checkout!
              </Typography>
            </Box>
            <Box textAlign={"center"} width={"30%"}>
              <PublicIcon sx={{ color: "#0057d9" }} />
              <Typography sx={{ color: "#0057d9", fontWeight: "bold" }}>
                FAQS
              </Typography>
              <Typography color={"#0057d9"}>
                Get help with shop orders, downloading ebooks, etc. Click here.
              </Typography>
            </Box>
            <Box textAlign={"center"} width={"30%"}>
              <MailOutlineIcon sx={{ color: "#0057d9" }} />
              <Typography sx={{ color: "#0057d9", fontWeight: "bold" }}>
                CONTACT US
              </Typography>
              <Typography color={"#0057d9"}>
                Have a question? Send us a message and our team will reply as
                soon as possible.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
