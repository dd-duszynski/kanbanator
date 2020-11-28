import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
   listItem: {
      '&:hover': {
         cursor: 'pointer',
      }
   },
   btn: {
      justifyContent: 'flex-start',
      width: '100%',
   }
}))

const ListFooter = ({ text }) => {
   const classes = useStyles();
   return (
      <ListItem className={classes.listItem}>
         <ListItemText >
            <Button
               startIcon={<AddIcon />}
               className={classes.btn}
            >
               {text}
            </Button>
         </ListItemText>
      </ListItem>
   )
}

export default ListFooter
