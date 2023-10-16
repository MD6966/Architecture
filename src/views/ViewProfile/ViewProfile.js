import { Box, Card, Grid, styled } from '@mui/material'
import React from 'react'
import Page from '../../components/page'
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(5),
    marginTop:theme.spacing(8)
  }))

  const StyledCard = styled(Card)(({theme})=>({
    maxHeight:'30vh',
    minHeight:'30vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }))
const ViewProfile = () => {
  return (
    <Page
    title="View Profile"
    >
    <StyledRoot>
       <Grid container spacing={2}>
            <Grid item
            xs={12}
            md={6}
            lg={4}
            >
                <StyledCard>
                        This is Card
                </StyledCard>
            </Grid>
            <Grid item
            xs={12}
            md={6}
            lg={8}
            >
                <StyledCard>
                    This is Card
                </StyledCard>
            </Grid>
       </Grid>
    </StyledRoot>
    </Page>
  )
}

export default ViewProfile
