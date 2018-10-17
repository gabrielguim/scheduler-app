import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Register } from '../views/Register';

const RouterBeforeAuth = () =>
  <Switch>
    <Route exact path="/" component={Register}/>
  </Switch>

export default RouterBeforeAuth;