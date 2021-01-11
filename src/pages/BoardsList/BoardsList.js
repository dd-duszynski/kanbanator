import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../../components/BoardCard/BoardCard';
import Layout from '../../components/Layout/Layout';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIcon from '@material-ui/icons/Assignment';
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

const BoardsList = ({ boards }) => {
   const classes = useStyles();
   return (
      <Layout>
         {boards ? (
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
                  {boards.filter(item => item.board_is_favorite).map(item => (
                     <BoardCard
                        title={item.board_title}
                        description={item.board_description}
                        image={item.board_image_url}
                        starred={item.board_is_favorite === 1}
                        link={item.board_id}
                        type="board"
                     />
                  )
                  )}
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
                  {boards.map(item => {
                     return (
                        <BoardCard
                           title={item.board_title}
                           description={item.board_description}
                           image={item.board_image_url}
                           starred={item.board_is_favorite === 1}
                           link={item.board_id}
                           type="board"
                        />
                     )
                  }
                  )}
               </Grid>
            </Grid>
         ) : <Spinner />}
      </Layout>
   )
}

const mapStateToProps = (state) => {
   return {
      boards: state.auth.boards
   }
}

export default connect(mapStateToProps)(BoardsList)