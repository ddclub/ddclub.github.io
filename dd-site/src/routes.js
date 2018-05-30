import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './App';
import HomePage from './HomePage';
import PrimaryPage from './PrimaryPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/p/:page" component={HomePage} />
      <Route path="/pages/:slug" component={PrimaryPage} />
    </Route>
  </Router>
);

export default Routes;