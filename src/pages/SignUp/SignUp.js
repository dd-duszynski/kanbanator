import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkUI from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   avatar: {
      margin: theme.spacing(1),
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
   link: {
      textDecoration: 'none',
   }
}));

function Copyright() {
   return (
      <Typography variant="body2" align="center">
         {'Copyright © '}
         <LinkUI color="inherit" href="/">
            Kanbanator
         </LinkUI>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

export default function SignIn() {
   const classes = useStyles();
   const [isLoading, setIsLoading] = useState(false);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   const handleSubmit = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/users/login", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: email,
            password: password
         }),
      });
      const responseData = await response.json();
      console.log(responseData);
      // setIsLoading(false);
      return responseData
   }


   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Kanbanator - Create an account
            </Typography>
            <form className={classes.form} noValidate>
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
               />
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
               />

               <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
               />

               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
               >
                  Sign Up
               </Button>

               <Grid container>
                  <Grid item>
                     Already have an account? {" "}
                     <LinkUI href="/login" variant="body2">
                        Sign in.
                     </LinkUI>
                  </Grid>
               </Grid>
            </form>
         </div>
         <Box mt={8}>
            <Copyright />
         </Box>
      </Container>
   );
}