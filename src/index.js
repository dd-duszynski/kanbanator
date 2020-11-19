import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main'
import {
   BrowserRouter as Router,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ContentSwitch from './ContentSwitch/ContentSwitch';
import Spinner from './components/Spinner/Spinner';
import 'fontsource-roboto';

const App = () => {
   return (
      <Main>
         <Suspense fallback={<Spinner />}>
            <ContentSwitch />
         </Suspense>
      </Main>
   )
}

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <App />
      </Router>
   </React.StrictMode >,
   document.getElementById('root')
);

reportWebVitals();
