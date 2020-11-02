import React from 'react'
import Typography from '@material-ui/core/Typography'
import Main from '../../components/Main/Main'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../../components/BoardCard/BoardCard';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      // keep right padding when drawer closed
      paddingRight: 24,
   },
}))

const Templates = () => {
   const classes = useStyles();
   return (
      <Main>
         <Typography variant="h5" component="h1">
            Templates
         </Typography>
         <Typography variant="body1">
            Get going faster with one of the ready-to-use predefined templates.
         </Typography>
         <Typography variant="h6" component="h1">
            Business Templates
         </Typography>
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
               link="/board2"
            />
            <BoardCard
               title="Business Templates 2"
               description="Lean Canvas is a 1-page business plan template that helps you deconstruct your idea into its key assumptions."
               image={`https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Business Templates 3"
               description="Plan every day of the week and after you're finished, just drag it to the done list!"
               image={`https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>

         <Typography variant="h6" component="h1">
            Design Templates
         </Typography>
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
            />
            <BoardCard
               title="Design Templates 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/5933/color-paint-palette-wall-painting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Design Templates 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/5356427/pexels-photo-5356427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>

         <Typography variant="h6" component="h1">
            Education Templates
         </Typography>
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
            />
            <BoardCard
               title="Education Templates 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/2714073/pexels-photo-2714073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Education Templates 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>
         <Typography variant="h6" component="h1">
            {`Personal & Productivity`}
         </Typography>
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
            />
            <BoardCard
               title={`Personal & Productivity 2`}
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title={`Personal & Productivity 3`}
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>
         <Typography variant="h6" component="h1">
            Marketing
         </Typography>
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
            />
            <BoardCard
               title="Marketing 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Marketing 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>
         <Typography variant="h6" component="h1">
            Project Management
         </Typography>
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
            />
            <BoardCard
               title="Project Management 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Project Management 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>
         <Typography variant="h6" component="h1">
            Remote Work
         </Typography>
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
            />
            <BoardCard
               title="Remote Work 2"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
            <BoardCard
               title="Remote Work 3"
               description="Move fast without losing sight by adopting an agile workflow that gives your team perspective during any project management situation."
               image={`https://images.pexels.com/photos/3568792/pexels-photo-3568792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
            />
         </Grid>
      </Main>
   )
}

export default Templates
