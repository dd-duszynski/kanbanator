import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
import AddIcon from '@material-ui/icons/Add';
import * as actions from '../../store/actions'
import Spinner from '../../components/Spinner/Spinner'

const useStyles = makeStyles((theme) => ({
   root: {
      minHeight: 'calc(100vh - 64px)',
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

const Template = ({ templateGetSingle, singleTemplate }) => {
   const classes = useStyles();
   const templateURL = useParams().templateURL;
   let cards, lists
   if (singleTemplate) {
      lists = singleTemplate.lists
      cards = singleTemplate.cards
   }

   useEffect(() => {
      templateGetSingle(templateURL)
   }, [templateGetSingle])

   return (
      <Layout>
         {singleTemplate ? (
            <Grid container direction="column"
               className={classes.root}
            >
               <Grid
                  item
                  className={classes.backgroundImage}
                  style={{ backgroundImage: `url(${lists[0].template_image_url})` }}
               />
               <Grid container className={classes.titleContainer}>
                  <Grid item className={[classes.title, classes.header1].join(' ')} >
                     <Typography variant="h6" component="h1">
                        {lists[0].template_title}
                     </Typography>
                  </Grid>
                  <Grid item className={[classes.title, classes.header2].join(' ')} >
                     <Typography variant="h6" component="h1">
                        Template
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
                        cards={cards.filter(i => i.card_related_list === list.list_id)}
                        template
                     />
                  ))}
                  <Grid item className={classes.addList}>
                     <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                     >
                        Add another List
                     </Button>
                  </Grid>
               </Grid>
            </Grid>
         ) : <Spinner />}
      </Layout>
   )
}

const mapStateToProps = (state) => {
   return {
      loading: state.templates.loading,
      error: state.templates.error,
      singleTemplate: state.templates.singleTemplate
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      templateGetSingle: (templateURL) => dispatch(actions.templateGetSingle(templateURL))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)