import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HighlightIcon from '@material-ui/icons/Highlight';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import TemplatesRow from './TemplatesRow/TemplatesRow';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      // keep right padding when drawer closed
      paddingRight: 24,
   },
   icon: {
      marginRight: '10px',
   },
}))

const Templates = () => {
   const classes = useStyles();
   const [loadedTemplates, setLoadedTemplates] = useState();
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const fetchTemplates = async () => {
         try {
            const responseData = await fetch('http://localhost:5000/api/templates')
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
      <Box>
         <Typography variant="h5" component="h1">
            Get going faster with one of the ready-to-use predefined templates.
         </Typography>
         {!isLoading && (
            <>
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
            </>
         )
         }
      </Box>
   )

   // return (
   //    isLoading ? null : renderResult
   // )
}

export default Templates
