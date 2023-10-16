import React from 'react';
import { AppBar, Container, CssBaseline, Toolbar, Typography, Paper, Grid, Box, Link } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LanguageIcon from '@mui/icons-material/Language';
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

const App = () => {
  return (
    <div>
      <CssBaseline />
      
      <main>
        {/* M
        ixed Gradient Overlay with Light Green and Black */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))',
          }}
        >
          {/* Add overlay content here (e.g., loading spinner) */}
        </div>
        <Container maxWidth="lg" style={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ marginTop:'200px', display: 'flex', color: 'white'}}>
        <img src="assets/images/profilelogo.png" alt="Your Image" style={{ height: '200px', width: '200px' }} />

        <Box>
    <Box sx={{display: 'flex',
    flexDirection:'row',
    alignItems: 'center', 
    gap: 2,
    marginLeft: '25px',
    justifyContent: 'start',
    textAlign: 'center',}}>
    <Typography variant='h3'>Bader</Typography>
  <VerifiedIcon sx={{ color: 'blue', fontSize: '30px' }} />
    </Box>
  <Typography sx={{marginLeft: '25px'}}>bader m alsuliamani , archyit , makkah</Typography>
  <Box sx={{marginLeft: '25px', marginTop:'4px', display: 'flex', justifyContent:'center', alignItems:'center', gap: 2}}>
  <Link href="#" underline="none" sx={{backgroundColor: 'white', color: 'black', padding:'3px 15px',  borderRadius: '5px'}}>
  < LanguageIcon/> "'http//wwmoazcom'"
</Link>
<AiFillGoogleCircle style={{ fontSize: '20px'}}/>
<FaFacebook style={{ fontSize: '20px'}}/>
<AiFillTwitterCircle style={{ fontSize: '20px'}}/>
  </Box>
  

</Box>

        

        </Box>
        </Container>
      </main>
    </div>
  );
};

export default App;
