import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
   form: {
      width: '100%',
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

const EditableBtn = ({ refresh, btnText, labelText, onClick, author, relatedBoard, relatedList }) => {
   const [title, setTitle] = useState("")
   console.log(relatedBoard, relatedList);

   const setTitleHandler = (e) => {
      setTitle(e.target.value)
   }
   const sendCard = () => {
      const reqBody = {
         title: title,
         description: `desc for ${title}`,
         author: author,
         relatedBoard: relatedBoard,
         relatedList: relatedList
      }
      console.log(reqBody);
      fetch('http://localhost:5000/api/cards/', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(reqBody),
      })
         .then(response => response.json())
         .then(data => {
            console.log('Success:', data);
            refresh()
         })
         .catch((error) => {
            console.error('Error:', error);
         });
   }
   const classes = useStyles();
   return (
      <form className={classes.form} noValidate autoComplete="off">
         <TextField
            className={classes.textField}
            label={labelText}
            variant="outlined"
            size="small"
            onChange={(e) => setTitleHandler(e)}
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
                  onClick={(e) => sendCard(e)}
               >
                  {btnText}
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

export default EditableBtn
