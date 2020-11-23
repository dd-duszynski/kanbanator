import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
const useStyles = makeStyles({
   root: {
      width: '240px',
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
      <ListItem className={classes.listItem}>
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
      </ListItem>
   );
}

export default TaskCard;