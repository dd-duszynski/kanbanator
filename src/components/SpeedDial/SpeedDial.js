import React from 'react';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

const useStyles = makeStyles((theme) => ({
   speedDial: {
      position: 'fixed',
      bottom: '25px',
      left: 'calc(100vw - 80px)',
   },
}));

const actions = [
   { icon: <AssignmentIcon />, name: 'New Board' },
   { icon: <AssignmentTurnedInIcon />, name: 'New Board from Templates' },
   { icon: <AddToPhotosIcon />, name: 'New Card' },
];

const SpeedDialComponent = (props) => {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const render = (
      < SpeedDial
         ariaLabel="SpeedDial openIcon example"
         className={classes.speedDial}
         icon={< SpeedDialIcon openIcon={< EditIcon />} />}
         onClose={handleClose}
         onOpen={handleOpen}
         open={open}
      >
         {actions.map((action) => (
            <SpeedDialAction
               key={action.name}
               icon={action.icon}
               tooltipTitle={action.name}
               onClick={handleClose}
            />
         ))}
      </SpeedDial >
   )
   return (
      props.token ? render : null
   );
}

const mapStateToProps = (state) => {
   return {
      token: state.auth.token !== null,
   };
};

export default connect(mapStateToProps, null)(SpeedDialComponent);

