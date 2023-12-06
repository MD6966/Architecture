import React from "react";
import {
  StyledProjectCard,
  StyledProjectRoot,
  StyledProjectTop,
  StyledProjectBottom
} from "../../styles";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Stack, Typography, styled } from "@mui/material";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Footer from '../../../../layouts/Landing/Footer'
import { Download, Visibility } from "@mui/icons-material";
const StyledCard = styled(Card)(({theme})=>({
  height:'330px',
  width:'350px',
  margin:'0px 20px',
  cursor:'pointer'
}))
const ShopDrawing = () => {
  return (
    <Box sx={{p:3}}>
      <Typography variant="h4" fontWeight="bold" color="#4F4F51" >
        Shop Drawing
      </Typography>
      <StyledCard sx={{mt:3}}>
        <CardMedia 
        component="img"
        src="/assets/images/sp1.jpg"
        />
        <CardContent>
          <Typography variant="h6" textAlign='center' fontWeight="bold" color="4f4f51">
            Name of card
          </Typography>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="outlined" startIcon={
          <Download />
        }>DWG Download</Button>
        <Button variant="outlined" startIcon={
          <Visibility />
        }>View Pdf</Button>
        </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default ShopDrawing;
