import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/404';
import Home from '../views/home';
import Signup from '../views/signup';
import Login from '../views/login';
import CreateRecord from '../views/createRecord';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/login" exact component={Login} />
    <Route path="/create_Record" exact component={CreateRecord} />
  </Switch>
);

export default Routes;
