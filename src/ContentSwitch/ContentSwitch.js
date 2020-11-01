import React from "react";
import {
   Switch,
   Route,
} from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/Home/Home';
import SignIn from '../components/SignIn/SignIn';

const ContentSwitch = () => {
   return (
      <Switch>
         <Route path="/templates">
            <Main>
               <p>Templates</p>
            </Main>
         </Route>
         <Route path="/boards">
            <Main>
               <Home/>
            </Main>
         </Route>
         <Route path="/sign-in">
            <SignIn/>
         </Route>
         <Route path="/">
            <Main>
               <Home/>
            </Main>
         </Route>
      </Switch>
   )
}

export default ContentSwitch
