import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   paper: {
      width: '250px',
      padding: '5px 20px',
      margin: '0 auto',
      backgroundColor: '#555',
      color: 'white',
      '&:hover': {
         cursor: 'pointer',
      }
   }
}))

const ListHeader = ({ text }) => {
   const classes = useStyles();
   return (
      <Paper className={classes.paper}>
         <Typography variant="subtitle1">
            {text}
         </Typography>
      </Paper>
   )
}

export default ListHeader
