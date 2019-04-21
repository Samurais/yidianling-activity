import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page20190122 from '../../m/20190122';

// 黑卡
import Page20190129 from '../../m/20190129';

const Routers = () => (
  <Switch>
    <Route exact path='/m/20190122' component={Page20190122} />
    <Route exact path='/m/20190129' component={Page20190129} />
  </Switch>
)

export default Routers;
