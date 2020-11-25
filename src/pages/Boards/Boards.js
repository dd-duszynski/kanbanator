import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../../components/BoardCard/BoardCard';
import Layout from '../../components/Layout/Layout';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIcon from '@material-ui/icons/Assignment';
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      padding: '20px 20px 0',
   },
   boxWithIcon: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
   },
   icon: {
      marginRight: '10px',
      fontSize: '30px'
   },
}))

const Boards = () => {
   const classes = useStyles();
   return (
      <Layout>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="start"
            className={classes.root}
         >
            <Grid item className={classes.header}>
               <Box className={classes.boxWithIcon}>
                  <FavoriteIcon className={classes.icon} />
                  <Typography variant="h5" component="h1" >
                     Your favourites boards
               </Typography>
               </Box>
            </Grid>
            <Grid
               container
               direction="row"
               justify="flex-start"
               alignItems="flex-start"
            >
               <BoardCard
                  title="Board 1"
                  description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
                  image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
                  starred
               />
            </Grid>
            <Grid item className={classes.header}>
               <Box className={classes.boxWithIcon}>
                  <AssignmentIcon className={classes.icon} />
                  <Typography variant="h5" component="h1" >
                     Personal Boards
               </Typography>
               </Box>
            </Grid>
            <Grid
               container
               direction="row"
               justify="flex-start"
               alignItems="flex-start"
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
         </Grid>
      </Layout>
   )
}

export default Boards
