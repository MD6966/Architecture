import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  styled,
  Tabs,
  Tab,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Blocks from "./Blocks";
const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
}));
const BlockSectionContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(true);

  const handleFilterButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <StyledRoot>
      <Box sx={{ px: 10 }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box flex={1}>
            <Box
              sx={{
                border: "1px solid rgba(0,0,0,0.1)",
                height: "100vh",
                overflowY: "auto",
                p: 2,
                position: "relative",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{
                  width: "100%",
                  marginBottom: 2,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton
                color="inherit"
                // onClick={handleFilterButtonClick}
                style={{ backgroundColor: "transparent" }}
              >
                <FilterListIcon />{" "}
                <Typography sx={{ ml: 1, fontWeight: "bold" }}>
                  Filter
                </Typography>
              </IconButton>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  width: "100%",
                  pb: 4,
                }}
              >
                <MenuItem>
                  <Typography variant="h6">Refine by:</Typography>
                </MenuItem>

                <Typography variant="subtitle1" sx={{ ml: 2 }}>
                  Categories
                </Typography>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="Category 1" />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="Category 2" />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="Category 3" />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="Category 4" />
                </MenuItem>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                  Application Supported
                </Typography>

                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="App 1" />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="App 2" />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="App 3" />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel control={<Checkbox />} label="App 4" />
                </MenuItem>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "!00%",
                    mt: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      width: "60%",
                      backgroundColor: "green",
                      display: "flex",
                      flexDirection: "row",
                      alignSelf: "center",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                  >
                    Apply filters
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box flex={3}>
            <AppBar
              position="static"
              sx={{ background: "#fff", color: "#000" }}
              elevation={1}
            >
              <Toolbar>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab
                    icon={<Inventory2Icon />}
                    iconPosition="start"
                    label="Products"
                  />
                  <Tab label="Models" />
                  <Tab label="3d blocks" />
                  <Tab label="2d blocks" />
                  <Tab label="Materials" />
                </Tabs>
              </Toolbar>
            </AppBar>
            <Blocks />
          </Box>
        </Box>
      </Box>
    </StyledRoot>
  );
};

export default BlockSectionContent;
