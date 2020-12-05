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

const Layout = ({ children, isAuthenticated }) => {
   const classes = useStyles();
   console.log('[Layout] isAuthenticated', isAuthenticated);

   // useEffect(() => {
   //    onTryAutoSignup();
   // }, [onTryAutoSignup]);

   return (
      <Box className={classes.Layout}>
         <CssBaseline />
         <Navigation isAuth={isAuthenticated} />
         <Box className={classes.main} component="main">
            {children}
         </Box>
         {isAuthenticated ? <SpeedDial /> : null}
      </Box >
   );
}

const mapStateToProps = (state) => {
   console.log('[Layout]-State', state);
   return {
      isAuthenticated: state.auth.token !== null,
   };
};

// const mapDispatchToProps = (dispatch) => {
//    return {
//       onTryAutoSignup: () => dispatch(actions.authCheckState()),
//    };
// };

export default connect(mapStateToProps, null)(Layout)
