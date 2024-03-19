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
} from "@mui/material";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { ExitToApp } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
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
const Header = () => {
  const isAuthenticatedUser = useSelector((state) => state.admin.user);
  const isAuthenticatedAdmin = useSelector(
    (state) => state.admin.isAuthenticatedAdmin
  );
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  // console.log(isAuthenticatedUser == null)
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    dispatch(tabChangeAction(newValue));
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
                  color: "#3E393C",
                  fontWeight: "bold",
                }}
              >
                <p>{t("header")}</p>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton sx={{ mr: 2 }} component={Link} to="/messages">
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
              </IconButton>
              <Typography sx={{ color: "#000" }}>
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
                <Box color="#000" sx={{ ml: "auto" }}>
                  <Tabs
                    value={selectedTab}
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                    onChange={handleTabChange}
                  >
                    <Tab
                      label={t("postSection")}
                      selected={selectedTab === 0}
                    />
                    <Tab
                      label={t("projectsection")}
                      selected={selectedTab === 1}
                    />
                    <Tab label="Wiki" selected={selectedTab === 2} />
                    <Tab label="Competetions" selected={selectedTab === 3} />
                    <Tab label="Events" selected={selectedTab === 4} />
                    <Tab label="Blocks" selected={selectedTab === 5} />
                    <Tab label="News" selected={selectedTab === 6} />
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
                value={selectedTab}
                textColor="primary"
                centered
                onChange={handleTabChange}
              >
                <Tab label={t("postSection")} selected={selectedTab === 0} />
                <Tab label={t("projectsection")} selected={selectedTab === 1} />
                <Tab label="Wiki" selected={selectedTab === 2} />
                <Tab label="Competetions" selected={selectedTab === 3} />
                <Tab label="Events" selected={selectedTab === 4} />
                <Tab label="Blocks" selected={selectedTab === 5} />
                <Tab label="News" selected={selectedTab === 6} />
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
