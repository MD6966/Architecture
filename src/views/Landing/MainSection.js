import { Box, Button, Grid, Typography, styled, IconButton, Avatar, MobileStepper, Pagination } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getAllPosts, getAllProjects} from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { ThreeDots } from 'react-loader-spinner';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import { Carousel } from 'react-responsive-carousel';
// import {getAllProjects} from '../../store/actions/userActions'

const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'100vh',
    padding:theme.spacing(1),
    background:'#f2f2f2'
}))
 
  const imgData = [
    "/assets/images/img1.webp",
    "/assets/images/img2.webp",
    "/assets/images/img3.jpg",
    "/assets/images/img4.jpg"

  ]

const MainSection = () => {
  const [posts, setPosts] = React.useState([])
  const [projects, setProject] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;
  
  const dispatch = useDispatch()
  const getAllProject = () => {
    setLoading(true)
    dispatch(getAllProjects()).then((res)=> {
      setProject(res.data.payload)
      setLoading(false)
    }).catch((err)=>{
      setLoading(false)
      console.log(err)
    })

  }
  React.useEffect(()=>{
    getAllProject()
  }, [])
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
        prevImage === 0 ? imgData.length - 1 : prevImage - 1
      );
    };
    const handleClickBox = (projectId) => {
      navigate(`/single-post/${projectId}`);
    };
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
      event.preventDefault();
    };
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
          <Grid container>
        <Grid item xs={12} md={6} lg={8}>
            {projects.map((project) => (
              <div key={project.id}>
                <img
                  src={`${project.image[0]}`}
                  alt="Project Image"
                  onClick={() => handleClickBox(project.id)}
                />
                <p>{project.title}</p>
                <p>{project.description}</p>                
                {/* <p>{project.specs}</p> */}
              </div>
            ))}
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" onClick={handlePrev} disabled={currentImage === 0}>
              <Avatar sx={{ background: '#fff' }}>
                <ArrowBackIosNewIcon sx={{ color: '#000' }} />
              </Avatar>
              Previous
            </Button>
            <Button variant="contained" onClick={handleNext} disabled={currentImage === projects.length - 1}>
              Next
              <Avatar sx={{ background: '#fff' }}>
                <ArrowForwardIosIcon sx={{ color: '#000' }} />
              </Avatar>
            </Button>
          </div>
        </Grid>         {/* <Grid item sx={4}> */}

           
            {/* <Grid item
            xs={12}
            md={6}
            lg={4}
            >
               <Box sx={{px:1}}
               >
          <Box position="relative" 
          sx={{ overflow: 'hidden', mt:2, border: '1px solid black' }}
           width={420} 
          height={240}>
            <div
            style={{
              display: 'flex',
              width: `${imgData.length * 100}%`,
              height:'100%',
              transform: `translateX(-${currentImage * (100 / imgData.length)}%)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {imgData.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index}`}
                style={{ objectFit: 'cover', width: `${100 / imgData.length}%`, height: '100%' }}
              />
            ))}
          </div>
      <IconButton
      className="hover-button"
        style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)',
      
      }}
        onClick={handlePrev}
        >
        <Avatar sx={{background:'#fff'}}>
        <ArrowBackIosNewIcon sx={{color:'#000'}} />
        </Avatar>
      </IconButton>

      <IconButton
      className="hover-button"
        style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)',}}
        onClick={handleNext}
      >
        <Avatar sx={{background:'#fff'}}>
        <ArrowForwardIosIcon sx={{color:'#000'}} />
        </Avatar>
      </IconButton>
      <Typography
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        Image {currentImage + 1} of {imgData.length}
      </Typography>
          </Box>
          </Box>
            </Grid> */}
            {/* <Grid item
            xs={12}
            md={6}
            lg={4}
            >
               <Box sx={{px:1}}>
          <Box position="relative" 
          sx={{ overflow: 'hidden', mt:2, border: '1px solid black' }}
           width={420} 
          height={240}>
            <div
            style={{
              display: 'flex',
              width: `${imgData.length * 100}%`,
              height:'100%',
              transform: `translateX(-${currentImage * (100 / imgData.length)}%)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {imgData.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index}`}
                style={{ objectFit: 'cover', width: `${100 / imgData.length}%`, height: '100%' }}
              />
            ))}
          </div>
      <IconButton
      className="hover-button"
        style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)',
      
      }}
        onClick={handlePrev}
        >
        <Avatar sx={{background:'#fff'}}>
        <ArrowBackIosNewIcon sx={{color:'#000'}} />
        </Avatar>
      </IconButton>

      <IconButton
      className="hover-button"
        style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)',}}
        onClick={handleNext}
      >
        <Avatar sx={{background:'#fff'}}>
        <ArrowForwardIosIcon sx={{color:'#000'}} />
        </Avatar>
      </IconButton>
      <Typography
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        Image {currentImage + 1} of {imgData.length}
      </Typography>
          </Box>
          </Box>
            </Grid> */}
            {/* </Grid> */}
          </Grid>
         
         
        </StyledRoot>
    </div>
  )
}

export default MainSection