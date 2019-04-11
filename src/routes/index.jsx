import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/404';
import Home from '../views/home';
import Signup from '../views/signup';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
    <Route path="/signup" exact component={Signup} />
  </Switch>
);

export default Routes;
