import React from 'react'
import styles from './Main.module.scss';
import Navigation from '../Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

const Main = ({children}) => {
   const classes = useStyles();
   return (
      <div className={styles.Main}>
         <Navigation />
         <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
         </main>
      </div>
   );
}

export default Main;
