import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
// import Templates from '../pages/Templates/Templates';
import Boards from '../pages/Boards/Boards';
import Board from '../pages/Board/Board';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
const Templates = React.lazy(() => import ('../pages/Templates/Templates'))

const ContentSwitch = () => {
   return (
      <Switch>
         <Route path="/templates">
            <Templates />
         </Route>
         <Route path="/boards">
            <Boards />
         </Route>
         <Route path="/board/1">
            <Board />
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
