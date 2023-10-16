import { Box, Button, Grid, Typography, styled, IconButton, Avatar, MobileStepper } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'100vh',
    padding:theme.spacing(1),
    background:'#f2f2f2'
}))

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];
  const imgData2 = [
    {src:"/assets/images/img1.webp"},
    {src:"/assets/images/img2.webp"},
    {src:"/assets/images/img3.jpg"},
    {src:"/assets/images/img4.jpg"},
    {src:"/assets/images/img1.webp"},
    {src:"/assets/images/img2.webp"},
    {src:"/assets/images/img3.jpg"},
    {src:"/assets/images/img4.jpg"},
    {src:"/assets/images/img1.webp"},
    {src:"/assets/images/img2.webp"},
    {src:"/assets/images/img3.jpg"},
    {src:"/assets/images/img4.jpg"},
    {src:"/assets/images/img1.webp"},
    {src:"/assets/images/img2.webp"},
    {src:"/assets/images/img3.jpg"},
    {src:"/assets/images/img4.jpg"},
  ]
  const imgData = [
    "/assets/images/img1.webp",
    "/assets/images/img2.webp",
    "/assets/images/img3.jpg",
    "/assets/images/img4.jpg"

  ]

const MainSection = () => {
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
    const handleClick = () => {
      // navigate('/single-post')
  }
    const handleClickBox = () => {
        navigate('/single-post')
    }
    
  return (
    <div>
        <StyledRoot>
          <Typography variant='h4' sx={{mb:3, fontWeight:'bold', textAlign:'center', mt:2}}>
            Posts Section
          </Typography>
        <ImageList
      sx={{ width: '100%', height: '100%', }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            component ={Link}
            to="/posts"
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant='h4' sx={{mb:3, fontWeight:'bold', textAlign:'center', mt:2}}>
            Project Section
          </Typography>
          <Grid container>
            <Grid item
            xs={12}
            md={6}
            lg={8}
            >
               <Box sx={{px:2}}
               
               >
          <Box position="relative" 
          sx={{ overflow: 'hidden', mt:2, border: '1px solid black' }}
           width='100%' 
          height={500}
          >
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
          onClick={handleClickBox}

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
            </Grid>
            <Grid item sx={4}>

           
            <Grid item
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
            </Grid>
            <Grid item
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
            </Grid>
            </Grid>
          </Grid>
         
         
        </StyledRoot>
    </div>
  )
}

export default MainSection