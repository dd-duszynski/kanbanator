import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Boards from '../pages/Boards/Boards';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
const Templates = React.lazy(() => import('../pages/Templates/Templates'))
const Board = React.lazy(() => import('../pages/Board/Board'))

const ContentSwitch = () => {
   return (
      <Switch>
         <Route path="/templates/:templateURL">
            <Board />
         </Route>
         <Route exact path="/templates">
            <Templates />
         </Route>
         <Route path="/boards">
            <Boards />
         </Route>
         <Route path="/login">
            <SignIn />
         </Route>
         <Route path="/sign-up">
            <SignIn />
         </Route>
         <Route path="/">
            <Home />
         </Route>
         <Redirect to='/' />
      </Switch>
   )
}

export default ContentSwitch
