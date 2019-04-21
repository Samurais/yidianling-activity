
// 早前活动页面
const other = require("./other");

// 默认页面
const home = require("./home");

// 市场-BD
const bd = require("./bd");

// 运营-活动
const hd = require("./hd");

// 市场-好柿
const love = require("./love");

// sem倾诉
const qs = require("./qs");
// 市场-测评
const cp = require("./cp");

// 壹点灵SEM - 分类
const m = require("./m");

// 壹点灵SEM - 分类 - new
const newm = require("./newm");

// 市场-课程
const kc = require("./kc");

// m.love.yidianling.com
const mLoveYidianlingCom = require("./other/m.love.yidianling.com");

module.exports.start = function(app){

  other.start(app);
  mLoveYidianlingCom.start(app);

  bd.start(app);

  hd.start(app);

  love.start(app);

  m.start(app);

  cp.start(app);

  newm.start(app);

  home.start(app);

  kc.start(app);
  qs.start(app);
}
