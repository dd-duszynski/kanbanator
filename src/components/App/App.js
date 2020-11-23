import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import ContentSwitch from '../../ContentSwitch/ContentSwitch';
import Spinner from '../Spinner/Spinner';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const App = () => {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

   const theme = React.useMemo(
      () =>
         createMuiTheme({
            palette: {
               type: prefersDarkMode ? 'dark' : 'light',
            },
         }),
      [prefersDarkMode],
   );
   
   return (
      <StrictMode>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
               <Suspense fallback={<Spinner />}>
                  <ContentSwitch />
               </Suspense>
            </BrowserRouter>
         </ThemeProvider>
      </StrictMode>
   )
}

export default App;
