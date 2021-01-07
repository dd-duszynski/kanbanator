import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditableBtn from '../EditableBtn/EditableBtn'

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

const ListFooter = ({ text,  refresh}) => {
   const classes = useStyles();
   const [isEdited, setIsEdited] = useState(false);

   const Btn = (
      <ListItemText onClick={() => {setIsEdited(true)}}>
         <Button
            startIcon={<AddIcon />}
            className={classes.btn}
         >
            {text}
         </Button>
      </ListItemText>
   )

   return (
      <ListItem className={classes.listItem}>
         {isEdited ? (
            <EditableBtn
               onClick={() => setIsEdited(false)}
               onClick={refresh}
               btnText="ADD ANOTHER CARD"
               labelText="Enter a title for this card..."
            />
         ) : Btn}
      </ListItem>
   )
}

export default ListFooter
