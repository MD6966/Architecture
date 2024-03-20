import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  Button,
  Badge,
  Tooltip,
  Tab,
  Tabs,
  Stack,
  InputAdornment,
  FormControlLabel,
  styled,
  Switch,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { ExitToApp } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { logOut } from "../../store/actions/adminActions";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import { tabChangeAction } from "../../store/actions/tabChangeActions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menue_Comp from "../Menu/Menue_Comp";
import { toogleTheme } from "../../store/actions/themeActions";
const Header = () => {
  const MUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const isAuthenticatedUser = useSelector((state) => state.admin.user);
  const isAuthenticatedAdmin = useSelector(
    (state) => state.admin.isAuthenticatedAdmin
  );
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  // console.log(isAuthenticatedUser == null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const tabValue = useSelector((state) => state.tab.tabValue);
  console.log(darkMode);
  const [checked, setChecked] = useState(darkMode);

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProfile = () => {
    setAnchorEl(null);
    navigate("/user/profile");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNews = () => {
    navigate("/news");
  };

  const theme = useTheme();
  const handleLogOut = () => {
    setAnchorEl(null);
    confirmAlert({
      title: "Log Out?",
      message: "Are you sure to want to log out ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(logOut());
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl2(null);
  };

  const handleTabChange = (event, newValue) => {
    dispatch(tabChangeAction(newValue));
  };
  const handleChange = (e) => {
    setChecked(e.target.checked);
    dispatch(toogleTheme());
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "transparent" }}
          elevation={0}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", jutifyContent: "space-between" }}>
              <img src="/assets/images/log.png" alt="logo" width="55px" />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mt: 1.5,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                <p>{t("header")}</p>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <MUISwitch
                    sx={{ m: 1 }}
                    checked={checked}
                    onChange={handleChange}
                  />
                }
              />
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton sx={{ mr: 2 }} component={Link} to="/messages">
                <Badge badgeContent={13}>
                  <Tooltip title={t("msgs")}>
                    <ChatIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </Tooltip>
                </Badge>
              </IconButton>
              <Typography>
                <LanguageIcon /> {t("langH")} {t("lang")}
              </Typography>
              <IconButton
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick2}
              >
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("ar")}>
                  العربی
                </MenuItem>
              </Menu>
              <Avatar src="/assets/images/user.png" />
              <Menue_Comp />
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: "flex", justifyContent: "center", mt: -8 }}>
          <Stack>
            <img
              src="/assets/images/log.png"
              style={{ width: "200px", marginLeft: "45px" }}
            />
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: -4,
              }}
            >
              Architecture
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ background: "#e2e2e2", width: "500px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <AppBar
          position="static"
          sx={{ background: "transparent", mt: 2 }}
          elevation={0}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            {!(isAuthenticatedUser == null) ? (
              <>
                <Box>
                  {/* <Typography
                    fontSize={16}
                    ml={2}
                    display="inline"
                    sx={{ color: "#000", fontWeight: "bold" }}
                  >
                    {t("addPost")}
                  </Typography>
                  <IconButton sx={{ mr: 1 }} component={Link} to="/add-post">
                    <Tooltip title={t("addPost")}>
                      <AddCircleIcon />
                    </Tooltip>
                  </IconButton> */}
                  {/* <IconButton sx={{ mr: 2 }} component={Link} to="/messages">
                    <Badge badgeContent={13} color="custom">
                      <Tooltip title={t("msgs")}>
                        <ChatIcon
                          sx={{
                            color: "#fff",
                            fontSize: "30px",
                            color: "#000",
                          }}
                        />
                      </Tooltip>
                    </Badge>
                  </IconButton> */}
                </Box>
                <Box color="#000" sx={{ ml: "auto", color: "primary" }}>
                  <Tabs
                    value={tabValue}
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                    onChange={handleTabChange}
                  >
                    <Tab label={t("postSection")} selected={tabValue === 0} />
                    <Tab
                      label={t("projectsection")}
                      selected={tabValue === 1}
                    />
                    <Tab label="Wiki" selected={tabValue === 2} />
                    <Tab label="Competetions" selected={tabValue === 3} />
                    <Tab label="Events" selected={tabValue === 4} />
                    <Tab label="Blocks" selected={tabValue === 5} />
                    <Tab label="News" selected={tabValue === 6} />
                  </Tabs>
                </Box>
                <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
                  {/* <Typography sx={{ color: "#000" }}>
                    <LanguageIcon /> {t("langH")} {t("lang")}
                  </Typography>
                  <IconButton
                    aria-controls="language-menu"
                    aria-haspopup="true"
                    onClick={handleClick2}
                  >
                    <ArrowDropDownIcon />
                  </IconButton> */}

                  {/* <Avatar
                    src="/assets/images/user.png"
                    sx={{ cursor: "pointer" }}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ ml: 2 }}
                    component={Link}
                    to={
                      isAuthenticatedAdmin
                        ? "/admin/dashboard"
                        : "/user/dashboard"
                    }
                  >
                    {t("dash")}
                  </Button> */}
                </Box>
              </>
            ) : null}
            {!isAuthenticatedUser && (
              <Tabs
                value={tabValue}
                textColor="primary"
                centered
                onChange={handleTabChange}
              >
                <Tab label={t("postSection")} selected={tabValue === 0} />
                <Tab label={t("projectsection")} selected={tabValue === 1} />
                <Tab label="Wiki" selected={tabValue === 2} />
                <Tab label="Competetions" selected={tabValue === 3} />
                <Tab label="Events" selected={tabValue === 4} />
                <Tab label="Blocks" selected={tabValue === 5} />
                <Tab label="News" selected={tabValue === 6} />
              </Tabs>
            )}
          </Toolbar>
        </AppBar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleProfile}>{t("profile")}</MenuItem>
          <MenuItem onClick={handleLogOut}>{t("logout")}</MenuItem>
        </Menu>
      </Box>
      {/* <MainSection /> */}
    </div>
  );
};

export default Header;
