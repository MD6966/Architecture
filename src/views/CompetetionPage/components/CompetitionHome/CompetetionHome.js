import { AppBar, Box, Button, DialogContent, Divider, Drawer, Grid, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page'
import { Link } from 'react-router-dom'
import { Close, Menu, Person, Search } from '@mui/icons-material'
import './styles.css'
const StyledRoot = styled(Box)(({theme})=>({
    padding:theme.spacing(3)
}))
const CompetetionHome = () => {
    const [open, setopen] = React.useState(false)
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
        <Drawer
        onClose={()=>setopen(false)} 
        variant='temporary' 
        open={open} 
        anchor='top'
        PaperProps={{
            sx:{
                height:'80vh',
                background:'#000',
                color:'#fff'
            }
        }}
        >
            <Toolbar>
             <Typography sx={{color:'fff', fontWeight:'bold', 
             fontSize:'3rem', fontFamily:'Bebas Neue', 
             letterSpacing:2, mt:2}}>
                                BUILDNER
                            </Typography>
            <Box sx={{display:'flex', mr:2, ml:'auto'}}>
            <IconButton
            onClick={()=>setopen(false)}
            sx={{
                '&:hover': {
                    border:'1px solid white',
                    borderRadius:0,
                }
            }}
            >
                <Close sx={{color:'#fff', fontSize:'1.5rem'}} />
            </IconButton>
            </Box>
                </Toolbar>
                <DialogContent>
                    <Grid container sx={{p:4}}>
                        <Grid item
                        xs={12}
                        md={8}
                        lg={8}
                        >

                            <Stack direction="row" spacing={10}>
                            <Stack spacing={1}>
                                <Typography sx={{fontSize:'15px', color:'grey'}}> COMPETETION </Typography>
                                <Typography> Open Competetions </Typography>
                                <Typography> House of the Future </Typography>
                                <Typography> Housing Crisis Competetions </Typography>
                                <Typography> Competetion results </Typography>
                                <Typography> Guest jury </Typography>

                            </Stack>
                            <Stack spacing={1}>
                                <Typography sx={{fontSize:'15px', color:'grey'}}> RESOURCES </Typography>
                                <Typography> News & blog </Typography>
                                <Typography> Book store </Typography>
                                <Typography> Univeristy rankings </Typography>
                                <Typography> Presentation review </Typography>
                                <Typography> Upload panel </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <Typography sx={{fontSize:'15px', color:'grey'}}> ABOUT </Typography>
                                <Typography> About us </Typography>
                                <Typography> KYC And Competetion Integrity </Typography>
                                <Typography> Privacy Policy </Typography>
                                <Typography> Website Terms & Conditions </Typography>
                                <Typography> Contact us </Typography>
                            </Stack>
                            <Box sx={{borderRight:'1px solid #e2e2e2', height:'45vh', }} />
                            </Stack>
                        </Grid>
                        <Grid item
                        xs={12}
                        md={4}
                        lg={4}
                        >
                            <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Stack>
                                    <Button variant='contained'
                                    className='bg-white'
                                    sx={{color:'#000', borderRadius:0, height:'50px'}}
                                    >
                                        Login with Architecture.info
                                    </Button>
                                    <div class="divider">
                                    <span>OR</span>
                                    </div>
                                    <Typography sx={{
                                        textDecoration:'underline',
                                        mt:4
                                    }}>
                                        Create an account at Architecture.info
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
        </Drawer>
        <StyledRoot>
      </StyledRoot>
    </Page>
  )
}

export default CompetetionHome
