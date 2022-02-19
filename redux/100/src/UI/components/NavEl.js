import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// display for responsive styling
import { useTheme } from '@material-ui/core/styles';
import { Button, useMediaQuery } from '@material-ui/core'

// Drawer
import {
  Drawer, Divider, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    color:theme.palette.common.black,
    textDecoration:'none',
    width:'5rem'
  },
  title: {
    flexGrow: 1,
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
  section:{
    margin:theme.spacing(2),
  },
  navLink: {
    color:theme.palette.common.white,
    textDecoration:'none',
    // width:'5rem'
  },
}));


const NavEl = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  // Drawer : Open Prop handle internal logic
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CRUD
          </Typography>

          {/*
            List Items
          */}
          {
            matches &&
            [
              {name:'Table',url:'/'},
              {name:'Form',url:'/form'},
              {name:'Read',url:'/read'}
            ].map((item,key) => (
              <Button key={key}>
                <Link className={classes.navLink} to={item.url}>
                  {item.name}
                </Link>
              </Button>
            ))
          }

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

        <Typography variant="h6" className={classes.section}>
          Actions
        </Typography>

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

        <Divider />

          <Typography variant="h6" className={classes.section}>
            Sections
          </Typography>

        <Divider />

        {/*
          List Items
        */}
        {
          [
            {name:'Table',url:'/'},
            {name:'Form',url:'/form'},
            {name:'Read',url:'/read'}
          ].map((item,key) => (
            <ListItem onClick={handleDrawerClose} button key={key}>

              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>

              <Link className={classes.linkButton} to={item.url}>
                <ListItemText primary={item.name} />
              </Link>

            </ListItem>
          ))
        }

      </Drawer>
    </div>
  );
}

export default NavEl;
