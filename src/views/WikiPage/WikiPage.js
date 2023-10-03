import React from 'react'
import Header from '../../components/AppBar/Header'
import Page from '../../components/page'
import {StyledContent, StyledRoot} from './styles'
import { AppBar, Box, Divider, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material'
import ShopDrawing from './components/ShopDrawing'
import Projects from './components/Projects'
import Data from './components/Data'

const WikiPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Page
    title="Wiki Page"
    >
      <Header />
        {/* <Box sx={{display:'flex', justifyContent:'center', mt:-7}}>
            <Box>
            <img src="/assets/images/log.png"/>
            <Typography variant='h4' textAlign="center" sx={{mt:-8}}>
            Architecture
            </Typography>
            </Box>
        </Box> */}
            <AppBar position='static' sx={{bgcolor:'#fff'}}>
                <Toolbar>
                    <Box sx={{display: 'flex', justifyContent: 'center', flexGrow:1 }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab value={0} label="Shop Drawing" />
                        <Tab value={1} label="Projects" />
                        <Tab value={2} label="Data" />
                    </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        <StyledRoot>
                <StyledContent>
                    {value == 0 && <ShopDrawing /> }
                    {value == 1 && <Projects />}
                    {value==2 && <Data />}
                </StyledContent>
      </StyledRoot>
    </Page>
  )
}

export default WikiPage
