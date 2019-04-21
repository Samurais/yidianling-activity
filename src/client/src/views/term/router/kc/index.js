import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page20181220 from '../../kc/m/20181220';
import Page20190130 from '../../kc/20190130';

const Routers = () => (
  <Switch>
    <Route exact path='/kc/m/20181220' component={Page20181220} />
    <Route exact path='/kc/20190130' component={Page20190130} />
  </Switch>
)

export default Routers;
