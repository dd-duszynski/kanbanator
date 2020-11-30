import React from 'react';
import { NavLink } from 'react-router-dom'
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
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
   return ({
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
         color: '#eee',
         textDecoration: 'none'
      },
      linkActive: {
         color: theme.palette.primary.light,
      },
      icon: {
         color: '#eee'
      }
   })
});

const Drawer = ({ handleDrawerClose, isDrawerOpen, handleIsModalOpen, isAuth }) => {
   const classes = useStyles();
   const theme = useTheme();
   console.log('Drawer - isAuth', isAuth);

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
            <IconButton onClick={handleDrawerClose} className={classes.icon}>
               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
         </div>
         <List>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.linkActive}>
               <ListItem button>
                  <ListItemIcon className={classes.icon}>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
               </ListItem>
            </NavLink>
            {isAuth ? (
               <NavLink to="/boards" className={classes.link} activeClassName={classes.linkActive}>
                  <ListItem button>
                     <ListItemIcon className={classes.icon}>
                        <AssignmentIcon />
                     </ListItemIcon>
                     <ListItemText primary="Boards" />
                  </ListItem>
               </NavLink>) : null}
            <NavLink to="/templates" className={classes.link} activeClassName={classes.linkActive}>
               <ListItem button>
                  <ListItemIcon className={classes.icon}>
                     <AssignmentTurnedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="Templates" />
               </ListItem>
            </NavLink>
         </List>
         <Divider />
         {isAuth ? (
            <>
               <List>
                  <NavLink to="/board/1" className={classes.link} activeClassName={classes.linkActive}>
                     <ListItem button>
                        <ListItemIcon className={classes.icon}>
                           <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="Board 1" />
                     </ListItem>
                  </NavLink>
                  <NavLink to="/board/2" className={classes.link} activeClassName={classes.linkActive}>
                     <ListItem button>
                        <ListItemIcon className={classes.icon}>
                           <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="Board 2" />
                     </ListItem>
                  </NavLink>
                  <NavLink
                     to="/board/3"
                     className={classes.link}
                     activeClassName={classes.linkActive}
                  >
                     <ListItem button>
                        <ListItemIcon className={classes.icon}>
                           <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="Board 3" />
                     </ListItem>
                  </NavLink>
                  <NavLink
                     to="/board/4"
                     className={classes.link}
                     activeClassName={classes.linkActive}
                  >
                     <ListItem button>
                        <ListItemIcon className={classes.icon}>
                           <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="Board 4" />
                     </ListItem>
                  </NavLink>
                  <ListItem
                     button
                     onClick={handleIsModalOpen}
                  >
                     <ListItemIcon className={classes.icon}>
                        <AddIcon />
                     </ListItemIcon>
                     <ListItemText primary="Create new board" />
                  </ListItem>
               </List>
               <Divider />
            </>
         ) : null}
         <List>
            {isAuth ? (
               <>
                  <NavLink to="/settings" className={classes.link} activeClassName={classes.linkActive}>
                     <ListItem button>
                        <ListItemIcon>
                           <SettingsIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                     </ListItem>
                  </NavLink>
                  <NavLink to="/logout" className={classes.link} activeClassName={classes.linkActive}>
                     <ListItem button>
                        <ListItemIcon className={classes.icon}>
                           <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                     </ListItem>
                  </NavLink>
               </>
            ) :
               (
                  <>
                     <NavLink to="/login" className={classes.link} activeClassName={classes.linkActive}>
                        <ListItem button>
                           <ListItemIcon className={classes.icon}>
                              <ExitToAppIcon />
                           </ListItemIcon>
                           <ListItemText primary="Login" />
                        </ListItem>
                     </NavLink>
                     <NavLink to="/sign-up" className={classes.link} activeClassName={classes.linkActive}>
                        <ListItem button>
                           <ListItemIcon className={classes.icon}>
                              <AssignmentIndIcon />
                           </ListItemIcon>
                           <ListItemText primary="Sign Up" />
                        </ListItem>
                     </NavLink>
                  </>
               )}
         </List>
      </SideDrawer>
   );
}

export default Drawer