import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CP20181115 from '../../cp/20181115';
import CP20190104 from '../../cp/20190104';
import CP20190104Cate from '../../cp/20190104/fenlei';
import CP20190104Search from '../../cp/20190104/search';
import CP20190228 from '../../cp/20190228';

import CP20190328 from '../../cp/20190328';

const Routers = () => (
  <Switch>
    <Route exact path='/cp/m/20181115' component={CP20181115} />

    <Route exact path='/cp/m/20190104' component={CP20190104} />
    <Route exact path='/cp/m/20190104/cate' component={CP20190104Cate} />
    <Route exact path='/cp/m/20190104/search' component={CP20190104Search} />
    <Route exact path='/cp/m/20190228' component={CP20190228} />

    <Route exact path='/cp/m/20190328' component={CP20190328} />
  </Switch>
)

export default Routers;
