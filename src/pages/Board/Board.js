import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
// import BoardCard from '../../components/BoardCard/BoardCard';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      // keep right padding when drawer closed
      paddingRight: 24,
   },
}))

const Board = () => {
   const classes = useStyles();
   const templateURL = useParams().templateURL;
   console.log('useParams', templateURL);
   const [isLoading, setIsLoading] = useState(true);
   const [loadedTemplate, setLoadedTemplate] = useState();

   useEffect(() => {
      const fetchTemplates = async () => {
         try {
            const responseData = await fetch(`http://localhost:5000/api/templates/${templateURL}`)
               .then(response => response.json())
               .then((data) => {
                  console.log(data[0]);
                  return setLoadedTemplate(data[0])
               })
               .then(() => setIsLoading(false))
         } catch (err) {
            console.log(err);
         }
      };
      fetchTemplates();
   }, []);

   return (
      <div>
         { !isLoading && (
            <Box>
               < Typography variant="h6" component="h1">
                  {loadedTemplate.title}
               </Typography>
               < Typography variant="b1" >
                  {loadedTemplate.description}
               </Typography>
               <Box>
                  <img src={loadedTemplate.image_url} alt=""/>

               </Box>

            </Box>
         )}
      </div >
   )
}

export default Board
