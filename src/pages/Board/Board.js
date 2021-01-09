import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Layout from '../../components/Layout/Layout';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner'
import AddList from '../../components/EditableBtn/AddList'
import Modal from '../../components/Modal/Modal'
import BoardSettings from '../../components/Forms/BoardSettings'
import CardSettings from '../../components/Forms/CardSettings'
import SettingsIcon from '@material-ui/icons/Settings';
import * as actions from '../../store/actions'

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
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: 0.2
   },
   titleContainer: {
      position: 'fixed',
      zIndex: 3
   },
   listsContainer: {
      zIndex: 2,
      flexGrow: 1,
      paddingTop: '50px',
      height: '100%'
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
   },
   iconContainer: {
      backgroundColor: '#424242',
      height: '36px',
      width: '80px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
         cursor: 'pointer',
         color: '#ddd'
      }

   }
}))

const Board = ({ getSingleBoard, singleBoard, loadingSingleBoard }) => {
   const boardId = useParams().boardID
   const classes = useStyles();
   const [isModalOpen, setModalOpen] = useState(false)
   const [isSettingsOpen, setSettingsOpen] = useState(false)
   const [choosenCard, setChoosenCard] = useState(null)
   const [addListActive, setAddListActive] = useState(false)
   const [refresh, setRefresh] = useState(0)
   console.log('choosenCard', choosenCard);
   console.log('isSettingsOpen', isSettingsOpen);

   const handleIsModalOpen = () => {
      setModalOpen(!isModalOpen);
   }
   const handleIsSettingsOpen = () => {
      setSettingsOpen(!isSettingsOpen);
   }

   const handleCardChoosen = (card) => {
      setChoosenCard(card)
   }

   let cards, lists
   if (singleBoard) {
      lists = singleBoard.lists
      cards = singleBoard.cards
   }

   useEffect(() => {
      getSingleBoard(boardId)
   }, [getSingleBoard, boardId, refresh]);

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
               <Grid item container className={classes.titleContainer}>
                  <Grid item className={[classes.title, classes.header1].join(' ')} >
                     <Typography variant="h6" component="h1">
                        {lists[0].board_title}
                     </Typography>
                  </Grid>
                  <Grid item className={classes.iconContainer} onClick={handleIsSettingsOpen}>
                     <SettingsIcon />
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
                        handleCardChoosen={handleCardChoosen}
                        handleIsModalOpen={handleIsModalOpen}
                     />
                  ))}
                  <Grid item className={classes.addList} >
                     {
                        addListActive ? (
                           <AddList
                              btnText="ADD ANOTHER LIST"
                              labelText="Enter a list title..."
                              onClick={() => setAddListActive(false)}
                              refresh={() => setRefresh(refresh + 1)}
                              relatedBoard={lists[0].board_id}
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
                  <Modal
                     isModalOpen={isModalOpen}
                     handleIsModalOpen={handleIsModalOpen}
                  >
                     <CardSettings card={choosenCard ? choosenCard : null} />
                  </Modal>
                  <Modal
                     isModalOpen={isSettingsOpen}
                     handleIsModalOpen={handleIsSettingsOpen}
                  >
                     <BoardSettings />
                  </Modal>
               </Grid>
            </Grid>
         ) : <Spinner />}
      </Layout>
   )
}

const mapStateToProps = (state) => {
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