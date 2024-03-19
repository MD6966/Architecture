import React from "react";
import Header from "../../components/AppBar/Header";
import Page from "../../components/page";
import { StyledContent, StyledRoot } from "./styles";
import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Divider,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import ShopDrawing from "./components/ShopDrawing";
import Projects from "./components/Projects";
import Data from "./components/Data";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const StyledCard = styled(Card)(({ theme }) => ({
  height: "200px",
  width: "250px",
  margin: "0px 20px",
  cursor: "pointer",
}));
const WikiPage = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Wiki Page">
      <StyledRoot>
        {/* <Box sx={{display:'flex', justifyContent:'center',mt:-8}}>
          <Stack>
          <img src="/assets/images/log.png" />
          <Typography 
          variant='h3'
          sx={{
            textAlign:'center',
            fontWeight:'bold',
            mt:-6
          }}
          >
            Architecture
          </Typography>
          </Stack>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center',  mt:7}}>
                            <TextField
                            variant="outlined"
                            placeholder="Search..."
                            size='small'
                            sx={{background:'#e2e2e2', width:'500px',}}
                            InputProps={{
                              startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                              }}
                              />
                              </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <StyledCard component={Link} to="/wiki-page/shop-drawing">
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight="bold">
                Shop Drawing
              </Typography>
            </Box>
            <CardMedia component="img" src="/assets/images/img2.webp" />
          </StyledCard>
          <StyledCard component={Link} to="/wiki-page/arc-data">
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight="bold">
                Arc Data
              </Typography>
            </Box>
            <CardMedia component="img" src="/assets/images/img1.webp" />
          </StyledCard>
          <StyledCard component={Link} to="/wiki-page/projects">
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight="bold">
                Projects
              </Typography>
            </Box>
            <CardMedia component="img" src="/assets/images/img1.webp" />
          </StyledCard>
        </Box>
      </StyledRoot>
      {/* <Header /> */}
      {/* <Box sx={{display:'flex', justifyContent:'center', mt:-7}}>
            <Box>
            <img src="/assets/images/log.png"/>
            <Typography variant='h4' textAlign="center" sx={{mt:-8}}>
            Architecture
            </Typography>
            </Box>
        </Box> */}
      {/* <AppBar position='static' sx={{bgcolor:'#fff'}}>
                <Toolbar>
                    <Box sx={{display: 'flex', justifyContent: 'center', flexGrow:1 }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab value={0} label="Shop Drawing" />
                        <Tab value={2} label="Data" />
                        <Tab value={1} label="Projects" />
                    </Tabs>
                    </Box>
                </Toolbar>
            </AppBar> */}
      <StyledRoot>
        {/* <StyledContent>
                    {value == 0 && <Data /> }
                    {value == 1 && <Data />}
                    {value==2 && <Data />}
                </StyledContent> */}
      </StyledRoot>
    </Page>
  );
};

export default WikiPage;
