import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'fontsource-roboto';
import App from './components/App/App';
import authReducer from './store/reducers/auth';
import boardsReducer from './store/reducers/boards';
import templatesReducer from './store/reducers/templates';

const rootReducer = combineReducers({
   auth: authReducer,
   boards: boardsReducer,
   templates: templatesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root')
);
