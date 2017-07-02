'use strict';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { productsReducers } from './productsReducers';

const reducers = combineReducers({
  products: productsReducers,
  form: formReducer

});

export default reducers;
