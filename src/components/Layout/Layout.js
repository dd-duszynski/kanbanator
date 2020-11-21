import React from 'react';
import Navigation from '../Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SpeedDial from '../SpeedDial/SpeedDial';


const useStyles = makeStyles((theme) => ({
   Layout: {
      backgroundColor: '#222',
      display: 'flex',
      height: '100%',
      maxWidth: '100%',
      color: '#eee',
      position: 'relative'
   },
   content: {
      paddingTop: '80px',
      minHeight: '100vh',
      width: '100%'
   }
}));

const Layout = ({ children }) => {
   const classes = useStyles();
   return (
      <Box className={classes.Layout}>
         <Navigation />
         <Box className={classes.content}>
            {children}
         </Box>
         <SpeedDial />
      </Box >
   );
}

export default Layout;
