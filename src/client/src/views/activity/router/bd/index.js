import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Xinrenzhuanxiang from '../../bd/xinrenzhuanxiang';
import Zhongan from '../../bd/zhongan';

const Routers = () => (
  <Switch>
    <Route exact path='/bd/m/sw-xinrenzhuanxiang/20181106' component={Xinrenzhuanxiang} />
    <Route exact path='/bd/m/zhongan/20190107' component={Zhongan} />

  </Switch>
)

export default Routers;
