import { AppBar, Box, Button, Drawer, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import UserNav from './components/Navbar';
import { Outlet } from 'react-router';
import { ExitToApp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../store/actions/adminActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  // paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  // [theme.breakpoints.up('lg')]: {
  //   paddingTop: APP_BAR_DESKTOP - 30,
  //   // paddingLeft: theme.spacing(2),
  //   // paddingRight: theme.spacing(2),
  // },
}));

const UserDashboard = () => {
  const dispatch = useDispatch()
const handleLogOut = () => {
  confirmAlert({
    title: 'Log Out?',
    message: 'Are you sure to want to log out ?',
    buttons:[
      {
        label: 'Yes',
        onClick: ()=>{
          dispatch(logOut())
        }
      },
     {
      label: 'No',
     }

    ]
  })
}

  return (
    <StyledRoot>
      <AppBar
      sx={{bgcolor:'#fff'}}
      >
        <Toolbar>
          <Typography>
            User Dashboard
            </Typography> 
            <Box sx={{ml:'auto'}}>
              <Button variant='outlined' endIcon={<ExitToApp />} onClick={handleLogOut}> Sign out </Button>
            </Box>
        </Toolbar>
      </AppBar>
      <UserNav />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
};

export default UserDashboard;
