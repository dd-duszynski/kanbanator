import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import ContentSwitch from '../../ContentSwitch/ContentSwitch';
import Spinner from '../Spinner/Spinner';
import './App.css'

const App = () => {
   return (
      <StrictMode>
         <BrowserRouter>
            <Suspense fallback={<Spinner />}>
               <ContentSwitch />
            </Suspense>
         </BrowserRouter>
      </StrictMode>
   )
}

export default App;
