import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from '@mui/icons-material/Delete';
// import { deleteAllClass } from "../../actions/user.service";
import AddClassForm from "./AddClassFormDialog";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import act from "../../actions/sessions";

export default function ButtonAppBar({ handlePost }) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Classroom
          </Typography>
          {currentUser && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <IconButton
                onClick={() => deleteAllClass()}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <DeleteIcon />
              </IconButton> */}
              <IconButton
                onClick={() => setOpen(!open)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <AddIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    dispatch(act.logout());
                  }}>
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          )}
          <AddClassForm openForm={open} handleDialogClose={() => setOpen(!open)} handlePost={handlePost} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
