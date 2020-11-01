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
         <Typography variant="h6" component="h1">
            Templates
         </Typography>
         <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <BoardCard
               title="Kanban basic board"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
            />
            <BoardCard
               title="Lean Canvas"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
            />
            <BoardCard
               title="Weekly Planner"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
            />
            <BoardCard
               title="Agile Sprint"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
            />
            <BoardCard
               title="Eisenhower Matrix"
               description="This impressive paella is a perfect party dish and a fun meal to cook together with your
               guests. Add 1 cup of frozen peas along with the mussels, if you like."
               image={`https://images.pexels.com/photos/4870969/pexels-photo-4870969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
            />
         </Grid>
      </Main>
   )
}

export default Templates
