import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
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
import Spinner from '../../components/Spinner/Spinner'
import * as actions from '../../store/actions/auth'
import Modal from '../../components/Modal/Modal'

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

const Login = (props) => {
   const classes = useStyles();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isModalOpen, setModalOpen] = useState(false)

   const handleIsModalOpen = () => {
      setModalOpen(!isModalOpen);
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      props.onAuth(email, password)
   }

   let errorMessage = null;
   if (props.error) {
      errorMessage = (
         <Modal
            isModalOpen={isModalOpen ? false : true}
            handleIsModalOpen={handleIsModalOpen}
         >
            <Typography variant="body2" color="error">
               {props.error}
            </Typography>
         </Modal>
      )
   }

   let authRedirect = null;
   if (props.isAuthenticated) {
      authRedirect = <Redirect to={props.authRedirectPath} />;
   }

   return (
      <Container component="main" maxWidth="xs">
         {props.loading ? <Spinner /> : (
            <>
               {authRedirect}
               <CssBaseline />
               <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                     <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     Kanbanator - Login
                  </Typography>
                  <form className={classes.form} onSubmit={handleSubmit}>
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                        helperText="At least 5 charakters"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     {errorMessage}
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
                        Login
                  </Button>
                     <Grid container>
                        <Grid item>
                           Don't have an account? {" "}
                           <LinkUI href="/sign-up" variant="body2">
                              Sign Up
                        </LinkUI>
                        </Grid>
                     </Grid>
                  </form>
               </div>
               <Box mt={8}>
                  <Typography variant="body2" align="center">
                     {'Copyright © '}
                     <LinkUI color="inherit" href="/">
                        Kanbanator
                     </LinkUI>
                     {' '}
                     {new Date().getFullYear()}
                     {'.'}
                  </Typography>
               </Box>
            </>
         )
         }
      </Container>
   );
}

const mapStateToProps = (state) => {
   console.log('[Login]', state);
   return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      authRedirectPath: state.auth.authRedirectPath,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onAuth: (email, password) => dispatch(actions.auth(email, password))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
