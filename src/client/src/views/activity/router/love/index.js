import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed20181130 from '../../love/feed/20181130';
import Wanhui20181130 from '../../love/wanhui/20181130';
import Wanhui20181130_1 from '../../love/wanhui/20181130-1';
import Wanhui20181130_A3 from '../../love/wanhui/20181130-A3';
import Wanhui20181130_A4 from '../../love/wanhui/20181130-A4';
import Wanhui20190129 from '../../love/wanhui/20190129';
import Wanhui20190130 from '../../love/wanhui/20190130';
//好柿老婆出轨落地页
import Wanhui20190218 from '../../love/20190218/20190218';
//好柿"离婚孩子怎么办"
import Wanhui20190304 from '../../love/wanhui/20190304';
//好柿-老公出轨挽回落地页
import Wanhui20190311 from '../../love/wanhui/20190311';
//好柿-离婚挽回落地页
import Wanhui20190315 from '../../love/wanhui/20190315';
//好柿-分居挽回落地页
import Wanhui20190318 from '../../love/wanhui/20190318';
//好柿-挽回老公落地页
import Wanhui20190327 from '../../love/wanhui/20190327';
//好柿-小三出轨挽回落地页
import Wanhui20190329 from '../../love/wanhui/20190329';
const Routers = () => (
  <Switch>
    <Route exact path='/love/feed/m/20181130' component={Feed20181130} />
    <Route exact path='/love/wanhui/m/20181130' component={Wanhui20181130} />
    <Route exact path='/love/wanhui/m/20181130-1' component={Wanhui20181130_1} />
    <Route exact path='/love/wanhui/m/20181130-A3' component={Wanhui20181130_A3} />
    <Route exact path='/love/wanhui/m/20181130-A4' component={Wanhui20181130_A4} />
    <Route exact path='/love/wanhui/m/20190129' component={Wanhui20190129} />
    <Route exact path='/love/wanhui/m/20190130' component={Wanhui20190130} />
    <Route exact path='/love/wanhui/m/20190218' component={Wanhui20190218} />
    <Route exact path='/love/wanhui/m/20190304' component={Wanhui20190304} />
    <Route exact path='/love/wanhui/m/20190311' component={Wanhui20190311} />
    <Route exact path='/love/wanhui/m/20190315' component={Wanhui20190315} />
    <Route exact path='/love/wanhui/m/20190318' component={Wanhui20190318} />
    <Route exact path='/love/wanhui/m/20190327' component={Wanhui20190327} />
    <Route exact path='/love/wanhui/m/20190329' component={Wanhui20190329} />
  </Switch>
)

export default Routers;
