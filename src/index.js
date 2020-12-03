import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import 'fontsource-roboto';
import App from './components/App/App';
import authReducer from './store/reducers/auth'

const rootReducer = combineReducers({
   auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root')
);
