// 控制器
const CTRL = require("./control");

// 页面
const PAGE = require("./page");

// 微信
const WECHAT = require("./wechat");

// 投放系统
//const T = require("./t");

module.exports.start = function(app, router) {

	CTRL.get(app, router);
  PAGE.start(app);
  WECHAT.start(app);
  //T.start(app)
}
