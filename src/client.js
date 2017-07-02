'use strict';
/*global window document */
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import routes from './routes';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

 render(
 <Provider store={store}>
  <BrowserRouter>
   { routes }
  </BrowserRouter>
 </Provider>, document.getElementById('app')
 );
