import React from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../../../components/BoardCard/BoardCard';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
   box: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      marginTop: '20px'
   },
}))

const TemplatesRow = ({ category, loadedTemplates, icon }) => {
   const classes = useStyles();
   return (
      <>
         <Box className={classes.box}>
            {icon}
            <Typography variant="h6" component="h1">
               {category}
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            {loadedTemplates.filter(item => item.category === category).map(item => {
               return (
                  <BoardCard
                     title={item.title}
                     description={item.description}
                     image={item.image_url}
                     link="/business1"
                     key={item.title}
                  />
               )
            })}
         </Grid>
      </>
   )
}

export default TemplatesRow
