import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../../components/BoardCard/BoardCard';
import Layout from '../../components/Layout/Layout';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIcon from '@material-ui/icons/Assignment';
import * as actions from '../../store/actions/boards'
import Spinner from '../../components/Spinner/Spinner'

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

const BoardsList = ({ error, loading, userBoards, userId, getBoards }) => {
   const classes = useStyles();

   console.log('error', error);
   console.log('loading', loading);
   console.log('userBoards', userBoards);
   console.log('userId', userId);

   useEffect(() => {
      getBoards(userId)
   }, [userId])

   return (
      <Layout>
         {userBoards ? (
            <Grid
               container
               direction="column"
               justify="center"
               alignItems="flex-start"
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
                  {userBoards.filter(item => item.is_favorite).map(item => {
                     return (
                        <BoardCard
                           title={item.title}
                           description={item.description}
                           image={item.image_url}
                           starred={item.is_favorite === 1}

                        />
                     )
                  })}
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
                  {userBoards.map(item => {
                     return (
                        <BoardCard
                           title={item.title}
                           description={item.description}
                           image={item.image_url}
                           starred={item.is_favorite === 1}

                        />
                     )
                  })}
               </Grid>
            </Grid>
         ) : <Spinner />}
      </Layout>
   )
}

const mapStateToProps = (state) => {
   return {
      error: state.boards.error,
      loading: state.boards.loading,
      userBoards: state.boards.userBoards,
      userId: state.auth.userId
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getBoards: (userId) => dispatch(actions.getBoards(userId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList)
