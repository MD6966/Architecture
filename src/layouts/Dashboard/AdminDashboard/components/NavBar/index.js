import React,  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, 
    List, ListItem,ListItemButton, ListItemIcon,ListItemText } from '@mui/material';
import Scrollbar from '../../../../../components/scrollbar';
import useResponsive from '../../../../../components/hooks/useResponsive';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from '@mui/icons-material/Timeline';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { makeStyles } from '@mui/styles';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import clsx from 'clsx'
import {navConfig} from './navConfig'
import NavSection from '../../../../../components/NavSection';
// import NavSection from '../../../../components/NavSection/NavSection'

const NAV_WIDTH = 280;
const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
  }));
  const useStyles = makeStyles((theme) => ({
    selected: {
      background: "#474bd1",
      borderRadius: 10
    },
    icon: {
      marginLeft: "auto",
    },
    drawer: {},
    btn: {},
  }));
  export default function Nav({ openNav, onCloseNav }) {
    const ListData = [
        {
          id: 1,
          title: "Dashboard",
          icon: <DashboardIcon />,
          to: "/admin-dashboard/dashboard",
        },
        {
          id: 2,
          title: "LeaderBoard",
          icon: <LeaderboardIcon />,
          to: "/admin-dashboard/leaderboard",
        },
        {
          id: 3,
          title: "Order",
          icon: <ShoppingCartIcon />,
          to: "/admin/invoices",
        },
        {
          id: 4,
          title: "Products",
          icon: <Inventory2Icon />,
          to: "/admin/categories",
        },
        {
          id: 5,
          title: "Sales Report",
          icon: <TimelineIcon />,
          to: "/admin/vendors",
        },
        {
          id: 6,
          title: "Messages",
          icon: <MessageIcon />,
          to: "/admin/users",
        },
        {
          id: 7,
          title: "Settings",
          icon: <SettingsIcon />,
          to: "/admin/new-invoices",
        },
        {
          id: 8,
          title: "Signout",
          icon: <ExitToAppIcon />,
          to: "/admin/approved-by-admin",
        },
      ];
    // const { pathname } = useLocation();
  const location = useLocation();
  const [dOpen, setDopen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const isDesktop = useResponsive('up', 'lg');
    const classes = useStyles()
    React.useEffect(() => {
        const matchingItem = ListData.find((item) => item.to === location.pathname);
        if (matchingItem) {
          setSelectedIndex(matchingItem.id);
        }
      }, [location.pathname]);
      const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setDopen(false);
      };
    useEffect(() => {
      if (openNav) {
        onCloseNav();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
  
    const renderContent = (
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
        }}
      >
        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
          <img src="/assets/images/logo.webp" alt='logo' width='170px' />
        </Box>
  
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none">
            <StyledAccount>
              <Avatar  alt="photoURL" src="" />
  
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                    User Name 
                </Typography>
  
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  User
                </Typography>
              </Box>
            </StyledAccount>
          </Link>
        </Box>
        <Box sx={{p:2}}>
        <List component="nav">
                {ListData.map((val) => {
                  return (
                    <>
                    <ListItem
                          key={val}
                          disablePadding
                          className={clsx(classes.root, {
                            [classes.selected]: selectedIndex === val.id,
                          })}
                          component={Link}
                          to={val.to}
                          sx={{mb:2}}
                        >
                          <ListItemButton
                            selected={selectedIndex === val.id}
                            onClick={(event) =>
                              handleListItemClick(event, val.id)
                            }
                          >
                            <ListItemIcon
                              sx={{
                                color:
                                  selectedIndex === val.id ? "#fff" : "#686868",
                              }}
                            >
                              {val.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={val.title}
                              sx={{
                                color:
                                  selectedIndex === val.id ? "#fff" : "#686868",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>    
                    
                    </>
                  );
                })}
              </List>
        </Box>
  
        {/* <NavSection data={navConfig} /> */}
  
        <Box sx={{ flexGrow: 1 }} />

        
      </Scrollbar>
    );
  
    return (
      <Box
        component="nav"
        sx={{
          flexShrink: { lg: 0 },
          width: { lg: NAV_WIDTH },
        }}
      >
        {isDesktop ? (
          <Drawer
            open
            variant="permanent"
            PaperProps={{
              sx: {
                width: NAV_WIDTH,
                bgcolor: 'background.default',
                borderRightStyle: 'dashed',
              },
            }}
          >
            {renderContent}
          </Drawer>
        ) : (
          <Drawer
            open={openNav}
            onClose={onCloseNav}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: { width: NAV_WIDTH },
            }}
          >
            {renderContent}
          </Drawer>
        )}
      </Box>
    );
  }