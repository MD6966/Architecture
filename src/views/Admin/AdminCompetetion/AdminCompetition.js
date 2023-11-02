import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../components/page'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';

const StyledRoot = styled(Box)(({theme})=>({
    minHeight:'100vh',
    padding:theme.spacing(4)
}))
const AdminCompetition = () => {
  return (
    <Page title="Manae Competetions">
        <StyledRoot>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant='h3' fontWeight="bold" fontFamily="Bebas Neue" letterSpacing="1px">
                All Competetions
            </Typography>
            <Button variant='outlined'
            sx={{borderRadius:0}}
            component={Link}
            to="/admin/add-competetion"
            endIcon={
                <AddCircleOutlineIcon />
            }
            >
                Add New Competetion
            </Button>
            </Box>
        </StyledRoot>
    </Page>
  )
}

export default AdminCompetition
