import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
   box: {
      display: 'flex'
   },
   addBtn: {
      width: '80%',
   },
   closeBtn: {
      width: '20%',
      color: 'light-red'
   },
}))

const EditableBtn = ({ text, onClick }) => {
   const classes = useStyles();
   return (
      <form className={classes.form} noValidate autoComplete="off">
         <TextField
            className={classes.textField}
            label="Enter a title for this card..."
            variant="outlined"
            size="small"
         />
         <Box className={classes.box}>
            <Button
               startIcon={<AddIcon />}
               className={classes.addBtn}
               color="primary"
               variant="contained"
               >
               {text}
            </Button>
            <Button
               startIcon={<CloseIcon />}
               className={classes.closeBtn}
               onClick={onClick}
            >
               {/* Close */}
            </Button>
         </Box>
      </form>
   )
}

export default EditableBtn
