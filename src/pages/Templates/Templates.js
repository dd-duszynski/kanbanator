import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Main from '../../components/Main/Main'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../../components/BoardCard/BoardCard';
import Box from '@material-ui/core/Box';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ColorLensIcon from '@material-ui/icons/ColorLens';

import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HighlightIcon from '@material-ui/icons/Highlight';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      // keep right padding when drawer closed
      paddingRight: 24,
   },
   box: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      marginTop: '20px'
   },
   icon: {
      marginRight: '10px',
   },
}))

const Templates = () => {
   const classes = useStyles();
   const [loadedTemplates, setLoadedTemplates] = useState();
   console.log(loadedTemplates);

   useEffect(() => {
      const fetchTemplates = async () => {
         try {
            const responseData = await fetch('http://localhost:5000/api/templates')
               .then(response => response.json())
               .then(data => console.log(data));
            setLoadedTemplates(responseData);
         } catch (err) {
            console.log(err);
         }
      };
      fetchTemplates();
   }, []);

   return (
      <Main>
         <Typography variant="h5" component="h1">
            Feel free to use our templates.
         </Typography>
         <Typography variant="body1">
            Get going faster with one of the ready-to-use predefined templates.
         </Typography>
         <Box className={classes.box}>
            <BusinessCenterIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               Business Templates
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Business Templates 1"
               description="Use this simple Kanban template to keep the engineering team on the same page and moving through work fluidly."
               image={`https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/business1"
            />
            <BoardCard
               link="/board2"
               title="Business Templates 2"
               description="Lean Canvas is a 1-page business plan template that helps you deconstruct your idea into its key assumptions."
               image={`https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/business2"
            />
            <BoardCard
               title="Business Templates 3"
               description="Plan every day of the week and after you're finished, just drag it to the done list!"
               image={`https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/business3"
            />
         </Grid>
         <Box className={classes.box}>
            <ColorLensIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               Design Templates
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Design Templates 1"
               description="The Eisenhower Matrix is a powerful method to organize your daily/weekly tasks. Read the explanation on how to use this method wisely in Trello."
               image={`https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/design1"
            />
            <BoardCard
               title="Design Templates 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/5933/color-paint-palette-wall-painting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/design2"
            />
            <BoardCard
               title="Design Templates 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/5356427/pexels-photo-5356427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/design3"
            />
         </Grid>
         <Box className={classes.box}>
            <SchoolIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               Education Templates
         </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Education Templates 1"
               description="The Eisenhower Matrix is a powerful method to organize your daily/weekly tasks. Read the explanation on how to use this method wisely in Trello."
               image={`https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/education1"
            />
            <BoardCard
               title="Education Templates 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/2714073/pexels-photo-2714073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/education2"
            />
            <BoardCard
               title="Education Templates 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/education3"
            />
         </Grid>

         <Box className={classes.box}>
            <DirectionsRunIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               {`Personal & Productivity`}
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title={`Personal & Productivity 1`}
               description="The Eisenhower Matrix is a powerful method to organize your daily/weekly tasks. Read the explanation on how to use this method wisely in Trello."
               image={`https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/personal-productivity1"
            />
            <BoardCard
               title={`Personal & Productivity 2`}
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/personal-productivity2"
            />
            <BoardCard
               title={`Personal & Productivity 3`}
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/personal-productivity3"
            />
         </Grid>

         <Box className={classes.box}>
            <HighlightIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               Marketing
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Marketing 1"
               description="The Eisenhower Matrix is a powerful method to organize your daily/weekly tasks. Read the explanation on how to use this method wisely in Trello."
               image={`https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/marketing1"
            />
            <BoardCard
               title="Marketing 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/marketing2"
            />
            <BoardCard
               title="Marketing 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/marketing3"
            />
         </Grid>
         <Box className={classes.box}>
            <AccountTreeIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               Project Management
         </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Project Management 1"
               description="The Eisenhower Matrix is a powerful method to organize your daily/weekly tasks. Read the explanation on how to use this method wisely in Trello."
               image={`https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/project-management1"
            />
            <BoardCard
               title="Project Management 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/project-management2"
            />
            <BoardCard
               title="Project Management 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/project-management3"
            />
         </Grid>
         <Box className={classes.box}>
            <HomeWorkIcon className={classes.icon} />
            <Typography variant="h6" component="h1">
               Remote Work
            </Typography>
         </Box>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Remote Work 1"
               description="The Eisenhower Matrix is a powerful method to organize your daily/weekly tasks. Read the explanation on how to use this method wisely in Trello."
               image={`https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/remote-work1"
            />
            <BoardCard
               title="Remote Work 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/remote-work2"
            />
            <BoardCard
               title="Remote Work 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/3568792/pexels-photo-3568792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
               link="/remote-work3"
            />
         </Grid>
      </Main>
   )
}

export default Templates
