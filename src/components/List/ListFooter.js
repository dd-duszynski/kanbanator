import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
   listItem: {
      '&:hover': {
         cursor: 'pointer',
      }
   },
   listItemIcon: {
      display: 'flex',
      justifyContent: 'flex-start',
      minWidth: '30px'
   },
   text: {
      fontSize: '15px'
   }
}))

const ListFooter = ({ text }) => {
   const classes = useStyles();
   return (
      <ListItem className={classes.listItem}>
         <ListItemIcon className={classes.listItemIcon}>
            <AddIcon />
         </ListItemIcon>
         <ListItemText >
            <Typography className={classes.text}>
               {text}
            </Typography>
         </ListItemText>
      </ListItem>
   )
}

export default ListFooter
