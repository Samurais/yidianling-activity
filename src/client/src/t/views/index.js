
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Demo from './template/demo';

const Routers = () => (
  <Switch>
    <Route exact path='/t/demo/*' component={Demo} />
  </Switch>
)

export default Routers;
