import React from 'react'
import BoardCard from '../BoardCard/BoardCard'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
   },
}))

const Home = () => {
   const classes = useStyles();
   return (
      // <Container className={classes.container}>
         <Grid container spacing={3}>
            <Grid item >
               <BoardCard />
            </Grid>
            <Grid item >
               <BoardCard />
            </Grid>
         </Grid>
      // </Container>
   )
}

export default Home
