import { AppBar, Toolbar, styled, Typography, Stack, Avatar, Box, Menu, MenuItem, 
    Container, Divider, List, ListItemIcon, ListItemText, ListItem, Button, IconButton } from '@mui/material';
import React, {useState, useRef} from 'react'
import {bgBlur} from './../../../../../utils/cssStyles'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsPopover from '../../../../../components/NotificationsPopover';


const NAV_WIDTH = 280;

const HEADER_MOBILE = 54;

const HEADER_DESKTOP = 62;

const StyledRoot = styled(AppBar)(({theme})=> ({
    ...bgBlur({color: theme.palette.background.default}),
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      },
  
  }))
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
      },
   }))
const TopBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openNotifications, setOpenNotifications] = useState(false);
    const notificationsRef = useRef(null);
    const notifications = [

    ]

    const handleAvatarClick =(event) => {
        setAnchorEl(event.currentTarget);
    
      }
      const handleClose = () => {
        setAnchorEl(null);
    
      }
      const handleNotificationsOpen = () => {
        setOpenNotifications(true);
      };
    
      const handleNotificationsClose = () => {
        setOpenNotifications(false);
      };
  return (
    <div>
      <StyledRoot >
        <StyledToolbar>
          <Typography sx={{color:'#000000', fontWeight:800, fontSize:'1.5rem'}}>
           Dashboard
          </Typography>
          <Box sx={{flexGrow:1}} />
          <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs:0.5,
            sm:1
          }}
          >
            <IconButton
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
            >
              <NotificationsActiveIcon sx={{color:'#000000',}} /> 
            </IconButton>
              <Avatar src="/" sx={{cursor:'pointer'}} onClick={handleAvatarClick}/>
          </Stack>

        </StyledToolbar>
    </StyledRoot>
    <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </div>
  )
}

export default TopBar
