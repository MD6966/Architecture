import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import {
    Box, Button, Drawer, Typography, Avatar,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText, Badge, Tooltip
} from '@mui/material';

import useResponsive from '../../../../../components/hooks/useResponsive';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EditIcon from '@mui/icons-material/Edit';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from '@mui/icons-material/Timeline';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import { makeStyles } from '@mui/styles';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import clsx from 'clsx';
import Scrollbar from '../../../../../components/scrollbar';
import { AddOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';

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
        borderRadius: 10,
    },
    icon: {
        marginLeft: "auto",
    },
    drawer: {},
    btn: {},
}));
export default function UserNav({ openNav, onCloseNav }) {
    const ListItems = [
        {
            id: 1,
            title: "Dashboard",
            icon: <DashboardIcon />,
            to: "/user/dashboard",
        },
        {
            id: 2,
            title: "Add Post",
            icon: <AddOutlined />,
            to: "/user/add-post",
        },
        {
            id: 3,
            title: "All Posts",
            icon: <VerifiedIcon />,
            to: "/user/all-posts",
        },
        {
            id: 4,
            title: "Event",
            icon: <EventAvailableIcon />,
            to: "/user/event",
        },
        {
            id: 5,
            title: "Trophy",
            icon: <MilitaryTechIcon />,
            to: "/user/trophy",
        },
        {
            id: 6,
            title: "Certificate",
            icon: <CardMembershipIcon />,
            to: "/user/certificate",
        }


    ];
    // const { pathname } = useLocation();
    const location = useLocation();
    const [dOpen, setDopen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const isDesktop = useResponsive('up', 'lg');
    const classes = useStyles();
    const user = useSelector((state)=>state.admin.user)
    // console.log(user)
    React.useEffect(() => {
        const matchingItem = ListItems.find((item) => item.to === location.pathname);
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '20px', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>Overlaw</Typography>
                <Box sx={{ display: 'flex', gap: '12px' }}>
                    <Badge badgeContent={4} color="primary">
                        <LocalPostOfficeOutlinedIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="primary">
                        < NotificationsOutlinedIcon color="action" />
                    </Badge>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', my: '30px', justifyContent: 'center', alignItems: 'center' }}>
                <Tooltip
                title="View Profile"
                >
                <Avatar alt="Remy Sharp" 
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                sx={{height:'60px', width:'60px', mb:2, cursor:'pointer'}}
                component={Link}
                to="/user/profile"
                />
                </Tooltip>
                <Typography fontWeight="bold" variant='h6'>{user.name}</Typography>
                <Typography>{user.email}</Typography>

            </Box>

            <Box sx={{ p: 2 }}>
                <List component="nav">
                    {ListItems.map((val) => {
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
                                    sx={{ mb: 2 }}
                                >
                                    <ListItemButton
                                        selected={selectedIndex === val.id}
                                        onClick={(event) =>
                                            handleListItemClick(event, val.id)
                                        }
                                        sx={{
                                            "&:hover": {
                                                borderRadius: "10px",
                                            },
                                        }}
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