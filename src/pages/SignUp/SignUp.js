import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

const SignUp = (props) => {
   const classes = useStyles();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isModalOpen, setModalOpen] = useState(false)

   const handleIsModalOpen = () => {
      setModalOpen(!isModalOpen);
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      props.onSign(name, email, password);
   }

   let message = null;
   if (props.error) {
      message = (
         <Modal
            isModalOpen={isModalOpen ? false : true}
            handleIsModalOpen={handleIsModalOpen}
         >
            <Typography variant="body2" color="error">
               {props.error}
            </Typography>
         </Modal>
      )
   } else if (props.message) {
      message = (
         <Modal
            isModalOpen={isModalOpen ? false : true}
            handleIsModalOpen={handleIsModalOpen}
         >
            <LinkUI href="/login">
               <Typography variant="body1" color="primary">
                  {props.message}
               </Typography>
            </LinkUI>
         </Modal>
      )
   }

   return (
      <Container component="main" maxWidth="xs">
         {props.loading ? <Spinner /> : (
            <>
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
                        helperText="At least 5 charakters"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     {message}
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
         )}
      </Container>
   );
}

const mapStateToProps = (state) => {
   console.log('[SignUp]', state);
   return {
      loading: state.auth.loading,
      error: state.auth.error,
      message: state.auth.message,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSign: (name, email, password) => dispatch(actions.sign(name, email, password))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
