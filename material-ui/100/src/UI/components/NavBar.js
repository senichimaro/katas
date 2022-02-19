// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// AppBar
import {
  AppBar, Toolbar, Typography, Button, IconButton, Avatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Drawer
import {
  Drawer, Divider, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const drawerWidth = 240;



// Material UI Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:theme.spacing(4)
  },
  title:{
    flexGrow:1
  },
  appBar: {
    backgroundColor:theme.palette.grey[700]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));


const NavBar = () => {
  const classes = useStyles();

  // Drawer : Open Prop handle internal logic
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>

          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Commands
          </Typography>

          <Avatar />

        </Toolbar>
      </AppBar>




      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <List>
          {['Create', 'Loggs'].map((text, index) => (
            <ListItem button key={text}>

              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={text} />

            </ListItem>
          ))}
        </List>

      </Drawer>


    </div>
  )
}

export default NavBar;
