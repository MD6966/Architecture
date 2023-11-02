import { AppBar, Avatar, Box, IconButton, TextField, Toolbar, Typography, Button, Badge, Tooltip } from '@mui/material';
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import { ExitToApp } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import MainSection from '../MainSection/MainSection';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logOut } from '../../store/actions/adminActions';
const Header = () => {
  const isAuthenticatedUser = useSelector((state)=>state.admin.user)
  // console.log(isAuthenticatedUser == null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleProfile = () => {
    setAnchorEl(null)
    navigate('/user/profile')


  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const handleLogOut = () => {
    setAnchorEl(null)
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
    <div>
  
  <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ background: theme.palette.primary.main }} position="static">
                    <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{display:'flex'}}>
                        <img src='/assets/images/log.png' alt="logo" width="55px" />
                        <Typography variant="h6" component="div" sx={{mt:1.5, fontSize:'1.5rem', color:'#3E393C', fontWeight:'bold'}}>
                            Architecture
                        </Typography>
                        </Box>
                        <Box >
                        <TextField placeholder='Search Anything'
                        size='small'
                        sx={{
                            width:'350px',
                            background:'#fff'
                        }}
                        />
                        <Button variant='contained' className="bg-[#3E3A57]" sx={{height:'40px',}}>
                            <SearchIcon />
                        </Button>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                          <Button color='secondary' variant='outlined' sx={{mr:3,}}
                          component={Link}
                          to="/wiki"
                          >
                            Wiki
                          </Button>
                           <Button color='secondary' variant='contained' sx={{mr:3}}
                          component={Link}
                          to="/home-competition"
                          >
                            Comp
                          </Button>
                          <Button color='secondary' variant='contained' sx={{mr:2}}
                          component={Link}
                          to="/events"
                          >
                            Events
                          </Button>
                            {
                              !(isAuthenticatedUser == null) ?
                              <>
                          <IconButton sx={{mr:1}}
                          component={Link}
                          to="/add-post"
                          >
                              <Tooltip title="Add Post">
                              <AddCircleIcon />
                            </Tooltip>
                          </IconButton>
                          <IconButton sx={{mr:2}}
                          component={Link}
                          to="/messages"
                          >
                            <Badge badgeContent={13} color='custom' >
                              <Tooltip title="Messages">
                              < ChatIcon sx={{color:'#fff', fontSize:'30px'}} />
                              </Tooltip>
                            </Badge>
                          </IconButton>
                        <Avatar src="/assets/images/user.png" 
                        sx={{cursor:'pointer'}} 
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        /> 
                        <Button
                        variant='contained'
                        color='secondary'
                        sx={{ml:2}}
                        component={Link}
                        to="/user/dashboard"
                        >
                          Go to Dashboard
                        </Button>
                        </>
                        : null 
                      }
                        {
                          isAuthenticatedUser == null ?
                        <Button
                        color='secondary'
                        variant='contained'
                        component={Link}
                        to="/login"
                        sx={{ml:2}}
                        >
                          Login
                        </Button>
                          : null 
                        }
                        </Box>
                    </Toolbar>
                </AppBar>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
            </Box>
          {/* <MainSection /> */}
    </div>
  )
}

export default Header
