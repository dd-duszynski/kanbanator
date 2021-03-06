import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from '../Navigation/Navigation';
import SpeedDial from '../SpeedDial/SpeedDial';
import * as actions from '../../store/actions';

const useStyles = makeStyles((theme) => {
   // console.log("theme",theme)
   return ({
      '@global': {
         '*::-webkit-scrollbar': {
            width: '8px',
            height: '12px',
            borderRadius: '6px'

         },
         '*::-webkit-scrollbar-track': {
            background: '#424242',
            borderRadius: '6px'
         },
         '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#777',
            outline: 'none',
            borderRadius: '6px'
         },
         '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
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

const Layout = ({ getBoards, children, authCheck }) => {
   const classes = useStyles();

   useEffect(() => {
      const userId = localStorage.getItem('userId')
      const userIdConvertedToNr = Number(userId)
      getBoards(userIdConvertedToNr)
      authCheck();
   }, [getBoards, authCheck]);

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
      authCheck: () => dispatch(actions.authCheck()),
      getBoards: (id) => dispatch(actions.getBoards(id))
   };
};

export default connect(null, mapDispatchToProps)(Layout);
