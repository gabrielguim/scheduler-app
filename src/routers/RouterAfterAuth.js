import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';

const RouterAfterAuth = () =>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/**" component={HomePage}/>
  </Switch>

export default RouterAfterAuth;