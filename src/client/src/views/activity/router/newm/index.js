import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Zonghe from '../../m/zonghe';

const Routers = () => (
  <Switch>
    <Route exact path='/' component={Zonghe} />
    <Route exact path='/newm/zonghe' component={Zonghe} />
  </Switch>
)

export default Routers;
