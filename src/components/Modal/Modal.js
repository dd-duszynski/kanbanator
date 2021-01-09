import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      padding: theme.spacing(4, 5, 5, 5),
      '&:focus': {
         outline: 'none'
      }
   }
}
));

const TransitionModal = ({ isModalOpen, handleIsModalOpen, children }) => {
   const classes = useStyles();

   return (
      <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 400,
         }}
         className={classes.modal}
         closeAfterTransition
         open={isModalOpen}
         onClose={handleIsModalOpen}
      >
         <Fade in={isModalOpen}>
            <Paper className={classes.paper}>
               {children}
            </Paper>
         </Fade>
      </Modal>
   );
}

export default TransitionModal