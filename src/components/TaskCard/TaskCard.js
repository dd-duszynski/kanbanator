import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Labels from './Labels'

const useStyles = makeStyles({
   listItem: {
      width: '100%',
   },
   card: {
      boxSizing: 'border-box',
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

const TaskCard = ({ card, handleCardChoosen, handleIsModalOpen }) => {
   const classes = useStyles();
   const { card_title, card_description, card_labels } = card

   const clickHandler = () => {
      handleIsModalOpen()
      handleCardChoosen(card)
   }

   return (
      <ListItem
         className={classes.listItem}
         onClick={clickHandler}
      >
         <Card className={classes.card}>
            {card_labels !== 0 ? (
               <Labels  card_labels={card_labels}/>
            ) : null}
            <CardContent className={classes.cardContent}>
               <Typography
                  variant="body1"
                  className={classes.title}
               >
                  {card_title ? card_title : "Default title"}
               </Typography>
               {card_description && (
                  <Typography
                     className={classes.description}
                     variant="body2"
                  >
                     {card_description ? card_description : "Description"}
                  </Typography>
               )}
            </CardContent>
         </Card>
      </ListItem>
   );
}

export default TaskCard;