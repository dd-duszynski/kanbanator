import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as actions from '../../store/actions'


const useStyles = makeStyles((theme) => ({
   gridContainer: {
      width: '320px'
   },
   textField: {
      width: '100%',
      marginBottom: '18px'
   },
   btnContainer: {
      marginTop: '10px'
   },
   header: {
      width: '100%',
      marginBottom: '8px'
   }
}
));

const BoardSettingsForm = ({ deleteBoard, handleIsSettingsModalActive, textContent, refresh }) => {
   const boardId = useParams().boardID
   const classes = useStyles();
   const [title, setTitle] = useState(textContent.board_title)
   const [description, setDescription] = useState(textContent.board_description)
   const [deleteClicked, setDeleteClicked] = useState(false)
   const [redirect, setRedirect] = useState(false)

   const handleSetTitle = (e) => {
      setTitle(e.target.value);
   }
   const handleSetDescription = (e) => {
      setDescription(e.target.value);
   }
   const handleDeleteBtn = (bid) => {
      deleteBoard(bid)
      setRedirect(true)

   }
   const handleSaveBtn = () => {
      fetch(`http://localhost:5000/api/boards/board/${textContent.board_id}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            title: title,
            description: description
         })
      })
         .then(
            handleIsSettingsModalActive()
         )
         .then(
            refresh()
         )
   }

   const deleteConfirmation = (
      <>
         <Typography variant="subtitle1" >
            Are you sure?
         </Typography >
         <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.btnContainer}
         >
            <Button
               variant="outlined"
               color="secondary"
               onClick={() => handleDeleteBtn(boardId)}
            >
               DELETE BOARD
            </Button>

            <Button
               variant="outlined"
               onClick={handleIsSettingsModalActive}
            >
               Discard
            </Button>
         </Grid>
      </>
   )

   return (
      <Grid container
         direction="column"
         justify="center"
         alignItems="center"
         className={classes.gridContainer}
      >
         {redirect ? <Redirect to="/boards" /> : null}
         {deleteClicked ? deleteConfirmation : (
            <>
               <Typography variant="h6" component="h1" display="block" className={classes.header}>
                  Settings
               </Typography>
               <TextField
                  label="Board title"
                  className={classes.textField}
                  value={title}
                  onChange={(e) => handleSetTitle(e)}
               />
               <TextField
                  className={classes.textField}
                  label="Board description"
                  multiline
                  rows={4}
                  defaultValue={description}
                  onChange={(e) => handleSetDescription(e)}
               />
               <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
               >
                  <Button variant="contained" color="primary" onClick={handleSaveBtn}>
                     Save Changes
                  </Button>
                  <Button variant="outlined" onClick={handleIsSettingsModalActive}>
                     Discard Changes
                  </Button>
               </Grid>
               <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={() => setDeleteClicked(true)}
                  className={classes.btnContainer}
               >
                  Delete Board
               </Button>
            </>
         )}
      </Grid>
   )
}


const mapDispatchToProps = (dispatch) => {
   return {
      deleteBoard: (boardId) => dispatch(actions.deleteBoard(boardId))
   }
}

export default connect(null, mapDispatchToProps)(BoardSettingsForm)