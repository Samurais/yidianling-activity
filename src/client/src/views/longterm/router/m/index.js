import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Appdownload from '../../m/appdownload';

const Routers = () => (
  <Switch>
    <Route exact path='/m/appdownload' component={Appdownload} />
  </Switch>
)

export default Routers;
