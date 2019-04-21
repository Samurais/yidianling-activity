
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Day1111 from '../../hd/day1111';
import Experts from '../../hd/experts';
import Page20181228 from '../../hd/20181228';
import Page20181228Data from '../../hd/20181228/data';
import Page20190123 from '../../hd/20190123';
import Page20190131 from '../../hd/20190131';

const Routers = () => (
  <Switch>
    {/* <Route exact path='/hd/m/20181111' component={Day1111} /> */}
    <Route exact path='/hd/m/experts/20181108' component={Experts} />
    <Route exact path='/hd/m/20181228' component={Page20181228} />
    <Route exact path='/hd/m/20181228/data' component={Page20181228Data} />
    <Route exact path='/hd/m/20190123' component={Page20190123} />

    {/* <Route exact path='/hd/m/20181228/data' component={Page20181228Data} /> */}
    <Route exact path='/hd/20190131' component={Page20190131} />
  </Switch>
)

export default Routers;
