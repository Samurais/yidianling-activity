import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// 其他活动
import Other from './other';

// 主站
import Home from './home';

// 市场-壹点灵
import M from './m';

// 市场-壹点灵
import NEWM from './newm';

// 市场-好柿
import Love from './love';

// 市场-课程
import KC from './kc';

// 市场-BD
import BD from './bd';

// 运营-活动
import HD from './hd';

// 市场-测评
import CP from './cp';

// 市场-倾诉
import QS from './qs';

const HomeRouter = () => (
  <div className="g-app-box">
    <Home />
    <HD />
    <BD />
    <KC />
    <Love />
    <Other />
    <M />
    <CP />
    <NEWM />
    <QS />
  </div>
)

export default HomeRouter;
