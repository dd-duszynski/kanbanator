import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
   listItem: {
      '&:hover': {
         cursor: 'pointer',
      }
   },
   listItemIcon:{
      display: 'flex',
      justifyContent: 'flex-start',
      width: '24px'
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
            {text}
         </ListItemText>
      </ListItem>
   )
}

export default ListFooter
