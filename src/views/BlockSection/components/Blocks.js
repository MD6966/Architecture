import { Download } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography, styled } from '@mui/material'
import React from 'react'
const StyledRoot = styled(Box)(({theme})=>({
    padding:theme.spacing(5)
}))
const StyledCard = styled(Card)(({theme})=>({

}))
const Blocks = () => {
  return (
    <StyledRoot>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
        <StyledCard>
            <CardMedia 
            component="img"
            src="/assets/images/block1.png"
            sx={{height:'190px'}}
            />
            <CardContent>
                <Typography variant='h6' color="#777" fontWeight="bold">
                Block
                </Typography>
            </CardContent>
            <Divider />
            <Box sx={{height:'30px', px:2, display:'flex', justifyContent:'space-between'}}>
                <Typography>
                This is the description
                </Typography>
                <Download />
            </Box>
        </StyledCard>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
        <StyledCard>
            <CardMedia 
            component="img"
            src="/assets/images/block2.jpg"
            sx={{height:'190px'}}
            />
            <CardContent>
                <Typography variant='h6' color="#777" fontWeight="bold">
                Block
                </Typography>
            </CardContent>
            <Divider />
            <Box sx={{height:'30px', px:2, display:'flex', justifyContent:'space-between'}}>
                <Typography>
                This is the description
                </Typography>
                <Download />
            </Box>
        </StyledCard>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
        <StyledCard>
            <CardMedia 
            component="img"
            src="/assets/images/block1.png"
            sx={{height:'190px'}}
            />
            <CardContent>
                <Typography variant='h6' color="#777" fontWeight="bold">
                Block
                </Typography>
            </CardContent>
            <Divider />
            <Box sx={{height:'30px', px:2, display:'flex', justifyContent:'space-between'}}>
                <Typography>
                This is the description
                </Typography>
                <Download />
            </Box>
        </StyledCard>
            </Grid>
        </Grid>
    </StyledRoot>
  )
}

export default Blocks
