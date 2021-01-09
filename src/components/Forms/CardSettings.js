import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
   // gridContainer: {
   //    backgroundColor: theme.palette.background.paper,
   //    boxShadow: theme.shadows[5],
   //    padding: theme.spacing(4, 5, 5, 5),
   //    width: 'auto'
   // }
}
));

const TransitionModal = ({ card }) => {
   const classes = useStyles();
   return (
      <Grid container
         direction="column"
         justify="flex-start"
         alignItems="flex-start"
      // className={classes.gridContainer}
      >
         <TextField id="standard-basic" label="Board Title" className={classes.textField} value={card.card_title} />
         <TextField id="standard-basic" label="Board Title" className={classes.textField} value={card.card_description} />
         <FormControl className={classes.formControl}>
            <InputLabel id="select-label">
               Choose Labels
            </InputLabel>
            <Select
               className={classes.select}
               labelId="select-label"
               id="select"
               value={"Label 1"}
            // onChange={handlePrivacy}
            >
               <MenuItem value={'Label 1'}>Label 1</MenuItem>
               <MenuItem value={'Label 2'}>Label 2</MenuItem>
               <MenuItem value={'Label 3'}>Label 3</MenuItem>
               <MenuItem value={'Label 4'}>Label 4</MenuItem>
               <MenuItem value={'Label 5'}>Label 5</MenuItem>
            </Select>
         </FormControl>
         <FormControl className={classes.formControl}>
            <InputLabel id="select-board">
               Change Board
            </InputLabel>
            <Select
               className={classes.select}
               labelId="select-board"
               id="select"
               value={"Board 1"}
            // onChange={handlePrivacy}
            >
               <MenuItem value={'Board 1'}>Board 1</MenuItem>
               <MenuItem value={'Board 2'}>Board 2</MenuItem>
               <MenuItem value={'Board 3'}>Board 3</MenuItem>
               <MenuItem value={'Board 4'}>Board 4</MenuItem>
            </Select>
         </FormControl>
         <FormControl className={classes.formControl}>
            <InputLabel id="select-list">
               Change List
                  </InputLabel>
            <Select
               className={classes.select}
               labelId="select-list"
               id="select"
               value={"List 1"}
            // onChange={handlePrivacy}
            >
               <MenuItem value={'List 1'}>List 1</MenuItem>
               <MenuItem value={'List 2'}>List 2</MenuItem>
               <MenuItem value={'List 3'}>List 3</MenuItem>
               <MenuItem value={'List 4'}>List 4</MenuItem>
            </Select>
         </FormControl>
      </Grid>
   )

}

export default TransitionModal