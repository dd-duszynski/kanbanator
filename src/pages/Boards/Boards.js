import React from 'react'
import BoardCard from '../../components/BoardCard/BoardCard'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import kanbanA from '../../assets/kanbanA.svg'
import Main from '../../components/Main/Main'
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
      <Main>
         <Typography variant="h6" component="h1">
            Boards
         </Typography>

      </Main>
   )
}

export default Home
