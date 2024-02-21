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
  Stack,
  TextField,
  Tabs,
  Tab,
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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WikiPage from "../../WikiPage";
import {
  DeleteProject,
  getAllPosts,
  getAllProjects,
} from "../../../store/actions/userActions";
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
// import CompetetionHome from "../../CompetetionPage/components/CompetitionHome/CompetetionHome";
import EventsPage from "../../EventsPage";
import BlockSection from "../../BlockSection/BlockSection";
import News from "../../../layouts/NEWS/News";
// import StackGrid, { transitions } from "react-stack-grid";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SearchIcon from "@mui/icons-material/Search";
import { tabChangeAction } from "../../../store/actions/tabChangeActions";
import { CompetetionTabs } from "../../CompetetionPage/components/CompetitionHome";

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
  const [selectedTab, setSelectedTab] = useState(0);
  const tabValue = useSelector((state) => state.tab.tabValue);
  // console.log("tabValue in Main Section====", tabValue);

  const { t } = useTranslation();
  // const { scaleDown } = transitions;

  const postsPerPage = 6;
  const projectsPerPage = 5;
  const dispatch = useDispatch();
  const getAllProject = () => {
    setLoading(true);
    dispatch(getAllProjects())
      .then((res) => {
        // console.log(res.data.payload);

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

  React.useEffect(() => {
    if (tabValue === "postsection") {
      console.log("in useEffect condition========");
      getPosts();
    }
  }, [tabValue]);

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
  //project pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice();
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

  const handleTabChange = (name) => {
    console.log("name", name);

    setSelectedTab(name);
    dispatch(tabChangeAction(name));
  };

  return (
    <div>
      <StyledRoot>
        {tabValue === "postsection" && (
          <Stack spacing={7}>
            {/* <Box
              color="#000"
              sx={{
                ml: "auto",
                display: "flex",
                flexDirection: "row",
                gap: 3,
                justifyContent: "center",
              }}
            > */}
            {/* <Tabs
                value={selectedTab}
                textColor="primary"
                indicatorColor="primary"
                centered
                onChange={handleTabChange}
              >
                <Tab label={t("postSection")} selected={selectedTab === 0} />
                <Tab label={t("projectsection")} selected={selectedTab === 1} />
                <Tab label="Wiki" selected={selectedTab === 2} />
                <Tab label="Competetions" selected={selectedTab === 3} />
                <Tab label="Events" selected={selectedTab === 4} />
                <Tab label="Blocks" selected={selectedTab === 5} />
                <Tab label="News" selected={selectedTab === 6} />
              </Tabs> */}

            {/* {navbarMenus.map((menu, index) => (
                <Typography
                  name={menu.name}
                  key={index}
                  onClick={() => handleTabChange(menu.name)}
                  sx={{
                    cursor: "pointer",
                    color: selectedTab === index ? "#00B5E2" : "#000",
                    fontWeight: selectedTab === index ? 600 : 400,
                    fontSize: "18px",
                    pr: 0.5,
                    mt: 0.5,
                  }}
                >
                  {t(menu.name)}
                </Typography>
              ))} */}
            {/* </Box> */}

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
              // <StackGrid
              //   columnWidth={400}
              //   gutterWidth={15}
              //   gutterHeight={15}
              //   appear={scaleDown.appear}
              //   appeared={scaleDown.appeared}
              //   enter={scaleDown.enter}
              //   entered={scaleDown.entered}
              //   leaved={scaleDown.leaved}
              // >
              //   {posts.map((post, index) => (
              //     <Stack
              //       key={index}
              //       sx={{
              //         borderRadius: "10px",
              //         backgroundColor: "#d3d3d3",
              //         justifyContent: "center",
              //         alignItems: "center",
              //       }}
              //     >
              //       <Box sx={{ width: "100%" }}>
              //         <img
              //           src={`${process.env.REACT_APP_URL}${post.image}`}
              //           alt={post.title}
              //           style={{
              //             width: "100%",
              //             height: "100%",
              //             objectFit: "cover",
              //             borderTopLeftRadius: "10px",
              //             borderTopRightRadius: "10px",
              //           }}
              //         />
              //       </Box>

              //       <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
              //         {post.title}
              //       </Typography>
              //     </Stack>
              //   ))}
              // </StackGrid>
              <div
                style={{
                  width: "60%",
                  margin: "0 auto",
                  padding: "30px 0",
                }}
              >
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1020: 3 }}
                >
                  <Masonry columnsCount={3} gutter={10}>
                    {posts.map((post, index) => (
                      <Stack
                        key={index}
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: "#d3d3d3",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: "100%", height: "100%" }}>
                          <img
                            src={`${process.env.REACT_APP_URL}${post.image}`}
                            alt={post.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderTopLeftRadius: "10px",
                              borderTopRightRadius: "10px",
                            }}
                          />
                        </Box>

                        <Typography
                          sx={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          {post.title}
                        </Typography>
                      </Stack>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            )}
            {/* <Pagination
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
            /> */}
          </Stack>
        )}

        {tabValue === "projectsection" && (
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
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "22px",
                      textAlign: "center",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    {project.description}
                  </Typography>
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
        {tabValue === "Wiki" && <WikiPage />}
        {tabValue === "Competitions" && <CompetetionTabs />}
        {tabValue === "Events" && <EventsPage />}
        {tabValue === "Blocks" && <BlockSection />}
        {tabValue === "News" && <News />}
      </StyledRoot>
    </div>
  );
};
export default MainSection;
