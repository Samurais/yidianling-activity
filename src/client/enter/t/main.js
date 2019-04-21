
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
import 'swiper/dist/css/swiper.min.css';
import '../../src/styles/t/index.scss';

// 模块引入
import App from "../../src/t/views/";
import reducer from '../../src/t/views/reducer';

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
