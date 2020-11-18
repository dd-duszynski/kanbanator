import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   root: {
      width: '250px',
      marginBottom: '8px'
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
});

export default function TaskCard({ title, description }) {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardContent>
            <Typography variant="h6" component="h5">
               {title}
            </Typography>
            <Typography variant="body2" component="p">
               {description}
            </Typography>
         </CardContent>
      </Card>
   );
}
