import React from "react";
import Header from "../../components/AppBar/Header";
import Footer from "../Landing/Footer";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const News = () => {
  const thumbnailImages = [
    "/assets/images/img1.webp",
    "/assets/images/img2.webp",
    "/assets/images/img3.jpg",
    "/assets/images/img4.jpg",
    "/assets/images/comp1.jpg",
  ];
  const newsData = [
    {
      image: "/assets/images/img1.webp",
      title: "Cotswolds House / Oliver Leech Architects",
    },
    {
      image: "/assets/images/img2.webp",
      title:
        "NEOM Showcases Its Designs for the Line at the 2023 Venice Architecture Biennale",
    },
    {
      image: "/assets/images/img3.jpg",
      title: "NOEMA Bar and Restaurant / K-Studio + Lambs and Lions",
    },
  ];
  return (
    <>
      {/* <Header /> */}
      <Box margin={15}>
        <Grid container spacing={6}>
          <Grid lg={8} spacing={5}>
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              Architecture News
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                World Architecture Festival 2023: Day Two Winners Announced{" "}
                <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  about 3 hours ago
                </span>
              </Typography>
              <Box sx={{ width: "100%" }}>
                <img
                  src="/assets/images/img2.webp"
                  alt="abc"
                  style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography sx={{ fontSize: "20px" }}>
                The second round of award winners of the{" "}
                <span style={{ color: "blue", textDecoration: "none" }}>
                  {" "}
                  2023 World Architecture Festival{" "}
                </span>{" "}
                have been announced, following Day Two of live presentations at
                Marina Bay Sands in Singapore, in which hundreds of shortlisted
                projects were presented by practices from around the world.
                Amongst today’s category award winners of the world’s largest
                international live-judged architectural event there were six
                projects from Australia and four projects each from Iran and the
                United Kingdom.
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                marginTop="20px"
                sx={{ width: "180px", height: "170px" }}
              >
                {thumbnailImages.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      marginRight: "20px",
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                >
                  Save this article
                </Button>
                <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                  Read more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
                marginTop: "100px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "semibold",
                  fontWeight: "600",
                }}
              >
                Renovating For the Future: Sustainable and Resilient Solar
                Facades <br />
                <span
                  style={{ color: "gray", fontSize: "18px", fotnWeight: "400" }}
                >
                  Sponsored Article
                </span>
              </Typography>
              <Box
                sx={{ display: "flex", gap: "20px", justifyContent: "center" }}
              >
                <Box sx={{ width: "40%" }}>
                  <img
                    src="/assets/images/img1.webp"
                    alt="abc"
                    style={{
                      height: "40vh",
                      width: "120%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ width: "60%", lineHeight: "30px" }}>
                  <Typography sx={{ fontSize: "20px" }}>
                    The second round of award winners of the hundreds of
                    shortlisted projects were presented by practices from around
                    the world. Amongst today’s category award winners of the
                    world’s largest international live-judged architectural
                    event there were six projects from Australia and four
                    projects each from Iran and the United Kingdom.architectural
                    event there were six projects from Australia and four
                    projects each from Iran and the United.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                  Read more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                A Ghost City: The White Buildings of Ashgabat, Turkmenistan
                <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  about 7 hours ago
                </span>
              </Typography>
              <Box sx={{ width: "100%" }}>
                <img
                  src="/assets/images/img4.jpg"
                  alt="abc"
                  style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                <span style={{ color: "blue" }}>Arnau Rovira </span> is a
                photographer who found himself in Turkmenistan by accident. From
                Barcelona, he recalls the story of how he found himself in its
                capital, <span style={{ color: "blue" }}>Asghabat </span>{" "}
                accompanying sports journalists for the{" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  2017 Asian Indoor and Martial Arts Games.{" "}
                </span>{" "}
                This Central Asian country, a former colony of the USSR, is
                known not only for its strict access and control restrictions
                but also for its white and golden structures that create a
                futuristic city near the border with Iran.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                >
                  Save this article
                </Button>
                <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                  Read more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px",
              }}
            > */}
            {/* <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                Decarbonization and Regional Solutions: The Main
                Architecture-Related Themes to Look Out for at COP28 <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  about 8 hours ago
                </span>
              </Typography> */}
            {/* <Box sx={{ width: "100%" }}>
                <img
                  src="/assets/images/comp2.jpeg"
                  alt="abc"
                  style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                />
              </Box> */}
            {/* <Typography sx={{ fontSize: "20px" }}>
                The second round of award winners of the{" "}
                <span style={{ color: "blue", textDecoration: "none" }}>
                  {" "}
                  2023 World Architecture Festival{" "}
                </span>{" "}
                have been announced, following Day Two of live presentations at
                Marina Bay Sands in Singapore, in which hundreds of shortlisted
                projects were presented by practices from around the world.
                Amongst today’s category award winners of the world’s largest
                international live-judged architectural event there were six
                projects from Australia and four projects each from Iran and the
                United Kingdom.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                <span style={{ color: "blue" }}>Arnau Rovira </span> is a
                photographer who found himself in Turkmenistan by accident. From
                Barcelona, he recalls the story of how he found himself in its
                capital, <span style={{ color: "blue" }}>Asghabat </span>{" "}
                accompanying sports journalists for the{" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  2017 Asian Indoor and Martial Arts Games.{" "}
                </span>{" "}
                This Central Asian country, a former colony of the USSR, is
                known not only for its strict access and control restrictions
                but also for its white and golden structures that create a
                futuristic city near the border with Iran.
              </Typography> */}
            {/* <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                marginTop="20px"
                sx={{ width: "180px", height: "170px" }}
              >
                {thumbnailImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      marginRight: "20px",
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                >
                  Save this article
                </Button>
                <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                  Read more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Box> */}
            {/* </Box> */}
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                Most Quoted Products
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <Button style={{ backgroundColor: "blue", color: "white" }}>
                  Ventilated/Double skin Facade
                </Button>
                <Button style={{ backgroundColor: "#D3D3D3", color: "blue" }}>
                  Hidden Joints
                </Button>
                <Button style={{ backgroundColor: "#D3D3D3", color: "blue" }}>
                  Heating
                </Button>
                <Button style={{ backgroundColor: "#D3D3D3", color: "blue" }}>
                  Stones
                </Button>
              </Box>
              <Box sx={{ width: "100%" }}>
                <img
                  src="/assets/images/img2.webp"
                  alt="abc"
                  style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography>
                <span style={{ color: "gray" }}>TECHNOWOOD</span> <br />
                Profile Façade System
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                  3-Minute Pavilion" by WallMakers Explores Waste and Material
                  Scarcity at the Sharjah Triennial 2023 <br />
                  <span
                    style={{
                      color: "gray",
                      fontSize: "16px",
                      fontStyle: "italic",
                    }}
                  >
                    about 7 hours ago
                  </span>
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <img
                    src="/assets/images/img2.webp"
                    alt="abc"
                    style={{
                      height: "60vh",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography sx={{ fontSize: "20px" }}>
                  The second round of award winners of the{" "}
                  <span style={{ color: "blue", textDecoration: "none" }}>
                    {" "}
                    2023 World Architecture Festival{" "}
                  </span>{" "}
                  have been announced, following Day Two of live presentations
                  at Marina Bay Sands in Singapore, in which hundreds of
                  shortlisted projects were presented by practices from around
                  the world. Amongst today’s category award winners of the
                  world’s largest international live-judged architectural event
                  there were six projects from Australia and four projects each
                  from Iran and the United Kingdom.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  marginTop="20px"
                  sx={{ width: "180px", height: "170px" }}
                >
                  {thumbnailImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index}`}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        marginRight: "20px",
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontWeight: "600",
                      padding: "10px 20px",
                    }}
                  >
                    Save this article
                  </Button>
                  <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                    Read more <KeyboardDoubleArrowRightIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                World Architecture Festival 2023: Day Two Winners Announced{" "}
                <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  about 3 hours ago
                </span>
              </Typography>
              <Box sx={{ width: "100%" }}>
                <img
                  src="/assets/images/img2.webp"
                  alt="abc"
                  style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography sx={{ fontSize: "20px" }}>
                The second round of award winners of the{" "}
                <span style={{ color: "blue", textDecoration: "none" }}>
                  {" "}
                  2023 World Architecture Festival{" "}
                </span>{" "}
                have been announced, following Day Two of live presentations at
                Marina Bay Sands in Singapore, in which hundreds of shortlisted
                projects were presented by practices from around the world.
                Amongst today’s category award winners of the world’s largest
                international live-judged architectural event there were six
                projects from Australia and four projects each from Iran and the
                United Kingdom.
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                marginTop="20px"
                sx={{ width: "180px", height: "170px" }}
              >
                {thumbnailImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      marginRight: "20px",
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                >
                  Save this article
                </Button>
                <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                  Read more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "semibold" }}>
                Dissolving Boundaries Between Art and Architecture: Exploring
                the Works of Diogo Aguiar Studio
                <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  about 11 hours ago
                </span>
              </Typography>
              <Box sx={{ width: "100%" }}>
                <img
                  src="/assets/images/img2.webp"
                  alt="abc"
                  style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography sx={{ fontSize: "20px" }}>
                The second round of award winners of the{" "}
                <span style={{ color: "blue", textDecoration: "none" }}>
                  {" "}
                  2023 World Architecture Festival{" "}
                </span>{" "}
                have been announced, following Day Two of live presentations at
                Marina Bay Sands in Singapore, in which hundreds of shortlisted
                projects were presented by practices from around the world.
                Amongst today’s category award winners of the world’s largest
                international live-judged architectural event there were six
                projects from Australia and four projects each from Iran and the
                United Kingdom.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                <span style={{ color: "blue" }}>Arnau Rovira </span> is a
                photographer who found himself in Turkmenistan by accident. From
                Barcelona, he recalls the story of how he found himself in its
                capital, <span style={{ color: "blue" }}>Asghabat </span>{" "}
                accompanying sports journalists for the{" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  2017 Asian Indoor and Martial Arts Games.{" "}
                </span>{" "}
                This Central Asian country, a former colony of the USSR, is
                known not only for its strict access and control restrictions
                but also for its white and golden structures that create a
                futuristic city near the border with Iran.
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                marginTop="20px"
                sx={{ width: "180px", height: "170px" }}
              >
                {thumbnailImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      marginRight: "20px",
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                >
                  Save this article
                </Button>
                <Button sx={{ fontWeight: "600", fontSize: "18px" }}>
                  Read more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Box>
            </Box> */}
          </Grid>
          <Grid lg={4}>
            <Container>
              <Box
                sx={{
                  height: "230px",
                  width: "100%",
                  backgroundColor: "#F2F3F5",
                }}
              ></Box>
              <Box sx={{ marginTop: "30px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  IN ALLIANCE WITH ARCHITONIC
                </Typography>
                <Typography sx={{ fontSize: "15px" }}>
                  Check the Latest Arcitechture News
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "30px",
                  }}
                >
                  MOST VISITED
                </Typography>
                {newsData.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                      alignItems: "start",
                      marginTop: "20px",
                    }}
                  >
                    <Box sx={{ width: "150px", height: "150px" }}>
                      <img
                        src={item.image}
                        alt={`News Image ${index}`}
                        style={{
                          height: "100%",
                          width: "120%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "70%", lineHeight: "30px" }}>
                      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    marginTop: "30px",
                  }}
                >
                  MOST VISITED Products
                </Typography>
                {newsData.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                      alignItems: "start",
                      marginTop: "20px",
                    }}
                  >
                    <Box sx={{ width: "150px", height: "150px" }}>
                      <img
                        src={item.image}
                        alt={`News Image ${index}`}
                        style={{
                          height: "100%",
                          width: "120%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "70%", lineHeight: "30px" }}>
                      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default News;
