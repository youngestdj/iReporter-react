import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/404';
import Home from '../views/home';
import Signup from '../views/signup';
import Login from '../views/login';
import CreateRecord from '../views/createRecord';
import Profile from '../views/profile';
import UserRecords from '../views/userRecords';
import AllRecords from '../views/Admin';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/login" exact component={Login} />
    <Route path="/create_Record" exact component={CreateRecord} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/user_records" exact component={UserRecords} />
    <Route path="/admin" exact component={AllRecords} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
