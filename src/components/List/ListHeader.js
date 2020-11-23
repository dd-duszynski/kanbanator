import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const useStyles = makeStyles((theme) => ({
   listItem: {
      '&:hover': {
         cursor: 'pointer',
      }
   },
   listItemIcon:{
      display: 'flex',
      justifyContent: 'flex-end',
      width: '30px'
   }
}))

const ListHeader = ({ text }) => {
   const classes = useStyles();
   return (
      <ListItem className={classes.listItem}>
         <ListItemText>
            {text}
         </ListItemText>
         <ListItemIcon className={classes.listItemIcon}>
            <MoreHorizIcon />
         </ListItemIcon>
      </ListItem>
   )
}

export default ListHeader
