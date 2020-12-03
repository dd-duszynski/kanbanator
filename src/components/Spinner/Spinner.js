import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
   Spinner: {
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   }
}))

const Spinner = () => {
   const classes = useStyles();
   return (
      <div className={classes.Spinner}>
         <CircularProgress />
      </div>
   )
}

export default Spinner
