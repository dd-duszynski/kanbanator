import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import * as actions from '../../store/actions'

// next features:
// changeBoard
// changeList
// changePosition


const CardSettingsForm = ({ userBoards, card, handleIsCardModalActive }) => {
   const boardId = useParams().boardID
   const currentBoardTitle = userBoards.find(i => i.board_id == boardId)
   const classes = useStyles();
   const [title, setTitle] = useState(card.card_title)
   const [description, setDescription] = useState(card.card_description)
   const [labels, setLabels] = useState(card.card_labels)
   const [board, setBoard] = useState(currentBoardTitle.board_title)
   const [deleteBtnClicked, setDeleteBtnClicked] = useState(false)

   console.log(userBoards);
   const handleSetTitle = (e) => {
      setTitle(e.target.value);
   }
   const handleSetDescription = (e) => {
      setDescription(e.target.value);
   }
   const handleSetLabels = (e) => {
      setLabels(e.target.value);
   };
   const handleSetBoard = (e) => {
      setBoard(e.target.value);
   };

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
            // onClick={() => handleDeleteBtn(boardId)}
            >
               DELETE CARD
            </Button>

            <Button
               variant="outlined"
               onClick={() => setDeleteBtnClicked(false)}
            >
               Discard
            </Button>
         </Grid>
      </>
   )

   return (
      <Grid container
         direction="column"
         justify="flex-start"
         alignItems="flex-start"
         className={classes.CardSettingsForm}
      >
         {deleteBtnClicked ? deleteConfirmation : (
            <>
               <TextField
                  label="Card Title"
                  className={classes.textField}
                  value={title}
                  onChange={(e) => handleSetTitle(e)}
               />
               <TextField
                  label="Card description"
                  className={classes.textField}
                  value={description}
                  onChange={(e) => handleSetDescription(e)}
               />
               <FormControl className={classes.formControl}>
                  <InputLabel id="select-label">
                     Choose Labels
                  </InputLabel>
                  <Select
                     className={classes.select}
                     value={labels}
                     onChange={handleSetLabels}
                  >
                     <MenuItem value={'1'}>Label 1</MenuItem>
                     <MenuItem value={'2'}>Label 2</MenuItem>
                     <MenuItem value={'3'}>Label 3</MenuItem>
                     <MenuItem value={'4'}>Label 4</MenuItem>
                     <MenuItem value={'5'}>Label 5</MenuItem>
                  </Select>
               </FormControl>

               <FormControl className={classes.formControl}>
                  <InputLabel id="select-label">
                     Change Board
                  </InputLabel>
                  <Select
                     className={classes.select}
                     value={board}
                     onChange={handleSetBoard}
                  >
                     {
                        userBoards.map(b => (
                           <MenuItem value={b.board_title} key={b.board_id}>
                              {b.board_title}
                           </MenuItem>
                        ))
                     }
                  </Select>
               </FormControl>

               <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
               >
                  <Button variant="contained" color="primary"
                  // onClick={handleSaveBtn}
                  >
                     Save Changes
                  </Button>
                  <Button
                     variant="outlined"
                     onClick={handleIsCardModalActive}
                  >
                     Discard
                  </Button>
               </Grid>
               <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={() => setDeleteBtnClicked(true)}
                  className={classes.btnContainer}
               >
                  Delete Board
               </Button>
            </>
         )}

      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   CardSettingsForm: {
      width: '260px'
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
   },
   formControl: {
      width: '100%',
      marginBottom: '18px'
   }
}
));

const mapStateToProps = (state) => {
   return {
      userBoards: state.boards.userBoards
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteBoard: (boardId) => dispatch(actions.deleteBoard(boardId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSettingsForm)