import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HighlightIcon from '@material-ui/icons/Highlight';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import TemplatesRow from '../../components/TemplatesRow/TemplatesRow';

const useStyles = makeStyles(() => ({
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
         <Box>
            <Typography variant="h5">
               Get going faster with one of the ready-to-use predefined templates.
            </Typography>
            {!isLoading && (
               <Box>
                  <TemplatesRow
                     category="Business"
                     loadedTemplates={loadedTemplates}
                     icon={<BusinessCenterIcon className={classes.icon} />}
                  />
                  <TemplatesRow
                     category="Design"
                     loadedTemplates={loadedTemplates}
                     icon={<ColorLensIcon className={classes.icon} />}
                  />
                  <TemplatesRow
                     category="Education"
                     loadedTemplates={loadedTemplates}
                     icon={<SchoolIcon className={classes.icon} />}
                  />
                  <TemplatesRow
                     category={`Personal & Productivity`}
                     loadedTemplates={loadedTemplates}
                     icon={<DirectionsRunIcon className={classes.icon} />}
                  />
                  <TemplatesRow
                     category="Marketing"
                     loadedTemplates={loadedTemplates}
                     icon={<HighlightIcon className={classes.icon} />}
                  />
                  <TemplatesRow
                     category="Project Management"
                     loadedTemplates={loadedTemplates}
                     icon={<AccountTreeIcon className={classes.icon} />}
                  />
                  <TemplatesRow
                     category="Remote Work"
                     loadedTemplates={loadedTemplates}
                     icon={<HomeWorkIcon className={classes.icon} />}
                  />
               </Box>
            )
            }
         </Box>
      </Layout>
   )
}

export default Templates
