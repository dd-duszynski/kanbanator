import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCardBtn from '../CTA/AddCardBtn'

const useStyles = makeStyles(() => ({
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

const ListFooter = ({ userId, text, refresh, relatedBoard, listID }) => {
   const classes = useStyles();
   const [isEdited, setIsEdited] = useState(false);
   const userIdConvertedToNr = Number(userId)

   const Btn = (
      <ListItemText onClick={() => { setIsEdited(true) }}>
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
            <AddCardBtn
               onClick={() => setIsEdited(false)}
               refresh={refresh}
               btnText="ADD ANOTHER CARD"
               labelText="Enter a title for this card..."
               author={userIdConvertedToNr}
               relatedBoard={relatedBoard}
               relatedList={listID}
            />
         ) : Btn}
      </ListItem>
   )
}

const mapStateToProps = state => {
   return {
      userId: state.auth.userId
   }
}

export default connect(mapStateToProps)(ListFooter)
