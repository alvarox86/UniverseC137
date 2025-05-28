import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import Face2Icon from '@mui/icons-material/Face2';
import Face6Icon from '@mui/icons-material/Face6';
import FavoriteIcon from "@mui/icons-material/Favorite";

import logoPagina from "../assets/images/portal.png";
import { Link } from "react-router-dom";

function MyNavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, margin: "10px", borderRadius: "25px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <HomeIcon sx={{ paddingRight: "10px" }} /> Home
          </ListItem>
        </Link>
        <Divider />
        <Link to={"/CharacterDetails/1"} style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <Face2Icon sx={{ paddingRight: "10px" }} /> Rick
          </ListItem>
        </Link>
        <Divider />
        <Link to={"/CharacterDetails/2"} style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <Face6Icon sx={{ paddingRight: "10px" }} /> Morty
          </ListItem>
        </Link>
        <Divider />
        <Link to={"https://github.com/alvarox86/UniverseC137"} style={{ textDecoration: "none", color: "black" }} target="_blank">
          <ListItem>
            <GitHubIcon sx={{ paddingRight: "10px" }} /> Repository
          </ListItem>
        </Link>
        <Divider />
        <Link to={"/AboutPage"} style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <InfoIcon sx={{ paddingRight: "10px" }} /> About the page
          </ListItem>
        </Link>
        <Divider />
        {/* <ListItem >
           <FavoriteIcon sx={{paddingRight: "10px"}}/> Favorites characters 
        </ListItem>
        <Divider /> */}
        
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, margin: "30px" }}>
      <AppBar position="static" color="inherit" sx={{ borderRadius: "10px" }}>
        <Toolbar className="toolBar" sx={{ margin: "10px" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              sx={{ margin: "20px" }}
            >
              {DrawerList}
            </Drawer>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            <h1>Universe C-137</h1>
          </Typography>
          <img src={logoPagina} alt="LogoPagina" style={{ height: "100px" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyNavBar;
