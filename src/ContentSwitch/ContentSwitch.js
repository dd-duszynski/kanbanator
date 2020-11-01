import React from "react";
import { Switch, Route } from "react-router-dom";

import Templates from '../pages/Templates/Templates';
import Boards from '../pages/Boards/Boards';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';

const ContentSwitch = () => {
   return (
      <Switch>
         <Route path="/templates">
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
      </Switch>
   )
}

export default ContentSwitch
