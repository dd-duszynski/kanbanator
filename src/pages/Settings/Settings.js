import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: '20px',
      [theme.breakpoints.up('md')]: {
         padding: '0 20px',
      },
   },
   section: {
      marginBottom: '30px',
      marginTop: '30px',
      [theme.breakpoints.up('md')]: {
         marginBottom: '10px',
      },
   },
}))

const Settings = () => {
   const classes = useStyles();
   return (
      <Layout>
         <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
         >
            <Grid item container
               direction="column"
               alignItems="flex-start"
               justify="flex-start"
               className={classes.section}
            >
               <Typography>Account Setting</Typography>
               <TextField id="outlined-basic" label="User Name" variant="outlined" />
               <TextField id="outlined-basic" label="User Name" variant="outlined" />
            </Grid>

            <Grid item container
               direction="column"
               alignItems="flex-start"
               justify="flex-start"
               className={classes.section}
            >
               <Typography>Appearance</Typography>
               <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                     <FormControlLabel
                        value="start"
                        control={<Switch color="primary" checked={true} />}
                        label="Dark Mode"
                        labelPlacement="start"
                     />
                  </FormGroup>
               </FormControl>
               <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                  <Select
                     labelId="demo-simple-select-outlined-label"
                     id="demo-simple-select-outlined"
                     value={12}
                     // onChange={handleChange}
                     label="Age"
                  >
                     <MenuItem value="">
                        <em>None</em>
                     </MenuItem>
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
               </FormControl>
            </Grid>
         </Grid>
      </Layout>
   )
}
export default Settings
