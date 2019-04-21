
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Page20190325_01 from '../../qs/20190325/p1';
import Page20190325_02 from '../../qs/20190325/p2';

const Routers = () => (
  <Switch>
    <Route exact path='/qs/20190325/p1' component={Page20190325_01} />
    <Route exact path='/qs/20190325/p2' component={Page20190325_02} />
  </Switch>
)

export default Routers;
