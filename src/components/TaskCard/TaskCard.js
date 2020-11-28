import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
   listItem: {
      width: '100%'
   },
   card: {
      width: '100%',
      backgroundColor: '#555',
      '&:hover': {
         cursor: 'pointer'
      }
   },
   cardContent: {
      width: '100%',
      padding: 10,
      paddingBottom: 0,
      '&:last-child': {
         paddingBottom: 10
      }
   },
   title: {
      fontSize: '15px'
   },
   description: {
      fontSize: '13px'
   }
});

const TaskCard = ({ title, description, addClass }) => {
   const classes = useStyles();
   return (
      <ListItem className={[classes.listItem, addClass].join(' ')}>
         <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
               <Typography
                  variant="body1"
                  className={classes.title}
               >
                  {title ? title : "Default title"}
               </Typography>
               {description && (
                  <Typography
                     className={classes.description}
                     variant="body2"
                  >
                     {description ? description : "Description"}
                  </Typography>
               )}
            </CardContent>
         </Card>
      </ListItem>
   );
}

export default TaskCard;