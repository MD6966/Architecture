// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

// const imageDescriptions = [
//   {
//     imageSrc: 'https://via.placeholder.com/200',
//     description: 'Description for Image 1',
//   },
//   {
//     imageSrc: 'https://via.placeholder.com/300',
//     description: 'Description for Image 2',
//   },
//   {
//     imageSrc: 'https://via.placeholder.com/400',
//     description: 'Description for Image 3',
//   },
// ];

// const Sponser = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to change the image and description
//   const changeImageAndDescription = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageDescriptions.length);
//   };

//   useEffect(() => {
//     // Automatically change the image and description every 3 seconds
//     const interval = setInterval(changeImageAndDescription, 3000);

//     return () => {
//       // Clear the interval when the component unmounts
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Grid container justifyContent="center">
//       <Grid item xs={12} sm={6}>
//         <Card>
//           <CardMedia
//             component="img"
//             alt="Image"
//             src={imageDescriptions[currentImageIndex].imageSrc}
//             sx={{ objectFit: 'cover', height: '200px', width: '200px' }}
//           />
//           <CardContent>
//             <Typography variant="body2" color="textSecondary">
//               {imageDescriptions[currentImageIndex].description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default Sponser;
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router';
const ImageData = [
  {
    imageSrc: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imgDesc: "TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more."
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4164651/pexels-photo-4164651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imgDesc: 'lTextFree is a VoIP service that lets you chat for free from a real U.S. phone number. <br/> In our mobile app, you’ll find features such as calling, voicemail, MMS, group messaging, stickers and more.'
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imgDesc: 'TextFree is a VoIP service that lets you chat for free from a real U.S. phone number. With TextFree web, you can send real SMS messages online from a bigger keyboard. In our mobile app, you’ll find stickers and more.'
  }
];
const Stylepage = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5)
}));
const Sponser = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigation('/contactus');
  };
  const [ChangeIndeximg, setChangeIndeximg] = useState(0);
  const handleChangeImage = () => {
    setChangeIndeximg((preIndex) => (preIndex + 1) % ImageData.length);
  };
  useEffect(() => {
    const interval = setInterval(handleChangeImage, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Stylepage>
        <Grid container>
          <Grid item lg={12}  >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={ImageData[ChangeIndeximg].imageSrc}
                  alt="green iguana"
                  onClick={handleClick}
                  sx={{ objectFit: 'cover', height: '70vh', width: '100%' }}
                />
                <CardContent>

                  <Typography variant="body2" color="text.secondary">
                    {ImageData[ChangeIndeximg].imgDesc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>
      </Stylepage >
    </>
  );
};

export default Sponser;