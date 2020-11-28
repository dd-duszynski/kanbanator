import React, { useState } from 'react'
import Drawer from '../Drawer/Drawer';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Modal from '../../components/Modal/Modal';
import NewBoardForm from '../../components/Forms/NewBoardForm';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      // backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   hide: {
      display: 'none',
   },
   toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
   //---------------------------------------------------------------
   grow: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
         display: 'block',
      },
   },
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(4),
         width: 'auto',
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
   sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
         display: 'flex',
      },
   },
   sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
         display: 'none',
      },
   },

}));

const Navigation = () => {
   const classes = useStyles();
   const [isOpen, setIsOpen] = useState(true);
   const [isModalOpen, setModalOpen] = useState(false)
   // const menuId = 'primary-search-account-menu';

   const handleIsModalOpen = () => {
      console.log(isModalOpen);
      setModalOpen(!isModalOpen)
   }

   const handleDrawerOpen = () => {
      setIsOpen(true);
   };

   const handleDrawerClose = () => {
      setIsOpen(false);
   };
   return (
      <Box>
         <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
               [classes.appBarShift]: isOpen,
            })}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                     [classes.hide]: isOpen,
                  })}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" noWrap>
                  Kanbanator
               </Typography>
               <div className={classes.search}>
                  <div className={classes.searchIcon}>
                     <SearchIcon />
                  </div>
                  <InputBase
                     placeholder="Search…"
                     classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                     }}
                     inputProps={{ 'aria-label': 'search' }}
                  />
               </div>
               <div className={classes.grow} />
               <div className={classes.sectionDesktop}>
                  <IconButton aria-label="show 1 new mails" color="inherit">
                     <Badge badgeContent={1} color="secondary">
                        <MailIcon />
                     </Badge>
                  </IconButton>
                  <IconButton aria-label="show 5 new notifications" color="inherit">
                     <Badge badgeContent={5} color="secondary">
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     edge="end"
                     aria-label="account of current user"
                     // aria-controls={menuId}
                     aria-haspopup="true"
                     color="inherit"
                  >
                     <AccountCircle />
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
         <Drawer
            handleDrawerClose={handleDrawerClose}
            isDrawerOpen={isOpen}
            handleIsModalOpen={handleIsModalOpen}
         />
         <Modal
            isModalOpen={isModalOpen}
            handleIsModalOpen={handleIsModalOpen}
         >
            <NewBoardForm
               handleIsModalOpen={handleIsModalOpen}
            />

         </Modal>
      </Box>
   )
}

export default Navigation

