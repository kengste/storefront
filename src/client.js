'use strict';
/*global window document */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { postProducts } from './actions/productsActions';
import ProductsList from './components/pages/ProductsList';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


store.dispatch(postProducts(
    [{
      id: 1,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 33.33
    },
    {
      id: 2,
      title: 'this is the second book title',
      description: 'this is the second book description',
      price: 50
    }]
));

 render(
 <Provider store={store}>
 <ProductsList />
 </Provider>, document.getElementById('app')
 );
