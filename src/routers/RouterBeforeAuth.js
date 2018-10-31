import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeIndex from '../views/HomeIndex';

const RouterBeforeAuth = () =>
  <Switch>
    <Route exact path="/" component={HomeIndex}/>
    <Route path="/**" component={HomeIndex}/>
  </Switch>

export default RouterBeforeAuth;