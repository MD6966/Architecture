import { Box, Button, Grid, Typography, styled, IconButton, Avatar, MobileStepper, Pagination } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DeleteProject, getAllPosts, getAllProjects} from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { ThreeDots } from 'react-loader-spinner';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import { Carousel } from 'react-responsive-carousel';
// import {getAllProjects} from '../../store/actions/userActions'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'100vh',
    padding:theme.spacing(1),
    background:'#f2f2f2'
}))
 
  const imgData = []

const MainSection = () => {
  const {state} = useLocation()
  // const [isFirstProject, setIsFirstProject] = useState(true);
  const [Gproject, setGproject] = useState([]) 
  const [gridColumns, setGridColumns] = useState(4);
  const [posts, setPosts] = React.useState([])
  const [projects, setProject] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const postsPerPage = 6;
  const projectsPerPage = 6;
  
  const dispatch = useDispatch()
  const getAllProject = () => {
    setLoading(true)
    dispatch(getAllProjects()).then((res)=> {
      console.log(res.data.payload)

      setProject(res.data.payload)
      setLoading(false)
      console.log(res.data.payload)
      setGproject(res.data.payload[0]);
      console.log(res.data.payload[0]);
      if (res.data.payload[0] ) {
        setGridColumns(8);
      } 
        }).catch((err)=>{
      setLoading(false)
      console.log(err)
    })

  }
  React.useEffect(() => {
    if (projects.length > 0) {
      const newImgData = projects.map((project) => project.image);
      imgData.push(...newImgData);
    }
  }, [projects]);
  // console.log(imgData, 'thissssssssss')
  React.useEffect(()=>{
    getAllProject()
  }, [])
  // React.useEffect(() => {
  //   if (projects.length === 1) {
  //     setIsFirstProject(true);
  //   }
  //   if (isFirstProject) {
  //     setGridColumns(8);
  //   } else {
  //     setGridColumns(4);
  //   }
  // }, [isFirstProject]);
  const getPosts = () => {
      setLoading(true)
      dispatch(getAllPosts()).then((result) => {
          setPosts(result.data.payload)
        
          setLoading(false)
      }).catch((err) => {
          setLoading(false)
          console.log(err)
      });
  }
  React.useEffect(()=> {
      getPosts()
  },[])
    const navigate = useNavigate()
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
  const indexOfLastProject = currentPage * postsPerPage;
  const indexOfFirstProject = indexOfLastProject - postsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    // Change page
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
      event.preventDefault();
    };
    // console.log(state)
    const handleDelete = (id) => {
      dispatch(DeleteProject(id)).then((res) => {
        if(res.status == 200){
          console.log('blaaa blaaa blaaa')
          
        }
      }).catch((err) => {
        console.log(err)
      })
    }

  return (
    <div>
        <StyledRoot>
          <Typography variant='h4' sx={{mb:3, fontWeight:'bold', textAlign:'center', mt:2}}>
            Posts Section
          </Typography>
    {
            loading ? 
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'80vh'}}>
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
                :
        <Grid container spacing={2}>
            {
                currentPosts.map((val)=> {
                    const formattedDate = moment(val.created_at).format("MMMM D, YYYY");
                    return(
            <Grid item
            xs={12}
            md={6}
            lg={4}
            >
            <Card 
            sx={{cursor:'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              background:'#e2e2e2'
            }
        }}
            >
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                title={val.title}
                subheader={formattedDate}
            />
            <CardMedia
    
                component="img"
                style={{ height: '400px', }}
                maxHeight="194"
                image={`${process.env.REACT_APP_URL}${val.image}`}
                alt="Image"
            />
          
            <CardContent

             style={{
                height: '100px',
                overflow: 'hidden',
              }}
            >
                <Typography variant="body2" color="text.secondary"
                 style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                    {val.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
            </Card>
            </Grid>
                    )
                })
            }
            
        </Grid>
        }
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{ mt: 3, display: 'flex', justifyContent: 'center',
          '& .Mui-selected': {
            backgroundColor: '#000000',
            color:'#fff'
          },
        }}
        />
        
    <Typography variant='h4' sx={{mb:3, fontWeight:'bold', textAlign:'center', mt:2}}>
            Project Section
          </Typography>
          <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={index==0 ? 8 : 4}>
              <Carousel showArrows={true} showThumbs={false}>
                {project.image.map((val, imageIndex) => (
                  <div key={imageIndex} className="image-slide">
                    <img
                      src={val.image}
                      alt={`Project ${imageIndex + 1}`}
                      style={{ height: "400px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                ))}
              </Carousel>
              <p>{project.title}</p>
              <p>{project.description}</p>
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
            display: 'flex',
            justifyContent: 'center',
            '& .Mui-selected': {
              backgroundColor: '#000000',
              color: '#fff',
            },
          }}
        />

        </StyledRoot>
    </div>
  )
}
export default MainSection;