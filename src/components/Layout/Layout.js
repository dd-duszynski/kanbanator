import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from '../Navigation/Navigation';
import SpeedDial from '../SpeedDial/SpeedDial';
import * as actions from '../../store/actions/auth';

const useStyles = makeStyles((theme) => {
   // console.log("theme",theme)
   return ({
      '@global': {
         '*::-webkit-scrollbar': {
            width: '8px',
            height: '12px'
         },
         '*::-webkit-scrollbar-track': {
            background: '#ddd'
         },
         '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#444',
            outline: 'none',
         },
         '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#333',
         },
      },
      Layout: {
         display: 'flex',
         height: '100%',
         maxWidth: '100%',
         position: 'relative',
      },
      main: {
         paddingTop: '64px',
         height: '100%',
         width: '100%',
         maxWidth: '100%',
         position: 'relative',
         overflow: 'hidden',
      }
   })
});

const Layout = ({ children, authCheck }) => {
   const classes = useStyles();

   useEffect(() => {
      authCheck();
   }, [authCheck]);

   return (
      <Box className={classes.Layout}>
         <CssBaseline />
         <Navigation />
         <Box className={classes.main} component="main">
            {children}
         </Box>
         <SpeedDial />
      </Box >
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      authCheck: () => dispatch(actions.authCheck())
   };
};

export default connect(null, mapDispatchToProps)(Layout);
