'use strict';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './components/menu';
import ProductsList from './components/pages/ProductsList';
import NewProduct from './components/pages/NewProduct';
import ContactPage from './components/pages/ContactPage';

// CLIENT-SERVER SHARED ROUTES
const routes = (
  <div>
    <Menu />
    <Switch>
    <Route path='/admin/products/new' component={NewProduct} />
    <Route path='/contact' component={ContactPage} />
    <Route path='/index' component={ProductsList} />
    <Route path='/' component={ProductsList} />
    </Switch>
  </div>
);

export default routes;
