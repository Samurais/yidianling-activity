import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Kaozheng from '../../kc/kaozheng';

const Routers = () => (
  <Switch>
    <Route exact path='/kc/kaozheng' component={Kaozheng} />
  </Switch>
)

export default Routers;
