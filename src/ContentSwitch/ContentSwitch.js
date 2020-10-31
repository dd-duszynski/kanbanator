import React from "react";
import {
   Switch,
   Route,
} from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/Home/Home';

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
               <p>Boards</p>
            </Main>
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
