import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
import AddIcon from '@material-ui/icons/Add';
import * as actions from '../../store/actions'
import Spinner from '../../components/Spinner/Spinner'
import EditableBtn from '../../components/EditableBtn/EditableBtn'
const useStyles = makeStyles((theme) => ({
   root: {
      height: 'calc(100vh - 64px)',

      overflowX: 'auto',
      padding: '20px 20px 0',
      position: 'relative'
   },
   backgroundImage: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'calc(100% - 12px)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: 0.2
   },
   titleContainer: {
      marginBottom: '12px',
      position: 'fixed',
      zIndex: '3'
   },
   listsContainer: {
      zIndex: 2,
      flexGrow: 1,
      paddingTop: '50px',
   },
   title: {
      padding: '2px 20px',
      backgroundColor: '#424242',
      borderRadius: '4px',
      marginRight: '12px'
   },
   addList: {
      minWidth: '260px',
      // padding: '0 10px',
      height: '45px',
   }
}))

const Board = ({ getSingleBoard, singleBoard, loadingSingleBoard }) => {
   const boardId = useParams().boardID
   const classes = useStyles();
   const [addListActive, setAddListActive] = useState(false)
   const [refresh, setRefresh] = useState(0)

   let cards, lists
   if (singleBoard) {
      lists = singleBoard.lists
      cards = singleBoard.cards
   }

   useEffect(() => {
      getSingleBoard(boardId)
   }, [getSingleBoard, boardId, refresh]);

   console.log('[LISTS]', lists);
   console.log('[CARDS]', cards);

   return (
      <Layout>
         {loadingSingleBoard === false ? (
            <Grid container direction="column"
               className={classes.root}
            >
               <Grid
                  item
                  className={classes.backgroundImage}
                  style={{ backgroundImage: `url(${lists[0].board_image_url})` }}
               />
               <Grid container className={classes.titleContainer}>
                  <Grid item className={[classes.title, classes.header1].join(' ')} >
                     <Typography variant="h6" component="h1">
                        {lists[0].board_title}
                     </Typography>
                  </Grid>
                  <Grid item className={[classes.title, classes.header2].join(' ')} >
                     <Typography variant="h6" component="h1">
                        Board
                     </Typography>
                  </Grid>
                  <Grid item className={classes.header3}>
                     <Button variant="contained" color="primary">
                        Create Board from Template
                     </Button>
                  </Grid>
               </Grid>
               <Grid
                  container
                  wrap="nowrap"
                  className={classes.listsContainer}
               >
                  {lists.map((list) => (
                     <List
                        key={list.list_id}
                        list={list}
                        cards={cards.filter(card => card.card_related_list === list.list_id)}
                        refresh={() => setRefresh(refresh + 1)}
                     />
                  ))}
                  <Grid item className={classes.addList} >
                     {
                        addListActive ? (
                           <EditableBtn
                              btnText="ADD ANOTHER LIST"
                              labelText="Enter a list title..."
                              onClick={() => setAddListActive(false)}
                           />
                        ) : (
                              <Button
                                 variant="contained"
                                 startIcon={<AddIcon />}
                                 onClick={() => setAddListActive(true)}
                              >
                                 Add another List
                              </Button>
                           )
                     }
                  </Grid>
               </Grid>
            </Grid>
         ) : <Spinner />}
      </Layout>
   )
}

const mapStateToProps = (state) => {
   console.log(state);
   return {
      loadingSingleBoard: state.boards.loadingSingleBoard,
      singleBoard: state.boards.singleBoard
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getSingleBoard: (boardId) => dispatch(actions.getSingleBoard(boardId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)