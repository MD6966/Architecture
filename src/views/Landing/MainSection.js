import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
  IconButton,
  Avatar,
  MobileStepper,
  Pagination,
  TextField,
  InputAdornment,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StackGrid, { transitions } from "react-stack-grid";
import SearchIcon from "@mui/icons-material/Search";

import {
  DeleteProject,
  getAllPosts,
  getAllProjects,
} from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { ThreeDots } from "react-loader-spinner";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";
import { Carousel } from "react-responsive-carousel";
// import {getAllProjects} from '../../store/actions/userActions'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(1),
  background: "#f2f2f2",
}));

const imgData = [];

const MainSection = () => {
  const { state } = useLocation();
  // const [isFirstProject, setIsFirstProject] = useState(true);
  const [Gproject, setGproject] = useState([]);
  const [gridColumns, setGridColumns] = useState(4);
  const [posts, setPosts] = React.useState([]);
  const [projects, setProject] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const { t } = useTranslation();
  const { scaleDown } = transitions;

  const postsPerPage = 11;
  const projectsPerPage = 5;
  const dispatch = useDispatch();
  const getAllProject = () => {
    setLoading(true);
    dispatch(getAllProjects())
      .then((res) => {
        // console.log(res.data.payload)

        setProject(res.data.payload);
        setLoading(false);
        // console.log(res.data.payload)
        setGproject(res.data.payload[0]);
        // console.log(res.data.payload[0]);
        if (res.data.payload[0]) {
          setGridColumns(8);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  React.useEffect(() => {
    if (projects.length > 0) {
      const newImgData = projects.map((project) => project.image);
      imgData.push(...newImgData);
    }
  }, [projects]);
  // console.log(imgData, 'thissssssssss')
  React.useEffect(() => {
    getAllProject();
  }, []);
  const getPosts = () => {
    setLoading(true);
    dispatch(getAllPosts())
      .then((result) => {
        setPosts(result.data.payload);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  React.useEffect(() => {
    getPosts();
  }, []);
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = React.useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imgData.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? imgData?.length - 1 : prevImage - 1
    );
  };
  const handleClickBox = (projectId) => {
    navigate(`/single-post/${projectId}`);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPost==========", currentPosts);
  //project pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    event.preventDefault();
  };
  // console.log(state)
  const handleDelete = (id) => {
    dispatch(DeleteProject(id))
      .then((res) => {
        if (res.status == 200) {
          console.log("blaaa blaaa blaaa");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(projects.id)
  const handleImageClick = (id) => {
    navigate(`/viewproject/${id}`, { state: { projectData: projects } });
  };
  const value = useSelector((state) => state.tab.tabValue);

  const imagesPerLine = 4;
  const gutterWidth = 20;

  const totalGutterWidth = gutterWidth * (imagesPerLine - 1);
  const columnWidth = (400 - totalGutterWidth) / imagesPerLine;

  return (
    <div>
      <StyledRoot>
        {value === 0 && (
          <Box sx={{ py: 4, px: 6 }}>
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: "bold", textAlign: "center", mt: 2 }}
            >
              {t("postSection")}
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <img src="/assets/images/log.png" alt="logo" width="55px" />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mt: 1.5,
                  fontSize: "1.5rem",
                  color: "#3E393C",
                  fontWeight: "bold",
                }}
              >
                <p>{t("header")}</p>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <TextField
                placeholder={t("search")}
                sx={{
                  borderRadius: "12px",
                  width: "40%",
                  background: "#dcdcdc",
                  border: "none",
                  "& .MuiInputBase-input": {
                    paddingTop: "12px !important",
                    paddingBottom: "12px !important",
                    paddingLeft: "8px",
                  },
                }}
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
              />
            </Box>

            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80vh",
                }}
              >
                <ThreeDots
                  height="85"
                  width="80"
                  radius="9"
                  color="#3e50ce"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </Box>
            ) : (
              // <Grid container spacing={2}>
              //   {currentPosts.map((val) => {
              //     const formattedDate = moment(val.created_at).format(
              //       "MMMM D, YYYY"
              //     );
              //     return (
              //       <Grid item xs={12} md={6} lg={4}>
              //         <Card
              //           sx={{
              //             cursor: "pointer",
              //             transition: "transform 0.2s",
              //             "&:hover": {
              //               transform: "scale(1.05)",
              //               background: "#e2e2e2",
              //             },
              //           }}
              //         >
              //           <CardHeader
              //             avatar={
              //               <Avatar
              //                 sx={{ bgcolor: red[500] }}
              //                 aria-label="recipe"
              //               >
              //                 R
              //               </Avatar>
              //             }
              //             title={val.title}
              //             subheader={formattedDate}
              //           />
              //           <CardMedia
              //             component="img"
              //             style={{ height: "400px" }}
              //             maxHeight="194"
              //             image={`${process.env.REACT_APP_URL}${val.image}`}
              //             alt="Image"
              //           />

              //           <CardContent
              //             style={{
              //               height: "100px",
              //               overflow: "hidden",
              //             }}
              //           >
              //             <Typography
              //               variant="body2"
              //               color="text.secondary"
              //               style={{
              //                 display: "-webkit-box",
              //                 WebkitLineClamp: 3,
              //                 WebkitBoxOrient: "vertical",
              //                 overflow: "hidden",
              //                 textOverflow: "ellipsis",
              //               }}
              //             >
              //               {val.description}
              //             </Typography>
              //           </CardContent>
              //           <CardActions disableSpacing>
              //             <IconButton aria-label="add to favorites">
              //               <FavoriteIcon />
              //             </IconButton>
              //             <IconButton aria-label="share">
              //               <ShareIcon />
              //             </IconButton>
              //           </CardActions>
              //         </Card>
              //       </Grid>
              //     );
              //   })}
              // </Grid>
              <div>
                <ResponsiveMasonry
                  style={{
                    width: "70%",
                    margin: "0 auto",
                    padding: "20px 0 30px 0",
                  }}
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                >
                  <Masonry gutter="30px">
                    {currentPosts.map((val) => {
                      const formattedDate = moment(val.created_at).format(
                        "MMMM D, YYYY"
                      );
                      return (
                        <Card
                          sx={{
                            cursor: "pointer",
                            transition: "transform 0.2s",
                            "&:hover": {
                              transform: "scale(1.05)",
                              background: "#e2e2e2",
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            // style={{ height: "400px" }}
                            // maxHeight="194"
                            image={`${process.env.REACT_APP_URL}${val.image}`}
                            alt="Image"
                          />

                          <CardContent
                            style={{
                              height: "100px",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {val.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            )}

            <Pagination
              count={Math.ceil(posts.length / postsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                "& .Mui-selected": {
                  backgroundColor: "#000000",
                  color: "#fff",
                },
              }}
            />
          </Box>
        )}

        {value === 1 && (
          <>
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: "bold", textAlign: "center", mt: 2 }}
            >
              {t("projectsection")}
            </Typography>
            <Grid container spacing={2}>
              {currentProjects.map((project, index) => (
                <Grid item key={index} xs={12} md={6} lg={index == 0 ? 8 : 4}>
                  <Carousel showArrows={true} showThumbs={false}>
                    {project.image.map((val, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="image-slide"
                        onClick={() => handleImageClick(project.id)}
                      >
                        <img
                          src={val.image}
                          alt={`Project ${imageIndex + 1}`}
                          style={{
                            height: "400px",
                            objectFit: "cover",
                            width: "100%",
                            userSelect: "none",
                          }}
                        />
                      </div>
                    ))}
                  </Carousel>
                  <p className="text-1xl, font-semibold">{project.title}</p>
                  <p className="text-1xl, font-semibold">
                    {project.description}
                  </p>
                </Grid>
              ))}
            </Grid>

            <Pagination
              count={Math.ceil(projects.length / projectsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                "& .Mui-selected": {
                  backgroundColor: "#000000",
                  color: "#fff",
                },
              }}
            />
          </>
        )}
      </StyledRoot>
    </div>
  );
};
export default MainSection;
