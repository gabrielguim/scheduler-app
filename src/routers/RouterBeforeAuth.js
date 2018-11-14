import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from '../views/AuthPage';

const RouterBeforeAuth = () =>
  <Switch>
    <Route exact path="/" component={AuthPage}/>
    <Route path="/**" component={AuthPage}/>
  </Switch>

export default RouterBeforeAuth;