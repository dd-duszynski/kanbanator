import React, { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Routes from '../../Routes/Routes';

const App = () => {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

   const theme = React.useMemo(() =>
      createMuiTheme({
         palette: {
            type: 'dark'
            // type: prefersDarkMode ? 'dark' : 'light',
         },
      }),
      [prefersDarkMode]
   );

   return (
      <StrictMode>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
               <Routes />
            </BrowserRouter>
         </ThemeProvider>
      </StrictMode>
   )
}

export default App;
