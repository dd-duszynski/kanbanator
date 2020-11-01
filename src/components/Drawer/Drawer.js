import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SideDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
   },
   drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerClose: {
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9) + 1,
      },
   },
   toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
   },
   link: {
      color: 'rgba(0, 0, 0, 0.87)',
      textDecoration: 'none'
   }
}));

const Drawer = ({ handleDrawerClose, isDrawerOpen }) => {
   const classes = useStyles();
   const theme = useTheme();

   return (
      <SideDrawer
         variant="permanent"
         className={clsx(classes.drawer, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen,
         })}
         classes={{
            paper: clsx({
               [classes.drawerOpen]: isDrawerOpen,
               [classes.drawerClose]: !isDrawerOpen,
            }),
         }}
      >
         <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
         </div>
         <List>
            <Link exact to="/" className={classes.link}>
               <ListItem button>
                  <ListItemIcon>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
               </ListItem>
            </Link>
            <Link to="/boards" className={classes.link}>
               <ListItem button>
                  <ListItemIcon>
                     <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Boards" />
               </ListItem>
            </Link>
            <Link to="/templates" className={classes.link}>
               <ListItem button>
                  <ListItemIcon>
                     <AssignmentTurnedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="Templates" />
               </ListItem>
            </Link>
         </List>
         <Divider />
         <List>
            <Link to="/board/1" className={classes.link}>
               <ListItem button>
                  <ListItemIcon>
                     <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Board 1" />
               </ListItem>
            </Link>
            <Link to="/board/2" className={classes.link}>
               <ListItem button>
                  <ListItemIcon>
                     <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Board 2" />
               </ListItem>
            </Link>
            <Link to="/board/3" className={classes.link}>
               <ListItem button>
                  <ListItemIcon>
                     <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Board 3" />
               </ListItem>
            </Link>
            <ListItem button>
               <ListItemIcon>
                  <AddIcon />
               </ListItemIcon>
               <ListItemText primary="Create new board" />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button>
               <ListItemIcon>
                  <SettingsIcon />
               </ListItemIcon>
               <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
               <ListItemIcon>
                  <ExitToAppIcon />
               </ListItemIcon>
               <ListItemText primary="Logout" />
            </ListItem>
         </List>
      </SideDrawer>
   );
}

export default Drawer