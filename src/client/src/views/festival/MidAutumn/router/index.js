import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import Login from '../login';

const HomeRouter = () => (
  <Switch>
    <Route exact path='/festival/MidAutumn' component={Home} />
    <Route path='/festival/MidAutumn/login' component={Login} />
  </Switch>
)

export default HomeRouter;
