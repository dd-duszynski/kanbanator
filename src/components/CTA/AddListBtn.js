import React, { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import * as actions from '../../store/actions'

const AddListBtn = ({ addList, refresh, deactivateBtn, relatedBoard }) => {
   const [title, setTitle] = useState("")

   const handleSetTitle = (e) => {
      setTitle(e.target.value)
   }

   const handleAddList = () => {
      const reqBody = {
         title,
         relatedBoard
      }
      addList(reqBody)
      refresh()
      deactivateBtn()
   }

   const classes = useStyles();
   return (
      <form className={classes.form} noValidate autoComplete="off">
         <TextField
            className={classes.textField}
            label="Enter a list title..."
            variant="outlined"
            size="small"
            onChange={(e) => handleSetTitle(e)}
            autoFocus
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
                  onClick={handleAddList}
               >
                  ADD ANOTHER LIST
               </Button>
            </Grid>
            <Grid item>
               <IconButton color="secondary" aria-label="close" onClick={deactivateBtn} size="small" className={classes.closeBtn}>
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
      addList: (dataObj) => dispatch(actions.addList(dataObj)),
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddListBtn)
