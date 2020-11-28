import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import BoardsList from '../pages/BoardsList/BoardsList';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
const TemplatesList = React.lazy(() => import('../pages/TemplatesList/TemplatesList'))
const Board = React.lazy(() => import('../pages/Board/Board'))

const ContentSwitch = () => {
   return (
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
