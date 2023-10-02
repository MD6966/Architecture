import { NavLink as RouterLink } from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';
import { Box, List, ListItemText } from '@mui/material';
import { StyledNavItem, StyledNavItemIcon } from './styles';
import { useSelector } from 'react-redux';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterIcon from '@mui/icons-material/Water';
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function NavSection({ data = [], ...other }) {
  const user = useSelector((state)=> state.auth.user)
  const [navigationConfig, setConfig] = useState([]);
  useEffect(() => {
    const arr = [];
    user.dashboards.map((d) => {
      let obj = {
        title: d.title,
        href: d.href
      };

      if (d.href === '/fuel') {
        obj = {
          ...obj,
          icon: <LocalGasStationIcon />
        };
      } else if (d.href === '/temperature') {
        obj = {
          ...obj,
          icon : <DeviceThermostatIcon />
        };
      } else if (d.href === '/waterQa') {
        obj = {
          ...obj,
          icon: <WaterIcon />
        };
      } else if (d.href === '/liquid') {
        obj = {
          ...obj,
          icon: <WaterIcon />
        };
      } else if (d.href === '/coldChain') {
        obj = {
          ...obj,
          icon: <AcUnitIcon />
        };
      } else if (d.href === '/cnc') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      } else if (d.href === '/fa') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      } else if (d.href === '/em') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/env') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/tank') {
        obj = {
          ...obj,
          icon: <WaterIcon />
        };
      }
      else if (d.href === '/ht') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/tubewell') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      } 
      else if (d.href === '/light') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/security') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/rectifier') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/geyser') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/geyser_hybrid') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/tempsys') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }
      else if (d.href === '/gassys') {
        obj = {
          ...obj,
          icon: <DashboardIcon />
        };
      }

      arr.push(obj);
    });

    setConfig([
      {
        pages: arr
      }
    ]);
  }, []);
  console.log(navigationConfig)
    return (
      <Box {...other}>
        <List disablePadding sx={{ p: 1 }}>
          {navigationConfig.map((item) => (
            <NavItem key={item.title} item={item} />
          )
          
          )}
        </List>
      </Box>
    );
  }

  function NavItem({ item }) {
    const test = item.pages
    return (
      <>
      {
        test.map((val)=> {
          return(
            <StyledNavItem
        component={RouterLink}
        to={`/dashboard${val.href}`}
        sx={{
          '&.active': {
            color: 'text.primary',
            bgcolor: 'action.selected',
            fontWeight: 'fontWeightBold',
          },
        }}
      >
        
        <StyledNavItemIcon>{val.icon && val.icon}</StyledNavItemIcon>
  
        <ListItemText disableTypography primary={val.title} />
      </StyledNavItem>
            )
          })
        }
        </>
     
    );
  }