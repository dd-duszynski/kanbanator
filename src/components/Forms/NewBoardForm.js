import React from 'react';
import LinkUI from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '400px',
   },
   textField: {
      width: '80%',
      marginBottom: '10px'
   },
   formControl: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      marginBottom: '30px'
   },
   select: {
      width: '100%',
   },
   box: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
   },
   button: {
      marginRight: '6px'
   },
   templateButton: {
      textDecoration: 'none',
      '&:hover': {
         textDecoration: 'none',
      }
   }
}));

const TransitionModal = ({ handleIsModalOpen }) => {
   const classes = useStyles();
   const [privacy, setPrivacy] = React.useState('');

   const handlePrivacy = (event) => {
      setPrivacy(event.target.value);
   };

   return (
      <Box className={classes.root}>
         <TextField id="standard-basic" label="Board Title" className={classes.textField} />
         <FormControl className={classes.formControl}>
            <InputLabel id="privacy-select-label">
               Privacy
            </InputLabel>
            <Select
               className={classes.select}
               labelId="privacy-select-label"
               id="demo-simple-select"
               value={privacy}
               onChange={handlePrivacy}
            >
               <MenuItem value={'Private'}>Private</MenuItem>
               <MenuItem value={'Team'}>Team</MenuItem>
               <MenuItem value={'Public'}>Public</MenuItem>
            </Select>
         </FormControl>
         <Box className={classes.box}>
            <Button className={classes.button} variant="contained" color="primary" onClick={handleIsModalOpen}>
               Create new board
            </Button>
            <LinkUI href="/templates" onClick={handleIsModalOpen} className={classes.templateButton}>
               <Button color="primary" >
                  Create from template
               </Button>
            </LinkUI>
         </Box>
      </Box>
   );
}

export default TransitionModal