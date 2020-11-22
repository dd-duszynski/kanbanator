import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import TaskCard from '../TaskCard/TaskCard';
import ListHeader from './ListHeader';

const useStyles = makeStyles((theme) => ({
   root: {
      marginRight: '10px',
   },
   list: {
      width: '100%',
      maxWidth: '36ch',
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: '#333',
      borderRadius: '5px',
   },
   listItem: {
      padding: '8px 16px 0'
   },


}));

const BoardList = ({ data, cards }) => {
   const classes = useStyles();
   return (
      <Grid item className={classes.root}>
         <List className={classes.list}>
            <ListHeader text={data.list_title} />
            {cards.filter(i => i.list_id === data.id).map((item) => (
               <ListItem className={classes.listItem}>
                  <TaskCard
                     title={item.card_title}
                     description={item.card_description}
                  />
               </ListItem>
            ))}
         </List>
      </Grid>
   );
}

export default BoardList;