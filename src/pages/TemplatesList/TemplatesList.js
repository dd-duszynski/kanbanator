import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HighlightIcon from '@material-ui/icons/Highlight';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Layout from '../../components/Layout/Layout';
import TemplatesContainer from '../../components/TemplatesContainer/TemplatesContainer';

const useStyles = makeStyles(() => ({
   root: {
      padding: '20px 20px 0',
   },
   icon: {
      marginRight: '10px',
      fontSize: '32px'
   },
}))

const Templates = () => {
   const classes = useStyles();
   const [loadedTemplates, setLoadedTemplates] = useState();
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const fetchTemplates = async () => {
         try {
            await fetch('http://localhost:5000/api/templates')
               .then(response => response.json())
               .then((data) => {
                  console.log(data);
                  return setLoadedTemplates(data)
               })
               .then(() => setIsLoading(false))
         } catch (err) {
            console.log(err);
         }
      };
      fetchTemplates();
   }, []);

   return (
      <Layout>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className={classes.root}
         >
            <Grid item >
               <Typography variant="h5">
                  Get going faster with one of the ready-to-use predefined templates.
               </Typography>
            </Grid>
            {!isLoading && (
               <>
                  <TemplatesContainer
                     category="Business"
                     loadedTemplates={loadedTemplates}
                     icon={<BusinessCenterIcon className={classes.icon} />}
                  />
                  <TemplatesContainer
                     category="Design"
                     loadedTemplates={loadedTemplates}
                     icon={<ColorLensIcon className={classes.icon} />}
                  />
                  <TemplatesContainer
                     category="Education"
                     loadedTemplates={loadedTemplates}
                     icon={<SchoolIcon className={classes.icon} />}
                  />
                  <TemplatesContainer
                     category={`Personal & Productivity`}
                     loadedTemplates={loadedTemplates}
                     icon={<DirectionsRunIcon className={classes.icon} />}
                  />
                  <TemplatesContainer
                     category="Marketing"
                     loadedTemplates={loadedTemplates}
                     icon={<HighlightIcon className={classes.icon} />}
                  />
                  <TemplatesContainer
                     category="Project Management"
                     loadedTemplates={loadedTemplates}
                     icon={<AccountTreeIcon className={classes.icon} />}
                  />
                  <TemplatesContainer
                     category="Remote Work"
                     loadedTemplates={loadedTemplates}
                     icon={<HomeWorkIcon className={classes.icon} />}
                  />
               </>
            )}
         </Grid>
      </Layout>
   )
}

export default Templates
