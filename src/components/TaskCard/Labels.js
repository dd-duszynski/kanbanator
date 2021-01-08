import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => {
   // console.log(theme);
   return {
      label: {
         width: '100%',
         height: '4px',
      },
      label1: {
         backgroundColor: 'navy'
      },
      label2: {
         backgroundColor: 'greenyellow'
      },
      label3: {
         backgroundColor: 'coral'
      },
      label4: {
         backgroundColor: 'darkmagenta'
      },
      label5: {
         backgroundColor: 'violet'
      }
   }
});

const TaskCard = ({ card_labels }) => {
   const classes = useStyles();
   let css;
   switch (card_labels) {
      case 1:
         css = classes.label1
         break;
      case 2:
         css = classes.label2
         break;
      case 3:
         css = classes.label3
         break;
      case 4:
         css = classes.label4
         break;
      case 5:
         css = classes.label5
         break;
      default:
         css = classes.label5
   }
   return (
      <Box
         className={[classes.label, css].join(' ')}
      />
   );
}

export default TaskCard;