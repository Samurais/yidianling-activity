
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

//module.exports.start = function(req, res, dataInfo, source, meta, confData) {
module.exports.start = function(req, res, routerData) {

  let dataInfo = routerData.dataInfo;
  let source = routerData.source;
  let meta = routerData.meta;
  let confData = routerData.config;

  // 模块路径
  const viewsPath = path.resolve(Config.rootStartProject(), './src/views');

  // 模块引入
  const reducer = require(path.resolve(viewsPath, source, "./reducer"));
  const App = require(path.resolve(viewsPath, source));

  if(Util.filterGet.test(req.url)) next();

  let config = require("m.config").G;
  let hmbaidu = require("m.config").hmbaidu[req.headers.host] || "4446f7fa4186990430cb61ee85ce0d00";
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

  source = source.split('/').join('-');

  config = Object.assign({}, config, conf, {"hmbaidu": hmbaidu});

  meta = Object.assign({}, meta);

  let data = {G: {...config, preloadedState}, meta: {...meta}, source, content,};

  res.render('views/index', data, function(err, html) {
    res.send(html);
  });
}
