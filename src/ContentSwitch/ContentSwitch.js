import React, { Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import BoardsList from '../pages/BoardsList/BoardsList';
// import * as actions from '../store/actions/auth';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import Spinner from '../components/Spinner/Spinner';
const TemplatesList = React.lazy(() => import('../pages/TemplatesList/TemplatesList'))
const Board = React.lazy(() => import('../pages/Board/Board'))
const Login = React.lazy(() => import('../pages/Login/Login'))

const ContentSwitch = () => {
   const routes = (
      <Switch>
         <Route path="/templates/:templateURL">
            <Board />
         </Route>
         <Route exact path="/templates">
            <TemplatesList />
         </Route>
         <Route path="/board/:boardURL">
            <Board />
         </Route>
         <Route path="/boards">
            <BoardsList />
         </Route>
         <Route path="/login">
            <Login />
         </Route>
         <Route path="/sign-up">
            <SignUp />
         </Route>
         <Route path="/">
            <Home />
         </Route>
         <Redirect to='/' />
      </Switch>
   )

   return (
      <Suspense fallback={<Spinner />}>
         {routes}
      </Suspense>
   );
}

export default ContentSwitch;