import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Main from '../../components/Main/Main'
import BoardCard from '../../components/BoardCard/BoardCard';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      // keep right padding when drawer closed
      paddingRight: 24,
   },
}))

const Home = () => {
   const classes = useStyles();
   return (
      <Main>
         <Typography variant="h6" component="h1">
            Starred Boards
         </Typography>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Board 1"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
               starred
            />
         </Grid>
         <Typography variant="h6" component="h1">
            Boards
         </Typography>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Board 1"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
               starred
            />
            <BoardCard
               title="Board 2"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/3966531/pexels-photo-3966531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Board 3"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/3605420/pexels-photo-3605420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Board 4"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/5653011/pexels-photo-5653011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />

         </Grid>
      </Main>
   )
}

export default Home
