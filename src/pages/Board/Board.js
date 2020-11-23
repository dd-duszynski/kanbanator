import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';

const useStyles = makeStyles(() => ({
   root: {
      minHeight: 'calc(100vh - 64px)',
      position: 'relative',
      width: '100%',
   },
   backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflowX: 'auto',
      padding: '10px',
   },
   titleContainer: {
      position: 'fixed',
      width: 'auto'
   },
   listsContainer: {
      marginTop: '40px'
   },
   title: {
      padding: '2px 20px',
   },
}))

const Board = () => {
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
                  console.log(data[0]);
                  return setLoadedTemplate(data[0])
               })
            await fetch(`http://localhost:5000/api/templates/lists/${templateURL}`)
               .then(response => response.json())
               .then((data) => {
                  console.log(data[0]);
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
            <Container
               className={classes.root}
            >
               <Container
                  fixed
                  className={classes.backgroundImage}
                  style={{ backgroundImage: `url(${loadedTemplate[0].image_url})` }}
               >
                  <Grid container className={classes.titleContainer}>
                     <Grid item style={{ marginRight: '12px'}}>
                        <Paper>
                           <Typography variant="h6" component="h1" className={classes.title}>
                              {loadedTemplate[0].title}
                           </Typography>
                        </Paper>
                     </Grid>
                     <Grid item>
                        <Paper>
                           <Typography variant="h6" component="h1" className={classes.title}>
                              XXX
                           </Typography>
                        </Paper>
                     </Grid>
                  </Grid>
                  <Grid container wrap="nowrap" className={classes.listsContainer}>
                     {loadedLists.map((item, index) => (
                        <List key={index} data={item} cards={loadedTemplate} />
                     ))}
                  </Grid>
               </Container>
            </Container>
         )}
      </Layout>
   )
}

export default Board
