import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Kc from '../../m/kc';
import KcLove from '../../m/kc_love';
import Kc1 from '../../m/kc1';
import KC_qinzi from '../../kc/qinzi';
import Index from '../../kc/Index_m';

import Marriage from '../../kc/marriage/20181206';

const Routers = () => (
  <Switch>
    <Route exact path='/kc/m' component={Kc} />
    <Route exact path='/kc/m/love' component={KcLove} />
    <Route exact path='/kc/m/20181116' component={Kc1} />
    <Route exact path='/kc/m/kc/qinzi' component={KC_qinzi} />
    <Route exact path='/kc/index_m_1.html' component={Index} />

    <Route exact path='/kc/m/marriage/20181206' component={Marriage} />

    <Route exact path='/kc/m/*' component={Kc} />
  </Switch>
)

export default Routers;
