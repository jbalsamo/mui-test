import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { List, ListItem } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MyMenu from "./components/MyMenu";
import MyBreadCrumbs from "./components/MyBreadCrumbs";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MyMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MyBreadCrumbs />

      <List>
        <ListItem>Joe</ListItem>
        <ListItem>Eileen</ListItem>
        <ListItem>Bill</ListItem>
        <ListItem>Richard</ListItem>
      </List>
    </Box>
  );
}
