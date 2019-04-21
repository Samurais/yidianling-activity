import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../m/shanghai/20190213';

const Routers = () => (
  <Switch>
    <Route exact path='/home' component={Home} />
  </Switch>
)

export default Routers;
