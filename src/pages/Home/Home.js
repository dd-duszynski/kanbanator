import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import kanbanA from '../../assets/kanbanA.svg'
import kanbanB from '../../assets/kanbanB.svg'
import kanbanC from '../../assets/kanbanC.svg'
import Layout from '../../components/Layout/Layout';
const useStyles = makeStyles((theme) => ({
   root: {
      padding: '10px 0',
   },
   img: {
      height: '280px',
      margin: '0 auto',
      width: '100%',
      opacity: '0.75',
   },
   paragraph: {
      maxWidth: '80ch',

   }
}))

const Home = () => {
   const classes = useStyles();
   return (
      <Layout>

         <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            {/* First section --------------------------------------------------*/}
            <Grid item container
               direction="row"
               alignItems="center"
               lg={12}
               md={12}
            >
               <Grid item lg={6}>
                  <Typography variant="h5" >
                     Visualize your work with Kanban.
                  </Typography>
                  <Typography variant="body1" display='inline' >
                     The Kanban board gives you an excellent overview of your current work situation.
                     Visualizing work in a team environment simplifies communication and leads to improved productivity.
                  </Typography>
               </Grid>
               <Grid item lg={6}>
                  <img src={kanbanA} className={classes.img} alt="kanban illustration" />
               </Grid>
            </Grid>
            {/* Second section --------------------------------------------------*/}
            <Grid item container
               direction="row"
               alignItems="center"
               lg={12}
               md={12}
            >
               <Grid item lg={6}>
                  <img src={kanbanC} className={classes.img} alt="kanban illustration" />
               </Grid>
               <Grid item lg={6}>
                  <Typography variant="h5" >
                     Stop starting. Start finishing.
                  </Typography>
                  <Typography variant="body1" display='inline' >
                     Limit your work-in-progress and get more done.
                     Get a better flow on your Kanban board by focusing on completing tasks instead of starting new tasks.
                  </Typography>
               </Grid>

            </Grid>
            {/* Third section --------------------------------------------------*/}
            <Grid item container
               direction="row"
               alignItems="center"
               lg={12}
               md={12}
            >
               <Grid item lg={6}>
                  <Typography variant="h5" >
                     Time tracking
                  </Typography>
                  <Typography variant="body1" display='inline' >
                     Track the time that you spend on your tasks. Use the Pomodoro technique timer or a simple stopwatch timer. Alternatively, you can log your time manually.
                  </Typography>
               </Grid>
               <Grid item lg={6}>
                  <img src={kanbanB} className={classes.img} alt="kanban illustration" />
               </Grid>
            </Grid>

         </Grid>
      </Layout>
   )
}

export default Home
