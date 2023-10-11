import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Bottom = () => {
  const StyledRoot = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3,12)
  }));
  return (
    <>
    
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', paddingTop: '30px'}}>
      <Button style={{backgroundColor: '#3B318A',color:'white', borderRadius: '15px',  padding: '0 17px'}}>All Event</Button>
      <Button style={{backgroundColor: '#3B318A',color:'white', borderRadius: '15px',  padding: '0 17px'}}>This weak</Button>
      <Button style={{backgroundColor: '#3B318A',color:'white', borderRadius: '15px',  padding: '0 17px'}}>Select date</Button>
      <Button style={{backgroundColor: '#3B318A', color:'white', borderRadius: '15px',  padding: '0 17px'}}>Tomorrow</Button>
      
      </Box>
    <StyledRoot>
    <Grid container spacing={3} >
        <Grid item lg={12}>
        <TextField
      label="Search"
      variant="outlined"
      style={{ width: '500px'}}
    />
        </Grid>
        <Grid item lg={6}>
        <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height: 200}}
          image="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            YOLO Concert
          </Typography>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'start', gap: 1}}>
         <CalendarTodayIcon/>
         <Typography>30 Sep, 2023</Typography>
         </Box>
         <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end',  gap: 1}}>
<LocationOnIcon/>
<Typography>New York, USA -</Typography>
<Typography  sx={{color: 'blue'}}>Show in Map</Typography>
         </Box>
          </Box>
          <Button style={{backgroundColor: '#B2BEB5', color: 'white',borderRadius: '18px', marginTop: "12px" }} fullWidth>Join Now</Button>
         
        
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={6}>
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height: 200}}
          image="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            First Date Seminar
          </Typography>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'start', gap: 1}}>
         <CalendarTodayIcon/>
         <Typography>30 Sep, 2023</Typography>
         </Box>
         <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end',  gap: 1}}>
<LocationOnIcon/>
<Typography>New York, USA -</Typography>
<Typography sx={{color: 'blue'}}>Show in Map</Typography>
         </Box>
          </Box>
          <Button style={{backgroundColor: '#B2BEB5', color: 'white',borderRadius: '18px', marginTop: "12px" }} fullWidth>Join Now</Button>
        </CardContent>
      </CardActionArea>
    </Card>
</Grid>
<Grid item lg={6} >
<Card>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height: 200}}
          image="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{backgroundColor:'#3B318A', color: 'white', textAlign:'center',paddingY:'5px', borderRadius:'20px'}}>
            TPURISM SEMINAR
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
</Grid>
<Grid item lg={6}>
<Card >
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height: 200}}
          image="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{backgroundColor:'#3B318A', color: 'white', textAlign:'center',paddingY:'5px', borderRadius:'20px'}}>
            PROFESSIONAL EXPENSE TRAINING
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Grid>

      </Grid>
    </StyledRoot>
     
      

    
    </>
  )
}

export default Bottom
