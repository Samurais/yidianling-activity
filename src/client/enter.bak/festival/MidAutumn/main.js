
// react主要包引入
import React from 'react';
import ReactDOM from 'react-dom';

// redux引入
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

// router引入
import { BrowserRouter } from 'react-router-dom';

// 引入资源
import 'antd-mobile/dist/antd-mobile.less';
import '../../../src/styles/page/home/index.scss';
import '../../../src/styles/page/festival/MidAutumn/index.scss';

// 微信
import wx from 'weixin-js-sdk';

$G.wx = wx;

// 判断当前设备
import browser, {native} from '../../../src/lib/native';
$G.native = native;
$G.browser = browser;

// 模块引入
import App from "../../../src/views/festival/MidAutumn";
import reducer from '../../../src/views/festival/MidAutumn/reducer';

const preloadedState = $G.preloadedState;
const store = createStore(reducer, preloadedState, compose(
  applyMiddleware(thunk),
));

ReactDOM.hydrate(
	<Provider store={store}>
    <BrowserRouter>
		  <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
