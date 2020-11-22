import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   root: {
      width: '240px',
      backgroundColor: '#555',
      color: 'white',
      '&:hover': {
         cursor: 'pointer'
      }
   },
   title: {
      fontSize: '15px'
   },
   description: {
      fontSize: '14px'
   }
});

const TaskCard = ({ title, description }) => {
   const classes = useStyles();
   return (
      <Card className={classes.root}>
         <CardContent>
            <Typography
               variant="body1"
               className={classes.title}
            >
               {title ? title : "Title"}
            </Typography>
            <Typography
               className={classes.description}
               variant="body2"
            >
               {description ? description : "Description"}
            </Typography>
         </CardContent>
      </Card>
   );
}

export default TaskCard;