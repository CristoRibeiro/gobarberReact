import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
};

export default Router;
