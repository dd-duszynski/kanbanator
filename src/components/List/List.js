import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import TaskCard from '../TaskCard/TaskCard';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      margin: '0 5px',
      borderRadius: '5px',
   },
   paper: {
      width: '260px',
      padding: '5px',
      margin: '0 auto',
      backgroundColor: '#efefef',
      '&:hover': {
         cursor: 'pointer'
      }
   }
}));

const BoardList = ({ data, children, cards }) => {
   const classes = useStyles();
   console.log("Cards", cards);
   return (
      <List className={classes.root}>
         <Paper className={classes.paper}>
            < Typography variant="h6" component="h1">
               {data.list_title}
            </Typography>
         </Paper>
         {cards.filter(i => i.list_id === data.id).map((item) => {
            return (
               <ListItem alignItems="flex-start">
                  <TaskCard title={item.card_title} description={item.card_description} />
               </ListItem>
            )
         })}
      </List>
   );
}

export default BoardList;