import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
import AddIcon from '@material-ui/icons/Add';

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

const Template = () => {
   const classes = useStyles();
   const templateURL = useParams().templateURL;
   const [isLoading, setIsLoading] = useState(true);
   const [loadedTemplate, setLoadedTemplate] = useState();
   const [loadedLists, setLoadedLists] = useState();

   useEffect(() => {
      const fetchTemplates = async () => {
         try {
            await fetch(`http://localhost:5000/api/templates/${templateURL}`)
               .then(response => response.json())
               .then((data) => {
                  console.log('loadedTemplate', data[0])
                  return setLoadedTemplate(data[0])
               })
            await fetch(`http://localhost:5000/api/templates/lists/${templateURL}`)
               .then(response => response.json())
               .then((data) => {
                  console.log('loadedLists', data[0]);
                  return setLoadedLists(data[0])
               })
               .then(() => setIsLoading(false))
         } catch (err) {
            console.log(err);
         }
      };
      fetchTemplates();
   }, [templateURL]);

   return (
      <Layout>
         {!isLoading && (
            <Grid container direction="column"
               className={classes.root}
            >
               <Grid
                  item
                  className={classes.backgroundImage}
                  style={{ backgroundImage: `url(${loadedTemplate[0].image_url})` }}
               />
               <Grid container className={classes.titleContainer}>
                  <Grid item className={[classes.title, classes.header1].join(' ')} >
                     <Typography variant="h6" component="h1">
                        {loadedTemplate[0].title}
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
                  {loadedLists.map((list) => (
                     <List
                        key={list.list_id}
                        list={list}
                        cards={loadedTemplate.filter(i => i.list_id === list.list_id)}
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
         )}
      </Layout>
   )
}

export default Template
