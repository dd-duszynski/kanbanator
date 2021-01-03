import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BoardCard from '../BoardCard/BoardCard';

const useStyles = makeStyles(() => ({
   boxWithIcon: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      marginTop: '20px'
   },
}))

const TemplatesRow = ({ category, loadedTemplates, icon }) => {
   const classes = useStyles();
   return (
      <Grid item>
         <Box className={classes.boxWithIcon}>
            {icon}
            <Typography variant="h6" component="h2">
               {category}
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
         >
            {loadedTemplates.map(item => {
               return (
                  <BoardCard
                     title={item.template_title}
                     description={item.template_description}
                     image={item.template_image_url}
                     link={item.template_link}
                     key={item.template_link}
                     type="template"
                  />
               )
            })}
         </Grid>
      </Grid>
   )
}

export default TemplatesRow
