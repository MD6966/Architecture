import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page'
import { Link } from 'react-router-dom'
import { Close, Menu, Person, Search } from '@mui/icons-material'
import './styles.css'
import SideBar from './components/SideBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const StyledRoot = styled(Box)(({theme})=>({
    padding:theme.spacing(3)
}))
const StyledBottom = styled(Container)(({theme})=> ({
    padding:theme.spacing(7)
}))
const CompetetionHome = () => {
    const [open, setopen] = React.useState(false)
    const data = [
        {id:0, src:"/assets/images/comp.jpg",title:`THE ARCHITECT'S CHAIR`, sub:'Take a seat and make a statement' , date:1},
        {id:1, src:"/assets/images/comp1.jpg",title:`BEYOND ISOLATION: SENIOR HOUSING`, sub:'Reimagine senior living spaces' , date:2},
        {id:2, src:"/assets/images/comp2.jpeg",title:`THE LEGENDARY HIGHWAY 14 TOWER`, sub:'Design an iconic tower for De Smet, South Dakota, USA' , date:3},
        {id:3, src:"/assets/images/comp3.webp",title:`ICELAND BEER SPA`, sub:'Design a beer spa in icelands captivating landscape' , date:1},

    ]
  return (
    <Page title="Competetion Homepage">
        <AppBar
        position='static'
        elevation={0}
        sx={{background:'#fff', p:3}}
        >
            <Toolbar>
                        <Box sx={{display:'flex', alignItems:'center' }}>
                            <Typography sx={{color:'#000', fontWeight:'bold', fontSize:'3rem', fontFamily:'Bebas Neue', letterSpacing:2}}>
                                BUILDNER
                            </Typography>
                            <Typography sx={{color:'#000', ml:4, '&:hover':{textDecoration:'underline'}}}
                            component={Link}
                            to="/competition"
                            >
                                Architecture Competetions
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', ml:'auto'}}>
                            <Button
                            className='bg-[#000]'
                            variant='contained'
                            sx={{
                            textTransform:'none', 
                            borderRadius:0, 
                            height:'50px',
                            }}
                            >
                                Launch a competition
                            </Button>
                            <IconButton sx={{ml:2}}>
                                <Search />
                            </IconButton>
                            <Box sx={{display:'flex', ml:2}}>
                                <Person sx={{color:'#000'}} />
                                <Typography sx={{color:'#000', fontSize:'1.05rem', fontWeight:'bold', ml:0.5}}>Login</Typography>
                            </Box>
                            <Box sx={{display:'flex', alignItems:'center', ml:2}}>
                                <IconButton onClick={()=>setopen(true)}>
                                <Menu sx={{color:'#000'}} />
                                </IconButton>
                                <Typography sx={{color:'#000', fontSize:'1.05rem', fontWeight:'bold'}}>Menu</Typography>
                            </Box>
                        </Box>
            </Toolbar>
        <Box sx={{borderTop:'0.5px solid black', mx:2, mt:2}} />
        </AppBar>
        <Box sx={{mt:10}}>
            <Box sx={{ml:5, mt:10}}>
                <Typography variant="h2" sx={{color:'#000', mt:12, fontWeight:'bold', width:'60%',}}>
                The world's leading
                architecture competition
                organiser
                </Typography>
                <Typography sx={{color:'#000',mt:3}} variant='h5'>
                Thank you for being with us for 10 years!
                </Typography>
            </Box>
            <Box sx={{display:'flex', color:'#000', my:5, px:5}}>
                <Box sx={{borderTop:'1px solid black', borderRight:'1px solid black', width:'25%', height:'30vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Box>
                        <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue">10+</Typography>
                        <Typography sx={{color:'#878787'}}>Years of experience</Typography>
                    </Box>
                </Box>
                <Box sx={{borderTop:'1px solid black',borderRight:'1px solid black', width:'25%', height:'30vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box>
                        <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue">126</Typography>
                        <Typography sx={{color:'#878787'}}>successfully completed competitions</Typography>
                    </Box>
                </Box>
                <Box sx={{borderTop:'1px solid black',borderRight:'1px solid black', width:'25%', height:'30vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box>
                        <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue">356</Typography>
                        <Typography sx={{color:'#878787'}}>guest jury members</Typography>
                    </Box>
                </Box>
                <Box sx={{borderTop:'1px solid black', width:'25%', height:'30vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box>
                        <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue">843</Typography>
                        <Typography sx={{color:'#878787'}}>awards granted</Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <StyledBottom sx={{px:8}}>
                <Typography variant='h2' fontWeight="bold">Open architecture competitions</Typography>
                <Divider sx={{mt:3, mb:5}} />
                {
                    data.map((val)=> {
                        return(
                <Grid container sx={{height:'70vh', mb:5}} spacing={4}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box 
                        sx={{
                            border:'1px solid black',
                            height:'100%'
                        }}>
                            <img src={val.src} alt="Competition Image"
                            style={{
                                height:'100%',
                                // width:'100%',
                                // objectFit:"cover",
                            }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <Box sx={{px:5, PY:1}}>
                            <Typography variant='h3' fontWeight="bold"
                            sx={{
                                '&:hover': {
                                    textDecoration:'underline',
                                    cursor:'pointer'
                                }
                            }}
                            >{val.title}</Typography>
                            <Typography>
                               {val.sub}
                            </Typography>
                            <Box sx={{mt:1, mb:2}}>
                            <mark 
                            style={{ 
                                color: '#fff', 
                                background: '#000', 
                                padding: '3px 5px', 
                                fontSize:"10px"}}>EDITTION#1</mark>
                                  <mark 
                            style={{ 
                                color: '#000', 
                                background: '#e2e2e2', 
                                padding: '3px 5px',
                                marginLeft:'5px', 
                                fontSize:"10px"}}>IDEAS COMPETETION</mark>
                                </Box>
                                <Typography sx={{fontSize:'15px', color:'#878787'}}>
                                    Prize
                                    <Typography sx={{display:'inline', ml:1, color:'#000', fontSize:'15px'}}>Monetary Award</Typography>
                                </Typography>
                                <Typography sx={{fontSize:'15px', color:'#878787'}}>
                                    Eligibilty
                                    <Typography sx={{display:'inline', ml:1, color:'#000', fontSize:'15px'}}>Open to all</Typography>
                                </Typography>
                                <Typography sx={{fontSize:'15px', color:'#878787', mt:3}}>
                                    Final Registration Deadline
                                    <Typography sx={{display:'inline', ml:1, color:'#000', fontSize:'15px'}}>{val.date} November 2023</Typography>
                                </Typography>
                                <Box sx={{mt:4, display:'flex', alignItems:'center'}}>
                                    <Button
                                    className='bg-black'
                                    variant='contained'
                                    endIcon={
                                        <ArrowForwardIcon />
                                    }
                                    sx={{
                                        borderRadius:'0px',
                                        py:1.5,
                                        textTransform:'none'
                                    }}
                                    >
                                       Fint Out More 
                                    </Button>
                                    <Typography sx={{ml:2, cursor:'pointer',
                                    '&:hover': {
                                        textDecoration:'underline'
                                    }
                                }}>
                                        Send reminders
                                            <EmailIcon sx={{color:'#878787', fontSize:'18px', ml:0.5}} />
                                    </Typography>

                                    <Typography sx={{ml:2, cursor:'pointer',
                                    '&:hover': {
                                        textDecoration:'underline'
                                    }
                                }}>
                                        Download brief
                                            <CloudDownloadIcon sx={{color:'#878787', fontSize:'18px', ml:0.5}} />
                                    </Typography>
                                </Box>
                        </Box>
                    </Grid>
                </Grid>
                        )
                    })
                }
                 </StyledBottom>
                    <SideBar open={open} close={()=>setopen(false)}/>   
        <StyledRoot>
      </StyledRoot>
    </Page>
  )
}

export default CompetetionHome
