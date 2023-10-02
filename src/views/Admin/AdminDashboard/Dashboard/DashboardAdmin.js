import React from 'react'
import Page from '../../../../components/page'
import { Box, Grid } from '@mui/material'
import { StyledBox, StyledRoot } from './styles'
import BarChart from './components/BarChart'
import {data} from './components/Data'
import LineChartComp from './components/LineChartComp'
const DashboardAdmin = () => {
  const [userData, setUserData] = React.useState({
    labels:data.map((data)=>data.year),
    datasets:[
      {label:'Users Gained', data: data.map((data)=> data.userGained), backgroundColor:["#3E51D7"]}
    ]
  })
  const [lineData, setlineData] = React.useState({
    labels:data.map((data)=>data.year),
    datasets:[
      {label:'Users Gained', data: data.map((data)=> data.userGained), backgroundColor:["#3E51D7"]}
    ]
  })
  return (
    <Page
    title="Dashboard"
    >
      <StyledRoot>
          <Grid container spacing={3}>
            <Grid item
            xs={12}
            md={8}
            lg={8}
            >
              <StyledBox elevation='none'>
              This is grid 1
              </StyledBox>
            </Grid>
            <Grid item
            xs={12}
            md={4}
            lg={4}
            >
               <StyledBox elevation='none' >
                <Box>
                  <LineChartComp chartData={lineData} />
                </Box>
              </StyledBox>
            </Grid>
            <Grid
          item
          xs={12}
          md={6}
          lg={6}
          >
                 <StyledBox elevation='none'>
                  <Box>
                 <BarChart chartData={userData}/>
                  </Box>
              </StyledBox>
          </Grid>
          <Grid
          item
          xs={12}
          md={3}
          lg={3}
          >
                 <StyledBox elevation='none'>
              This is grid 4
              </StyledBox>
          </Grid>
          <Grid
          item
          xs={12}
          md={3}
          lg={3}
          >
                 <StyledBox elevation='none'>
              This is grid 5
              </StyledBox>
          </Grid>
          <Grid
          item
          xs={12}
          md={6}
          lg={6}
          >
                 <StyledBox elevation='none'>
              This is grid 3
              </StyledBox>
          </Grid>
          <Grid
          item
          xs={12}
          md={3}
          lg={3}
          >
                 <StyledBox elevation='none'>
              This is grid 4
              </StyledBox>
          </Grid>
          <Grid
          item
          xs={12}
          md={3}
          lg={3}
          >
                 <StyledBox elevation='none'>
              This is grid 5
              </StyledBox>
          </Grid>
          </Grid>
       
      </StyledRoot>
    </Page>
  )
}

export default DashboardAdmin
