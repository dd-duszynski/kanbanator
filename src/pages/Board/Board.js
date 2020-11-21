import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '../../components/List/List';
import Layout from '../../components/Layout/Layout';
const useStyles = makeStyles((theme) => ({
   root: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
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
            <Grid
               container
               direction="column"
               justify="center"
               alignItems="start"
               style={{ backgroundImage: `url(${loadedTemplate[0].image_url})` }}
               className={classes.root}
            >
               <Grid item >
                  < Typography variant="h6" component="h1">
                     {loadedTemplate[0].title}
                  </Typography>
               </Grid>
               <Grid item>
                  < Typography variant="body1" >
                     {loadedTemplate[1].description}
                  </Typography>
               </Grid>
               <Grid container wrap="nowrap">
                  {loadedLists.map((item, index) => {
                     return (
                        <List key={index} data={item} cards={loadedTemplate} />
                     )
                  })
                  }
               </Grid>
            </Grid>
         )}
      </Layout>
   )
}

export default Board
