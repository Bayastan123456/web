import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
          height: "70vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            color: "white",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "80px",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "20px",
            }}
          >
            For explorers everywhere
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "8rem 20rem",
          fontSize: "20px",
          fontFamily: "Helvetica, Arial, sans-serif",
          lineHeight: "1.5",
          color: "#4B4B4B",
          "@media(min-width: 1024px)": {
            margin: "8rem 15rem",
          },
        }}
      >
        <Typography variant="p">
          We believe that travel is for everyone. It helps us learn about
          ourselves and the world around us.
          <br />
          <br />
          Our goal is to help more people from more backgrounds experience the
          joy of exploration. Because we believe this builds a kinder, more
          inclusive, more open-minded world.
          <br />
          <br />
          Like you, travel is in our DNA. At Lonely Planet, we believe travel
          opens the door to the greatest, most unforgettable experiences life
          can offer. And we have learned that the best travel is about putting
          yourself out there, about leaving behind the everyday, about immersing
          yourself, rather than just seeing the sights.
          <br />
          <br />
          As travelers, you're on a journey, and at Lonely Planet, we're on one,
          too. Over the last two years, travel has transformed. We're thinking
          deeply not just about how we travel but why we travel and how to best
          serve travelers on their journey – and we approach our 50th year with
          a passion and commitment to helping others do it, too.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "60vh",
          bgcolor: "#0057D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            heigth: "100vh",
            bgcolor: "white",
            borderRadius: "15px",
            display: "flex",
            "@media(min-width: 1024px)": {
              flexWrap: "wrap",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              margin: "4rem 4rem",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "#4B4B4B",
              "@media(min-width: 1024px)": {
                margin: "2rem 4rem",
                width: "100%",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#0057D9",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Subscribe & Get 20% off
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "20px",
                lineHeight: "1.5",
                "@media(min-width: 1024px)": {
                  fontSize: "16px",
                },
              }}
            >
              Join our newsletter and discover new destinations to inspire the
              traveler within. Plus, get 20% off at our online shop. Every week
              you'll receive expert advice, tips, exclusive offers, and much
              more.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "4rem 4rem",
              flexWrap: "wrap",
              "@media(min-width: 1024px)": {
                margin: " 0 0 2rem 4rem",
                width: "60%",
                display: "flex",
                justifyContent: "flex-start",
              },
            }}
          >
            <TextField
              placeholder="Email address"
              variant="outlined"
              sx={{
                width: "50%",
                borderRadius: "50px !important",
              }}
            />
            <Button
              variant="outlined"
              sx={{
                width: "24%",
                bgcolor: "#0057D9",
                fontSize: "14px",
                borderRadius: "50px",
                color: "white",
                marginLeft: "20px",
              }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
            <Typography
              sx={{
                marginTop: "1rem",
              }}
            >
              Subscribe to Lonely Planet newletters and promotions.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "50vh",
          marginTop: "5rem",
          marginBottom: "5rem",
          "@media(min-width: 1024px)": {
            marginBottom: "15rem",
          },
        }}
      >
        <Box
          sx={{
            width: "45%",
            marginLeft: "5rem",
            "@media(min-width: 1024px)": {
              width: "80%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: "bold",
              lineHeight: "1.3",
            }}
          >
            At Lonely Planet, our core values guide our evolution:
          </Typography>
        </Box>

        <Box
          sx={{
            width: "85%",
            margin: "5rem 5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Typography
            sx={{
              width: "50%",
              padding: "40px",
              boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            We pursue a vision of the world in which all are welcome. We believe
            travel can help foster the connection and understanding that makes
            meaningful moments possible.
          </Typography>
          <Typography
            sx={{
              width: "50%",
              padding: "40px",
              boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            We know travel has a social, economic and environmental
            consequences. We must equip travelers with the knowledge to make
            informed choices about their impact, and inspire them to travel with
            generosity.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "50vh",
          backgroundImage:
            "url(https://lonelyplanetstatic.imgix.net/marketing/about/about_contribute_block.jpg?auto=format&w=1200&h=800&q=75)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: "5rem",
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backdropFilter: "brightness(0.3)",
            height: "50vh",
          }}
        >
          <Typography
            sx={{
              width: "60%",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            Every month we receive many applications from people keen to work
            with Lonely Planet. It's fantastic to hear from so many inspiring
            creatives, and we're keen to work with a diverse travel community.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0057D9",
              marginTop: "2rem",
              borderRadius: "20px",
            }}
          >
            Become a contributor
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
