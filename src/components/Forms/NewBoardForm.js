import React, { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../store/actions';

const useStyles = makeStyles(() => ({
   NewBoardForm: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '400px',
   },
   textField: {
      width: '80%',
      marginBottom: '20px'
   }
}));

const NewBoardForm = ({ createBoard, handleIsModalOpen, userId }) => {
   const classes = useStyles();
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const image_url = "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
   const userIdConvertedToNr = Number(userId)

   console.log(title, description);

   const clickHandler = () => {
      createBoard(title, description, image_url, userIdConvertedToNr)
      handleIsModalOpen()
   }

   return (
      <Box className={classes.NewBoardForm}>
         <TextField
            label="Board Title"
            className={classes.textField}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <TextField
            label="Board Description"
            className={classes.textField}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
         >
            <Button variant="contained" color="primary" onClick={clickHandler}>
               Create new board
            </Button>
            <Button variant="outlined" href="/templates" onClick={handleIsModalOpen}>
               Start with a Template
            </Button>
         </Grid>
      </Box>
   );
}

const mapStateToProps = (state) => {
   return {
      loadingBoardCreation: state.boards.loadingBoardCreation,
      userId: state.auth.userId
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      createBoard: (title, description, image_url, author) => dispatch(actions.createBoard(title, description, image_url, author))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBoardForm)