import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
const useStyles = makeStyles((theme) => ({
   speedDial: {
      position: 'fixed',
      bottom: '20px',
      left: 'calc(100vw - 100px)',
      //  bottom: theme.spacing(2),
      //  right: theme.spacing(2),
   },
}));

const actions = [
   { icon: <AssignmentIcon />, name: 'New Board' },
   { icon: <AssignmentTurnedInIcon />, name: 'New Board from Templates' },
   { icon: <AddToPhotosIcon />, name: 'New Card' },
];

export default function OpenIconSpeedDial() {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
   const [hidden, setHidden] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      < SpeedDial
         ariaLabel="SpeedDial openIcon example"
         className={classes.speedDial}
         hidden={hidden}
         icon={< SpeedDialIcon openIcon={< EditIcon />} />}
         onClose={handleClose}
         onOpen={handleOpen}
         open={open}
      >
         {
            actions.map((action) => (
               <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
               />
            ))
         }
      </SpeedDial >
   );
}
