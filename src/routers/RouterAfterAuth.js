import React from 'react';
import { Route, Switch } from 'react-router-dom';

const RouterAfterAuth = () =>
  <Switch>
    <Route exact path="/" component={Home}/>
  </Switch>

export default RouterAfterAuth;