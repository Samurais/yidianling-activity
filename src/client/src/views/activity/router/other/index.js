import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import QS from '../../other/qs';
import QS20190130 from '../../other/qs/20190130';
import QS20190218 from '../../other/qs/tangka20190218';
import Page1_20190225 from '../../other/qs/20190225/page1'
import Page2_20190225 from '../../other/qs/20190225/page2'
import Page3_20190225 from '../../other/qs/20190225/page3'
import Page4_20190225 from '../../other/qs/20190225/page4'
import Page5_20190225 from '../../other/qs/20190225/page5'
// import Act1010 from '../../other/act1010';
import Cs from '../../other/cs';
import Test from '../../other/test';
import Layout from '../../other/layout';

const Routers = () => (
  <Switch>
    <Route exact path='/ceshi/cs' component={Cs} />
    <Route exact path='/activity/qs' component={QS} />
    <Route exact path='/qs/20190130' component={QS20190130} />
    <Route exact path='/qs/tangka20190218' component={QS20190218}/>
    <Route exact path='/other/test' component={Test} />
    <Route exact path='/other/layout' component={Layout} />
    <Route exact path='/qs/20190225/page1' component={Page1_20190225}/>
    <Route exact path='/qs/20190225/page2' component={Page2_20190225}/>
    <Route exact path='/qs/20190225/page3' component={Page3_20190225}/>
    <Route exact path='/qs/20190225/page4' component={Page4_20190225}/>
    <Route exact path='/qs/20190225/page5' component={Page5_20190225}/>
    {/* <Route exact path='/activity/act1010' component={Act1010} /> */}
  </Switch>
)

export default Routers;
