import React from 'react'
import styles from './Main.module.scss';
import Navigation from '../Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SpeedDial from '../SpeedDial/SpeedDial';

const useStyles = makeStyles((theme) => ({
   content: {
      flexGrow: 1,
      paddingTop: '80px',
      paddingLeft: '50px',
      paddingRight: '50px',
   },
   fixer:{
      position: 'fixed',
      width: '56px',
      height: '380px',
      bottom: '0',
      right: '0'
   }

}));

const Main = ({ children }) => {
   const classes = useStyles();
   return (
      <div className={styles.Main}>
         <Navigation />
         <Container maxWidth="false" className={classes.content}>
            {children}
         </Container>
         {/* <div className={classes.fixer}> */}
            <SpeedDial />

         {/* </div> */}
      </div>
   );
}

export default Main;
