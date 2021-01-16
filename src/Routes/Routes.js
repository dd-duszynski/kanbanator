import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import BoardsList from '../pages/BoardsList/BoardsList';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import Spinner from '../components/Spinner/Spinner';
const TemplatesList = React.lazy(() => import('../pages/TemplatesList/TemplatesList'));
const Board = React.lazy(() => import('../pages/Board/Board'));
const Template = React.lazy(() => import('../pages/Template/Template'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const Settings = React.lazy(() => import('../pages/Settings/Settings'));

const Routes = () => {
   const routes = (
      <Switch>
         <Route path="/templates/:templateURL">
            <Template />
         </Route>
         <Route exact path="/templates">
            <TemplatesList />
         </Route>
         <Route path="/boards/:boardID">
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
         <Route path="/settings">
            <Settings />
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

export default Routes;