import React, { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import * as actions from '../../store/actions';

const AddCardBtn = ({ addCard, refresh, onClick, author, relatedBoard, relatedList }) => {
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")

   const handleSetTitle = (e) => {
      setTitle(e.target.value)
   }
   const handleSetDescription = (e) => {
      setDescription(e.target.value)
   }

   const handleAddCard = () => {
      const reqBody = {
         title,
         description,
         author,
         relatedBoard,
         relatedList
      }
      console.log(reqBody);
      addCard(reqBody)
      refresh()
   }

   const classes = useStyles();
   return (
      <form className={classes.form} noValidate autoComplete="off">
         <TextField
            className={classes.textField}
            label="Enter a title for this card..."
            variant="outlined"
            size="small"
            onChange={(e) => handleSetTitle(e)}
            autoFocus
         />
         <TextField
            className={classes.textField}
            label="Enter a description for this card..."
            variant="outlined"
            size="small"
            onChange={(e) => handleSetDescription(e)}
         />
         <Grid
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
         >
            <Grid item>
               <Button
                  startIcon={<AddIcon />}
                  className={classes.addBtn}
                  color="primary"
                  variant="contained"
                  onClick={handleAddCard}
               >
                  ADD ANOTHER CARD
               </Button>
            </Grid>
            <Grid item>
               <IconButton color="secondary" aria-label="close" onClick={onClick} size="small" className={classes.closeBtn}>
                  <CloseIcon />
               </IconButton>
            </Grid>
         </Grid>
      </form >
   )
}

const useStyles = makeStyles((theme) => ({
   form: {
      width: '100%',
      marginTop: '4px'
   },
   textField: {
      width: '100%',
      fontSize: '12px',
      marginBottom: '6px'
   },
   addBtn: {
      width: 'auto',
   },
   closeBtn: {
      marginLeft: '15px',
   },
}))

const mapStateToProps = state => {
   return {
      userId: state.auth.userId
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addCard: (dataObj) => dispatch(actions.addCard(dataObj)),
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCardBtn)
