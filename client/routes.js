import React from 'react';
import {
  Route,
  DefaultRoute
} from 'react-router';

import App from './components/App/App';
import Landing from './components/Landing/Landing';

export default (
  <Route handler={App}>
    <DefaultRoute handler={Landing} name="landing" />
  </Route>
);
