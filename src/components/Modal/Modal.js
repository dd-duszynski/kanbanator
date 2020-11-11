import React from 'react';
import Link from '@material-ui/core/Link';
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

   },
   paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '380px',
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 5, 5, 5),
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
   box:{
      width: '100%',
      display: 'flex',
   },
   button:{
      marginRight:'6px'
   },
   templateButton:{
      textDecoration:'none'
   }
}));

const TransitionModal = ({ isModalOpen, handleIsModalOpen }) => {
   const classes = useStyles();
   const [privacy, setPrivacy] = React.useState('');

   const handlePrivacy = (event) => {
      setPrivacy(event.target.value);
   };

   return (
      <div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={isModalOpen}
            onClose={handleIsModalOpen}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={isModalOpen}>
               <div className={classes.paper}>
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
                     <Link to="/templates" onClick={handleIsModalOpen}>
                        <Button color="primary" className={classes.templateButton}>
                           Create from template
                        </Button>
                     </Link>
                  </Box>
               </div>
            </Fade>
         </Modal>
      </div>
   );
}

export default TransitionModal