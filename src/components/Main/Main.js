import React from 'react'
import styles from './Main.module.scss';
import Navigation from '../Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
   content: {
      flexGrow: 1,
      paddingTop: '70px'
   },
   
}));

const Main = ({ children }) => {
   const classes = useStyles();
   return (
      <div className={styles.Main}>
         <Navigation />
         <Container maxWidth="false" className={classes.content}>
            {children}
         </Container>
      </div>
   );
}

export default Main;
