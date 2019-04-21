
// react主要包引入
import React from 'react';

// react服务端渲染方法
import {renderToString} from 'react-dom/server';

// 路由
import { StaticRouter } from 'react-router-dom';

// redux引入
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

// 路径
import path from "path";

// 请求切割
import Util from "m.util";

module.exports.start = function(req, res, routerData) {

  // 如果开头是 jump或者api 那么跳出
  if(Util.filterGet.test(req.url)) {
    next();
    return;
  };

  let dataInfo = routerData.data;
  let meta = routerData.meta;
  let source = routerData.source;
  let confData = routerData.config;

  // 模块路径
  const viewsPath = path.resolve(Config.rootStartProject(), './src/t/views');

  // 模块引入
  const reducer = require(path.resolve(viewsPath, "./reducer"));
  const App = require(viewsPath);

  let config = require("m.config").G;
  let hmbaidu = require("m.config").hmbaidu[req.headers.host] || "";
  let conf = confData || {};

  const store = createStore(reducer, dataInfo, compose(
    applyMiddleware(thunk),
  ));

  const preloadedState = store.getState();

  const context = {}

  const content = renderToString(
    (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context} >
          <App />
        </StaticRouter>
      </Provider>
    )
  );

  config = Object.assign({}, config, conf, {"hmbaidu": hmbaidu});

  meta = Object.assign({}, meta);

  let data = {G: {...config, preloadedState}, meta: {...meta}, source, content,};

  res.render('views/t/index', data, function(err, html) {
    res.send(html);
  });
}
