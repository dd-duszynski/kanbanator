import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TaskCard from '../TaskCard/TaskCard';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100%',
   },
   list: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
      padding: 0,
      width: '300px',
      marginRight: '10px',
   },
   listItem: {
      // padding: '8px 16px 0'
   },


}));

const BoardList = ({ data, cards }) => {
   const classes = useStyles();
   return (
      <Grid item className={classes.root}>
         <List className={classes.list}>
            <ListHeader text={data.list_title} />
            {cards.filter(i => i.list_id === data.id).map((item) => (
               <TaskCard
                  title={item.card_title}
                  description={item.card_description}
               />
            ))}
            <ListFooter text="Add another card" />
         </List>
      </Grid>
   );
}

export default BoardList;