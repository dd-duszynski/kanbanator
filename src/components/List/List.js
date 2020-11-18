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
      borderRadius: '5px'
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

export default function AlignItemsList({ children }) {
   const classes = useStyles();

   return (
      <List className={classes.root}>
         <Paper className={classes.paper}>
            < Typography variant="h6" component="h1">
               Lista 1
            </Typography>
         </Paper>
         <ListItem alignItems="flex-start">
            <TaskCard title="Task 1" description="Some default description." />
         </ListItem>
         <ListItem alignItems="flex-start">
            <TaskCard title="Task 2" description="Some default description." />
         </ListItem>
         <ListItem alignItems="flex-start">
            <TaskCard title="Task 3" description="Some default description." />
         </ListItem>
         <ListItem alignItems="flex-start">
            <TaskCard title="Task 4" description="Some default description." />
         </ListItem>
      </List>
   );
}
