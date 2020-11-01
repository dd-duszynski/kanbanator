import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import kanbanA from '../../assets/kanbanA.svg'
import Main from '../../components/Main/Main';
import Paper from '@material-ui/core/Paper';
import BoardCard from '../../components/BoardCard/BoardCard';

const useStyles = makeStyles((theme) => ({
   img: {
      height: '270px',
      margin:'0 auto',
      width: '100%',
      // position: 'absolute',
      // top: '65px',
      // right: '10px',
      opacity: '0.75',
   },
   paragraph: {
      maxWidth: '80ch',

   }
}))

const Home = () => {
   const classes = useStyles();
   return (
      <Main>
         <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
         >
            <Grid item container
               direction="row"
               alignItems="center"
               lg={12}
               md={12}
               spacing={2}
            >
               <Grid item lg={6}>
                  <Typography variant="body1" display='inline' >
                     Visualize your work with Kanban.
                     The Kanban board gives you an excellent overview of your current work situation.
                     Visualizing work in a team environment simplifies communication and leads to improved productivity.
                  </Typography>
               </Grid> 
               <Grid item lg={6}>
                  <img src={kanbanA} className={classes.img} alt="kanban illustration" />
               </Grid>
            </Grid>

            <Grid item>
               <Typography variant="h6" component="h1">
                  Starred Boards
               </Typography>
            </Grid>

            <Grid
               item container
               direction="row"
               justify="flex-start"
               alignItems="flex-start"
            >
               <BoardCard />
               <BoardCard />
               <BoardCard />
               <BoardCard />
               <BoardCard />
            </Grid>


         </Grid>
      </Main>
   )
}

export default Home
