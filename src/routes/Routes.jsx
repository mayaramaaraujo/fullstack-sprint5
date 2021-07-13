import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsPage from '../pages/Product/ProductsPage'
import ProductDetails from '../pages/ProductDetailsPage/ProductDetailsPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;