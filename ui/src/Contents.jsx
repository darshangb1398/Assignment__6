import React from 'react';

import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductEdit from './ProductEdit.jsx';
import ProductImage from './ProductImage.jsx';
import Home from './Home.jsx';

const NotFound = () => <h1>Page not found</h1>;

export default function Contents() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/products" />
        <Route path="/products" component={ProductList} />

        <Route path="/Home" component={Home} />
        <Route path="/edit/:id" component={ProductEdit} />
        <Route path="/image/:id" component={ProductImage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
