import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   listItem: {
      '&:hover': {
         cursor: 'pointer',
      }
   },
   listItemIcon: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '30px'
   },
   text: {
      fontSize: '15px'
   }
}))

const ListHeader = ({ text }) => {
   const classes = useStyles();
   return (
      <ListItem className={classes.listItem}>
         <ListItemText>
            <Typography className={classes.text}>
               {text}
            </Typography>
         </ListItemText>
         <ListItemIcon className={classes.listItemIcon}>
            <MoreHorizIcon />
         </ListItemIcon>
      </ListItem>
   )
}

export default ListHeader
