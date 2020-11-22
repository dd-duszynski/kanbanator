import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
      padding: '10px'
   },
   paragraph: {
      width: '90ch'
   }
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
            <Grid
               className={classes.root}
               container
               direction="column"
               justify="start"
               alignItems="start"
            >
               <Box
                  style={{ backgroundImage: `url(${loadedTemplate[0].image_url})` }}
                  className={classes.backgroundImage}
               >
                  <Grid item className={classes.title}>
                     <Typography variant="h6" component="h1">
                        {loadedTemplate[0].title}
                     </Typography>
                  </Grid>
                  <Grid container wrap="nowrap">
                     {loadedLists.map((item, index) => (
                        <List key={index} data={item} cards={loadedTemplate} />
                     ))}
                  </Grid>
               </Box>
            </Grid>
         )}
      </Layout>
   )
}

export default Board
