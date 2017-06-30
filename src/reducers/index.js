'use strict';
import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';

const reducers = combineReducers({
  products: productsReducers,
});

export default reducers;
