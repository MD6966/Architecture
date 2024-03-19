import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Page from "../../../../components/page";
import { Link } from "react-router-dom";
import { Close, Menu, Person, Search } from "@mui/icons-material";
import "./styles.css";
import SideBar from "./components/SideBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));
const StyledBottom = styled(Container)(({ theme }) => ({
  padding: theme.spacing(7),
}));
const CompetetionHome = () => {
  const [open, setopen] = React.useState(false);
  const data = [
    {
      id: 0,
      src: "/assets/images/comp.jpg",
      title: `THE ARCHITECT'S CHAIR`,
      sub: "Take a seat and make a statement",
      date: 1,
    },
    {
      id: 1,
      src: "/assets/images/comp1.jpg",
      title: `BEYOND ISOLATION: SENIOR HOUSING`,
      sub: "Reimagine senior living spaces",
      date: 2,
    },
    {
      id: 2,
      src: "/assets/images/comp2.jpeg",
      title: `THE LEGENDARY HIGHWAY 14 TOWER`,
      sub: "Design an iconic tower for De Smet, South Dakota, USA",
      date: 3,
    },
    {
      id: 3,
      src: "/assets/images/comp3.webp",
      title: `ICELAND BEER SPA`,
      sub: "Design a beer spa in icelands captivating landscape",
      date: 1,
    },
  ];
  return (
    <Page title="Competetion Homepage">
      <StyledBottom sx={{ px: 8 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 6 }}>
          Open architecture competitions
        </Typography>
        <Grid container spacing={5}>
          {data.map((val, index) => {
            return (
              // <Grid container sx={{ height: "70vh", mb: 5 }} spacing={4}>
              //   <Grid item xs={12} md={4} lg={4}>
              //     <Box
              //       sx={{
              //         border: "1px solid black",
              //         height: "100%",
              //       }}
              //     >
              //       <img
              //         src={val.src}
              //         alt="Competition Image"
              //         style={{
              //           height: "100%",
              //           // width:'100%',
              //           // objectFit:"cover",
              //         }}
              //       />
              //     </Box>
              //   </Grid>  
              //   <Grid item xs={12} md={8} lg={8}>
              //     <Box sx={{ px: 5, PY: 1 }}>
              //       <Typography
              //         variant="h3"
              //         fontWeight="bold"
              //         sx={{
              //           "&:hover": {
              //             textDecoration: "underline",
              //             cursor: "pointer",
              //           },
              //         }}
              //       >
              //         {val.title}
              //       </Typography>
              //       <Typography>{val.sub}</Typography>
              //       <Box sx={{ mt: 1, mb: 2 }}>
              //         <mark
              //           style={{
              //             color: "#fff",
              //             background: "#000",
              //             padding: "3px 5px",
              //             fontSize: "10px",
              //           }}
              //         >
              //           EDITTION#1
              //         </mark>
              //         <mark
              //           style={{
              //             color: "#000",
              //             background: "#e2e2e2",
              //             padding: "3px 5px",
              //             marginLeft: "5px",
              //             fontSize: "10px",
              //           }}
              //         >
              //           IDEAS COMPETETION
              //         </mark>
              //       </Box>
              //       <Typography sx={{ fontSize: "15px", color: "#878787" }}>
              //         Prize
              //         <Typography
              //           sx={{
              //             display: "inline",
              //             ml: 1,
              //             color: "#000",
              //             fontSize: "15px",
              //           }}
              //         >
              //           Monetary Award
              //         </Typography>
              //       </Typography>
              //       <Typography sx={{ fontSize: "15px", color: "#878787" }}>
              //         Eligibilty
              //         <Typography
              //           sx={{
              //             display: "inline",
              //             ml: 1,
              //             color: "#000",
              //             fontSize: "15px",
              //           }}
              //         >
              //           Open to all
              //         </Typography>
              //       </Typography>
              //       <Typography
              //         sx={{ fontSize: "15px", color: "#878787", mt: 3 }}
              //       >
              //         Final Registration Deadline
              //         <Typography
              //           sx={{
              //             display: "inline",
              //             ml: 1,
              //             color: "#000",
              //             fontSize: "15px",
              //           }}
              //         >
              //           {val.date} November 2023
              //         </Typography>
              //       </Typography>
              //       <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
              //         <Button
              //           className="bg-black"
              //           variant="contained"
              //           endIcon={<ArrowForwardIcon />}
              //           sx={{
              //             borderRadius: "0px",
              //             py: 1.5,
              //             textTransform: "none",
              //           }}
              //         >
              //           Fint Out More
              //         </Button>
              //         <Typography
              //           sx={{
              //             ml: 2,
              //             cursor: "pointer",
              //             "&:hover": {
              //               textDecoration: "underline",
              //             },
              //           }}
              //         >
              //           Send reminders
              //           <EmailIcon
              //             sx={{ color: "#878787", fontSize: "18px", ml: 0.5 }}
              //           />
              //         </Typography>

              //         <Typography
              //           sx={{
              //             ml: 2,
              //             cursor: "pointer",
              //             "&:hover": {
              //               textDecoration: "underline",
              //             },
              //           }}
              //         >
              //           Download brief
              //           <CloudDownloadIcon
              //             sx={{ color: "#878787", fontSize: "18px", ml: 0.5 }}
              //           />
              //         </Typography>
              //       </Box>
              //     </Box>
              //   </Grid>
              // </Grid>

              <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 8px 6px 0px rgba(61, 101, 20, 0.50)",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "16px",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={val.Image.url}
                    style={{
                      width: "100%",
                      // height: "100%",
                      height: "35vh" 
                      objectFit: "cover",
                    }}
                    alt="abc"
                  />
                  <Box
                    sx={{
                      padding: "15px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          textAlign: "start",
                        }}
                      >
                        {val.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 400,
                          textAlign: "start",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 3,
                        }}
                      >
                        {val.description}
                      </Typography>
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="animated-button"
                        onClick={() => handleMinistry(val)}
                        style={{
                          backgroundColor: "transparent",
                          color: theme.palette.secondary.main,
                          fontSize: "18px",
                          borderRadius: "8px",
                          padding: "10px",
                          fontWeight: 600,
                          border: "none",
                        }}
                      >
                        Read More
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </StyledBottom>
      <SideBar open={open} close={() => setopen(false)} />
      <StyledRoot></StyledRoot>
    </Page>
  );
};

export default CompetetionHome;
