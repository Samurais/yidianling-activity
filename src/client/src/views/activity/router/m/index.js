import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Qinzi from '../../m/qinzi';
import Biaodan from '../../m/biaodan';
import Zonghe from '../../m/zonghe';
import Zhuzhan from '../../m/zhuzhan';
import Zhichang from '../../m/zhichang';
import Baidu from '../../m/baidu';
import Hangzhou from '../../m/hangzhou';
import Kc from '../../m/kc';
import KcLove from '../../m/kc_love';
// import Appdownload from '../../m/appdownload';
import Kc1 from '../../m/kc1';
import Qinggan from '../../m/qinggan';
import Rexian from '../../m/rexian';
import Shanghai from '../../m/shanghai';
import Beijing from '../../m/beijing';
//主站1
import Shanghai2 from '../../m/shanghai/20190213';
import Xingxinli from '../../m/xingxinli';
import Qingxu from '../../m/qingxu';
//心暖M端主站新版AB测试落地页
import HomeA from '../../m/homeA';
import HomeB from '../../m/homeB';

const Routers = () => (
  <Switch>
    <Route exact path='/m/qinzi' component={Qinzi} />
    <Route exact path='/m/biaodan' component={Biaodan} />
    <Route exact path='/m/zonghe' component={Zonghe} />
    <Route exact path='/m/zhuzhan' component={Zhuzhan} />
    <Route exact path='/m/zhichang' component={Zhichang} />
    <Route exact path='/m/baidu' component={Baidu} />
    <Route exact path='/m/hangzhou' component={Hangzhou} />
    <Route exact path='/m/kc' component={Kc} />
    <Route exact path='/m/kc-love' component={KcLove} />
    <Route exact path='/m/kc1' component={Kc1} />
    {/* <Route exact path='/m/appdownload' component={Appdownload} /> */}
    <Route exact path='/m/qinggan' component={Qinggan} />
    <Route exact path='/m/rexian' component={Rexian} />
    <Route exact path='/m/shanghai' component={Shanghai} />
    <Route exact path='/m/beijing' component={Beijing} />
    <Route exact path='/m/home' component={Shanghai2} />
    <Route exact path='/m/xingxinli' component={Xingxinli} />
    <Route exact path='/m/qingxu' component={Qingxu} />
    <Route exact path='/m/homeA' component={HomeA} />
    <Route exact path='/m/homeB' component={HomeB} />
  </Switch>
)

export default Routers;
